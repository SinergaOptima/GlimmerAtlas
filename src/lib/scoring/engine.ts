import type { Distro, AnswerMap } from '@/types';
import type { ScoringResult, ScoringContext } from './types';
import { scoringWeights, scoringPenalties } from './weights';
import { questions } from '@/data/questions/questions';

/**
 * Main scoring engine - calculates distro scores based on questionnaire answers
 */
export function scoreDistros(
  distros: Distro[],
  answers: AnswerMap
): ScoringResult[] {
  // Build scoring context from answers
  const context = buildScoringContext(answers);

  // Score each distro
  const results = distros.map((distro) => scoreDistro(distro, context, answers));

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  return results;
}

/**
 * Build scoring context from questionnaire answers
 */
function buildScoringContext(answers: AnswerMap): ScoringContext {
  const context: ScoringContext = {
    preferredCategories: [],
    preferredBaseDistros: [],
    preferredDesktops: [],
  };

  // Iterate through all answers and accumulate preferences
  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    const answerValue = answer.value;
    const answerKeys = Array.isArray(answerValue) ? answerValue : [answerValue.toString()];

    answerKeys.forEach((key) => {
      const criteria = question.scoringMap[key];
      if (!criteria) return;

      // Accumulate categories
      if (criteria.categories) {
        context.preferredCategories.push(...criteria.categories);
      }

      // Accumulate base distros
      if (criteria.baseDistros) {
        context.preferredBaseDistros.push(...criteria.baseDistros);
      }

      // Accumulate desktops
      if (criteria.desktops) {
        context.preferredDesktops.push(...criteria.desktops);
      }

      // Set target user level (take most recent)
      if (criteria.targetUser && criteria.targetUser.length > 0) {
        context.targetUserLevel = criteria.targetUser[0];
      }

      // Set attribute preferences
      if (criteria.attributes) {
        if (criteria.attributes.gamingSupport !== undefined) {
          context.requiredGamingSupport = Math.max(
            context.requiredGamingSupport || 0,
            criteria.attributes.gamingSupport
          );
        }
        if (criteria.attributes.nvidiaSupport !== undefined) {
          context.requiredNvidiaSupport = Math.max(
            context.requiredNvidiaSupport || 0,
            criteria.attributes.nvidiaSupport
          );
        }
        if (criteria.attributes.stability) {
          context.preferredStability = criteria.attributes.stability;
        }
        if (criteria.attributes.customizationLevel !== undefined) {
          context.preferredCustomizationLevel = criteria.attributes.customizationLevel;
        }
        if (criteria.attributes.installDifficulty !== undefined) {
          context.maxInstallDifficulty = criteria.attributes.installDifficulty;
        }
      }
    });
  });

  return context;
}

/**
 * Score a single distro against the scoring context
 */
