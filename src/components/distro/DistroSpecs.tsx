import type { Distro } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';

interface DistroSpecsProps {
  distro: Distro;
}

export function DistroSpecs({ distro }: DistroSpecsProps) {
  const specs = [
    { label: 'Base Distribution', value: distro.baseDistro },
    { label: 'Lineage', value: distro.lineage.join(' → ') },
    { label: 'Release Model', value: distro.releaseModel },
    { label: 'Stability', value: distro.stability },
    { label: 'Default Desktop(s)', value: distro.defaultDesktops.join(', ') },
    { label: 'Package Manager', value: distro.packageManager.join(', ') },
    { label: 'Target User', value: distro.targetUser },
    { label: 'Install Difficulty', value: `${distro.installDifficulty}/5` },
    { label: 'Gaming Support', value: `${distro.gamingSupport}/5` },
    { label: 'NVIDIA Support', value: `${distro.nvidiaSupport}/5` },
    { label: 'Customization Level', value: `${distro.customizationLevel}/5` },
    { label: 'Security Focus', value: `${distro.securityFocus}/5` },
  ];

  return (
    <GlassCard className="p-6">
      <h2 className="text-xl font-semibold text-text mb-4">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec) => (
          <div key={spec.label} className="space-y-1">
            <dt className="text-sm text-text-muted font-mono uppercase tracking-wide">
              {spec.label}
            </dt>
            <dd className="text-text font-medium">
              {spec.value}
            </dd>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
