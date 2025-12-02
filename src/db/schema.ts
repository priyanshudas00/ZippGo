import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Users table
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull().unique(),
  role: text('role').notNull(), // 'user', 'partner', 'admin', 'staff'
  profileImage: text('profile_image'),
  address: text('address'),
  city: text('city'),
  createdAt: text('created_at').notNull(),
});

// Vehicles table
export const vehicles = sqliteTable('vehicles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  partnerId: integer('partner_id').notNull().references(() => users.id),
  vehicleType: text('vehicle_type').notNull(), // 'bike', 'scooter', 'electric'
  brand: text('brand').notNull(),
  model: text('model').notNull(),
  registrationNumber: text('registration_number').notNull().unique(),
  year: integer('year').notNull(),
  color: text('color').notNull(),
  imageUrl: text('image_url'),
  hourlyRate: integer('hourly_rate').notNull(),
  dailyRate: integer('daily_rate').notNull(),
  monthlyRate: integer('monthly_rate').notNull(),
  status: text('status').notNull().default('available'), // 'available', 'booked', 'maintenance', 'inactive'
  location: text('location').notNull(),
  gpsEnabled: integer('gps_enabled', { mode: 'boolean' }).default(true),
  lastServiceDate: text('last_service_date'),
  createdAt: text('created_at').notNull(),
});

// Bookings table
export const bookings = sqliteTable('bookings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull().references(() => users.id),
  vehicleId: integer('vehicle_id').notNull().references(() => vehicles.id),
  startDate: text('start_date').notNull(),
  endDate: text('end_date'),
  durationType: text('duration_type').notNull(), // 'hourly', 'daily', 'monthly'
  totalAmount: integer('total_amount').notNull(),
  status: text('status').notNull().default('active'), // 'active', 'completed', 'cancelled'
  paymentStatus: text('payment_status').notNull().default('pending'), // 'pending', 'paid', 'refunded'
  pickupLocation: text('pickup_location').notNull(),
  dropLocation: text('drop_location'),
  createdAt: text('created_at').notNull(),
});

// Payments table
export const payments = sqliteTable('payments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  bookingId: integer('booking_id').notNull().references(() => bookings.id),
  userId: integer('user_id').notNull().references(() => users.id),
  amount: integer('amount').notNull(),
  paymentMethod: text('payment_method').notNull(), // 'card', 'upi', 'wallet', 'cash'
  transactionId: text('transaction_id').notNull().unique(),
  status: text('status').notNull().default('pending'), // 'pending', 'success', 'failed'
  createdAt: text('created_at').notNull(),
});

// Partner earnings table
export const partnerEarnings = sqliteTable('partner_earnings', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  partnerId: integer('partner_id').notNull().references(() => users.id),
  vehicleId: integer('vehicle_id').notNull().references(() => vehicles.id),
  bookingId: integer('booking_id').notNull().references(() => bookings.id),
  totalAmount: integer('total_amount').notNull(),
  commissionPercentage: integer('commission_percentage').notNull(),
  commissionAmount: integer('commission_amount').notNull(),
  netEarning: integer('net_earning').notNull(),
  payoutStatus: text('payout_status').notNull().default('pending'), // 'pending', 'processed', 'paid'
  payoutDate: text('payout_date'),
  createdAt: text('created_at').notNull(),
});

// Coupons table
export const coupons = sqliteTable('coupons', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  code: text('code').notNull().unique(),
  description: text('description').notNull(),
  discountType: text('discount_type').notNull(), // 'percentage', 'fixed'
  discountValue: integer('discount_value').notNull(),
  minBookingAmount: integer('min_booking_amount'),
  maxDiscount: integer('max_discount'),
  validFrom: text('valid_from').notNull(),
  validUntil: text('valid_until').notNull(),
  usageLimit: integer('usage_limit'),
  usedCount: integer('used_count').notNull().default(0),
  status: text('status').notNull().default('active'), // 'active', 'inactive', 'expired'
  createdAt: text('created_at').notNull(),
});

// Coupon usage table
export const couponUsage = sqliteTable('coupon_usage', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  couponId: integer('coupon_id').notNull().references(() => coupons.id),
  userId: integer('user_id').notNull().references(() => users.id),
  bookingId: integer('booking_id').notNull().references(() => bookings.id),
  discountAmount: integer('discount_amount').notNull(),
  createdAt: text('created_at').notNull(),
});


// Auth tables for better-auth
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});