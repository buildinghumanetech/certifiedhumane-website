import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const aiProducts = pgTable("ai_products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  certification: text("certification").notNull(), // "certified", "recommended", "not_certified"
  avatar: text("avatar"),
  principles: jsonb("principles").notNull().$type<Principle[]>(),
});

export const insertAIProductSchema = createInsertSchema(aiProducts).omit({
  id: true,
});

export type InsertAIProduct = z.infer<typeof insertAIProductSchema>;
export type AIProduct = typeof aiProducts.$inferSelect;

export type CertificationLevel = "certified" | "recommended" | "not_certified";
export type PrincipleGrade = "A" | "B" | "C" | "D" | "verified" | null;

export interface Principle {
  name: string;
  grade: PrincipleGrade;
  icon: string;
}
