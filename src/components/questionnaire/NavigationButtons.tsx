'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationButtonsProps {
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export function NavigationButtons({
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
  isLastQuestion,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center gap-4">
      <Button
        variant="ghost"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      <Button
        onClick={onNext}
        disabled={!canGoNext}
        className="gap-2 btn-primary"
      >
        {isLastQuestion ? 'See Results' : 'Next'}
        {!isLastQuestion && <ArrowRight className="w-4 h-4" />}
      </Button>
    </div>
  );
}
