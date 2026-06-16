import type { ViewMode } from '@/types/resources';

type ViewModeTabsProps = {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
};

/** Toggle between structured handbook view and raw text file view */
export function ViewModeTabs({ mode, onChange }: ViewModeTabsProps) {
  const tabs: Array<{ id: ViewMode; label: string }> = [
    { id: 'structured', label: 'Structured View' },
    { id: 'raw', label: 'Raw Notes' },
  ];

  return (
    <div
      className="view-mode-tabs flex shrink-0 gap-1 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-2 sm:px-5"
      role="tablist"
      aria-label="Notes view mode"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={mode === tab.id}
          onClick={() => onChange(tab.id)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all sm:text-sm ${
            mode === tab.id
              ? 'bg-[var(--accent-muted)] text-[var(--accent)]'
              : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-secondary)]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
