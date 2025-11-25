import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-6 md:py-8 bg-accent/30">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
            Join the Early Access Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            Help shape Version 1 of the humane AI certification standard. Be among the first to know when we launch.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            asChild
            data-testid="button-join-early-access"
          >
            <a href="mailto:info@buildinghumanetech.com?subject=Join%20Early%20Access%20List">
              <Mail className="h-4 w-4 mr-2" />
              Join the Early Access List
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
            data-testid="button-view-framework"
          >
            <Link href="/certification">
              <FileText className="h-4 w-4 mr-2" />
              View the Certification Framework
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
