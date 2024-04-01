import { pgEnum, pgTable, text } from "drizzle-orm/pg-core";

export const equipmentsTypeEnum = pgEnum("equipmentType", ["machine", "bodyweight"]);

export const machineEquipmentsTypeEnum = pgEnum("machineEquipmentType", ["cable", "pulley", "smithMachine", "barbell", "KettleBell", "Dumbbell", "LegPress", "LegCurl", "LegExtension"]);

export const equipments = pgTable("equipments", {
    id: text("id").notNull().primaryKey(),
    equipmentsType: equipmentsTypeEnum("equipments_type").notNull(),
    Description: text("description").notNull(),

});