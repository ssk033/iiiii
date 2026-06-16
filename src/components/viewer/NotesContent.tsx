import type { RefObject } from 'react';
import type { MajorSection } from '@/types/notes';
import { SectionAccordion } from './SectionAccordion';

type NotesContentProps = {
  scrollRef?: RefObject<HTMLElement | null>;
  sections: MajorSection[];
  expandedSections: Set<string>;
  onToggleSection: (id: string) => void;
  searchQuery: string;
  hasResults: boolean;
};

/** Scrollable main panel — renders filtered accordion sections */
export function NotesContent({
  scrollRef,
  sections,
  expandedSections,
  onToggleSection,
  searchQuery,
  hasResults,
}: NotesContentProps) {
  if (!hasResults) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <p className="text-lg font-medium text-[var(--text-primary)]">No results found</p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Try a different search term or clear the filter
        </p>
      </div>
    );
  }

  return (
    <main
      ref={scrollRef as RefObject<HTMLElement>}
      className="notes-content flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6"
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {sections.map((section) => (
          <SectionAccordion
            key={section.id}
            section={section}
            expanded={expandedSections.has(section.id)}
            onToggle={() => onToggleSection(section.id)}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </main>
  );
}
