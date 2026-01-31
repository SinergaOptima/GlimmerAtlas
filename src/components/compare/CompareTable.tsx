import type { Distro } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';
import { cn } from '@/lib/utils';

interface CompareTableProps {
  distros: Distro[];
}

interface CompareRow {
  label: string;
  getValue: (distro: Distro) => string | string[];
  mono?: boolean;
}

const compareRows: CompareRow[] = [
  { label: 'Base Distribution', getValue: (d) => d.baseDistro, mono: true },
  { label: 'Lineage', getValue: (d) => d.lineage.join(' → '), mono: true },
  { label: 'Release Model', getValue: (d) => d.releaseModel, mono: true },
  { label: 'Stability', getValue: (d) => d.stability, mono: true },
  { label: 'Default Desktop(s)', getValue: (d) => d.defaultDesktops.join(', ') },
  { label: 'Supported Desktops', getValue: (d) => d.supportedDesktops.join(', ') },
  { label: 'Package Manager', getValue: (d) => d.packageManager.join(', '), mono: true },
  { label: 'Target User', getValue: (d) => d.targetUser },
  { label: 'Install Difficulty', getValue: (d) => `${d.installDifficulty}/5` },
  { label: 'Gaming Support', getValue: (d) => `${d.gamingSupport}/5` },
  { label: 'NVIDIA Support', getValue: (d) => `${d.nvidiaSupport}/5` },
  { label: 'Customization Level', getValue: (d) => `${d.customizationLevel}/5` },
  { label: 'Security Focus', getValue: (d) => `${d.securityFocus}/5` },
  { label: 'Primary Use Cases', getValue: (d) => d.categories.slice(0, 3).join(', ') },
];

export function CompareTable({ distros }: CompareTableProps) {
  if (distros.length === 0) {
    return null;
  }

  return (
    <GlassCard className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-surface-1">
              <th className="sticky left-0 z-10 bg-surface-0/95 backdrop-blur-sm p-4 text-left">
                <span className="text-sm font-medium text-text-muted uppercase tracking-wide">
                  Attribute
                </span>
              </th>
              {distros.map((distro) => (
                <th key={distro.id} className="p-4 text-left min-w-[200px]">
                  <div className="space-y-1">
                    <div className="font-semibold text-text">{distro.name}</div>
                    {distro.tagline && (
                      <div className="text-xs text-text-muted line-clamp-1">
                        {distro.tagline}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row, index) => {
              // Calculate best value for numeric rows (X/5 format)
              const values = distros.map(d => {
                const val = row.getValue(d);
                return typeof val === 'string' && val.includes('/5')
                  ? parseInt(val)
                  : null;
              });
              const maxValue = Math.max(...values.filter((v): v is number => v !== null));
              const hasBestValue = maxValue > 0 && !isNaN(maxValue);

              return (
                <tr
                  key={row.label}
                  className={cn(
                    'border-b border-surface-1/50 transition-colors hover:bg-surface-0/30',
                    index % 2 === 0 ? 'bg-surface-0/10' : 'bg-transparent'
                  )}
                >
                  <td className="sticky left-0 z-10 bg-surface-0/95 backdrop-blur-sm p-4">
                    <span className="text-sm font-medium text-text-muted">
                      {row.label}
                    </span>
                  </td>
                  {distros.map((distro, distroIndex) => {
                    const value = row.getValue(distro);
                    const numValue = typeof value === 'string' && value.includes('/5')
                      ? parseInt(value)
                      : null;
                    const isBest = hasBestValue && numValue === maxValue;

                    return (
                      <td
                        key={distro.id}
                        className={cn(
                          "p-4",
                          isBest && "bg-lavender/5 border-l border-r border-lavender/20"
                        )}
                      >
                        <span
                          className={cn(
                            'text-sm',
                            row.mono && 'font-mono',
                            isBest ? 'text-text font-medium' : 'text-text'
                          )}
                        >
                          {value}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}

            {/* Pros section */}
            <tr className="border-b border-surface-1/50 bg-surface-0/10">
              <td className="sticky left-0 z-10 bg-surface-0/95 backdrop-blur-sm p-4">
                <span className="text-sm font-medium text-green">Pros</span>
              </td>
              {distros.map((distro) => (
                <td key={distro.id} className="p-4 align-top">
                  <ul className="space-y-1">
                    {distro.pros.slice(0, 3).map((pro, i) => (
                      <li key={i} className="text-sm text-text-muted flex items-start gap-1">
                        <span className="text-green">✓</span>
                        <span className="line-clamp-2">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>

            {/* Cons section */}
            <tr className="bg-transparent">
              <td className="sticky left-0 z-10 bg-surface-0/95 backdrop-blur-sm p-4">
                <span className="text-sm font-medium text-red">Cons</span>
              </td>
              {distros.map((distro) => (
                <td key={distro.id} className="p-4 align-top">
                  <ul className="space-y-1">
                    {distro.cons.slice(0, 3).map((con, i) => (
                      <li key={i} className="text-sm text-text-muted flex items-start gap-1">
                        <span className="text-red">✗</span>
                        <span className="line-clamp-2">{con}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
