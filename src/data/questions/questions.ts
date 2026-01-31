import type { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 'experience-level',
    type: 'single-choice',
    text: 'How would you describe your Linux experience?',
    subtitle: 'Be honest - there\'s no wrong answer',
    options: [
      {
        id: 'beginner',
        label: 'Beginner',
        description: 'New to Linux or command line',
      },
      {
        id: 'intermediate',
        label: 'Intermediate',
        description: 'Comfortable with terminal basics',
      },
      {
        id: 'advanced',
        label: 'Advanced',
        description: 'Can compile from source, edit configs',
      },
      {
        id: 'expert',
        label: 'Expert',
        description: 'I maintain my own packages',
      },
    ],
    scoringWeight: 25,
    scoringMap: {
      beginner: {
        targetUser: ['beginner'],
        attributes: { installDifficulty: 1 },
      },
      intermediate: {
        targetUser: ['intermediate'],
        attributes: { installDifficulty: 2 },
      },
      advanced: {
        targetUser: ['advanced', 'expert'],
        attributes: { installDifficulty: 4 },
      },
      expert: {
        targetUser: ['expert'],
        attributes: { installDifficulty: 5 },
        baseDistros: ['arch', 'gentoo'],
      },
    },
  },
  {
    id: 'primary-use',
    type: 'multi-choice',
    text: 'What will you primarily use this system for?',
    subtitle: 'Select all that apply',
    options: [
      {
        id: 'daily',
        label: 'Daily desktop use',
        description: 'Browsing, email, documents',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        description: 'Steam, native games, Proton',
      },
      {
        id: 'development',
        label: 'Development',
        description: 'Programming, IDEs, containers',
      },
      {
        id: 'multimedia',
        label: 'Creative work',
        description: 'Video editing, music production',
      },
      {
        id: 'server',
        label: 'Server / hosting',
        description: 'Web server, databases, services',
      },
      {
        id: 'security',
        label: 'Security / privacy',
        description: 'Hardened system, minimal tracking',
      },
    ],
    scoringWeight: 20,
    scoringMap: {
      daily: {
        categories: ['daily'],
      },
      gaming: {
        categories: ['gaming'],
        attributes: { gamingSupport: 4, nvidiaSupport: 4 },
      },
      development: {
        categories: ['development'],
      },
      multimedia: {
        categories: ['multimedia'],
      },
      server: {
        categories: ['server'],
        baseDistros: ['debian', 'rhel', 'fedora'],
      },
      security: {
        categories: ['security', 'privacy'],
        attributes: { securityFocus: 4 },
      },
    },
  },
  {
    id: 'desktop-preference',
    type: 'single-choice',
    text: 'What kind of desktop experience do you prefer?',
    subtitle: 'This affects the desktop environment',
    options: [
      {
        id: 'modern',
        label: 'Modern & polished',
        description: 'GNOME, KDE Plasma - beautiful defaults',
      },
      {
        id: 'traditional',
        label: 'Traditional & familiar',
        description: 'XFCE, Cinnamon, MATE - Windows-like',
      },
      {
        id: 'minimal',
        label: 'Minimal & keyboard-driven',
        description: 'i3, Sway, Hyprland - tiling WMs',
      },
      {
        id: 'aesthetic',
        label: 'Highly customizable',
        description: 'I want to rice my desktop',
      },
    ],
    scoringWeight: 15,
    scoringMap: {
      modern: {
        desktops: ['gnome', 'kde', 'budgie', 'pantheon'],
      },
      traditional: {
        desktops: ['xfce', 'cinnamon', 'mate', 'lxqt'],
      },
      minimal: {
        desktops: ['i3', 'sway', 'hyprland', 'bspwm', 'awesome'],
        targetUser: ['advanced', 'expert'],
        categories: ['aesthetic'],
      },
      aesthetic: {
        categories: ['aesthetic'],
        attributes: { customizationLevel: 4 },
        desktops: ['kde', 'i3', 'hyprland', 'bspwm'],
      },
    },
  },
  {
    id: 'stability-vs-cutting-edge',
    type: 'single-choice',
    text: 'What matters more to you?',
    subtitle: 'Consider your tolerance for occasional issues',
    options: [
      {
        id: 'ultra-stable',
        label: 'Rock-solid stability',
        description: 'Older packages, fewer updates, minimal breakage',
      },
      {
        id: 'balanced',
        label: 'Balanced approach',
        description: 'Reasonably current, occasional updates',
      },
      {
        id: 'cutting-edge',
        label: 'Latest software',
        description: 'Bleeding edge, frequent updates, some bugs',
      },
    ],
    scoringWeight: 18,
    scoringMap: {
      'ultra-stable': {
        attributes: { stability: 'ultra-stable' },
        baseDistros: ['debian', 'rhel'],
      },
      balanced: {
        attributes: { stability: 'stable' },
        baseDistros: ['ubuntu', 'fedora'],
      },
      'cutting-edge': {
        attributes: { stability: 'bleeding-edge' },
        baseDistros: ['arch', 'fedora'],
      },
    },
  },
  {
    id: 'hardware-age',
    type: 'single-choice',
    text: 'How old is your hardware?',
    subtitle: 'This affects performance recommendations',
    options: [
      {
        id: 'modern',
        label: 'Modern (< 3 years)',
        description: 'Latest hardware, plenty of RAM',
      },
      {
        id: 'mid-range',
        label: 'Mid-range (3-6 years)',
        description: 'Decent specs, 4-8GB RAM',
      },
      {
        id: 'older',
        label: 'Older (> 6 years)',
        description: 'Limited RAM, older CPU',
      },
    ],
    scoringWeight: 12,
    scoringMap: {
      modern: {
        desktops: ['gnome', 'kde', 'deepin'],
      },
      'mid-range': {
        desktops: ['xfce', 'mate', 'budgie', 'cinnamon'],
      },
      older: {
        categories: ['lightweight'],
        desktops: ['lxde', 'lxqt', 'xfce', 'mate', 'i3'],
      },
    },
  },
  {
    id: 'nvidia-gpu',
    type: 'yes-no',
    text: 'Do you have an NVIDIA GPU?',
    subtitle: 'Some distros handle NVIDIA drivers better',
    scoringWeight: 10,
    scoringMap: {
      yes: {
        attributes: { nvidiaSupport: 4 },
      },
      no: {},
    },
  },
  {
    id: 'gaming-importance',
    type: 'single-choice',
    text: 'How important is gaming to you?',
    options: [
      {
        id: 'not-important',
        label: 'Not important',
        description: 'I don\'t game on this machine',
      },
      {
        id: 'casual',
        label: 'Casual gaming',
        description: 'Occasional Steam games, indie titles',
      },
      {
        id: 'serious',
        label: 'Serious gaming',
        description: 'Latest AAA games, high FPS',
      },
    ],
    scoringWeight: 15,
    scoringMap: {
      'not-important': {},
      casual: {
        categories: ['gaming'],
        attributes: { gamingSupport: 3 },
      },
      serious: {
        categories: ['gaming'],
        attributes: { gamingSupport: 5, nvidiaSupport: 5 },
      },
    },
    skipCondition: (answers) => {
      // Skip if they already selected gaming as primary use
      const primaryUse = answers['primary-use']?.value;
      return Array.isArray(primaryUse) && primaryUse.includes('gaming');
    },
  },
  {
    id: 'package-management',
    type: 'single-choice',
    text: 'How do you prefer to install software?',
    subtitle: 'Different distros use different package managers',
    options: [
      {
        id: 'gui',
        label: 'Graphical app store',
        description: 'Point and click, like a smartphone',
      },
      {
        id: 'both',
        label: 'Both GUI and terminal',
        description: 'Comfortable with either',
      },
      {
        id: 'terminal',
        label: 'Command line',
        description: 'I prefer terminal package management',
      },
    ],
    scoringWeight: 8,
    scoringMap: {
      gui: {
        targetUser: ['beginner'],
      },
      both: {
        targetUser: ['intermediate'],
      },
      terminal: {
        targetUser: ['advanced', 'expert'],
      },
    },
  },
  {
    id: 'customization',
    type: 'single-choice',
    text: 'How much do you want to customize your system?',
    options: [
      {
        id: 'works-ootb',
        label: 'Minimal - just works',
        description: 'I want good defaults, minimal tweaking',
      },
      {
        id: 'some',
        label: 'Some customization',
        description: 'Tweak themes, change wallpapers',
      },
      {
        id: 'extensive',
        label: 'Extensive ricing',
        description: 'I want complete control over every detail',
      },
    ],
    scoringWeight: 10,
    scoringMap: {
      'works-ootb': {
        targetUser: ['beginner'],
      },
      some: {
        attributes: { customizationLevel: 3 },
      },
      extensive: {
        categories: ['aesthetic'],
        attributes: { customizationLevel: 5 },
        baseDistros: ['arch', 'gentoo'],
        targetUser: ['advanced', 'expert'],
      },
    },
  },
  {
    id: 'release-model',
    type: 'single-choice',
    text: 'How often do you want major system updates?',
    subtitle: 'This affects the release model',
    options: [
      {
        id: 'lts',
        label: 'Rarely (LTS)',
        description: 'Major updates every 2-3 years, security only',
      },
      {
        id: 'fixed',
        label: 'Periodically (6-12 months)',
        description: 'Scheduled releases with new features',
      },
      {
        id: 'rolling',
        label: 'Continuously',
        description: 'Always on latest, no version upgrades',
      },
    ],
    scoringWeight: 12,
    scoringMap: {
      lts: {
        attributes: { stability: 'ultra-stable' },
      },
      fixed: {
        attributes: { stability: 'stable' },
      },
      rolling: {
        attributes: { stability: 'bleeding-edge' },
        baseDistros: ['arch'],
        targetUser: ['intermediate', 'advanced', 'expert'],
      },
    },
  },
];
