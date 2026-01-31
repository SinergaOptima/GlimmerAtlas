import type { Distro } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';
import { CheckCircle2, XCircle } from 'lucide-react';

interface DistroProsConsProps {
  distro: Distro;
}

export function DistroProsCons({ distro }: DistroProsConsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pros */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-semibold text-green mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          Pros
        </h2>
        <ul className="space-y-3">
          {distro.pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2 text-text-muted">
              <span className="text-green mt-1">✓</span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      {/* Cons */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-semibold text-red mb-4 flex items-center gap-2">
          <XCircle className="w-5 h-5" />
          Cons
        </h2>
        <ul className="space-y-3">
          {distro.cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2 text-text-muted">
              <span className="text-red mt-1">✗</span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
}
