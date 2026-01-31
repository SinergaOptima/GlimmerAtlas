'use client';

import { useState } from 'react';
import type { Distro } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';
import { X, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CompareSelectorProps {
  allDistros: Distro[];
  selectedDistros: Distro[];
  onToggle: (id: string) => void;
  canAddMore: boolean;
}

export function CompareSelector({
  allDistros,
  selectedDistros,
  onToggle,
  canAddMore,
}: CompareSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistros = allDistros.filter((distro) =>
    distro.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <GlassCard className="p-6 space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-text">
          Select Distributions to Compare
        </h2>
        <p className="text-sm text-text-muted">
          Choose 2-4 distributions ({selectedDistros.length}/4 selected)
        </p>
      </div>

      {/* Selected distros */}
      {selectedDistros.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedDistros.map((distro) => (
            <Badge
              key={distro.id}
              variant="secondary"
              className="gap-2 text-sm py-2 px-3 cursor-pointer hover:bg-surface-2"
              onClick={() => onToggle(distro.id)}
            >
              {distro.name}
              <X className="w-4 h-4" />
            </Badge>
          ))}
        </div>
      )}

      {/* Search */}
      {canAddMore && (
        <>
          <input
            type="text"
            placeholder="Search distributions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-surface-0 border border-surface-1 rounded-lg text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-lavender/50"
          />

          {/* Available distros */}
          <div className="max-h-64 overflow-y-auto hide-scrollbar space-y-2">
            {filteredDistros
              .filter((d) => !selectedDistros.find((s) => s.id === d.id))
              .map((distro) => (
                <button
                  key={distro.id}
                  onClick={() => onToggle(distro.id)}
                  className={cn(
                    'w-full text-left p-3 rounded-lg border transition-all',
                    'hover:border-lavender/50 hover:bg-surface-0/50',
                    'bg-surface-0/30 border-surface-1'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-text">{distro.name}</div>
                      <div className="text-xs text-text-muted">
                        {distro.baseDistro} • {distro.releaseModel}
                      </div>
                    </div>
                    <Plus className="w-5 h-5 text-text-muted" />
                  </div>
                </button>
              ))}
          </div>
        </>
      )}
    </GlassCard>
  );
}
