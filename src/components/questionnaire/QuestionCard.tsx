'use client';

import { motion } from 'framer-motion';
import type { Question } from '@/types';
import { GlassCard } from '@/components/shared/GlassCard';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  value: string | string[] | number | undefined;
  onAnswer: (value: string | string[] | number) => void;
}

export function QuestionCard({ question, value, onAnswer }: QuestionCardProps) {
  const handleSingleChoice = (optionId: string) => {
    onAnswer(optionId);
  };

  const handleMultiChoice = (optionId: string) => {
    const currentValues = Array.isArray(value) ? value : [];
    const newValues = currentValues.includes(optionId)
      ? currentValues.filter((v) => v !== optionId)
      : [...currentValues, optionId];
    onAnswer(newValues);
  };

  const handleYesNo = (answer: 'yes' | 'no') => {
    onAnswer(answer);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-3xl mx-auto"
    >
      <GlassCard className="p-8 space-y-6">
        {/* Question text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-text">
            {question.text}
          </h2>
          {question.subtitle && (
            <p className="text-text-muted">{question.subtitle}</p>
          )}
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.type === 'single-choice' && question.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSingleChoice(option.id)}
              className={cn(
                'w-full text-left p-4 rounded-lg border transition-all',
                'hover:border-lavender/50 hover:shadow-glow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50',
                value === option.id
                  ? 'bg-lavender/10 border-lavender text-text'
                  : 'bg-surface-0/30 border-surface-1 text-text-muted'
              )}
            >
              <div className="font-medium text-text">
                {option.label}
              </div>
              {option.description && (
                <div className="text-sm text-text-muted mt-1">
                  {option.description}
                </div>
              )}
            </motion.button>
          ))}

          {question.type === 'multi-choice' && question.options?.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleMultiChoice(option.id)}
              className={cn(
                'w-full text-left p-4 rounded-lg border transition-all',
                'hover:border-lavender/50 hover:shadow-glow-sm',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50',
                Array.isArray(value) && value.includes(option.id)
                  ? 'bg-lavender/10 border-lavender text-text'
                  : 'bg-surface-0/30 border-surface-1 text-text-muted'
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  'w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5',
                  Array.isArray(value) && value.includes(option.id)
                    ? 'bg-lavender border-lavender'
                    : 'border-surface-2'
                )}>
                  {Array.isArray(value) && value.includes(option.id) && (
                    <svg className="w-3 h-3 text-crust" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-sm text-text-muted mt-1">
                      {option.description}
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          ))}

          {question.type === 'yes-no' && (
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleYesNo('yes')}
                className={cn(
                  'p-6 rounded-lg border transition-all text-center',
                  'hover:border-green/50 hover:shadow-glow-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50',
                  value === 'yes'
                    ? 'bg-green/10 border-green text-text'
                    : 'bg-surface-0/30 border-surface-1 text-text-muted'
                )}
              >
                <div className="text-2xl font-semibold">Yes</div>
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => handleYesNo('no')}
                className={cn(
                  'p-6 rounded-lg border transition-all text-center',
                  'hover:border-red/50 hover:shadow-glow-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red/50',
                  value === 'no'
                    ? 'bg-red/10 border-red text-text'
                    : 'bg-surface-0/30 border-surface-1 text-text-muted'
                )}
              >
                <div className="text-2xl font-semibold">No</div>
              </motion.button>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}
