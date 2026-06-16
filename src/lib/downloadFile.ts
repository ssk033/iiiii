/** Offline-first public asset paths (Vite serves from /public) */
export const PUBLIC_ASSETS = {
  notesTxt: '/pts.txt',
  notesPdf: '/notes.pdf',
} as const;

/** Trigger a browser download from an in-memory string */
export function downloadTextContent(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, filename);
  URL.revokeObjectURL(url);
}

/** Trigger download for a static public asset */
export function downloadPublicAsset(url: string, filename: string): void {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function triggerDownload(url: string, filename: string): void {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

/** Open a public asset in a new browser tab */
export function openPublicAsset(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
