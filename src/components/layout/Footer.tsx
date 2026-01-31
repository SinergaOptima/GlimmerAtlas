import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-surface-1/50 mt-auto">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-text-muted text-sm">
              {siteConfig.tagline}
            </p>
            <p className="text-text-muted text-xs mt-1">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/data-transparency"
              className="text-text-muted hover:text-text transition-colors text-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
                focus-visible:rounded px-2 py-1"
            >
              Data Transparency
            </Link>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text transition-colors text-sm
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
                focus-visible:rounded px-2 py-1"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-6 text-center md:text-left">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. Part of the Glimmer ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
