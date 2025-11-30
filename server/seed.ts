import { storage } from "./storage";
import type { Principle } from "@shared/schema";

async function seed() {
  const products = [
    {
      name: "Echo AI",
      description: "AI assistant focused on respect and privacy",
      certification: "certified",
      avatar: null,
      principles: [
        { name: "Respects Your Attention", grade: "A" as const, icon: "check" },
        { name: "Protects Privacy", grade: "verified" as const, icon: "shield" },
        { name: "Supports Privacy", grade: "verified" as const, icon: "leaf" },
      ] as Principle[],
    },
    {
      name: "Sage Bot",
      description: "Certified humane chatbot for wellbeing",
      certification: "certified",
      avatar: null,
      principles: [
        { name: "HumaneBench Certified", grade: "verified" as const, icon: "check" },
        { name: "Supports Wellbeing", grade: "verified" as const, icon: "heart" },
      ] as Principle[],
    },
    {
      name: "Nova Chat",
      description: "Recommended AI assistant",
      certification: "certified",
      avatar: null,
      principles: [] as Principle[],
    },
  ];

  for (const product of products) {
    try {
      const created = await storage.createProduct(product);
      console.log("Created product:", created.name);
    } catch (error) {
      console.log("Product might already exist:", product.name);
    }
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seed().catch((error) => {
  console.error("Seeding failed:", error);
  process.exit(1);
});
