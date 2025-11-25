import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Shield, 
  ArrowLeft,
  CheckCircle2,
  Mail,
  Sparkles,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import { Link } from "wouter";

export default function Certification() {
  const certificationLevels = [
    {
      name: "Recommended Humane",
      icon: CheckCircle2,
      description: "Evidence review with no on-site audit. Ideal for early-stage products demonstrating commitment to humane principles.",
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    },
    {
      name: "Certified Humane",
      icon: Shield,
      description: "Independent audit with sampling of controls. Products meeting rigorous standards across all five categories.",
      color: "bg-primary/10 text-primary",
    },
    {
      name: "Certified Humane Plus",
      icon: Award,
      description: "Continuous monitoring with annual surveillance audits. The highest standard for products with ongoing accountability.",
      color: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-8 md:py-10 bg-gradient-to-b from-accent/30 to-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-6 gap-2"
              data-testid="button-back-home"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
              data-testid="text-certification-title"
            >
              Our Humane AI Certification Framework
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-4"
              data-testid="text-certification-intro"
            >
              We're building a standard for humane AI—and you're invited to help shape it.
            </p>

            <p className="text-base text-muted-foreground">
              This certification evaluates AI systems against core principles grounded in 
              psychology, ethics, and law. Like organic food labels or energy efficiency ratings, this 
              standard will help people identify which AI systems genuinely prioritize human wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Levels Section */}
      <section className="w-full py-8 md:py-10">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            data-testid="text-levels-heading"
          >
            Certification Levels
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the certification level that matches your product maturity and commitment to ongoing accountability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certificationLevels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} data-testid={`card-level-${index}`}>
                  <CardHeader className="gap-3">
                    <div className={`h-12 w-12 rounded-md ${level.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{level.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{level.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HumaneBench Section */}
      <section className="w-full py-8 md:py-10 bg-accent/30">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-humanebench-heading">
              Powered by HumaneBench
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              <a 
                href="https://humanebench.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
                data-testid="link-humanebench"
              >
                HumaneBench
              </a>{" "}
              is our benchmark that combines human evaluation with model-based assessment 
              to measure how well AI systems align with humane principles.
            </p>

            <p className="text-base leading-relaxed">
              <strong>Generalization to Deployment:</strong> Our controlled evaluation may not capture how models behave in production settings with user feedback loops, fine-tuning, or RLHF from real interactions. Additionally, we evaluate models via API with default parameters—production deployments may use different temperature, top-p, or other sampling configurations that affect humaneness.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Human + Model Evaluation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Combines expert human reviewers with AI-assisted analysis for comprehensive assessment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Research-Grounded
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Aligns with psychology, ethics, and wellbeing research from leading institutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Transparent Scoring
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We publish clear scoring criteria and results so everyone can understand the assessment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Continuous Improvement
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    The benchmark evolves with community feedback and emerging research.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Will Develop */}
      <section className="w-full py-8 md:py-10 bg-accent/10">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" data-testid="text-develop-heading">
            Our Development Path
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Phase 1: Prototype & Pilot (Current)</h3>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  We're testing the framework with early partners. During this phase, we're gathering feedback, 
                  refining evaluation criteria, and validating our approach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Phase 2: Public Beta</h3>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  We'll open applications to a broader set of AI products and publish initial 
                  certification results. Early participants will help shape Version 1.0 of the standard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Phase 3: Full Launch</h3>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>
                  The certification becomes publicly available with transparent processes, 
                  published scoring, and a searchable directory of certified products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interested in Participating */}
      <section className="w-full py-8 md:py-10">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <Card className="bg-accent/20 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" data-testid="text-participate-heading">
                Interested in Participating?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                Help shape the future of humane AI certification. Join us as an early participant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  asChild
                  data-testid="button-builders-apply"
                >
                  <a href="mailto:info@buildinghumanetech.com?subject=I%20want%20my%20AI%20system%20evaluated">
                    <Shield className="h-4 w-4 mr-2" />
                    I want my AI system evaluated
                  </a>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-users-follow"
                >
                  <a href="mailto:info@buildinghumanetech.com?subject=I%20want%20to%20follow%20certified%20humane%20AI">
                    <Mail className="h-4 w-4 mr-2" />
                    I want to follow certified humane AI
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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
