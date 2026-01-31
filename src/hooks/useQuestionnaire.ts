'use client';

import { useState, useEffect } from 'react';
import type { Answer, AnswerMap, QuestionnaireState } from '@/types';
import { questions } from '@/data/questions/questions';

const STORAGE_KEY = 'glimmeratlas_questionnaire_state';

export function useQuestionnaire() {
  const [state, setState] = useState<QuestionnaireState>({
    currentQuestionIndex: 0,
    answers: {},
    isComplete: false,
  });

  // Load from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setState(parsed);
      } catch (e) {
        // Invalid data, ignore
      }
    }
  }, []);

  // Save to sessionStorage on state change
  useEffect(() => {
    if (Object.keys(state.answers).length > 0 || state.currentQuestionIndex > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const currentQuestion = questions[state.currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((state.currentQuestionIndex + 1) / totalQuestions) * 100;

  const answerQuestion = (value: string | string[] | number) => {
    const answer: Answer = {
      questionId: currentQuestion.id,
      value,
      timestamp: Date.now(),
    };

    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: answer,
      },
    }));
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < totalQuestions - 1) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      // Last question - mark as complete
      setState((prev) => ({
        ...prev,
        isComplete: true,
      }));
    }
  };

  const previousQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1,
      }));
    }
  };

  const resetQuestionnaire = () => {
    setState({
      currentQuestionIndex: 0,
      answers: {},
      isComplete: false,
    });
    sessionStorage.removeItem(STORAGE_KEY);
  };

  const getCurrentAnswer = () => {
    return state.answers[currentQuestion.id];
  };

  const canGoNext = () => {
    return !!getCurrentAnswer();
  };

  const canGoPrevious = () => {
    return state.currentQuestionIndex > 0;
  };

  return {
    currentQuestion,
    currentQuestionIndex: state.currentQuestionIndex,
    totalQuestions,
    progress,
    answers: state.answers,
    isComplete: state.isComplete,
    currentAnswer: getCurrentAnswer(),
    answerQuestion,
    nextQuestion,
    previousQuestion,
    resetQuestionnaire,
    canGoNext,
    canGoPrevious,
  };
}
