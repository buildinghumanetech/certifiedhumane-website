import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Code, CheckCircle } from "lucide-react";

export default function AudienceLanes() {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-audience-title">
            Who is this for?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-audience-subtitle">
            Whether you use AI or build it, you have a role in shaping humane technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card data-testid="card-users">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Individual Users</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-medium text-foreground">
                Want to know which AI systems are actually humane?
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Know which AI systems are safe, supportive
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Get transparency you can't get anywhere else
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Help shape the future of humane tech
                  </span>
                </li>
              </ul>

              <Button 
                className="w-full mt-4"
                asChild
                data-testid="button-users-join"
              >
                <a href="mailto:info@buildinghumanetech.com?subject=Early%20Access%20-%20Directory%20Updates">
                  Get early access to our directory
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card data-testid="card-builders">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">For Businesses / Builders</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-medium text-foreground">
                Want your AI product evaluated?
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Benchmark your product against humane-tech standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Identify safety and ethical blind spots
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Earn trust with transparent, principle-based evaluation
                  </span>
                </li>
              </ul>

              <Button 
                className="w-full mt-4"
                asChild
                data-testid="button-builders-join"
              >
                <a href="mailto:info@buildinghumanetech.com?subject=Early%20Pilot%20-%20HumaneBench%20Certification">
                  Join the early pilot group
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
