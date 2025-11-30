import { Menu } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              data-testid="button-menu-toggle"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              <a 
                href="/#about" 
                className="text-lg font-medium hover-elevate px-4 py-2 rounded-md"
                data-testid="link-about"
              >
                About Certification
              </a>
              <a 
                href="/#principles" 
                className="text-lg font-medium hover-elevate px-4 py-2 rounded-md"
                data-testid="link-principles"
              >
                Principles
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-between md:justify-start">
          <a 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl md:text-2xl"
            data-testid="link-home"
          >
            <span>Humane AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 ml-8">
            <a 
              href="/#about" 
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md"
              data-testid="link-about-desktop"
            >
              About
            </a>
            <a 
              href="/#principles" 
              className="text-sm font-medium hover-elevate px-3 py-2 rounded-md"
              data-testid="link-principles-desktop"
            >
              Principles
            </a>
          </nav>
        </div>

        <Link href="/certification">
          <Button 
            className="ml-4 hidden sm:inline-flex"
            data-testid="button-get-certified"
          >
            Get Certified
          </Button>
        </Link>
      </div>
    </header>
  );
}
