/**
 * Question and Answer Type Definitions
 */

import type { BaseDistro, Category, Desktop, UserLevel, Stability } from './distro';

export type QuestionType =
  | 'single-choice'
  | 'multi-choice'
  | 'scale'
  | 'yes-no';

export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface ScaleConfig {
  min: number;
  max: number;
  labels: { value: number; label: string }[];
}

export interface ScoringCriteria {
  categories?: Category[];
  baseDistros?: BaseDistro[];
  desktops?: Desktop[];
  targetUser?: UserLevel[];
  attributes?: {
    gamingSupport?: number;
    nvidiaSupport?: number;
    stability?: Stability;
    customizationLevel?: number;
    securityFocus?: number;
    installDifficulty?: number;
  };
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  subtitle?: string;
  options?: QuestionOption[];
  scaleConfig?: ScaleConfig;

  // Scoring configuration
  scoringWeight: number;
  scoringMap: Record<string, ScoringCriteria>;

  // Flow control
  nextQuestion?: string | ((answer: Answer) => string);
  skipCondition?: (answers: AnswerMap) => boolean;
}

export interface Answer {
  questionId: string;
  value: string | string[] | number;
  timestamp: number;
}

export type AnswerMap = Record<string, Answer>;

export interface QuestionnaireState {
  currentQuestionIndex: number;
  answers: AnswerMap;
  isComplete: boolean;
}
