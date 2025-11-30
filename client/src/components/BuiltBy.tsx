import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "lucide-react";

export default function BuiltBy() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Card className="bg-accent/10 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="h-20 w-20 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Flame className="h-10 w-10 text-primary" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3" data-testid="text-builtby-title">
                  Powered by{" "}
                  <a 
                    href="https://humanebench.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    data-testid="link-humanebench-title"
                  >
                    HumaneBench
                  </a>
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-builtby-description">
                  This certification standard is developed by the{" "}
                  <a 
                    href="https://buildinghumanetech.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                    data-testid="link-bht"
                  >
                    Building Humane Tech
                  </a>
                  {" "}initiative — a movement dedicated to creating technology that supports human flourishing. 
                  We're building the infrastructure for humane tech through{" "}
                  <a 
                    href="https://github.com/buildinghumanetech/humane-tech-framework" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    data-testid="link-github"
                  >
                    open-source frameworks
                  </a>, benchmarks, community events, 
                  and tools that help developers build better.
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-builtby-bench">
                  Powered by{" "}
                  <a 
                    href="https://humanebench.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    data-testid="link-humanebench"
                  >
                    HumaneBench
                  </a>
                  {" "}benchmark
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
