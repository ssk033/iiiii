import { IconChevronRight } from '@tabler/icons-react';
import type { MajorSection } from '@/types/notes';

type ViewerSidebarProps = {
  sections: MajorSection[];
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
};

/** Desktop / drawer navigation — auto-generated from parsed sections */
export function ViewerSidebar({
  sections,
  activeId,
  onNavigate,
  className = '',
}: ViewerSidebarProps) {
  return (
    <nav
      aria-label="Notes sections"
      className={`sidebar flex flex-col gap-1 overflow-y-auto p-3 ${className}`}
    >
      {sections.map((major) => (
        <div key={major.id} className="mb-2">
          <button
            type="button"
            onClick={() => onNavigate(major.id)}
            className={`nav-item-major w-full rounded-lg px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide transition-colors ${
              activeId === major.id
                ? 'bg-[var(--accent-muted)] text-[var(--accent)]'
                : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            {major.title}
          </button>

          <ul className="mt-0.5 space-y-0.5 border-l border-[var(--border)] pl-2 ml-2">
            {major.subsections.map((sub) => (
              <li key={sub.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(sub.id)}
                  className={`nav-item-sub group flex w-full items-start gap-1 rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                    activeId === sub.id
                      ? 'bg-[var(--surface-muted)] text-[var(--text-primary)] font-medium'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <IconChevronRight
                    size={14}
                    className={`mt-0.5 shrink-0 transition-transform ${
                      activeId === sub.id ? 'text-[var(--accent)] rotate-90' : 'opacity-0 group-hover:opacity-50'
                    }`}
                    stroke={1.75}
                  />
                  <span className="line-clamp-2 leading-snug">{sub.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
