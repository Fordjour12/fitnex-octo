import { pgTable, text } from "drizzle-orm/pg-core";

export const workouts = pgTable("workouts", {
    id: text("id").notNull().primaryKey(),
    workoutName: text("workout_name").notNull(),
    description: text("description").notNull(),
    targetMuscles: text("target_muscles").notNull(),
});