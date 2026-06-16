import type { ContentBlock } from '@/types/notes';
import { CodeBlock } from '@/components/ui/code-block';
import { HighlightText } from '@/components/ui/HighlightText';
import { codeBlockLabel } from '@/lib/detectCodeLanguage';

type ContentRendererProps = {
  blocks: ContentBlock[];
  searchQuery: string;
};

/** Renders mixed text paragraphs and syntax-highlighted code blocks */
export function ContentRenderer({ blocks, searchQuery }: ContentRendererProps) {
  return (
    <div className="content-renderer space-y-4">
      {blocks.map((block, i) => {
        if (block.type === 'code') {
          return (
            <div key={i} className="code-block-wrapper">
              <CodeBlock
                language={block.language}
                filename={codeBlockLabel(block.language)}
                code={block.code}
              />
            </div>
          );
        }

        const text = block.lines.join('\n').trim();
        if (!text) return null;

        return (
          <div key={i} className="prose-notes whitespace-pre-wrap text-sm leading-relaxed text-[var(--text-secondary)]">
            {block.lines.map((line, li) => (
              <span key={li}>
                {li > 0 && '\n'}
                <HighlightText text={line} query={searchQuery} />
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}
