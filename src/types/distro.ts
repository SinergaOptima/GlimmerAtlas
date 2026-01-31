/**
 * Core Distro Type Definitions
 */

export type BaseDistro =
  | 'debian'
  | 'ubuntu'
  | 'fedora'
  | 'rhel'
  | 'arch'
  | 'gentoo'
  | 'slackware'
  | 'independent';

export type ReleaseModel =
  | 'rolling'
  | 'fixed'
  | 'lts'
  | 'hybrid';

export type Desktop =
  | 'gnome'
  | 'kde'
  | 'xfce'
  | 'cinnamon'
  | 'mate'
  | 'lxde'
  | 'lxqt'
  | 'budgie'
  | 'pantheon'
  | 'deepin'
  | 'i3'
  | 'sway'
  | 'hyprland'
  | 'bspwm'
  | 'awesome'
  | 'none';

export type Category =
  | 'gaming'
  | 'development'
  | 'server'
  | 'security'
  | 'privacy'
  | 'pentesting'
  | 'daily'
  | 'lightweight'
  | 'aesthetic'
  | 'multimedia'
  | 'education';

export type UserLevel =
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'expert';

export type Stability =
  | 'bleeding-edge'
  | 'stable'
  | 'ultra-stable';

export interface Distro {
  id: string;                      // URL-safe slug (e.g., "ubuntu")
  name: string;                    // Display name
  tagline?: string;                // Short description

  // Lineage
  baseDistro: BaseDistro;
  lineage: string[];               // e.g., ['debian', 'ubuntu'] for Mint

  // Release Info
  releaseModel: ReleaseModel;

  // Desktop Environments
  defaultDesktops: Desktop[];      // Primary DEs
  supportedDesktops: Desktop[];    // All supported DEs

  // Categories & Usage
  categories: Category[];
  targetUser: UserLevel;

  // Technical Specs (1-5 scale)
  installDifficulty: number;       // 1 = easy, 5 = difficult
  stability: Stability;
  packageManager: string[];        // e.g., ['apt', 'snap']

  // Support Features (1-5 scale)
  gamingSupport: number;           // 1 = poor, 5 = excellent
  nvidiaSupport: number;
  customizationLevel: number;
  securityFocus: number;

  // Content
  pros: string[];
  cons: string[];
  description: string;             // Full description

  // Links
  website: string;
  docs?: string;
  downloadUrl?: string;

  // Metadata
  logo?: string;                   // Path to logo in /public/logos/
  popularity?: number;             // Optional ranking boost
}
