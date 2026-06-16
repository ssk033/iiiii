import { splitForHighlight } from '@/lib/searchNotes';

type HighlightTextProps = {
  text: string;
  query: string;
  className?: string;
};

/** Renders text with search-query matches highlighted */
export function HighlightText({ text, query, className = '' }: HighlightTextProps) {
  const parts = splitForHighlight(text, query);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.match ? (
          <mark
            key={i}
            className="rounded-sm bg-[var(--accent-muted)] px-0.5 text-[var(--accent)]"
          >
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </span>
  );
}
