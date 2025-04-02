import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const cateoryTable = pgTable("categories", {
    id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
    name: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 1000 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
    deletedAt: timestamp({ mode: "date" }),
});

export const blogTable = pgTable("blogs", {
    id: integer().primaryKey().generatedAlwaysAsIdentity().unique(),
    title: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 1000 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull().defaultNow(),
    deletedAt: timestamp({ mode: "date" }),
});