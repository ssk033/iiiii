import { useState } from 'react';
import { LandingPage } from '@/components/landing/LandingPage';
import { NotesViewer } from '@/components/viewer/NotesViewer';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [rawNotes, setRawNotes] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpenNotes = async () => {
    if (rawNotes || loading) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/pts.txt');
      if (!response.ok) throw new Error(`Failed to load notes (${response.status})`);
      const text = await response.text();
      setRawNotes(text);
    } catch (err) {
      console.error('Failed to load PTS notes:', err);
      setError('Could not load notes. Check that pts.txt exists in public/.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setRawNotes(null);

  return (
    <>
      {!rawNotes && (
        <LandingPage onOpenNotes={handleOpenNotes} loading={loading} />
      )}

      {error && !rawNotes && (
        <p className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      {rawNotes && (
        <NotesViewer
          rawNotes={rawNotes}
          onClose={handleClose}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </>
  );
}

export default App;
