import type { ReactNode } from 'react';

type TooltipProps = {
  label: string;
  shortcut?: string;
  children: ReactNode;
};

/** Lightweight CSS-only tooltip for toolbar buttons */
export function Tooltip({ label, shortcut, children }: TooltipProps) {
  return (
    <div className="group/tooltip relative inline-flex">
      {children}
      <div
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--surface-elevated)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] opacity-0 shadow-lg transition-opacity duration-150 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
      >
        {label}
        {shortcut && (
          <span className="ml-2 rounded bg-[var(--surface-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
            {shortcut}
          </span>
        )}
      </div>
    </div>
  );
}
