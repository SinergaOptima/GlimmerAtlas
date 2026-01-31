'use client';

import { Container } from '@/components/layout/Container';
import { ProgressIndicator } from '@/components/questionnaire/ProgressIndicator';
import { QuestionCard } from '@/components/questionnaire/QuestionCard';
import { NavigationButtons } from '@/components/questionnaire/NavigationButtons';
import { ResultsList } from '@/components/results/ResultsList';
import { useQuestionnaire } from '@/hooks/useQuestionnaire';
import { allDistros } from '@/data/distros';
import { scoreDistros } from '@/lib/scoring/engine';
import { AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export default function QuestionnairePage() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    answers,
    isComplete,
    currentAnswer,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    resetQuestionnaire,
    canGoNext,
    canGoPrevious,
  } = useQuestionnaire();

  // Calculate results if questionnaire is complete
  const results = isComplete ? scoreDistros(allDistros, answers) : [];

  if (isComplete) {
    return (
      <div className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">
                <span className="text-gradient">Your Perfect Match</span>
              </h1>
              <p className="text-text-muted text-lg">
                Based on your answers, here are the best Linux distributions for you
              </p>
              <Button
                onClick={resetQuestionnaire}
                variant="outline"
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Start Over
              </Button>
            </div>

            {/* Results */}
            <ResultsList results={results} />
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">
              <span className="text-gradient">Find Your Distribution</span>
            </h1>
            <p className="text-text-muted">
              Answer a few questions to get personalized recommendations
            </p>
          </div>

          {/* Progress */}
          <ProgressIndicator
            current={currentQuestionIndex}
            total={totalQuestions}
            progress={progress}
          />

          {/* Question */}
          <AnimatePresence mode="wait">
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              value={currentAnswer?.value}
              onAnswer={answerQuestion}
            />
          </AnimatePresence>

          {/* Navigation */}
          <NavigationButtons
            canGoPrevious={canGoPrevious()}
            canGoNext={canGoNext()}
            onPrevious={previousQuestion}
            onNext={nextQuestion}
            isLastQuestion={currentQuestionIndex === totalQuestions - 1}
          />

          {/* Helper text */}
          <div className="text-center text-sm text-text-muted">
            <p>Use arrow keys to navigate • Press Enter to select</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
