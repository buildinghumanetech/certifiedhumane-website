import CertificationBadge from '../CertificationBadge';

export default function CertificationBadgeExample() {
  return (
    <div className="flex flex-wrap gap-3 p-8">
      <CertificationBadge level="certified" />
      <CertificationBadge level="recommended" />
      <CertificationBadge level="not_certified" />
    </div>
  );
}
