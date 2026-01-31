/**
 * Scoring weights configuration
 * These values determine how much each factor contributes to the final score
 */

export const scoringWeights = {
  // Category match (primary use case alignment)
  categoryMatch: 15,

  // Base distro preference
  baseDistroMatch: 20,

  // Desktop environment match
  desktopMatch: 10,

  // User level / experience match (exact match gets full points)
  userLevelExactMatch: 25,
  userLevelCloseMatch: 15,  // Adjacent level (e.g., intermediate for beginner)

  // Attribute bonuses (for specific features)
  attributes: {
    gamingSupport: 12,
    nvidiaSupport: 10,
    installDifficulty: 8,
    customizationLevel: 8,
    securityFocus: 10,
    stability: 12,
  },
} as const;

/**
 * Penalty for mismatches
 * Applied when a distro explicitly doesn't match requirements
 */
export const scoringPenalties = {
  // Penalty if install difficulty is too high for user level
  installTooHard: -30,

  // Penalty if stability doesn't match preference
  stabilityMismatch: -15,

  // Penalty if gaming support requested but distro has low support
  inadequateGamingSupport: -20,
} as const;
