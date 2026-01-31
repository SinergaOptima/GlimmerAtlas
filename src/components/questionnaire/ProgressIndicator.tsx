'use client';

import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  current: number;
  total: number;
  progress: number;
}

export function ProgressIndicator({ current, total, progress }: ProgressIndicatorProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-text-muted font-mono">
        <span>Question {current + 1} of {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="h-1 bg-surface-0 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-lavender to-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
