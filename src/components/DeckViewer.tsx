import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageSquare, X } from 'lucide-react';
import { slides } from './Slides';
import type { Screenshot } from './Slides';

export default function DeckViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [expandedScreenshot, setExpandedScreenshot] = useState<Screenshot | null>(null);
  const [speakerNotes, setSpeakerNotes] = useState<string[] | null>(null);
  const [notesPassword, setNotesPassword] = useState('');
  const [notesError, setNotesError] = useState('');
  const [notesLoading, setNotesLoading] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedScreenshot) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setExpandedScreenshot(null);
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedScreenshot, nextSlide, prevSlide]);

  useEffect(() => {
    document.body.style.background = '#0A0A0A';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.background = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    }
  }, []);

  const CurrentSlide = slides[currentIndex];

  const unlockSpeakerNotes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotesLoading(true);
    setNotesError('');

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: notesPassword })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to unlock speaker notes.');
      }

      setSpeakerNotes(data.notes);
      setNotesPassword('');
    } catch (error) {
      setNotesError(error instanceof Error ? error.message : 'Unable to unlock speaker notes.');
    } finally {
      setNotesLoading(false);
    }
  };

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', width: '100vw' }} className="flex text-[#F0EEE9] overflow-hidden relative font-sans">
      
      {/* Main Presentation Stage */}
      <div className={`flex-1 flex flex-col transition-all duration-500 ease-in-out relative ${notesOpen ? 'xl:mr-[400px]' : ''}`}>
        
        <div className="flex-1 flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden h-[calc(100vh-64px)]">
          <div 
            className="w-full h-full lg:max-h-[85vh] lg:aspect-video rounded-none md:rounded-lg border-0 md:border border-white/5 shadow-sm overflow-hidden relative flex flex-col"
            style={{ background: '#0A0A0A' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-[#0A0A0A]"
              >
                <CurrentSlide onExpandScreenshot={setExpandedScreenshot} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="h-16 border-t border-white/10 bg-[#0A0A0A] flex items-center justify-between px-6 z-10 shrink-0">
          <div className="flex items-center space-x-2 text-[#F0EEE9]/55 font-bold text-xs uppercase tracking-widest">
            <span className="text-[#F0EEE9]">{currentIndex + 1}</span>
            <span>/</span>
            <span>{slides.length}</span>
          </div>

          {/* Progress Bar (Center) */}
          <div className="hidden md:block flex-1 max-w-md mx-6">
            <div className="w-full h-1 bg-[#141414] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#F0EEE9] transition-all duration-300 ease-out rounded-full"
                style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setNotesOpen(!notesOpen)}
              className={`p-2 rounded transition-colors ${notesOpen ? 'bg-[#F0EEE9] text-[#0A0A0A]' : 'hover:bg-[#141414] text-[#F0EEE9]/55'}`}
              title="Toggle Speaker Notes"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2 border-l border-white/10 pl-4">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="p-2 hover:bg-[#141414] rounded disabled:opacity-30 transition-colors text-[#F0EEE9]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex === slides.length - 1}
                className="p-2 hover:bg-[#141414] rounded disabled:opacity-30 transition-colors text-[#F0EEE9]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Speaker Notes Overlay / Drawer */}
      <AnimatePresence>
        {notesOpen && (
          <motion.div 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full md:w-[400px] bg-[#141414] border-l border-white/10 shadow-2xl z-50 flex flex-col"
          >
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 shrink-0">
              <h3 className="text-xs font-bold text-[#F0EEE9]/55 uppercase tracking-widest">Speaker Notes</h3>
              <button onClick={() => setNotesOpen(false)} className="p-2 hover:bg-white/5 rounded text-[#F0EEE9]/55">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              {!speakerNotes ? (
                <form onSubmit={unlockSpeakerNotes} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="speaker-notes-password" className="block text-[10px] font-bold uppercase tracking-widest text-[#F0EEE9]/55 mb-3">
                      Notes Password
                    </label>
                    <input
                      id="speaker-notes-password"
                      type="password"
                      value={notesPassword}
                      onChange={(event) => setNotesPassword(event.target.value)}
                      className="w-full rounded border border-white/10 bg-[#0A0A0A] px-3 py-2 text-sm text-[#F0EEE9] outline-none transition-colors focus:border-[#00E5FF]"
                      autoComplete="current-password"
                    />
                  </div>
                  {notesError && <p className="text-xs font-medium text-[#D4A843]">{notesError}</p>}
                  <button
                    type="submit"
                    disabled={notesLoading || !notesPassword}
                    className="rounded bg-[#F0EEE9] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0A0A0A] transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {notesLoading ? 'Unlocking...' : 'Unlock Notes'}
                  </button>
                </form>
              ) : speakerNotes[currentIndex] ? (
                <div className="text-sm leading-relaxed text-[#F0EEE9]/70 space-y-4">
                  {speakerNotes[currentIndex].split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ) : (
                <p className="text-[#F0EEE9]/55 text-xs font-bold uppercase tracking-widest">No speaker notes provided.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expandedScreenshot && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-[#0A0A0A]/95 text-[#F0EEE9] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedScreenshot(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${expandedScreenshot.label} screenshot preview`}
          >
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4 md:px-6">
              <div className="min-w-0 text-[10px] font-bold uppercase tracking-widest text-[#F0EEE9]/70">
                {expandedScreenshot.label}
              </div>
              <button
                type="button"
                onClick={() => setExpandedScreenshot(null)}
                className="rounded p-2 text-[#F0EEE9]/70 transition-colors hover:bg-white/10 hover:text-[#F0EEE9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                title="Close screenshot"
                aria-label="Close screenshot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center p-3 md:p-6">
              <motion.img
                src={expandedScreenshot.src}
                alt={expandedScreenshot.label}
                className="max-h-full max-w-full object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
