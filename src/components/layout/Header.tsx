import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-1/50 glass-card-light">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
          focus-visible:rounded px-2 py-1 -mx-2 -my-1">
          <span className="font-bold text-xl text-gradient">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            href="/questionnaire"
            className="text-text-muted hover:text-text transition-colors text-sm font-medium
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
              focus-visible:rounded px-2 py-1 -mx-2 -my-1"
          >
            Questionnaire
          </Link>
          <Link
            href="/browse"
            className="text-text-muted hover:text-text transition-colors text-sm font-medium
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
              focus-visible:rounded px-2 py-1 -mx-2 -my-1"
          >
            Browse
          </Link>
          <Link
            href="/compare"
            className="text-text-muted hover:text-text transition-colors text-sm font-medium
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
              focus-visible:rounded px-2 py-1 -mx-2 -my-1"
          >
            Compare
          </Link>
          <Link
            href="/about"
            className="text-text-muted hover:text-text transition-colors text-sm font-medium
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50
              focus-visible:rounded px-2 py-1 -mx-2 -my-1"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
