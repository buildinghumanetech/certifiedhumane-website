import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  const mockProduct = {
    id: "echo-ai",
    name: "Echo AI",
    description: "AI assistant focused on respect and privacy",
    certification: "certified" as const,
    avatar: null,
    principles: [
      { name: "Respects Your Attention", grade: "A" as const, icon: "check" },
      { name: "Protects Privacy", grade: "verified" as const, icon: "shield" },
      { name: "Supports Privacy", grade: "verified" as const, icon: "leaf" },
    ],
  };

  return (
    <div className="p-8 max-w-md">
      <ProductCard product={mockProduct} />
    </div>
  );
}
