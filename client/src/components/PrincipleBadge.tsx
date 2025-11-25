import { CheckCircle2, Shield, Eye, Heart, Leaf } from "lucide-react";
import type { Principle } from "@shared/schema";

interface PrincipleBadgeProps {
  principle: Principle;
}

const iconMap: Record<string, typeof CheckCircle2> = {
  check: CheckCircle2,
  shield: Shield,
  eye: Eye,
  heart: Heart,
  leaf: Leaf,
};

export default function PrincipleBadge({ principle }: PrincipleBadgeProps) {
  const Icon = iconMap[principle.icon] || CheckCircle2;
  
  const gradeColor = principle.grade === "A" 
    ? "bg-primary/10 text-primary border-primary/20"
    : principle.grade === "B"
    ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
    : principle.grade === "verified"
    ? "bg-primary/10 text-primary border-primary/20"
    : "bg-muted text-muted-foreground border-border";

  return (
    <div 
      className={`flex items-center gap-3 p-3 rounded-md border ${gradeColor}`}
      data-testid={`principle-badge-${principle.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-tight">{principle.name}</p>
        {principle.grade && principle.grade !== "verified" && (
          <p className="text-xs opacity-80">Grade {principle.grade}</p>
        )}
        {principle.grade === "verified" && (
          <p className="text-xs opacity-80">Verified</p>
        )}
      </div>
    </div>
  );
}
