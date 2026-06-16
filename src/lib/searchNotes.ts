import type { MajorSection } from '@/types/notes';

export type FilteredNotes = {
  sections: MajorSection[];
  hasResults: boolean;
  matchCount: number;
};

/**
 * Filters sections/subsections by query (case-insensitive).
 * Empty query returns the full document.
 */
export function filterNotes(sections: MajorSection[], query: string): FilteredNotes {
  const q = query.trim().toLowerCase();
  if (!q) {
    const count = sections.reduce((n, s) => n + s.subsections.length, 0);
    return { sections, hasResults: true, matchCount: count };
  }

  let matchCount = 0;
  const filtered: MajorSection[] = [];

  for (const major of sections) {
    const majorMatches = major.title.toLowerCase().includes(q);
    const matchingSubs = major.subsections.filter(
      (sub) =>
        sub.title.toLowerCase().includes(q) ||
        sub.rawText.toLowerCase().includes(q),
    );

    if (majorMatches || matchingSubs.length > 0) {
      filtered.push({
        ...major,
        subsections: majorMatches ? major.subsections : matchingSubs,
      });
      matchCount += majorMatches ? major.subsections.length : matchingSubs.length;
    }
  }

  return {
    sections: filtered,
    hasResults: filtered.length > 0,
    matchCount,
  };
}

/** Escapes special regex characters in a search string */
export function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Splits text into parts for highlight rendering */
export function splitForHighlight(text: string, query: string): Array<{ text: string; match: boolean }> {
  const q = query.trim();
  if (!q) return [{ text, match: false }];

  const regex = new RegExp(`(${escapeRegex(q)})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part) => ({
    text: part,
    match: part.toLowerCase() === q.toLowerCase(),
  }));
}
