import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { vehicles, users } from '@/db/schema';
import { eq, like, and, or, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single vehicle by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json({ 
          error: "Valid ID is required",
          code: "INVALID_ID" 
        }, { status: 400 });
      }

      const vehicle = await db.select()
        .from(vehicles)
        .where(eq(vehicles.id, parseInt(id)))
        .limit(1);

      if (vehicle.length === 0) {
        return NextResponse.json({ 
          error: 'Vehicle not found',
          code: 'VEHICLE_NOT_FOUND' 
        }, { status: 404 });
      }

      return NextResponse.json(vehicle[0], { status: 200 });
    }

    // List vehicles with filtering and pagination
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const vehicleType = searchParams.get('vehicleType');
    const status = searchParams.get('status');
    const location = searchParams.get('location');
    const partnerId = searchParams.get('partnerId');

    let query = db.select().from(vehicles);
    const conditions = [];

    // Filter by vehicleType
    if (vehicleType) {
      conditions.push(eq(vehicles.vehicleType, vehicleType));
    }

    // Filter by status
    if (status) {
      conditions.push(eq(vehicles.status, status));
    }

    // Filter by location
    if (location) {
      conditions.push(eq(vehicles.location, location));
    }

    // Filter by partnerId
    if (partnerId) {
      if (isNaN(parseInt(partnerId))) {
        return NextResponse.json({ 
          error: "Valid partner ID is required",
          code: "INVALID_PARTNER_ID" 
        }, { status: 400 });
      }
      conditions.push(eq(vehicles.partnerId, parseInt(partnerId)));
    }

    // Search across brand, model, and registrationNumber
    if (search) {
      conditions.push(
        or(
          like(vehicles.brand, `%${search}%`),
          like(vehicles.model, `%${search}%`),
          like(vehicles.registrationNumber, `%${search}%`)
        )
      );
    }

    // Apply all conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Apply sorting, pagination
    const results = await query
      .orderBy(desc(vehicles.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'partnerId', 'vehicleType', 'brand', 'model', 
      'registrationNumber', 'year', 'color', 'location',
      'hourlyRate', 'dailyRate', 'monthlyRate'
    ];

    for (const field of requiredFields) {
      if (!(field in body) || body[field] === null || body[field] === undefined || body[field] === '') {
        return NextResponse.json({ 
          error: `${field} is required`,
          code: "MISSING_REQUIRED_FIELD" 
        }, { status: 400 });
      }
    }

    // Validate vehicleType
    const validVehicleTypes = ['bike', 'scooter', 'electric'];
    if (!validVehicleTypes.includes(body.vehicleType)) {
      return NextResponse.json({ 
        error: "vehicleType must be one of: 'bike', 'scooter', 'electric'",
        code: "INVALID_VEHICLE_TYPE" 
      }, { status: 400 });
    }

    // Validate partnerId exists
    const partner = await db.select()
      .from(users)
      .where(eq(users.id, parseInt(body.partnerId)))
      .limit(1);

    if (partner.length === 0) {
      return NextResponse.json({ 
        error: "Partner not found",
        code: "PARTNER_NOT_FOUND" 
      }, { status: 400 });
    }

    // Check if registrationNumber already exists
    const existingVehicle = await db.select()
      .from(vehicles)
      .where(eq(vehicles.registrationNumber, body.registrationNumber.trim()))
      .limit(1);

    if (existingVehicle.length > 0) {
      return NextResponse.json({ 
        error: "Registration number already exists",
        code: "DUPLICATE_REGISTRATION_NUMBER" 
      }, { status: 400 });
    }

    // Validate numeric fields
    if (isNaN(parseInt(body.partnerId))) {
      return NextResponse.json({ 
        error: "partnerId must be a valid number",
        code: "INVALID_PARTNER_ID" 
      }, { status: 400 });
    }

    if (isNaN(parseInt(body.year))) {
      return NextResponse.json({ 
        error: "year must be a valid number",
        code: "INVALID_YEAR" 
      }, { status: 400 });
    }

    if (isNaN(parseInt(body.hourlyRate))) {
      return NextResponse.json({ 
        error: "hourlyRate must be a valid number",
        code: "INVALID_HOURLY_RATE" 
      }, { status: 400 });
    }

    if (isNaN(parseInt(body.dailyRate))) {
      return NextResponse.json({ 
        error: "dailyRate must be a valid number",
        code: "INVALID_DAILY_RATE" 
      }, { status: 400 });
    }

    if (isNaN(parseInt(body.monthlyRate))) {
      return NextResponse.json({ 
        error: "monthlyRate must be a valid number",
        code: "INVALID_MONTHLY_RATE" 
      }, { status: 400 });
    }

    // Prepare vehicle data
    const vehicleData = {
      partnerId: parseInt(body.partnerId),
      vehicleType: body.vehicleType.trim(),
      brand: body.brand.trim(),
      model: body.model.trim(),
      registrationNumber: body.registrationNumber.trim(),
      year: parseInt(body.year),
      color: body.color.trim(),
      imageUrl: body.imageUrl ? body.imageUrl.trim() : null,
      hourlyRate: parseInt(body.hourlyRate),
      dailyRate: parseInt(body.dailyRate),
      monthlyRate: parseInt(body.monthlyRate),
      status: body.status || 'available',
      location: body.location.trim(),
      gpsEnabled: body.gpsEnabled !== undefined ? body.gpsEnabled : true,
      lastServiceDate: body.lastServiceDate || null,
      createdAt: new Date().toISOString()
    };

    // Validate status if provided
    if (body.status) {
      const validStatuses = ['available', 'booked', 'maintenance', 'inactive'];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json({ 
          error: "status must be one of: 'available', 'booked', 'maintenance', 'inactive'",
          code: "INVALID_STATUS" 
        }, { status: 400 });
      }
    }

    // Insert vehicle
    const newVehicle = await db.insert(vehicles)
      .values(vehicleData)
      .returning();

    return NextResponse.json(newVehicle[0], { status: 201 });

  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    const body = await request.json();

    // Check if vehicle exists
    const existingVehicle = await db.select()
      .from(vehicles)
      .where(eq(vehicles.id, parseInt(id)))
      .limit(1);

    if (existingVehicle.length === 0) {
      return NextResponse.json({ 
        error: 'Vehicle not found',
        code: 'VEHICLE_NOT_FOUND' 
      }, { status: 404 });
    }

    // Validate vehicleType if provided
    if (body.vehicleType) {
      const validVehicleTypes = ['bike', 'scooter', 'electric'];
      if (!validVehicleTypes.includes(body.vehicleType)) {
        return NextResponse.json({ 
          error: "vehicleType must be one of: 'bike', 'scooter', 'electric'",
          code: "INVALID_VEHICLE_TYPE" 
        }, { status: 400 });
      }
    }

    // Validate status if provided
    if (body.status) {
      const validStatuses = ['available', 'booked', 'maintenance', 'inactive'];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json({ 
          error: "status must be one of: 'available', 'booked', 'maintenance', 'inactive'",
          code: "INVALID_STATUS" 
        }, { status: 400 });
      }
    }

    // Check if registrationNumber is being changed and if it's unique
    if (body.registrationNumber && body.registrationNumber !== existingVehicle[0].registrationNumber) {
      const duplicateCheck = await db.select()
        .from(vehicles)
        .where(eq(vehicles.registrationNumber, body.registrationNumber.trim()))
        .limit(1);

      if (duplicateCheck.length > 0) {
        return NextResponse.json({ 
          error: "Registration number already exists",
          code: "DUPLICATE_REGISTRATION_NUMBER" 
        }, { status: 400 });
      }
    }

    // Validate partnerId if provided
    if (body.partnerId) {
      if (isNaN(parseInt(body.partnerId))) {
        return NextResponse.json({ 
          error: "partnerId must be a valid number",
          code: "INVALID_PARTNER_ID" 
        }, { status: 400 });
      }

      const partner = await db.select()
        .from(users)
        .where(eq(users.id, parseInt(body.partnerId)))
        .limit(1);

      if (partner.length === 0) {
        return NextResponse.json({ 
          error: "Partner not found",
          code: "PARTNER_NOT_FOUND" 
        }, { status: 400 });
      }
    }

    // Validate numeric fields if provided
    if (body.year !== undefined && isNaN(parseInt(body.year))) {
      return NextResponse.json({ 
        error: "year must be a valid number",
        code: "INVALID_YEAR" 
      }, { status: 400 });
    }

    if (body.hourlyRate !== undefined && isNaN(parseInt(body.hourlyRate))) {
      return NextResponse.json({ 
        error: "hourlyRate must be a valid number",
        code: "INVALID_HOURLY_RATE" 
      }, { status: 400 });
    }

    if (body.dailyRate !== undefined && isNaN(parseInt(body.dailyRate))) {
      return NextResponse.json({ 
        error: "dailyRate must be a valid number",
        code: "INVALID_DAILY_RATE" 
      }, { status: 400 });
    }

    if (body.monthlyRate !== undefined && isNaN(parseInt(body.monthlyRate))) {
      return NextResponse.json({ 
        error: "monthlyRate must be a valid number",
        code: "INVALID_MONTHLY_RATE" 
      }, { status: 400 });
    }

    // Prepare update data
    const updateData: any = {
      updatedAt: new Date().toISOString()
    };

    // Only include fields that are provided in the request
    if (body.partnerId !== undefined) updateData.partnerId = parseInt(body.partnerId);
    if (body.vehicleType !== undefined) updateData.vehicleType = body.vehicleType.trim();
    if (body.brand !== undefined) updateData.brand = body.brand.trim();
    if (body.model !== undefined) updateData.model = body.model.trim();
    if (body.registrationNumber !== undefined) updateData.registrationNumber = body.registrationNumber.trim();
    if (body.year !== undefined) updateData.year = parseInt(body.year);
    if (body.color !== undefined) updateData.color = body.color.trim();
    if (body.imageUrl !== undefined) updateData.imageUrl = body.imageUrl ? body.imageUrl.trim() : null;
    if (body.hourlyRate !== undefined) updateData.hourlyRate = parseInt(body.hourlyRate);
    if (body.dailyRate !== undefined) updateData.dailyRate = parseInt(body.dailyRate);
    if (body.monthlyRate !== undefined) updateData.monthlyRate = parseInt(body.monthlyRate);
    if (body.status !== undefined) updateData.status = body.status;
    if (body.location !== undefined) updateData.location = body.location.trim();
    if (body.gpsEnabled !== undefined) updateData.gpsEnabled = body.gpsEnabled;
    if (body.lastServiceDate !== undefined) updateData.lastServiceDate = body.lastServiceDate;

    // Note: createdAt is removed from updateData since it doesn't exist in the schema
    // The schema doesn't have an updatedAt field either, so we'll remove it
    delete updateData.updatedAt;

    // Update vehicle
    const updatedVehicle = await db.update(vehicles)
      .set(updateData)
      .where(eq(vehicles.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedVehicle[0], { status: 200 });

  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json({ 
        error: "Valid ID is required",
        code: "INVALID_ID" 
      }, { status: 400 });
    }

    // Check if vehicle exists
    const existingVehicle = await db.select()
      .from(vehicles)
      .where(eq(vehicles.id, parseInt(id)))
      .limit(1);

    if (existingVehicle.length === 0) {
      return NextResponse.json({ 
        error: 'Vehicle not found',
        code: 'VEHICLE_NOT_FOUND' 
      }, { status: 404 });
    }

    // Delete vehicle
    const deletedVehicle = await db.delete(vehicles)
      .where(eq(vehicles.id, parseInt(id)))
      .returning();

    return NextResponse.json({ 
      message: 'Vehicle deleted successfully',
      vehicle: deletedVehicle[0]
    }, { status: 200 });

  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ 
      error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 });
  }
}