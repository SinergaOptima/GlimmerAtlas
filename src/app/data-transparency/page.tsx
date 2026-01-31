import { Container } from '@/components/layout/Container';
import { GlassCard } from '@/components/shared/GlassCard';

export const metadata = {
  title: 'Data Transparency',
  description: 'Learn about our scoring methodology and how we evaluate Linux distributions.',
};

export default function DataTransparencyPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="text-gradient">Data Transparency</span>
            </h1>
            <p className="text-xl text-text-muted">
              How we score and recommend Linux distributions
            </p>
          </div>

          <GlassCard className="p-8 space-y-6">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Our Methodology</h2>
              <p className="text-text-muted leading-relaxed">
                GlimmerAtlas uses a weighted scoring algorithm to match users with Linux distributions.
                We don&apos;t have partnerships with distribution maintainers, and we don&apos;t receive
                compensation for recommendations. Our only goal is to help you find the right distribution.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Scoring Weights</h2>
              <p className="text-text-muted mb-4">
                Each factor in our questionnaire contributes to the final score with different weights:
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">User Level Match (exact)</span>
                  <span className="text-lavender font-semibold">+25 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Base Distro Preference</span>
                  <span className="text-lavender font-semibold">+20 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Category Match (per category)</span>
                  <span className="text-lavender font-semibold">+15 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Gaming Support</span>
                  <span className="text-lavender font-semibold">+12 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Stability Match</span>
                  <span className="text-lavender font-semibold">+12 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Desktop Environment (per match)</span>
                  <span className="text-lavender font-semibold">+10 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">NVIDIA Support</span>
                  <span className="text-lavender font-semibold">+10 points</span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Penalties</h2>
              <p className="text-text-muted mb-4">
                Some mismatches result in score penalties to avoid poor recommendations:
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Install Too Difficult for User Level</span>
                  <span className="text-red font-semibold">-30 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Inadequate Gaming Support</span>
                  <span className="text-red font-semibold">-20 points</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-0/30 rounded">
                  <span className="text-text-muted">Stability Mismatch</span>
                  <span className="text-red font-semibold">-15 points</span>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Data Sources</h2>
              <p className="text-text-muted leading-relaxed">
                Distribution data is manually curated from official sources including:
              </p>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-lavender mt-1">•</span>
                  <span>Official distribution websites and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue mt-1">•</span>
                  <span>Community wikis (ArchWiki, Debian Wiki, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sapphire mt-1">•</span>
                  <span>Release notes and changelogs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Community feedback and testing</span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Bias & Limitations</h2>
              <p className="text-text-muted leading-relaxed">
                We acknowledge several limitations in our current approach:
              </p>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-yellow mt-1">⚠</span>
                  <span>
                    <strong className="text-text">Coverage:</strong> We can&apos;t cover all 300+ distributions.
                    We focus on popular, actively maintained distros.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow mt-1">⚠</span>
                  <span>
                    <strong className="text-text">Subjectivity:</strong> Ratings like &quot;gaming support&quot;
                    are somewhat subjective and based on community consensus.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow mt-1">⚠</span>
                  <span>
                    <strong className="text-text">Freshness:</strong> Distribution features change over time.
                    We update data regularly but can&apos;t guarantee real-time accuracy.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-text">Contributing</h2>
              <p className="text-text-muted leading-relaxed">
                If you notice outdated information or want to suggest a distribution to add,
                please open an issue or pull request on our GitHub repository. All contributions
                are reviewed for accuracy and neutrality.
              </p>
            </section>
          </GlassCard>
        </div>
      </Container>
    </div>
  );
}
