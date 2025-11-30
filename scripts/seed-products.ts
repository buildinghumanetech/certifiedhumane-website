import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { aiProducts } from "../shared/schema";
import type { Principle } from "../shared/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

interface ProductData {
  name: string;
  description: string;
  certification: string;
  avatar: null;
  principles: Principle[];
}

const products: ProductData[] = [
  {
    name: "Echo AI",
    description: "AI assistant focused on respect and privacy",
    certification: "certified",
    avatar: null,
    principles: [
      {
        icon: "check",
        name: "Respects Your Attention",
        grade: "A"
      },
      {
        icon: "shield",
        name: "Protects Privacy",
        grade: "verified"
      },
      {
        icon: "leaf",
        name: "Supports Privacy",
        grade: "verified"
      }
    ]
  },
  {
    name: "Sage Bot",
    description: "Certified humane chatbot for wellbeing",
    certification: "certified",
    avatar: null,
    principles: [
      {
        icon: "check",
        name: "HumaneBench Certified",
        grade: "verified"
      },
      {
        icon: "heart",
        name: "Supports Wellbeing",
        grade: "verified"
      }
    ]
  },
  {
    name: "Nova Chat",
    description: "Recommended AI assistant",
    certification: "certified",
    avatar: null,
    principles: []
  }
];

async function seedProducts() {
  try {
    console.log("Seeding products to database...");
    console.log("Database URL:", process.env.DATABASE_URL?.substring(0, 30) + "...");
    
    for (const product of products) {
      await db.insert(aiProducts).values(product);
      console.log(`✓ Added ${product.name}`);
    }
    
    console.log("\n✅ Successfully seeded all products!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
}

seedProducts();
