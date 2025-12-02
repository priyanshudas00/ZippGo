CREATE TABLE `bookings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`vehicle_id` integer NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text,
	`duration_type` text NOT NULL,
	`total_amount` integer NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`payment_status` text DEFAULT 'pending' NOT NULL,
	`pickup_location` text NOT NULL,
	`drop_location` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `coupon_usage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`coupon_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`booking_id` integer NOT NULL,
	`discount_amount` integer NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`coupon_id`) REFERENCES `coupons`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`booking_id`) REFERENCES `bookings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `coupons` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`description` text NOT NULL,
	`discount_type` text NOT NULL,
	`discount_value` integer NOT NULL,
	`min_booking_amount` integer,
	`max_discount` integer,
	`valid_from` text NOT NULL,
	`valid_until` text NOT NULL,
	`usage_limit` integer,
	`used_count` integer DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'active' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `coupons_code_unique` ON `coupons` (`code`);--> statement-breakpoint
CREATE TABLE `partner_earnings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`partner_id` integer NOT NULL,
	`vehicle_id` integer NOT NULL,
	`booking_id` integer NOT NULL,
	`total_amount` integer NOT NULL,
	`commission_percentage` integer NOT NULL,
	`commission_amount` integer NOT NULL,
	`net_earning` integer NOT NULL,
	`payout_status` text DEFAULT 'pending' NOT NULL,
	`payout_date` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`partner_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`booking_id`) REFERENCES `bookings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `payments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`booking_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`amount` integer NOT NULL,
	`payment_method` text NOT NULL,
	`transaction_id` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`booking_id`) REFERENCES `bookings`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `payments_transaction_id_unique` ON `payments` (`transaction_id`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`role` text NOT NULL,
	`profile_image` text,
	`address` text,
	`city` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_phone_unique` ON `users` (`phone`);--> statement-breakpoint
CREATE TABLE `vehicles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`partner_id` integer NOT NULL,
	`vehicle_type` text NOT NULL,
	`brand` text NOT NULL,
	`model` text NOT NULL,
	`registration_number` text NOT NULL,
	`year` integer NOT NULL,
	`color` text NOT NULL,
	`image_url` text,
	`hourly_rate` integer NOT NULL,
	`daily_rate` integer NOT NULL,
	`monthly_rate` integer NOT NULL,
	`status` text DEFAULT 'available' NOT NULL,
	`location` text NOT NULL,
	`gps_enabled` integer DEFAULT true,
	`last_service_date` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`partner_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `vehicles_registration_number_unique` ON `vehicles` (`registration_number`);