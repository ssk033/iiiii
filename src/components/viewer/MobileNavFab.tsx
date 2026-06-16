import { IconLayoutSidebar } from '@tabler/icons-react';

type MobileNavFabProps = {
  onClick: () => void;
  open: boolean;
};

/** Floating action button to toggle navigation drawer on mobile/tablet */
export function MobileNavFab({ onClick, open }: MobileNavFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close navigation' : 'Open navigation'}
      aria-expanded={open}
      className="mobile-nav-fab fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent)] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] lg:hidden"
    >
      <IconLayoutSidebar size={22} stroke={1.75} />
    </button>
  );
}
