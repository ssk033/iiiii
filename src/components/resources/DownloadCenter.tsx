import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  IconFileTypePdf,
  IconFileTypeTxt,
  IconDownload,
  IconEye,
  IconExternalLink,
} from '@tabler/icons-react';
import { PUBLIC_ASSETS, downloadPublicAsset, downloadTextContent, openPublicAsset } from '@/lib/downloadFile';
import { PdfViewerModal } from './PdfViewerModal';

type ResourceActionProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  download?: string;
  icon: ReactNode;
};

function ResourceAction({ label, onClick, href, download, icon }: ResourceActionProps) {
  const className =
    'resource-action-btn inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent)]';

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        className={className}
        aria-label={label}
      >
        {icon}
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className} aria-label={label}>
      {icon}
      {label}
    </button>
  );
}

type ResourceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
};

function ResourceCard({ icon, title, description, children }: ResourceCardProps) {
  return (
    <article className="resource-card rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-4 transition-all duration-200 hover:border-[var(--border-hover)] hover:shadow-lg">
      <div className="mb-3 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-muted)] text-[var(--accent)]">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">{title}</h3>
          <p className="mt-0.5 text-xs text-[var(--text-muted)]">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </article>
  );
}

type DownloadCenterProps = {
  /** Optional loaded notes text — enables blob download of exact fetched content */
  notesContent?: string | null;
  className?: string;
};

/**
 * Glassmorphism resource cards for PDF and TXT assets.
 * All assets load from Vite public/ — fully offline after build.
 */
export function DownloadCenter({ notesContent, className = '' }: DownloadCenterProps) {
  const [pdfOpen, setPdfOpen] = useState(false);

  const handleDownloadTxt = () => {
    if (notesContent) {
      downloadTextContent(notesContent, 'pts.txt');
      return;
    }
    downloadPublicAsset(PUBLIC_ASSETS.notesTxt, 'pts.txt');
  };

  return (
    <>
      <section
        className={`download-center glass-card animate-fade-in p-6 sm:p-8 ${className}`}
        aria-labelledby="resources-heading"
      >
        <h2
          id="resources-heading"
          className="mb-1 text-lg font-semibold text-[var(--text-primary)]"
        >
          Resources
        </h2>
        <p className="mb-5 text-sm text-[var(--text-secondary)]">
          Offline lab reference files
        </p>

        <div className="space-y-4">
          <ResourceCard
            icon={<IconFileTypePdf size={22} stroke={1.5} />}
            title="PTS Reference PDF"
            description="Complete Lab Notes"
          >
            <ResourceAction
              label="Preview"
              onClick={() => setPdfOpen(true)}
              icon={<IconEye size={14} stroke={1.75} />}
            />
            <ResourceAction
              label="Download"
              href={PUBLIC_ASSETS.notesPdf}
              download="notes.pdf"
              icon={<IconDownload size={14} stroke={1.75} />}
            />
          </ResourceCard>

          <ResourceCard
            icon={<IconFileTypeTxt size={22} stroke={1.5} />}
            title="Raw Notes File"
            description="Original pts.txt"
          >
            <ResourceAction
              label="Open"
              onClick={() => openPublicAsset(PUBLIC_ASSETS.notesTxt)}
              icon={<IconExternalLink size={14} stroke={1.75} />}
            />
            <ResourceAction
              label="Download"
              onClick={handleDownloadTxt}
              icon={<IconDownload size={14} stroke={1.75} />}
            />
          </ResourceCard>
        </div>
      </section>

      <PdfViewerModal
        open={pdfOpen}
        onClose={() => setPdfOpen(false)}
        pdfUrl={PUBLIC_ASSETS.notesPdf}
        title="Lab Reference PDF"
      />
    </>
  );
}
