import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AudienceLanes from "@/components/AudienceLanes";
import ProductGrid from "@/components/ProductGrid";
import MissionSection from "@/components/MissionSection";
import BuiltBy from "@/components/BuiltBy";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Users, Code } from "lucide-react";
import type { AIProduct } from "@shared/schema";

export default function Home() {
  const { data: products, isLoading } = useQuery<AIProduct[]>({
    queryKey: ["/api/products"],
    staleTime: 0,
    refetchOnMount: true,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Early Access CTAs */}
      <section className="w-full py-6 md:py-8">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              asChild
              data-testid="button-users-signup"
            >
              <a href="mailto:info@buildinghumanetech.com?subject=Early%20Access%20-%20I%20Use%20AI%20Systems">
                <Users className="h-4 w-4 mr-2" />
                I use AI systems — keep me informed
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              data-testid="button-builders-signup"
            >
              <a href="mailto:info@buildinghumanetech.com?subject=Early%20Access%20-%20I%20Build%20AI%20Systems">
                <Code className="h-4 w-4 mr-2" />
                I build AI systems — join early access
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {isLoading ? (
        <section className="w-full py-6 md:py-8">
          <div className="container px-4 md:px-6 text-center">
            <p className="text-muted-foreground">Loading prototype examples...</p>
          </div>
        </section>
      ) : (
        <ProductGrid products={products || []} />
      )}
      
      <AudienceLanes />
      <MissionSection />
      <AboutSection />
      <CTASection />
      
      <footer className="border-t py-6 mt-8">
        <div className="container px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer">
            © 2025 Humane AI Certification. Building accountability for AI systems.
          </p>
        </div>
      </footer>
    </div>
  );
}
