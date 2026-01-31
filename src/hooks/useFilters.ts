'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import type { FilterState } from '@/types';
import { filtersToSearchParams, searchParamsToFilters } from '@/lib/filtering/filter-utils';

export function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo(() => {
    return searchParamsToFilters(searchParams);
  }, [searchParams]);

  const updateFilters = useCallback((newFilters: FilterState) => {
    const params = filtersToSearchParams(newFilters);
    const queryString = params.toString();
    router.push(queryString ? `/browse?${queryString}` : '/browse');
  }, [router]);

  const toggleFilter = useCallback((
    category: keyof FilterState,
    value: string
  ) => {
    const newFilters = { ...filters };

    if (category === 'userLevel') {
      // Single select
      newFilters.userLevel = newFilters.userLevel === value ? undefined : value as any;
    } else {
      // Multi-select
      const currentValues = newFilters[category] as string[];
      if (currentValues.includes(value)) {
        newFilters[category] = currentValues.filter((v) => v !== value) as any;
      } else {
        newFilters[category] = [...currentValues, value] as any;
      }
    }

    updateFilters(newFilters);
  }, [filters, updateFilters]);

  const clearFilters = useCallback(() => {
    router.push('/browse');
  }, [router]);

  const clearCategory = useCallback((category: keyof FilterState) => {
    const newFilters = { ...filters };
    if (category === 'userLevel') {
      newFilters.userLevel = undefined;
    } else {
      newFilters[category] = [] as any;
    }
    updateFilters(newFilters);
  }, [filters, updateFilters]);

  return {
    filters,
    updateFilters,
    toggleFilter,
    clearFilters,
    clearCategory,
  };
}
