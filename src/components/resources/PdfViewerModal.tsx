import { useEffect, useCallback } from 'react';
import { IconDownload, IconX } from '@tabler/icons-react';
import type { PdfViewerModalProps } from '@/types/resources';

/**
 * Full-screen PDF preview modal using an iframe.
 * Works offline when the PDF is served from Vite public/.
 */
export function PdfViewerModal({
  open,
  onClose,
  pdfUrl,
  title = 'Lab Reference PDF',
}: PdfViewerModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    },
    [open, onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKeyDown, true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.style.overflow = '';
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const filename = pdfUrl.split('/').pop() ?? 'document.pdf';

  return (
    <div
      className="pdf-modal-root fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <button
        type="button"
        className="pdf-modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-fade-in"
        onClick={onClose}
        aria-label="Close PDF preview"
      />

      {/* Panel */}
      <div className="pdf-modal-panel relative z-10 flex h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl animate-modal-slide-in">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-[var(--text-primary)] sm:text-base">
              {title}
            </h2>
            <p className="text-xs text-[var(--text-muted)]">PTS Reference PDF</p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={pdfUrl}
              download={filename}
              className="resource-action-btn inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
            >
              <IconDownload size={15} stroke={1.75} />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close PDF preview"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
            >
              <IconX size={18} stroke={1.75} />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 bg-[var(--code-bg)]">
          <iframe
            src={pdfUrl}
            title="PTS PDF Viewer"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
