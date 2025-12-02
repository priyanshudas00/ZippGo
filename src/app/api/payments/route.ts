import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { payments, bookings, users } from '@/db/schema';
import { eq, and, desc } from 'drizzle-orm';

const VALID_PAYMENT_METHODS = ['card', 'upi', 'wallet', 'cash'] as const;
const VALID_STATUSES = ['pending', 'success', 'failed'] as const;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const payment = await db
        .select()
        .from(payments)
        .where(eq(payments.id, parseInt(id)))
        .limit(1);

      if (payment.length === 0) {
        return NextResponse.json(
          { error: 'Payment not found', code: 'PAYMENT_NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(payment[0], { status: 200 });
    }

    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const userId = searchParams.get('userId');
    const bookingId = searchParams.get('bookingId');
    const status = searchParams.get('status');
    const paymentMethod = searchParams.get('paymentMethod');

    let query = db.select().from(payments);

    const conditions = [];

    if (userId) {
      const userIdInt = parseInt(userId);
      if (isNaN(userIdInt)) {
        return NextResponse.json(
          { error: 'Valid userId is required', code: 'INVALID_USER_ID' },
          { status: 400 }
        );
      }
      conditions.push(eq(payments.userId, userIdInt));
    }

    if (bookingId) {
      const bookingIdInt = parseInt(bookingId);
      if (isNaN(bookingIdInt)) {
        return NextResponse.json(
          { error: 'Valid bookingId is required', code: 'INVALID_BOOKING_ID' },
          { status: 400 }
        );
      }
      conditions.push(eq(payments.bookingId, bookingIdInt));
    }

    if (status) {
      if (!VALID_STATUSES.includes(status as any)) {
        return NextResponse.json(
          {
            error: `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`,
            code: 'INVALID_STATUS',
          },
          { status: 400 }
        );
      }
      conditions.push(eq(payments.status, status));
    }

    if (paymentMethod) {
      if (!VALID_PAYMENT_METHODS.includes(paymentMethod as any)) {
        return NextResponse.json(
          {
            error: `Invalid payment method. Must be one of: ${VALID_PAYMENT_METHODS.join(', ')}`,
            code: 'INVALID_PAYMENT_METHOD',
          },
          { status: 400 }
        );
      }
      conditions.push(eq(payments.paymentMethod, paymentMethod));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as any;
    }

    const results = await query
      .orderBy(desc(payments.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookingId, userId, amount, paymentMethod, transactionId, status } = body;

    if (!bookingId) {
      return NextResponse.json(
        { error: 'bookingId is required', code: 'MISSING_BOOKING_ID' },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required', code: 'MISSING_USER_ID' },
        { status: 400 }
      );
    }

    if (!amount) {
      return NextResponse.json(
        { error: 'amount is required', code: 'MISSING_AMOUNT' },
        { status: 400 }
      );
    }

    if (typeof amount !== 'number' || amount <= 0) {
      return NextResponse.json(
        { error: 'amount must be a positive number', code: 'INVALID_AMOUNT' },
        { status: 400 }
      );
    }

    if (!paymentMethod) {
      return NextResponse.json(
        { error: 'paymentMethod is required', code: 'MISSING_PAYMENT_METHOD' },
        { status: 400 }
      );
    }

    if (!VALID_PAYMENT_METHODS.includes(paymentMethod as any)) {
      return NextResponse.json(
        {
          error: `paymentMethod must be one of: ${VALID_PAYMENT_METHODS.join(', ')}`,
          code: 'INVALID_PAYMENT_METHOD',
        },
        { status: 400 }
      );
    }

    if (!transactionId) {
      return NextResponse.json(
        { error: 'transactionId is required', code: 'MISSING_TRANSACTION_ID' },
        { status: 400 }
      );
    }

    const trimmedTransactionId = transactionId.trim();
    if (!trimmedTransactionId) {
      return NextResponse.json(
        { error: 'transactionId cannot be empty', code: 'EMPTY_TRANSACTION_ID' },
        { status: 400 }
      );
    }

    const existingTransaction = await db
      .select()
      .from(payments)
      .where(eq(payments.transactionId, trimmedTransactionId))
      .limit(1);

    if (existingTransaction.length > 0) {
      return NextResponse.json(
        { error: 'transactionId must be unique', code: 'DUPLICATE_TRANSACTION_ID' },
        { status: 400 }
      );
    }

    const booking = await db
      .select()
      .from(bookings)
      .where(eq(bookings.id, parseInt(bookingId)))
      .limit(1);

    if (booking.length === 0) {
      return NextResponse.json(
        { error: 'Booking not found', code: 'BOOKING_NOT_FOUND' },
        { status: 404 }
      );
    }

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, parseInt(userId)))
      .limit(1);

    if (user.length === 0) {
      return NextResponse.json(
        { error: 'User not found', code: 'USER_NOT_FOUND' },
        { status: 404 }
      );
    }

    const paymentStatus = status && VALID_STATUSES.includes(status as any) ? status : 'pending';

    const newPayment = await db
      .insert(payments)
      .values({
        bookingId: parseInt(bookingId),
        userId: parseInt(userId),
        amount: parseInt(amount),
        paymentMethod: paymentMethod.toLowerCase(),
        transactionId: trimmedTransactionId,
        status: paymentStatus,
        createdAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newPayment[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingPayment = await db
      .select()
      .from(payments)
      .where(eq(payments.id, parseInt(id)))
      .limit(1);

    if (existingPayment.length === 0) {
      return NextResponse.json(
        { error: 'Payment not found', code: 'PAYMENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { amount, paymentMethod, transactionId, status } = body;

    const updates: any = {};

    if (amount !== undefined) {
      if (typeof amount !== 'number' || amount <= 0) {
        return NextResponse.json(
          { error: 'amount must be a positive number', code: 'INVALID_AMOUNT' },
          { status: 400 }
        );
      }
      updates.amount = parseInt(amount);
    }

    if (paymentMethod !== undefined) {
      if (!VALID_PAYMENT_METHODS.includes(paymentMethod as any)) {
        return NextResponse.json(
          {
            error: `paymentMethod must be one of: ${VALID_PAYMENT_METHODS.join(', ')}`,
            code: 'INVALID_PAYMENT_METHOD',
          },
          { status: 400 }
        );
      }
      updates.paymentMethod = paymentMethod.toLowerCase();
    }

    if (transactionId !== undefined) {
      const trimmedTransactionId = transactionId.trim();
      if (!trimmedTransactionId) {
        return NextResponse.json(
          { error: 'transactionId cannot be empty', code: 'EMPTY_TRANSACTION_ID' },
          { status: 400 }
        );
      }

      if (trimmedTransactionId !== existingPayment[0].transactionId) {
        const existingTransaction = await db
          .select()
          .from(payments)
          .where(eq(payments.transactionId, trimmedTransactionId))
          .limit(1);

        if (existingTransaction.length > 0) {
          return NextResponse.json(
            { error: 'transactionId must be unique', code: 'DUPLICATE_TRANSACTION_ID' },
            { status: 400 }
          );
        }
      }

      updates.transactionId = trimmedTransactionId;
    }

    if (status !== undefined) {
      if (!VALID_STATUSES.includes(status as any)) {
        return NextResponse.json(
          {
            error: `status must be one of: ${VALID_STATUSES.join(', ')}`,
            code: 'INVALID_STATUS',
          },
          { status: 400 }
        );
      }
      updates.status = status;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No valid fields to update', code: 'NO_UPDATES' },
        { status: 400 }
      );
    }

    const updatedPayment = await db
      .update(payments)
      .set(updates)
      .where(eq(payments.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedPayment[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingPayment = await db
      .select()
      .from(payments)
      .where(eq(payments.id, parseInt(id)))
      .limit(1);

    if (existingPayment.length === 0) {
      return NextResponse.json(
        { error: 'Payment not found', code: 'PAYMENT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedPayment = await db
      .delete(payments)
      .where(eq(payments.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Payment deleted successfully',
        payment: deletedPayment[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}