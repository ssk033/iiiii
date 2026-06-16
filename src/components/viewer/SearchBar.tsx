import { forwardRef } from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';

type SearchBarProps = {
  query: string;
  onChange: (query: string) => void;
  matchCount?: number;
  hasResults?: boolean;
};

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ query, onChange, matchCount, hasResults = true }, ref) {
    return (
      <div className="search-bar flex flex-col gap-1">
        <div className="relative flex items-center">
          <IconSearch
            size={16}
            className="pointer-events-none absolute left-3 text-[var(--text-muted)]"
            stroke={1.75}
          />
          <input
            ref={ref}
            type="search"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search notes…"
            aria-label="Search notes"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] py-2 pl-9 pr-9 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
          <div className="absolute right-2 flex items-center gap-1">
            {!query && (
              <kbd className="kbd hidden text-[10px] sm:inline-block">/</kbd>
            )}
            {query && (
              <button
                type="button"
                onClick={() => onChange('')}
                aria-label="Clear search"
                className="rounded p-1 text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)]"
              >
                <IconX size={14} />
              </button>
            )}
          </div>
        </div>
        {query && (
          <p className="text-xs text-[var(--text-muted)]">
            {!hasResults
              ? 'No results found'
              : `${matchCount ?? 0} section${matchCount === 1 ? '' : 's'} matched`}
          </p>
        )}
      </div>
    );
  },
);
