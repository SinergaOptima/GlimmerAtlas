/**
 * Central distro data export
 */

import { ubuntu } from './ubuntu';
import { fedora } from './fedora';
import { arch } from './arch';
import { debian } from './debian';
import { mint } from './mint';
import { popos } from './popos';
import { manjaro } from './manjaro';
import { endeavouros } from './endeavouros';
import { kali } from './kali';
import { elementary } from './elementary';
import { zorin } from './zorin';
import { opensuse } from './opensuse';
import { mxlinux } from './mxlinux';
import { solus } from './solus';
import { garuda } from './garuda';
import { nobara } from './nobara';

import type { Distro } from '@/types';

export const allDistros: Distro[] = [
  ubuntu,
  fedora,
  arch,
  debian,
  mint,
  popos,
  manjaro,
  endeavouros,
  kali,
  elementary,
  zorin,
  opensuse,
  mxlinux,
  solus,
  garuda,
  nobara,
];

// Helper function to get distro by ID
export function getDistroById(id: string): Distro | undefined {
  return allDistros.find((distro) => distro.id === id);
}

// Helper function to get all distro IDs
export function getAllDistroIds(): string[] {
  return allDistros.map((distro) => distro.id);
}

// Export individual distros for direct access if needed
export {
  ubuntu,
  fedora,
  arch,
  debian,
  mint,
  popos,
  manjaro,
  endeavouros,
  kali,
  elementary,
  zorin,
  opensuse,
  mxlinux,
  solus,
  garuda,
  nobara,
};
