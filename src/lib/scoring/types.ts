import type { Distro } from '@/types';

export interface ScoringResult {
  distro: Distro;
  score: number;              // 0-100 normalized score
  matchReasons: string[];     // Human-readable reasons for this match
  breakdown: {
    categoryMatch: number;
    technicalMatch: number;
    userLevelMatch: number;
    featureMatch: number;
  };
}

export interface ScoringContext {
  preferredCategories: string[];
  preferredBaseDistros: string[];
  preferredDesktops: string[];
  targetUserLevel?: string;
  requiredGamingSupport?: number;
  requiredNvidiaSupport?: number;
  preferredStability?: string;
  preferredCustomizationLevel?: number;
  maxInstallDifficulty?: number;
}
