import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { DistroHeader } from '@/components/distro/DistroHeader';
import { DistroSpecs } from '@/components/distro/DistroSpecs';
import { DistroProsCons } from '@/components/distro/DistroProsCons';
import { DistroLinks } from '@/components/distro/DistroLinks';
import { allDistros, getDistroById, getAllDistroIds } from '@/data/distros';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface DistroPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all distros
export async function generateStaticParams() {
  return getAllDistroIds().map((id) => ({
    slug: id,
  }));
}

// Generate metadata for each distro page
export async function generateMetadata({ params }: DistroPageProps) {
  const { slug } = await params;
  const distro = getDistroById(slug);

  if (!distro) {
    return {
      title: 'Distribution Not Found',
    };
  }

  return {
    title: distro.name,
    description: distro.tagline || distro.description,
  };
}

export default async function DistroPage({ params }: DistroPageProps) {
  const { slug } = await params;
  const distro = getDistroById(slug);

  if (!distro) {
    notFound();
  }

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Back link */}
          <Link
            href="/browse"
            className="inline-flex items-center text-text-muted hover:text-text transition-colors"
          >
            ← Back to browse
          </Link>

          {/* Header */}
          <DistroHeader distro={distro} />

          {/* Categories */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wide">
              Use Cases
            </h3>
            <div className="flex flex-wrap gap-2">
              {distro.categories.map((category) => (
                <Badge key={category} variant="outline" className="font-mono">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <DistroLinks distro={distro} />

          {/* Specs */}
          <DistroSpecs distro={distro} />

          {/* Pros & Cons */}
          <DistroProsCons distro={distro} />

          {/* Related / Similar Distros */}
          <div className="pt-8 border-t border-surface-1/50">
            <h2 className="text-2xl font-semibold text-text mb-4">
              Similar Distributions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {allDistros
                .filter((d) => d.id !== distro.id && d.baseDistro === distro.baseDistro)
                .slice(0, 3)
                .map((similar) => (
                  <Link
                    key={similar.id}
                    href={`/distro/${similar.id}`}
                    className="glass-card p-4 hover:shadow-glow-md transition-all"
                  >
                    <h3 className="font-semibold text-text">{similar.name}</h3>
                    <p className="text-sm text-text-muted mt-1 line-clamp-2">
                      {similar.tagline}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
