'use client';

import { motion } from 'framer-motion';
import type { ScoringResult } from '@/lib/scoring/types';
import { ResultCard } from './ResultCard';
import { staggerContainer } from '@/config/animations';

interface ResultsListProps {
  results: ScoringResult[];
}

export function ResultsList({ results }: ResultsListProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-muted">No distributions found matching your criteria.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {results.map((result, index) => (
        <ResultCard
          key={result.distro.id}
          distro={result.distro}
          score={result.score}
          matchReasons={result.matchReasons}
          rank={index}
        />
      ))}
    </motion.div>
  );
}
