'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Distro } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Info } from 'lucide-react';

interface ResultCardProps {
  distro: Distro;
  score: number;
  matchReasons: string[];
  rank: number;
}

export function ResultCard({ distro, score, matchReasons, rank }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.05 }}
      whileHover={{ scale: 1.01 }}
    >
      <GlassCard className="p-6 hover:shadow-glow-md transition-all">
        <div className="flex items-start gap-4">
          {/* Rank badge */}
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg font-mono border ${
              rank === 0 ? 'bg-surface-1/80 text-yellow border-yellow/20' :
              rank === 1 ? 'bg-surface-1/80 text-sapphire border-sapphire/20' :
              rank === 2 ? 'bg-surface-1/80 text-mauve border-mauve/20' :
              'bg-surface-0 text-text-muted border-surface-1'
            }`}>
              #{rank + 1}
            </div>
          </div>

          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-text">
                  {distro.name}
                </h3>
                {distro.tagline && (
                  <p className="text-sm text-text-muted mt-1">
                    {distro.tagline}
                  </p>
                )}
              </div>

              {/* Score indicator */}
              <div className="text-right">
                <div className="text-2xl font-bold text-lavender">
                  {score}%
                </div>
                <div className="text-xs text-text-muted font-mono">
                  match
                </div>
              </div>
            </div>

            {/* Match reasons */}
            {matchReasons.length > 0 && (
              <div className="space-y-1">
                {matchReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="text-green mt-0.5">✓</span>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="font-mono text-xs">
                {distro.baseDistro}
              </Badge>
              {distro.defaultDesktops[0] && (
                <Badge variant="outline" className="font-mono text-xs">
                  {distro.defaultDesktops[0]}
                </Badge>
              )}
              {distro.releaseModel && (
                <Badge variant="outline" className="font-mono text-xs">
                  {distro.releaseModel}
                </Badge>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Link
                href={`/distro/${distro.id}`}
                className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                View Details
              </Link>
              <a
                href={distro.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-4 py-2 inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Official Site
              </a>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
