'use client';

import { Suspense } from 'react';
import { Container } from '@/components/layout/Container';
import { CompareSelector } from '@/components/compare/CompareSelector';
import { CompareTable } from '@/components/compare/CompareTable';
import { useCompare } from '@/hooks/useCompare';
import { allDistros } from '@/data/distros';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

function ComparePageContent() {
  const { selectedDistros, toggleDistro, canAddMore } = useCompare(allDistros);

  return (
    <div className="py-12">
      <Container>
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="text-gradient">Compare Distributions</span>
            </h1>
            <p className="text-text-muted text-lg">
              Compare technical specs, features, and trade-offs side-by-side
            </p>
          </div>

          {/* Selector */}
          <CompareSelector
            allDistros={allDistros}
            selectedDistros={selectedDistros}
            onToggle={toggleDistro}
            canAddMore={canAddMore}
          />

          {/* Comparison Table */}
          {selectedDistros.length >= 2 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-text">
                  Comparison
                </h2>
                <p className="text-sm text-text-muted">
                  Scroll horizontally to see all distributions
                </p>
              </div>
              <CompareTable distros={selectedDistros} />

              {/* Links to detail pages */}
              <div className="flex flex-wrap gap-4">
                {selectedDistros.map((distro) => (
                  <Link
                    key={distro.id}
                    href={`/distro/${distro.id}`}
                    className="btn-secondary gap-2"
                  >
                    View {distro.name} Details
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 glass-card rounded-lg">
              <p className="text-text-muted text-lg">
                Select at least 2 distributions to start comparing
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<div className="py-12"><div className="container-custom">Loading...</div></div>}>
      <ComparePageContent />
    </Suspense>
  );
}
