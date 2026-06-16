export type ViewMode = 'structured' | 'raw';

export type PdfViewerModalProps = {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
};
