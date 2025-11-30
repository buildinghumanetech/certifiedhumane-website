import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Globe } from "lucide-react";

export default function SocialProof() {
  const partnerships = [
    {
      icon: GraduationCap,
      name: "MIT AHA Lab",
      description: "Research collaboration on humane AI evaluation",
    },
    {
      icon: Building2,
      name: "Amazon AGI Lab",
      description: "Partnership on AI safety standards",
    },
    {
      icon: Globe,
      name: "UN Secretariat",
      description: "Training on humane technology frameworks",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-accent/20">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4" data-testid="badge-credibility">
            Backed by Leading Organizations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-proof-title">
            Building a Legitimate Standard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-proof-subtitle">
            In collaboration with world-class research institutions and aligned with the{" "}
            <a 
              href="https://www.humanetech.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
              data-testid="link-cht"
            >
              Center for Humane Technology
            </a>
            {" "}movement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {partnerships.map((partner, index) => (
            <Card key={index} data-testid={`card-partner-${index}`}>
              <CardContent className="pt-6 text-center">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <partner.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Part of the growing Humane Tech Movement with hackathons, events, and community initiatives
          </p>
        </div>
      </div>
    </section>
  );
}
