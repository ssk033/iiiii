import {
  IconWifi,
  IconSearch,
  IconCopy,
  IconShieldLock,
  IconBook2,
} from '@tabler/icons-react';
import { DownloadCenter } from '@/components/resources/DownloadCenter';

type LandingPageProps = {
  onOpenNotes: () => void;
  loading: boolean;
};

const BADGES = [
  { icon: IconWifi, label: 'Offline Ready' },
  { icon: IconSearch, label: 'Fast Search' },
  { icon: IconCopy, label: 'Copy Commands' },
] as const;

/** Glassmorphism dashboard with Quick Notes + Resource Center cards */
export function LandingPage({ onOpenNotes, loading }: LandingPageProps) {
  return (
    <div className="landing relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4 sm:p-8">
      <div className="landing-orb landing-orb-1" aria-hidden="true" />
      <div className="landing-orb landing-orb-2" aria-hidden="true" />
      <div className="landing-orb landing-orb-3" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-4xl animate-fade-in">
        {/* Hero */}
        <header className="mb-8 text-center sm:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--text-muted)]">
            <IconShieldLock size={14} stroke={1.75} className="text-[var(--accent)]" />
            Lab Companion
          </div>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            PTS Quick Notes
          </h1>
          <p className="mx-auto max-w-lg text-base text-[var(--text-secondary)]">
            Penetration Testing &amp; Secure Systems Lab Companion
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {BADGES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]"
              >
                <Icon size={14} stroke={1.75} className="text-[var(--accent)]" />
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* Two-column dashboard: Quick Notes | Resources */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Quick Notes card */}
          <section className="glass-card flex flex-col p-6 sm:p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-muted)] text-[var(--accent)]">
              <IconBook2 size={24} stroke={1.75} />
            </div>
            <h2 className="mb-1 text-lg font-semibold text-[var(--text-primary)]">
              Quick Notes
            </h2>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
              Structured handbook with search, syntax-highlighted commands, and collapsible
              sections for every lab target.
            </p>
            <button
              type="button"
              onClick={onOpenNotes}
              disabled={loading}
              className="cta-button w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-wait disabled:opacity-60"
            >
              {loading ? 'Loading notes…' : 'Open Notes'}
            </button>
          </section>

          {/* Resource Center */}
          <DownloadCenter />
        </div>
      </div>
    </div>
  );
}
