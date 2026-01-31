/**
 * Filter Type Definitions
 */

import type { BaseDistro, Category, Desktop, ReleaseModel, UserLevel } from './distro';

export interface FilterState {
  baseDistros: BaseDistro[];
  desktops: Desktop[];
  categories: Category[];
  userLevel?: UserLevel;
  releaseModel?: ReleaseModel[];
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;  // Number of distros matching this filter
}

export interface FilterConfig {
  id: keyof FilterState;
  label: string;
  type: 'multi-select' | 'single-select';
  options: FilterOption[];
}
