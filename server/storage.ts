import { 
  users, 
  aiProducts,
  type User, 
  type InsertUser, 
  type AIProduct, 
  type InsertAIProduct 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<AIProduct[]>;
  getProduct(id: string): Promise<AIProduct | undefined>;
  createProduct(product: InsertAIProduct): Promise<AIProduct>;
  updateProduct(id: string, product: Partial<InsertAIProduct>): Promise<AIProduct | undefined>;
  deleteProduct(id: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllProducts(): Promise<AIProduct[]> {
    return await db.select().from(aiProducts);
  }

  async getProduct(id: string): Promise<AIProduct | undefined> {
    const [product] = await db.select().from(aiProducts).where(eq(aiProducts.id, id));
    return product || undefined;
  }

  async createProduct(insertProduct: InsertAIProduct): Promise<AIProduct> {
    const [product] = await db
      .insert(aiProducts)
      .values(insertProduct)
      .returning();
    return product;
  }

  async updateProduct(id: string, updates: Partial<InsertAIProduct>): Promise<AIProduct | undefined> {
    const [product] = await db
      .update(aiProducts)
      .set(updates)
      .where(eq(aiProducts.id, id))
      .returning();
    return product || undefined;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const result = await db
      .delete(aiProducts)
      .where(eq(aiProducts.id, id))
      .returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
