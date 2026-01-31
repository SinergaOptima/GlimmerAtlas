import type { Distro, FilterState } from '@/types';

/**
 * Filter distros based on active filter state
 * Uses OR logic within each filter category, AND logic across categories
 */
export function filterDistros(
  distros: Distro[],
  filters: FilterState
): Distro[] {
  return distros.filter((distro) => {
    // Base distro filter (OR within category)
    if (filters.baseDistros.length > 0) {
      const matchesBaseDistro = filters.baseDistros.includes(distro.baseDistro);
      if (!matchesBaseDistro) return false;
    }

    // Desktop environment filter (OR within category)
    if (filters.desktops.length > 0) {
      const allDesktops = [
        ...distro.defaultDesktops,
        ...distro.supportedDesktops,
      ];
      const matchesDesktop = filters.desktops.some((de) =>
        allDesktops.includes(de)
      );
      if (!matchesDesktop) return false;
    }

    // Category filter (OR within category)
    if (filters.categories.length > 0) {
      const matchesCategory = filters.categories.some((cat) =>
        distro.categories.includes(cat)
      );
      if (!matchesCategory) return false;
    }

    // User level filter (single select)
    if (filters.userLevel) {
      if (distro.targetUser !== filters.userLevel) return false;
    }

    // Release model filter (OR within category)
    if (filters.releaseModel && filters.releaseModel.length > 0) {
      const matchesReleaseModel = filters.releaseModel.includes(
        distro.releaseModel
      );
      if (!matchesReleaseModel) return false;
    }

    return true;
  });
}

/**
 * Count how many distros match each filter option
 * Useful for displaying counts next to filter options
 */
export function countFilterMatches(
  distros: Distro[],
  currentFilters: FilterState
): Record<string, Record<string, number>> {
  const counts: Record<string, Record<string, number>> = {
    baseDistros: {},
    desktops: {},
    categories: {},
    releaseModel: {},
  };

  // Count matches for each potential filter value
  distros.forEach((distro) => {
    // Count base distros
    counts.baseDistros[distro.baseDistro] =
      (counts.baseDistros[distro.baseDistro] || 0) + 1;

    // Count desktops
    const allDesktops = [
      ...distro.defaultDesktops,
      ...distro.supportedDesktops,
    ];
    allDesktops.forEach((de) => {
      counts.desktops[de] = (counts.desktops[de] || 0) + 1;
    });

    // Count categories
    distro.categories.forEach((cat) => {
      counts.categories[cat] = (counts.categories[cat] || 0) + 1;
    });

    // Count release models
    counts.releaseModel[distro.releaseModel] =
      (counts.releaseModel[distro.releaseModel] || 0) + 1;
  });

  return counts;
}
