import { useEffect, useCallback, type RefObject } from 'react';

type ShortcutHandlers = {
  onFocusSearch?: () => void;
  onCopyAll?: () => void;
  onClose?: () => void;
  enabled?: boolean;
};

/**
 * Global keyboard shortcuts for the notes viewer.
 * / and Ctrl+F → search; Esc → close; Ctrl+Shift+C → copy all
 */
export function useKeyboardShortcuts(
  handlers: ShortcutHandlers,
  searchInputRef?: RefObject<HTMLInputElement | null>,
) {
  const { onFocusSearch, onCopyAll, onClose, enabled = true } = handlers;

  const focusSearch = useCallback(() => {
    onFocusSearch?.();
    searchInputRef?.current?.focus();
    searchInputRef?.current?.select();
  }, [onFocusSearch, searchInputRef]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

      if (e.key === '/' && !isInput) {
        e.preventDefault();
        focusSearch();
        return;
      }

      if (e.key === 'f' && (e.ctrlKey || e.metaKey) && !e.shiftKey) {
        e.preventDefault();
        focusSearch();
        return;
      }

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
        return;
      }

      if (e.key === 'C' && (e.ctrlKey || e.metaKey) && e.shiftKey) {
        e.preventDefault();
        onCopyAll?.();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, focusSearch, onClose, onCopyAll]);
}
