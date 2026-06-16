import { IconChevronDown } from '@tabler/icons-react';
import type { MajorSection } from '@/types/notes';
import { ContentRenderer } from './ContentRenderer';
import { HighlightText } from '@/components/ui/HighlightText';

type SectionAccordionProps = {
  section: MajorSection;
  expanded: boolean;
  onToggle: () => void;
  searchQuery: string;
};

/** Collapsible major section containing subsections */
export function SectionAccordion({
  section,
  expanded,
  onToggle,
  searchQuery,
}: SectionAccordionProps) {
  return (
    <section id={section.id} className="accordion-section scroll-mt-4">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="accordion-trigger flex w-full items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3.5 text-left transition-all hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        <IconChevronDown
          size={18}
          stroke={1.75}
          className={`shrink-0 text-[var(--accent)] transition-transform duration-200 ${expanded ? 'rotate-0' : '-rotate-90'}`}
        />
        <span className="text-base font-semibold text-[var(--text-primary)]">
          <HighlightText text={section.title} query={searchQuery} />
        </span>
        <span className="ml-auto rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--text-muted)]">
          {section.subsections.length}
        </span>
      </button>

      <div
        className={`accordion-panel grid transition-[grid-template-rows] duration-300 ease-in-out ${
          expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-6 px-1 pb-2 pt-4">
            {section.subsections.map((sub) => (
              <article
                key={sub.id}
                id={sub.id}
                className="subsection scroll-mt-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
              >
                <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
                  <HighlightText text={sub.title} query={searchQuery} />
                </h3>
                <ContentRenderer blocks={sub.blocks} searchQuery={searchQuery} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
