import { Container } from '@/components/layout/Container';
import { GlassCard } from '@/components/shared/GlassCard';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'About',
  description: 'Learn about GlimmerAtlas and our mission to help users find their perfect Linux distribution.',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="text-gradient">About {siteConfig.name}</span>
            </h1>
            <p className="text-xl text-text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <GlassCard className="p-8 space-y-6">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Our Philosophy</h2>
              <p className="text-text-muted leading-relaxed">
                Choosing a Linux distribution can be overwhelming. With hundreds of options available,
                each with its own philosophy, package management, and desktop environment, finding the
                right fit requires careful consideration.
              </p>
              <p className="text-text-muted leading-relaxed">
                GlimmerAtlas was built to simplify this journey. We believe in calm, thoughtful design
                that prioritizes clarity over complexity. Our questionnaire and filtering system helps
                you discover distributions that truly match your needs, experience level, and preferences.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Design Principles</h2>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-lavender mt-1">•</span>
                  <span><strong className="text-text">Calm aesthetics:</strong> Inspired by the Catppuccin theme and charm.land tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-1">•</span>
                  <span><strong className="text-text">Thoughtful recommendations:</strong> Weighted scoring based on your actual needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sapphire mt-1">•</span>
                  <span><strong className="text-text">Transparency:</strong> Clear explanations of why each distro matches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span><strong className="text-text">Accessibility:</strong> Fully keyboard navigable, semantic HTML</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green mt-1">•</span>
                  <span><strong className="text-text">Performance:</strong> Server-first rendering, minimal JavaScript</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lavender">Guided Questionnaire</h3>
                  <p className="text-sm text-text-muted">
                    Answer 8-12 thoughtful questions about your experience level, use cases,
                    and preferences to get personalized recommendations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-blue">Advanced Filtering</h3>
                  <p className="text-sm text-text-muted">
                    Browse all distributions and filter by base distro, desktop environment,
                    and usage categories with real-time updates.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sapphire">Side-by-Side Comparison</h3>
                  <p className="text-sm text-text-muted">
                    Compare up to 4 distributions at once with detailed specs, pros, cons,
                    and feature breakdowns.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-teal">Detailed Profiles</h3>
                  <p className="text-sm text-text-muted">
                    Each distribution has a comprehensive profile including philosophy,
                    technical specs, and honest trade-offs.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Part of Glimmer</h2>
              <p className="text-text-muted leading-relaxed">
                GlimmerAtlas is part of the Glimmer ecosystem, a collection of thoughtfully designed
                tools for developers and Linux enthusiasts. We share a commitment to calm aesthetics,
                performance, and exceptional user experience.
              </p>
            </section>
          </GlassCard>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-text">Open Source</h2>
            <p className="text-text-muted">
              GlimmerAtlas is open source and community-driven. Contributions are welcome.
            </p>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
