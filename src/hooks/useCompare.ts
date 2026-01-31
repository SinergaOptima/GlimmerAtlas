'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useCallback } from 'react';
import type { Distro } from '@/types';

export function useCompare(allDistros: Distro[]) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedIds = useMemo(() => {
    const ids = searchParams.get('ids');
    return ids ? ids.split(',').filter(Boolean) : [];
  }, [searchParams]);

  const selectedDistros = useMemo(() => {
    return selectedIds
      .map((id) => allDistros.find((d) => d.id === id))
      .filter((d): d is Distro => d !== undefined);
  }, [selectedIds, allDistros]);

  const updateSelection = useCallback((ids: string[]) => {
    if (ids.length === 0) {
      router.push('/compare');
    } else {
      router.push(`/compare?ids=${ids.join(',')}`);
    }
  }, [router]);

  const addDistro = useCallback((id: string) => {
    if (selectedIds.length >= 4) return; // Max 4 distros
    if (selectedIds.includes(id)) return; // Already selected

    updateSelection([...selectedIds, id]);
  }, [selectedIds, updateSelection]);

  const removeDistro = useCallback((id: string) => {
    updateSelection(selectedIds.filter((selectedId) => selectedId !== id));
  }, [selectedIds, updateSelection]);

  const toggleDistro = useCallback((id: string) => {
    if (selectedIds.includes(id)) {
      removeDistro(id);
    } else {
      addDistro(id);
    }
  }, [selectedIds, addDistro, removeDistro]);

  const canAddMore = selectedIds.length < 4;

  return {
    selectedIds,
    selectedDistros,
    addDistro,
    removeDistro,
    toggleDistro,
    canAddMore,
  };
}
