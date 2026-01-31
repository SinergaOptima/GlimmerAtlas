import type { Distro } from '@/types';
import { Badge } from '@/components/ui/badge';

interface DistroHeaderProps {
  distro: Distro;
}

export function DistroHeader({ distro }: DistroHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-6">
        {/* Logo placeholder */}
        <div className="w-24 h-24 rounded-lg bg-surface-1 flex items-center justify-center text-4xl font-bold text-text-muted">
          {distro.name.charAt(0)}
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-4xl font-bold text-text">
            {distro.name}
          </h1>
          {distro.tagline && (
            <p className="text-xl text-text-muted italic">
              {distro.tagline}
            </p>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary" className="font-mono">
              {distro.baseDistro}
            </Badge>
            <Badge variant="outline" className="font-mono">
              {distro.releaseModel}
            </Badge>
            <Badge variant="outline" className="font-mono">
              {distro.targetUser}
            </Badge>
          </div>
        </div>
      </div>

      <p className="text-text-muted leading-relaxed">
        {distro.description}
      </p>
    </div>
  );
}
