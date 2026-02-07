import { pgTable, serial, text, timestamp, varchar, integer, boolean } from "drizzle-orm/pg-core";

export const cases = pgTable("cases", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  status: varchar("status", { length: 50 }).default("pending").notNull(), // pending, active, closed
  petitioner: varchar("petitioner", { length: 255 }).notNull(), // Agent or Human name
  respondent: varchar("respondent", { length: 255 }).notNull(),
  verdict: text("verdict"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // In whatever currency OpenClaw uses
  category: varchar("category", { length: 100 }).notNull(), // MoltX, Moltbook, General
});

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  caseId: integer("case_id").references(() => cases.id),
  amount: integer("amount").notNull(),
  payer: varchar("payer", { length: 255 }).notNull(),
  status: varchar("status", { length: 50 }).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const xTokens = pgTable("x_tokens", {
  id: serial("id").primaryKey(),
  accessToken: text("access_token").notNull(),
  refreshToken: text("refresh_token").notNull(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});
