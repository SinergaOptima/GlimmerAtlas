/**
 * Central distro data export
 * Total: 76 Linux distributions
 */

// Original distros (16)
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

// Ubuntu flavors (5)
import { kubuntu } from './kubuntu';
import { xubuntu } from './xubuntu';
import { lubuntu } from './lubuntu';
import { ubuntuMate } from './ubuntu-mate';
import { ubuntuBudgie } from './ubuntu-budgie';

// Arch-based (4)
import { arcolinux } from './arcolinux';
import { artix } from './artix';
import { cachyos } from './cachyos';
import { crystalLinux } from './crystal-linux';

// Gaming-focused (3)
import { bazzite } from './bazzite';
import { chimeraos } from './chimeraos';
import { draugerOS } from './drauger-os';

// Privacy & Security (5)
import { tails } from './tails';
import { qubesOS } from './qubes-os';
import { whonix } from './whonix';
import { parrotSecurity } from './parrot-security';
import { blackarch } from './blackarch';

// Lightweight (4)
import { puppyLinux } from './puppy-linux';
import { antiX } from './antix';
import { bodhiLinux } from './bodhi-linux';
import { q4OS } from './q4os';

// Immutable/Atomic (4)
import { fedoraSilverblue } from './fedora-silverblue';
import { fedoraKinoite } from './fedora-kinoite';
import { vanillaOS } from './vanillaos';
import { blendOS } from './blendos';

// RHEL-based & Enterprise (4)
import { almaLinux } from './almalinux';
import { rockyLinux } from './rocky-linux';
import { centOSStream } from './centos-stream';
import { oracleLinux } from './oracle-linux';

// Other Debian-based (5)
import { lmde } from './lmde';
import { deepin } from './deepin';
import { peppermintOS } from './peppermint-os';
import { sparkyLinux } from './sparky-linux';
import { linuxLite } from './linux-lite';

// Independent & Innovative (6)
import { nixOS } from './nixos';
import { voidLinux } from './void-linux';
import { gentoo } from './gentoo';
import { clearLinux } from './clear-linux';
import { mageia } from './mageia';
import { pclinuxOS } from './pclinuxos';

// More Popular & Specialized (6)
import { openSUSETumbleweed } from './opensuse-tumbleweed';
import { nitrux } from './nitrux';
import { bigLinux } from './biglinux';
import { regataOS } from './regata-os';
import { rebornOS } from './rebornos';
import { athenaOS } from './athena-os';

// Final Additions (14)
import { euroLinux } from './eurolinux';
import { porteus } from './porteus';
import { slax } from './slax';
import { kaOS } from './kaos';
import { slackware } from './slackware';
import { alpineLinux } from './alpine-linux';
import { devuan } from './devuan';
import { bluestarLinux } from './bluestar-linux';
import { grml } from './grml';
import { raspberryPiOS } from './raspberry-pi-os';
import { geckoLinux } from './gecko-linux';
import { holoISO } from './holo-iso';
import { archcraft } from './archcraft';
import { tuxedoOS } from './tuxedo-os';

import type { Distro } from '@/types';

export const allDistros: Distro[] = [
  // Original (16)
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

  // Ubuntu flavors (5)
  kubuntu,
  xubuntu,
  lubuntu,
  ubuntuMate,
  ubuntuBudgie,

  // Arch-based (4)
  arcolinux,
  artix,
  cachyos,
  crystalLinux,

  // Gaming-focused (3)
  bazzite,
  chimeraos,
  draugerOS,

  // Privacy & Security (5)
  tails,
  qubesOS,
  whonix,
  parrotSecurity,
  blackarch,

  // Lightweight (4)
  puppyLinux,
  antiX,
  bodhiLinux,
  q4OS,

  // Immutable/Atomic (4)
  fedoraSilverblue,
  fedoraKinoite,
  vanillaOS,
  blendOS,

  // RHEL-based & Enterprise (4)
  almaLinux,
  rockyLinux,
  centOSStream,
  oracleLinux,

  // Other Debian-based (5)
  lmde,
  deepin,
  peppermintOS,
  sparkyLinux,
  linuxLite,

  // Independent & Innovative (6)
  nixOS,
  voidLinux,
  gentoo,
  clearLinux,
  mageia,
  pclinuxOS,

  // More Popular & Specialized (6)
  openSUSETumbleweed,
  nitrux,
  bigLinux,
  regataOS,
  rebornOS,
  athenaOS,

  // Final Additions (14)
  euroLinux,
  porteus,
  slax,
  kaOS,
  slackware,
  alpineLinux,
  devuan,
  bluestarLinux,
  grml,
  raspberryPiOS,
  geckoLinux,
  holoISO,
  archcraft,
  tuxedoOS,
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
  // Original
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
  // Ubuntu flavors
  kubuntu,
  xubuntu,
  lubuntu,
  ubuntuMate,
  ubuntuBudgie,
  // Arch-based
  arcolinux,
  artix,
  cachyos,
  crystalLinux,
  // Gaming
  bazzite,
  chimeraos,
  draugerOS,
  // Privacy & Security
  tails,
  qubesOS,
  whonix,
  parrotSecurity,
  blackarch,
  // Lightweight
  puppyLinux,
  antiX,
  bodhiLinux,
  q4OS,
  // Immutable
  fedoraSilverblue,
  fedoraKinoite,
  vanillaOS,
  blendOS,
  // RHEL-based
  almaLinux,
  rockyLinux,
  centOSStream,
  oracleLinux,
  // Other Debian
  lmde,
  deepin,
  peppermintOS,
  sparkyLinux,
  linuxLite,
  // Independent
  nixOS,
  voidLinux,
  gentoo,
  clearLinux,
  mageia,
  pclinuxOS,
  // Specialized
  openSUSETumbleweed,
  nitrux,
  bigLinux,
  regataOS,
  rebornOS,
  athenaOS,
  // Final additions
  euroLinux,
  porteus,
  slax,
  kaOS,
  slackware,
  alpineLinux,
  devuan,
  bluestarLinux,
  grml,
  raspberryPiOS,
  geckoLinux,
  holoISO,
  archcraft,
  tuxedoOS,
};
