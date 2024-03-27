import { pgTable, text } from "drizzle-orm/pg-core";

export const testingUser = pgTable("testing_user", {
    id: text("id").notNull().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
})
