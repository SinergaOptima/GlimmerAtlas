import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-lavender">
              {siteConfig.name}
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl">
              {siteConfig.tagline}
            </p>
            <p className="text-text-muted max-w-xl">
              A calm, thoughtful tool to help you discover the perfect Linux distribution
              for your needs. Answer a few questions or browse our curated collection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/questionnaire" className="btn-primary-lg
                focus-visible:ring-offset-2 focus-visible:ring-offset-base">
                Start Questionnaire
              </Link>
              <Link href="/browse" className="btn-secondary-lg
                focus-visible:ring-offset-2 focus-visible:ring-offset-base">
                Browse Distros
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 border-t border-surface-1/50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 space-y-3">
              <h3 className="text-xl font-semibold text-lavender">Guided Discovery</h3>
              <p className="text-text-muted text-sm">
                Answer a thoughtful questionnaire designed to understand your needs,
                experience level, and preferences.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h3 className="text-xl font-semibold text-blue">Advanced Filtering</h3>
              <p className="text-text-muted text-sm">
                Browse and filter distributions by base distro, desktop environment,
                use case, and more.
              </p>
            </div>

            <div className="glass-card p-6 space-y-3">
              <h3 className="text-xl font-semibold text-sapphire">Side-by-Side Comparison</h3>
              <p className="text-text-muted text-sm">
                Compare up to 4 distributions at once with detailed specs, pros, cons,
                and compatibility information.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <Container>
          <div className="text-center space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Not sure where to start?</h2>
            <p className="text-text-muted">
              Our questionnaire takes just a few minutes and provides personalized recommendations.
            </p>
            <Link href="/questionnaire" className="btn-primary-lg inline-block mt-4
              focus-visible:ring-offset-2 focus-visible:ring-offset-base">
              Get Started
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
