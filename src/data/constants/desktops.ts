import type { Desktop } from '@/types';

export const DESKTOPS: { value: Desktop; label: string; description: string }[] = [
  {
    value: 'gnome',
    label: 'GNOME',
    description: 'Modern, clean desktop with great accessibility',
  },
  {
    value: 'kde',
    label: 'KDE Plasma',
    description: 'Highly customizable with beautiful visuals',
  },
  {
    value: 'xfce',
    label: 'XFCE',
    description: 'Lightweight and fast traditional desktop',
  },
  {
    value: 'cinnamon',
    label: 'Cinnamon',
    description: 'Elegant and traditional desktop experience',
  },
  {
    value: 'mate',
    label: 'MATE',
    description: 'Classic GNOME 2 desktop continued',
  },
  {
    value: 'lxde',
    label: 'LXDE',
    description: 'Extremely lightweight desktop environment',
  },
  {
    value: 'lxqt',
    label: 'LXQt',
    description: 'Qt-based lightweight desktop',
  },
  {
    value: 'budgie',
    label: 'Budgie',
    description: 'Modern and elegant desktop',
  },
  {
    value: 'pantheon',
    label: 'Pantheon',
    description: 'Beautiful macOS-inspired desktop',
  },
  {
    value: 'deepin',
    label: 'Deepin DE',
    description: 'Gorgeous, polished desktop environment',
  },
  {
    value: 'i3',
    label: 'i3',
    description: 'Tiling window manager for power users',
  },
  {
    value: 'sway',
    label: 'Sway',
    description: 'i3-compatible Wayland compositor',
  },
  {
    value: 'hyprland',
    label: 'Hyprland',
    description: 'Modern, dynamic tiling Wayland compositor',
  },
  {
    value: 'bspwm',
    label: 'bspwm',
    description: 'Minimalist tiling window manager',
  },
  {
    value: 'awesome',
    label: 'Awesome WM',
    description: 'Highly configurable tiling window manager',
  },
  {
    value: 'none',
    label: 'None / Custom',
    description: 'No default DE, bring your own',
  },
];
