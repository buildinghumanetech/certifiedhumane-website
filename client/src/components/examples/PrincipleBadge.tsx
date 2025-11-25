import PrincipleBadge from '../PrincipleBadge';

export default function PrincipleBadgeExample() {
  return (
    <div className="grid gap-3 p-8 max-w-md">
      <PrincipleBadge 
        principle={{ 
          name: "Respects Your Attention", 
          grade: "A", 
          icon: "check" 
        }} 
      />
      <PrincipleBadge 
        principle={{ 
          name: "Protects Privacy", 
          grade: "verified", 
          icon: "shield" 
        }} 
      />
      <PrincipleBadge 
        principle={{ 
          name: "Supports Wellbeing", 
          grade: "B", 
          icon: "heart" 
        }} 
      />
    </div>
  );
}
