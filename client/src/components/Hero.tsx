import { Button } from "@/components/ui/button";
import { Users, Code } from "lucide-react";
import heroBackground from "@assets/generated_images/Clean_teal_blue_aurora_gradient_67279253.png";

export default function Hero() {
  return (
    <section 
      className="w-full py-10 md:py-12 lg:py-14 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />
      
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background"
      />
      
      <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            data-testid="text-hero-title"
          >
            Humane AI Certification
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            A developing standard that evaluates whether AI systems uphold the principles of humane technology — dignity, safety, attention, agency, and more.
          </p>
          
          <p 
            className="text-base md:text-lg font-medium"
            data-testid="text-hero-cta-intro"
          >
            Now inviting early participants.
          </p>
        </div>
      </div>
    </section>
  );
}
