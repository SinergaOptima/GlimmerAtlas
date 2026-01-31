import type { Category } from '@/types';

export const CATEGORIES: { value: Category; label: string; description: string }[] = [
  {
    value: 'gaming',
    label: 'Gaming',
    description: 'Optimized for gaming with good GPU support and performance',
  },
  {
    value: 'development',
    label: 'Development',
    description: 'Great for programming and software development',
  },
  {
    value: 'server',
    label: 'Server / DevOps',
    description: 'Designed for server environments and infrastructure',
  },
  {
    value: 'security',
    label: 'Security / Privacy',
    description: 'Focused on security hardening and privacy protection',
  },
  {
    value: 'pentesting',
    label: 'Penetration Testing',
    description: 'Pre-loaded with security testing and hacking tools',
  },
  {
    value: 'daily',
    label: 'Daily Desktop',
    description: 'Perfect for everyday computing tasks',
  },
  {
    value: 'lightweight',
    label: 'Lightweight',
    description: 'Low resource usage, ideal for older hardware',
  },
  {
    value: 'aesthetic',
    label: 'Aesthetic / Customization',
    description: 'Beautiful defaults and highly customizable',
  },
  {
    value: 'multimedia',
    label: 'Multimedia',
    description: 'Great for video editing, music production, and creative work',
  },
  {
    value: 'education',
    label: 'Education',
    description: 'Designed for educational institutions and students',
  },
];
