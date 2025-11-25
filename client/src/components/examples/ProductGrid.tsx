import ProductGrid from '../ProductGrid';

export default function ProductGridExample() {
  const mockProducts = [
    {
      id: "echo-ai",
      name: "Echo AI",
      description: "AI assistant focused on respect and privacy",
      certification: "certified" as const,
      avatar: null,
      principles: [
        { name: "Respects Your Attention", grade: "A" as const, icon: "check" },
        { name: "Protects Privacy", grade: "verified" as const, icon: "shield" },
      ],
    },
    {
      id: "sage-bot",
      name: "Sage Bot",
      description: "Certified humane chatbot",
      certification: "certified" as const,
      avatar: null,
      principles: [
        { name: "HumaneBench Certified", grade: "verified" as const, icon: "check" },
        { name: "Supports Wellbeing", grade: "verified" as const, icon: "heart" },
      ],
    },
    {
      id: "nova-chat",
      name: "Nova Chat",
      description: "Recommended AI assistant",
      certification: "recommended" as const,
      avatar: null,
      principles: [],
    },
  ];

  return <ProductGrid products={mockProducts} />;
}
