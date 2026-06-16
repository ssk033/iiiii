type RawNotesViewProps = {
  content: string;
};

/**
 * Displays pts.txt exactly as written — no parsing, no accordions.
 * Behaves like opening the original text file in a browser.
 */
export function RawNotesView({ content }: RawNotesViewProps) {
  return (
    <div className="raw-notes-view flex-1 overflow-auto px-4 py-5 sm:px-6 sm:py-6">
      <pre
        className="raw-notes-pre mx-auto max-w-4xl overflow-x-auto whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-[var(--text-secondary)]"
        aria-label="Raw notes file contents"
      >
        {content}
      </pre>
    </div>
  );
}
