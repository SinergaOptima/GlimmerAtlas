import type { Distro } from '@/types';
import { ExternalLink, Book, Download } from 'lucide-react';

interface DistroLinksProps {
  distro: Distro;
}

export function DistroLinks({ distro }: DistroLinksProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={distro.website}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary gap-2"
      >
        <ExternalLink className="w-4 h-4" />
        Official Website
      </a>

      {distro.docs && (
        <a
          href={distro.docs}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary gap-2"
        >
          <Book className="w-4 h-4" />
          Documentation
        </a>
      )}

      {distro.downloadUrl && (
        <a
          href={distro.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary gap-2"
        >
          <Download className="w-4 h-4" />
          Download
        </a>
      )}
    </div>
  );
}
