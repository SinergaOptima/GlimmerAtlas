import type { FilterState } from '@/types';

/**
 * Convert FilterState to URL search params
 */
export function filtersToSearchParams(filters: FilterState): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.baseDistros.length > 0) {
    params.set('base', filters.baseDistros.join(','));
  }

  if (filters.desktops.length > 0) {
    params.set('de', filters.desktops.join(','));
  }

  if (filters.categories.length > 0) {
    params.set('cat', filters.categories.join(','));
  }

  if (filters.userLevel) {
    params.set('level', filters.userLevel);
  }

  if (filters.releaseModel && filters.releaseModel.length > 0) {
    params.set('release', filters.releaseModel.join(','));
  }

  return params;
}

/**
 * Parse URL search params into FilterState
 */
export function searchParamsToFilters(
  searchParams: URLSearchParams
): FilterState {
  return {
    baseDistros: searchParams.get('base')?.split(',').filter(Boolean) as any[] || [],
    desktops: searchParams.get('de')?.split(',').filter(Boolean) as any[] || [],
    categories: searchParams.get('cat')?.split(',').filter(Boolean) as any[] || [],
    userLevel: (searchParams.get('level') as any) || undefined,
    releaseModel: searchParams.get('release')?.split(',').filter(Boolean) as any[] || undefined,
  };
}

/**
 * Check if any filters are active
 */
export function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.baseDistros.length > 0 ||
    filters.desktops.length > 0 ||
    filters.categories.length > 0 ||
    !!filters.userLevel ||
    !!(filters.releaseModel && filters.releaseModel.length > 0)
  );
}

/**
 * Clear all filters
 */
export function clearFilters(): FilterState {
  return {
    baseDistros: [],
    desktops: [],
    categories: [],
    userLevel: undefined,
    releaseModel: undefined,
  };
}

/**
 * Count total active filters
 */
export function countActiveFilters(filters: FilterState): number {
  let count = 0;
  count += filters.baseDistros.length;
  count += filters.desktops.length;
  count += filters.categories.length;
  if (filters.userLevel) count += 1;
  if (filters.releaseModel) count += filters.releaseModel.length;
  return count;
}
