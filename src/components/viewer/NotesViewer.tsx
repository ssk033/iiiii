import { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { parseNotes, getNavItems } from '@/lib/parseNotes';
import { filterNotes } from '@/lib/searchNotes';
import { downloadTextContent, openPublicAsset, PUBLIC_ASSETS } from '@/lib/downloadFile';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ViewerHeader } from './ViewerHeader';
import { ViewerSidebar } from './ViewerSidebar';
import { SearchBar } from './SearchBar';
import { NotesContent } from './NotesContent';
import { RawNotesView } from './RawNotesView';
import { ViewModeTabs } from './ViewModeTabs';
import { MobileNavFab } from './MobileNavFab';
import type { Theme } from '@/types/notes';
import type { ViewMode } from '@/types/resources';

type NotesViewerProps = {
  rawNotes: string;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
};

/** Full-screen split-layout handbook viewer with structured + raw tabs */
export function NotesViewer({ rawNotes, onClose, theme, onToggleTheme }: NotesViewerProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [viewMode, setViewMode] = useState<ViewMode>('structured');
  const isStructured = viewMode === 'structured';

  const allSections = useMemo(() => parseNotes(rawNotes), [rawNotes]);
  const allSectionIds = useMemo(
    () => getNavItems(allSections).map((item) => item.id),
    [allSections],
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { sections: filteredSections, hasResults, matchCount } = useMemo(
    () => filterNotes(allSections, searchQuery),
    [allSections, searchQuery],
  );

  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (allSections[0]) initial.add(allSections[0].id);
    return initial;
  });

  useEffect(() => {
    if (!searchQuery.trim() || !isStructured) return;
    setExpandedSections((prev) => {
      const next = new Set(prev);
      filteredSections.forEach((s) => next.add(s.id));
      return next;
    });
  }, [searchQuery, filteredSections, isStructured]);

  const activeId = useActiveSection(contentRef, isStructured ? allSectionIds : []);

  const handleCopyAll = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(rawNotes);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy notes:', err);
    }
  }, [rawNotes]);

  const handleDownloadTxt = useCallback(() => {
    downloadTextContent(rawNotes, 'pts.txt');
  }, [rawNotes]);

  const handleOpenTxt = useCallback(() => {
    openPublicAsset(PUBLIC_ASSETS.notesTxt);
  }, []);

  const handleExpandAll = useCallback(() => {
    setExpandedSections(new Set(allSections.map((s) => s.id)));
  }, [allSections]);

  const handleCollapseAll = useCallback(() => {
    setExpandedSections(new Set());
  }, []);

  const handleToggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const parentMajor = allSections.find(
      (m) => m.id === id || m.subsections.some((s) => s.id === id),
    );
    if (parentMajor) {
      setExpandedSections((prev) => new Set(prev).add(parentMajor.id));
    }

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    setMobileNavOpen(false);
  }, [allSections]);

  // Close mobile nav when switching to raw view
  useEffect(() => {
    if (!isStructured) setMobileNavOpen(false);
  }, [isStructured]);

  useKeyboardShortcuts(
    {
      onFocusSearch: isStructured ? () => searchRef.current?.focus() : undefined,
      onCopyAll: handleCopyAll,
      onClose,
      enabled: true,
    },
    searchRef,
  );

  return (
    <div className="notes-viewer fixed inset-0 z-50 flex flex-col bg-[var(--bg)]">
      <ViewerHeader
        viewMode={viewMode}
        copied={copied}
        theme={theme}
        onCopyAll={handleCopyAll}
        onDownloadTxt={handleDownloadTxt}
        onOpenTxt={handleOpenTxt}
        onExpandAll={handleExpandAll}
        onCollapseAll={handleCollapseAll}
        onToggleTheme={onToggleTheme}
        onClose={onClose}
      />

      <ViewModeTabs mode={viewMode} onChange={setViewMode} />

      {isStructured ? (
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--surface)] lg:flex xl:w-72">
            <div className="border-b border-[var(--border)] p-3">
              <SearchBar
                ref={searchRef}
                query={searchQuery}
                onChange={setSearchQuery}
                matchCount={matchCount}
                hasResults={hasResults}
              />
            </div>
            <ViewerSidebar
              sections={filteredSections}
              activeId={activeId}
              onNavigate={handleNavigate}
              className="flex-1"
            />
          </aside>

          {mobileNavOpen && (
            <>
              <div
                className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setMobileNavOpen(false)}
                aria-hidden="true"
              />
              <aside className="fixed inset-y-0 left-0 z-40 flex w-[min(85vw,320px)] flex-col border-r border-[var(--border)] bg-[var(--surface)] pt-14 shadow-xl lg:hidden">
                <ViewerSidebar
                  sections={filteredSections}
                  activeId={activeId}
                  onNavigate={handleNavigate}
                  className="flex-1"
                />
              </aside>
            </>
          )}

          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <div className="shrink-0 border-b border-[var(--border)] p-3 lg:hidden">
              <SearchBar
                ref={searchRef}
                query={searchQuery}
                onChange={setSearchQuery}
                matchCount={matchCount}
                hasResults={hasResults}
              />
            </div>

            <NotesContent
              scrollRef={contentRef}
              sections={filteredSections}
              expandedSections={expandedSections}
              onToggleSection={handleToggleSection}
              searchQuery={searchQuery}
              hasResults={hasResults}
            />
          </div>

          <MobileNavFab onClick={() => setMobileNavOpen((o) => !o)} open={mobileNavOpen} />
        </div>
      ) : (
        <RawNotesView content={rawNotes} />
      )}
    </div>
  );
}
