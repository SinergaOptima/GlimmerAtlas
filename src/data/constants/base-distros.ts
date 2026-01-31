import type { BaseDistro } from '@/types';

export const BASE_DISTROS: { value: BaseDistro; label: string; description: string }[] = [
  {
    value: 'debian',
    label: 'Debian',
    description: 'Stable, reliable, and well-tested',
  },
  {
    value: 'ubuntu',
    label: 'Ubuntu',
    description: 'Popular, user-friendly, large community',
  },
  {
    value: 'fedora',
    label: 'Fedora',
    description: 'Cutting-edge, sponsored by Red Hat',
  },
  {
    value: 'rhel',
    label: 'RHEL',
    description: 'Enterprise-grade, commercial support',
  },
  {
    value: 'arch',
    label: 'Arch Linux',
    description: 'Rolling release, minimal, DIY approach',
  },
  {
    value: 'gentoo',
    label: 'Gentoo',
    description: 'Source-based, maximum customization',
  },
  {
    value: 'slackware',
    label: 'Slackware',
    description: 'Oldest distro, simple and stable',
  },
  {
    value: 'independent',
    label: 'Independent',
    description: 'Built from scratch, unique approach',
  },
];
