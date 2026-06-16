import type { ContentBlock, MajorSection, SubSection } from '@/types/notes';
import { detectCodeLanguage, isCodeLine } from './detectCodeLanguage';

const SEPARATOR = /^_{10,}$/;

/** Metadata for the six major accordion groups, in display order */
const MAJOR_SECTION_META: Array<{ id: string; title: string }> = [
  { id: 'recon', title: 'Reconnaissance' },
  { id: 'identification', title: 'Target Identification' },
  { id: 'juice-shop', title: 'OWASP Juice Shop' },
  { id: 'shepherd', title: 'Shepherd' },
  { id: 'nanocorp', title: 'NanoCorp' },
  { id: 'docker', title: 'Docker Commands' },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60) || 'section';
}

function getChunkTitle(chunk: string): string {
  const firstLine = chunk.split('\n').find((l) => l.trim())?.trim() ?? 'Untitled';
  return firstLine.replace(/^⭐\s*/, '').replace(/^#+\s*/, '');
}

/**
 * Walks chunks in document order and switches major section when
 * known heading markers appear (pts.txt has no markdown headings).
 */
function resolveMajorSectionId(title: string, current: string): string {
  if (/Extra Docker|Show Databases|SqlInjLesson|SqlChalOne|List Application Tables/i.test(title)) {
    return 'docker';
  }
  if (/^Target 3:/i.test(title)) return 'nanocorp';
  if (/^Target 2:/i.test(title)) return 'shepherd';
  if (/Penetration Testing|Target 1:.*Juice Shop/i.test(title)) return 'juice-shop';
  if (/Kaise Pata Chalega|Exam Flow|Short Memory Trick/i.test(title)) return 'identification';
  if (/⭐ STEP 0|STEP 0/i.test(title)) return 'recon';

  // Sub-challenges inherit the current major section
  if (/Sensitive Data|Security Misconfiguration|SQL Injection|Broken Access|UNION SQL|^\d+\.\s/i.test(title)) {
    if (current === 'juice-shop' || current === 'shepherd' || current === 'nanocorp') return current;
  }
  if (/^Step \d+/i.test(title) && current === 'shepherd') return 'shepherd';
  if (/^Target [123]$/i.test(title) && current === 'recon') return 'recon';
  if (/^Shepherd$/i.test(title) && current !== 'shepherd' && current !== 'nanocorp') return 'identification';
  if (/^NanoCorp$/i.test(title) && current !== 'nanocorp') return 'identification';
  if (/Agar nmap|Port Number|Live Hosts/i.test(title)) return 'recon';

  return current;
}

/** Groups consecutive code-like lines into highlighted blocks */
export function parseBlocks(text: string): ContentBlock[] {
  const lines = text.split('\n');
  const blocks: ContentBlock[] = [];
  let textBuffer: string[] = [];
  let codeBuffer: string[] = [];

  const flushText = () => {
    if (textBuffer.some((l) => l.trim())) {
      blocks.push({ type: 'text', lines: [...textBuffer] });
    }
    textBuffer = [];
  };

  const flushCode = () => {
    if (codeBuffer.length) {
      const code = codeBuffer.join('\n');
      blocks.push({ type: 'code', code, language: detectCodeLanguage(code) });
      codeBuffer = [];
    }
  };

  for (const line of lines) {
    if (isCodeLine(line)) {
      flushText();
      codeBuffer.push(line);
    } else {
      flushCode();
      textBuffer.push(line);
    }
  }

  flushText();
  flushCode();
  return blocks;
}

/** Supports explicit `## Heading` lines and legacy underscore separators */
function splitIntoChunks(raw: string): string[] {
  const normalized = raw.replace(/\r\n/g, '\n').trim();

  // If markdown headings exist, split on ## lines
  if (/^##\s+/m.test(normalized)) {
    const parts = normalized.split(/\n(?=##\s+)/);
    return parts.map((p) => p.trim()).filter(Boolean);
  }

  const chunks: string[] = [];
  let current: string[] = [];

  for (const line of normalized.split('\n')) {
    if (SEPARATOR.test(line.trim())) {
      if (current.length) {
        chunks.push(current.join('\n').trim());
        current = [];
      }
    } else {
      current.push(line);
    }
  }

  if (current.length) chunks.push(current.join('\n').trim());
  return chunks.filter(Boolean);
}

export function parseNotes(raw: string): MajorSection[] {
  const chunks = splitIntoChunks(raw);
  const grouped = new Map<string, SubSection[]>();

  for (const meta of MAJOR_SECTION_META) {
    grouped.set(meta.id, []);
  }

  let currentMajorId = 'recon';
  const usedIds = new Set<string>();

  for (const chunk of chunks) {
    let title = getChunkTitle(chunk);
    if (title.startsWith('## ')) title = title.slice(3);

    currentMajorId = resolveMajorSectionId(title, currentMajorId);

    let id = slugify(title);
    if (usedIds.has(id)) id = `${id}-${usedIds.size}`;
    usedIds.add(id);

    const subsection: SubSection = {
      id,
      title,
      blocks: parseBlocks(chunk),
      rawText: chunk,
    };

    grouped.get(currentMajorId)?.push(subsection);
  }

  return MAJOR_SECTION_META.map((meta) => ({
    id: meta.id,
    title: meta.title,
    subsections: grouped.get(meta.id) ?? [],
  })).filter((s) => s.subsections.length > 0);
}

/** Flat list of sidebar nav items derived from major + sub sections */
export function getNavItems(sections: MajorSection[]): Array<{ id: string; label: string; majorId: string }> {
  const items: Array<{ id: string; label: string; majorId: string }> = [];

  for (const major of sections) {
    items.push({ id: major.id, label: major.title, majorId: major.id });
    for (const sub of major.subsections) {
      items.push({ id: sub.id, label: sub.title, majorId: major.id });
    }
  }

  return items;
}
