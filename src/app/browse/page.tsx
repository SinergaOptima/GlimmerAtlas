'use client';

import { useMemo, Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { FilterPanel } from '@/components/filtering/FilterPanel';
import { ActiveFilters } from '@/components/filtering/ActiveFilters';
import { ResultCard } from '@/components/results/ResultCard';
import { useFilters } from '@/hooks/useFilters';
import { allDistros } from '@/data/distros';
import { filterDistros, countFilterMatches } from '@/lib/filtering/filter-engine';
import { hasActiveFilters } from '@/lib/filtering/filter-utils';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/config/animations';

function BrowsePageContent() {
  const { filters, toggleFilter, clearFilters } = useFilters();

  // Filter distros based on active filters
  const filteredDistros = useMemo(() => {
    return filterDistros(allDistros, filters);
  }, [filters]);

  // Count matches for each filter option
  const counts = useMemo(() => {
    return countFilterMatches(allDistros, filters);
  }, [filters]);

  // Sort by popularity if no filters, or alphabetically if filtered
  const sortedDistros = useMemo(() => {
    return [...filteredDistros].sort((a, b) => {
      if (hasActiveFilters(filters)) {
        return a.name.localeCompare(b.name);
      }
      return (b.popularity || 0) - (a.popularity || 0);
    });
  }, [filteredDistros, filters]);

  return (
    <div className="py-12">
      <Container>
        {/* Header */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold">
            <span className="text-gradient">Browse Distributions</span>
          </h1>
          <p className="text-text-muted text-lg">
            Explore all Linux distributions or filter by your preferences
          </p>
        </div>

        {/* Active Filters */}
        {hasActiveFilters(filters) && (
          <div className="mb-6">
            <ActiveFilters
              filters={filters}
              onToggleFilter={toggleFilter}
              onClearAll={clearFilters}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20">
              <FilterPanel
                filters={filters}
                onToggleFilter={toggleFilter}
                counts={counts}
              />
            </div>
          </aside>

          {/* Main Content - Results */}
          <div className="lg:col-span-3">
            <div className="mb-4">
              <p className="text-text-muted">
                Showing <span className="font-semibold text-text">{sortedDistros.length}</span>{' '}
                {sortedDistros.length === 1 ? 'distribution' : 'distributions'}
              </p>
            </div>

            {sortedDistros.length === 0 ? (
              <div className="text-center py-12 glass-card rounded-lg">
                <p className="text-text-muted text-lg">
                  No distributions match your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary mt-4"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {sortedDistros.map((distro, index) => (
                  <motion.div key={distro.id} variants={staggerItem}>
                    <ResultCard
                      distro={distro}
                      score={85}
                      matchReasons={[]}
                      rank={index}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function BrowsePage() {
  return (
    <Suspense fallback={<div className="py-12"><div className="container-custom">Loading...</div></div>}>
      <BrowsePageContent />
    </Suspense>
  );
}
