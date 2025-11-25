import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Heart, Users, Brain, Leaf, Target, Scale } from "lucide-react";

const principles = [
  {
    icon: Shield,
    name: "Protect Dignity and Safety",
    description: "AI that respects human worth and prevents harm",
  },
  {
    icon: Eye,
    name: "Be Transparent and Honest",
    description: "Clear about capabilities, limitations, and risks",
  },
  {
    icon: Heart,
    name: "Prioritize Long-term Wellbeing",
    description: "Long-term human flourishing over engagement",
  },
  {
    icon: Target,
    name: "Respect User Attention",
    description: "Safeguard focus instead of capturing it",
  },
  {
    icon: Users,
    name: "Enable Meaningful Choices",
    description: "Empower users with real autonomy and control",
  },
  {
    icon: Brain,
    name: "Enhance Human Capabilities",
    description: "Augment abilities without creating dependency",
  },
  {
    icon: Leaf,
    name: "Foster Healthy Relationships",
    description: "Strengthen human connections, not replace them",
  },
  {
    icon: Scale,
    name: "Design for Equity and Inclusion",
    description: "Fair access and outcomes for all communities",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-8 md:py-10" id="about">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-about-title"
          >
            Humane Principles
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-about-description"
          >
            Our certification evaluates AI systems across eight core principles,
            grounded in psychology, ethics, and law.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" id="principles">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate"
                data-testid={`card-principle-${index}`}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {principle.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
