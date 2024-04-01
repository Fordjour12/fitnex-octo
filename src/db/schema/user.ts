import { doublePrecision, integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";

export const genderEnum = pgEnum("gender", ["Male", "Female"])

export const user = pgTable("user", {

    id: text("id").notNull().primaryKey(),
    name: text("name").notNull(),
    age: integer("age").notNull(),
    email: text("email").notNull(),
    gender: genderEnum("gender").notNull(),
    height: doublePrecision("height").notNull(),
    weight: doublePrecision("weight").notNull(),

})
