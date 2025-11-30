import { CheckCircle2, Star, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CertificationLevel } from "@shared/schema";

interface CertificationBadgeProps {
  level: CertificationLevel;
}

export default function CertificationBadge({ level }: CertificationBadgeProps) {
  const config = {
    certified: {
      icon: CheckCircle2,
      label: "Certified",
      className: "bg-primary/10 text-primary border-primary/20",
    },
    recommended: {
      icon: Star,
      label: "Recommended",
      className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    not_certified: {
      icon: HelpCircle,
      label: "Not Certified",
      className: "bg-muted text-muted-foreground border-border",
    },
  };

  const { icon: Icon, label, className } = config[level];

  return (
    <Badge 
      variant="outline" 
      className={`gap-1.5 ${className}`}
      data-testid={`badge-certification-${level}`}
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="font-medium">{label}</span>
    </Badge>
  );
}
