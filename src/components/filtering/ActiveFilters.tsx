'use client';

import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import type { FilterState } from '@/types';
import { hasActiveFilters, countActiveFilters } from '@/lib/filtering/filter-utils';
import { CATEGORIES } from '@/data/constants/categories';
import { DESKTOPS } from '@/data/constants/desktops';
import { BASE_DISTROS } from '@/data/constants/base-distros';

interface ActiveFiltersProps {
  filters: FilterState;
  onToggleFilter: (category: keyof FilterState, value: string) => void;
  onClearAll: () => void;
}

export function ActiveFilters({ filters, onToggleFilter, onClearAll }: ActiveFiltersProps) {
  if (!hasActiveFilters(filters)) {
    return null;
  }

  const getLabel = (category: keyof FilterState, value: string): string => {
    if (category === 'baseDistros') {
      return BASE_DISTROS.find((d) => d.value === value)?.label || value;
    }
    if (category === 'desktops') {
      return DESKTOPS.find((d) => d.value === value)?.label || value;
    }
    if (category === 'categories') {
      return CATEGORIES.find((c) => c.value === value)?.label || value;
    }
    return value;
  };

  const totalFilters = countActiveFilters(filters);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-text-muted font-medium">
        Active filters ({totalFilters}):
      </span>

      {filters.baseDistros.map((value) => (
        <Badge
          key={`base-${value}`}
          variant="secondary"
          className="gap-1 cursor-pointer hover:bg-surface-2"
          onClick={() => onToggleFilter('baseDistros', value)}
        >
          {getLabel('baseDistros', value)}
          <X className="w-3 h-3" />
        </Badge>
      ))}

      {filters.desktops.map((value) => (
        <Badge
          key={`de-${value}`}
          variant="secondary"
          className="gap-1 cursor-pointer hover:bg-surface-2"
          onClick={() => onToggleFilter('desktops', value)}
        >
          {getLabel('desktops', value)}
          <X className="w-3 h-3" />
        </Badge>
      ))}

      {filters.categories.map((value) => (
        <Badge
          key={`cat-${value}`}
          variant="secondary"
          className="gap-1 cursor-pointer hover:bg-surface-2"
          onClick={() => onToggleFilter('categories', value)}
        >
          {getLabel('categories', value)}
          <X className="w-3 h-3" />
        </Badge>
      ))}

      <button
        onClick={onClearAll}
        className="text-sm text-red hover:text-red/80 transition-colors underline"
      >
        Clear all
      </button>
    </div>
  );
}
