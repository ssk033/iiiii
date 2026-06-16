/** A plain-text paragraph block within a subsection */
export type TextBlock = {
  type: 'text';
  lines: string[];
};

/** A syntax-highlighted command or payload block */
export type CodeBlockData = {
  type: 'code';
  code: string;
  language: string;
};

export type ContentBlock = TextBlock | CodeBlockData;

/** Smallest navigable unit — one chunk between separator lines in pts.txt */
export type SubSection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
  /** Raw text used for search matching */
  rawText: string;
};

/** Top-level accordion group (Reconnaissance, Juice Shop, etc.) */
export type MajorSection = {
  id: string;
  title: string;
  subsections: SubSection[];
};

export type Theme = 'dark' | 'light';

export type ParsedNotes = {
  sections: MajorSection[];
  raw: string;
};