function scoreDistro(
  distro: Distro,
  context: ScoringContext,
  answers: AnswerMap
): ScoringResult {
  let score = 0;
  const matchReasons: string[] = [];
  const breakdown = {
    categoryMatch: 0,
    technicalMatch: 0,
    userLevelMatch: 0,
    featureMatch: 0,
  };

  // Category matching (OR logic - any category match scores)
  const categoryMatches = distro.categories.filter((cat) =>
    context.preferredCategories.includes(cat)
  );
  if (categoryMatches.length > 0) {
    const categoryScore = categoryMatches.length * scoringWeights.categoryMatch;
    breakdown.categoryMatch = categoryScore;
    score += categoryScore;
    matchReasons.push(
      `Excellent for ${categoryMatches.join(', ').replace(/_/g, ' ')}`
    );
  }

  // Base distro matching
  if (context.preferredBaseDistros.includes(distro.baseDistro)) {
    const baseScore = scoringWeights.baseDistroMatch;
    breakdown.technicalMatch += baseScore;
    score += baseScore;
    matchReasons.push(`Based on ${distro.baseDistro}`);
  }

  // Desktop environment matching
  const desktopMatches = [
    ...distro.defaultDesktops,
    ...distro.supportedDesktops,
  ].filter((de) => context.preferredDesktops.includes(de));

  if (desktopMatches.length > 0) {
    const desktopScore = Math.min(desktopMatches.length * scoringWeights.desktopMatch, scoringWeights.desktopMatch * 2);
    breakdown.technicalMatch += desktopScore;
    score += desktopScore;
  }

  // User level matching
  if (context.targetUserLevel) {
    if (distro.targetUser === context.targetUserLevel) {
      breakdown.userLevelMatch = scoringWeights.userLevelExactMatch;
      score += scoringWeights.userLevelExactMatch;
      matchReasons.push(`Perfect for ${context.targetUserLevel} users`);
    } else if (isAdjacentUserLevel(distro.targetUser, context.targetUserLevel)) {
      breakdown.userLevelMatch = scoringWeights.userLevelCloseMatch;
      score += scoringWeights.userLevelCloseMatch;
    }
  }

  // Install difficulty check (penalty if too hard)
  if (context.maxInstallDifficulty && distro.installDifficulty > context.maxInstallDifficulty + 1) {
    score += scoringPenalties.installTooHard;
    breakdown.userLevelMatch += scoringPenalties.installTooHard;
  }

  // Gaming support
  if (context.requiredGamingSupport) {
    if (distro.gamingSupport >= context.requiredGamingSupport) {
      const gamingScore = scoringWeights.attributes.gamingSupport;
      breakdown.featureMatch += gamingScore;
      score += gamingScore;
      if (distro.gamingSupport >= 4) {
        matchReasons.push('Excellent gaming support');
      }
    } else if (context.requiredGamingSupport >= 4 && distro.gamingSupport < 3) {
      score += scoringPenalties.inadequateGamingSupport;
      breakdown.featureMatch += scoringPenalties.inadequateGamingSupport;
    }
  }

  // NVIDIA support
  if (context.requiredNvidiaSupport && distro.nvidiaSupport >= context.requiredNvidiaSupport) {
    const nvidiaScore = scoringWeights.attributes.nvidiaSupport;
    breakdown.featureMatch += nvidiaScore;
    score += nvidiaScore;
    matchReasons.push('Great NVIDIA support');
  }

  // Stability matching
  if (context.preferredStability && distro.stability === context.preferredStability) {
    const stabilityScore = scoringWeights.attributes.stability;
    breakdown.technicalMatch += stabilityScore;
    score += stabilityScore;
  } else if (context.preferredStability && distro.stability !== context.preferredStability) {
    score += scoringPenalties.stabilityMismatch;
    breakdown.technicalMatch += scoringPenalties.stabilityMismatch;
  }

  // Customization level
  if (context.preferredCustomizationLevel && distro.customizationLevel >= context.preferredCustomizationLevel) {
    const customScore = scoringWeights.attributes.customizationLevel;
    breakdown.featureMatch += customScore;
    score += customScore;
    if (distro.customizationLevel >= 4) {
      matchReasons.push('Highly customizable');
    }
  }

  // Add popularity boost (small influence)
  if (distro.popularity) {
    score += distro.popularity * 0.5;
  }

  // Normalize score to 0-100 range
  const maxPossibleScore = 150; // Approximate max based on weights
  const normalizedScore = Math.max(0, Math.min(100, (score / maxPossibleScore) * 100));

  // Limit match reasons to top 3
  const limitedReasons = matchReasons.slice(0, 3);

  return {
    distro,
    score: Math.round(normalizedScore),
    matchReasons: limitedReasons,
    breakdown,
  };
}

/**
 * Check if two user levels are adjacent
 */
function isAdjacentUserLevel(level1: string, level2: string): boolean {
  const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
  const index1 = levels.indexOf(level1);
  const index2 = levels.indexOf(level2);

  if (index1 === -1 || index2 === -1) return false;

  return Math.abs(index1 - index2) === 1;
}
