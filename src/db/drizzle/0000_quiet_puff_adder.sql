DO $$ BEGIN
 CREATE TYPE "equipmentType" AS ENUM('machine', 'bodyweight');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "machineEquipmentType" AS ENUM('cable', 'pulley', 'smithMachine', 'barbell', 'KettleBell', 'Dumbbell', 'LegPress', 'LegCurl', 'LegExtension');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "gender" AS ENUM('Male', 'Female');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "equipments" (
	"id" text PRIMARY KEY NOT NULL,
	"equipments_type" "equipmentType" NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	"gender" "gender" NOT NULL,
	"height" double precision NOT NULL,
	"weight" double precision NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "workouts" (
	"id" text PRIMARY KEY NOT NULL,
	"workout_name" text NOT NULL,
	"description" text NOT NULL,
	"target_muscles" text NOT NULL
);
