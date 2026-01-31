'use client';

import { motion } from 'framer-motion';
import type { FilterState } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';
import { Checkbox } from '@/components/ui/checkbox';
import { CATEGORIES } from '@/data/constants/categories';
import { DESKTOPS } from '@/data/constants/desktops';
import { BASE_DISTROS } from '@/data/constants/base-distros';
import { cn } from '@/lib/utils';

interface FilterPanelProps {
  filters: FilterState;
  onToggleFilter: (category: keyof FilterState, value: string) => void;
  counts?: Record<string, Record<string, number>>;
}

export function FilterPanel({ filters, onToggleFilter, counts }: FilterPanelProps) {
  return (
    <GlassCard className="p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-text mb-4">Filters</h2>
      </div>

      {/* Base Distro Filter - Primary section with emphasis */}
      <div className="space-y-3 pb-4 border-b border-surface-1/30">
        <h3 className="text-sm font-semibold text-text uppercase tracking-wide">
          Base Distribution
        </h3>
        <div className="space-y-2">
          {BASE_DISTROS.map((option) => (
            <label
              key={option.value}
              className={cn(
                'flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors',
                'hover:bg-surface-0/50',
                filters.baseDistros.includes(option.value) && 'bg-surface-0/50'
              )}
            >
              <Checkbox
                checked={filters.baseDistros.includes(option.value)}
                onCheckedChange={() => onToggleFilter('baseDistros', option.value)}
              />
              <div className="flex-1">
                <div className="text-sm text-text">{option.label}</div>
                <div className="text-xs text-text-muted">{option.description}</div>
              </div>
              {counts?.baseDistros?.[option.value] && (
                <span className="text-xs font-mono text-text-muted">
                  {counts.baseDistros[option.value]}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Desktop Environment Filter - Secondary section */}
      <div className="space-y-3 pt-4">
        <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider">
          Desktop Environment
        </h3>
        <div className="space-y-2 max-h-64 overflow-y-auto hide-scrollbar">
          {DESKTOPS.filter((de) => de.value !== 'none').map((option) => (
            <label
              key={option.value}
              className={cn(
                'flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors',
                'hover:bg-surface-0/50',
                filters.desktops.includes(option.value) && 'bg-surface-0/50'
              )}
            >
              <Checkbox
                checked={filters.desktops.includes(option.value)}
                onCheckedChange={() => onToggleFilter('desktops', option.value)}
              />
              <div className="flex-1">
                <div className="text-sm text-text">{option.label}</div>
              </div>
              {counts?.desktops?.[option.value] && (
                <span className="text-xs font-mono text-text-muted">
                  {counts.desktops[option.value]}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Category Filter - Secondary section */}
      <div className="space-y-3 pt-4 border-t border-surface-1/20">
        <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider">
          Use Cases
        </h3>
        <div className="space-y-2">
          {CATEGORIES.map((option) => (
            <label
              key={option.value}
              className={cn(
                'flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors',
                'hover:bg-surface-0/50',
                filters.categories.includes(option.value) && 'bg-surface-0/50'
              )}
            >
              <Checkbox
                checked={filters.categories.includes(option.value)}
                onCheckedChange={() => onToggleFilter('categories', option.value)}
              />
              <div className="flex-1">
                <div className="text-sm text-text">{option.label}</div>
                <div className="text-xs text-text-muted">{option.description}</div>
              </div>
              {counts?.categories?.[option.value] && (
                <span className="text-xs font-mono text-text-muted">
                  {counts.categories[option.value]}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
