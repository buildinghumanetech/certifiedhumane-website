import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import CertificationBadge from "./CertificationBadge";
import PrincipleBadge from "./PrincipleBadge";
import type { AIProduct, CertificationLevel } from "@shared/schema";

interface ProductCardProps {
  product: AIProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-teal-500",
      "bg-red-500",
      "bg-blue-500",
      "bg-purple-500",
      "bg-orange-500",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full sm:w-[320px] md:w-[340px] lg:w-[360px]">
      <Card
        className="overflow-hidden hover-elevate"
        data-testid={`card-product-${product.id}`}
      >
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <Avatar className={`h-12 w-12 ${getAvatarColor(product.name)}`}>
              <AvatarFallback className="bg-transparent text-white font-semibold">
                {product.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <CertificationBadge
                level={product.certification as CertificationLevel}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="grid gap-2">
          {product.principles.map((principle, index) => (
            <PrincipleBadge key={index} principle={principle} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
