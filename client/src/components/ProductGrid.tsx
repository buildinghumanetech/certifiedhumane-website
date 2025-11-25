import ProductCard from "./ProductCard";
import type { AIProduct } from "@shared/schema";

interface ProductGridProps {
  products: AIProduct[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <section className="w-full py-8 md:py-10" id="products">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-muted-foreground">
            No certified products available yet.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8 md:py-10" id="products">
        <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
