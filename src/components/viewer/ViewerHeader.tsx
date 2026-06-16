import type { ReactNode } from 'react';
import {
  IconCopy,
  IconCheck,
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconSun,
  IconMoon,
  IconX,
  IconDownload,
  IconExternalLink,
} from '@tabler/icons-react';
import { Tooltip } from '@/components/ui/Tooltip';
import type { Theme } from '@/types/notes';
import type { ViewMode } from '@/types/resources';

type ViewerHeaderProps = {
  viewMode: ViewMode;
  copied: boolean;
  theme: Theme;
  onCopyAll: () => void;
  onDownloadTxt?: () => void;
  onOpenTxt?: () => void;
  onExpandAll?: () => void;
  onCollapseAll?: () => void;
  onToggleTheme: () => void;
  onClose: () => void;
};

type ToolbarButtonProps = {
  onClick: () => void;
  label: string;
  shortcut?: string;
  children: ReactNode;
  active?: boolean;
};

function ToolbarButton({ onClick, label, shortcut, children, active }: ToolbarButtonProps) {
  return (
    <Tooltip label={label} shortcut={shortcut}>
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={`toolbar-btn flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-[var(--text-secondary)] transition-all hover:border-[var(--border)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)] ${
          active ? 'bg-[var(--accent-muted)] text-[var(--accent)]' : ''
        }`}
      >
        {children}
      </button>
    </Tooltip>
  );
}

/** Top toolbar — adapts actions for structured vs raw view mode */
export function ViewerHeader({
  viewMode,
  copied,
  theme,
  onCopyAll,
  onDownloadTxt,
  onOpenTxt,
  onExpandAll,
  onCollapseAll,
  onToggleTheme,
  onClose,
}: ViewerHeaderProps) {
  const isRaw = viewMode === 'raw';

  return (
    <header className="viewer-header flex shrink-0 items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 sm:px-5">
      <div className="min-w-0">
        <h2 className="truncate text-sm font-semibold text-[var(--text-primary)] sm:text-base">
          PTS Quick Notes
        </h2>
        <p className="hidden text-xs text-[var(--text-muted)] sm:block">
          {isRaw ? 'Raw Notes File' : 'Penetration Testing & Secure Systems Lab'}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <ToolbarButton
          onClick={onCopyAll}
          label={isRaw ? 'Copy Entire File' : 'Copy All Notes'}
          shortcut="Ctrl+Shift+C"
        >
          {copied ? <IconCheck size={17} stroke={1.75} /> : <IconCopy size={17} stroke={1.75} />}
        </ToolbarButton>

        {isRaw ? (
          <>
            <ToolbarButton onClick={onDownloadTxt!} label="Download TXT">
              <IconDownload size={17} stroke={1.75} />
            </ToolbarButton>
            <ToolbarButton onClick={onOpenTxt!} label="Open TXT in New Tab">
              <IconExternalLink size={17} stroke={1.75} />
            </ToolbarButton>
          </>
        ) : (
          <>
            <ToolbarButton onClick={onExpandAll!} label="Expand All">
              <IconArrowsMaximize size={17} stroke={1.75} />
            </ToolbarButton>
            <ToolbarButton onClick={onCollapseAll!} label="Collapse All">
              <IconArrowsMinimize size={17} stroke={1.75} />
            </ToolbarButton>
          </>
        )}

        <ToolbarButton
          onClick={onToggleTheme}
          label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          {theme === 'dark' ? (
            <IconSun size={17} stroke={1.75} />
          ) : (
            <IconMoon size={17} stroke={1.75} />
          )}
        </ToolbarButton>

        <ToolbarButton onClick={onClose} label="Close Viewer" shortcut="Esc">
          <IconX size={17} stroke={1.75} />
        </ToolbarButton>
      </div>
    </header>
  );
}
