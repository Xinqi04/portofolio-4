'use client';

import { useEffect } from 'react';

interface PdfPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PdfPreviewModal({ isOpen, onClose, pdfUrl, title }: PdfPreviewModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-6 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative flex h-[85vh] w-full max-w-4xl flex-col border-[4px] border-[#00ffff] bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,255,255,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#00ffff] px-4 py-3 text-black">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="font-black italic text-sm md:text-base tracking-wider uppercase truncate max-w-[250px] sm:max-w-md md:max-w-xl">
              {title}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center justify-center font-black italic hover:bg-black hover:text-[#00ffff] px-3 py-1 border-2 border-black hover:border-[#00ffff] transition-all text-xs tracking-widest"
          >
            TUTUP [X]
          </button>
        </div>

        {/* PDF Iframe Viewer */}
        <div className="flex-1 w-full bg-slate-900 p-2 relative">
          <iframe 
            src={`${pdfUrl}#toolbar=1`} 
            className="w-full h-full border-none bg-white rounded"
            title={title}
          />
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t-[3px] border-[#00ffff] bg-[#0a0a0a] px-4 py-3">
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-[2px] border-[#00ffff] px-4 py-2 text-xs font-black italic tracking-widest text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            BUKA DI TAB BARU
          </a>
          <button 
            onClick={onClose}
            className="bg-[#00ffff] text-black px-6 py-2 text-xs font-black italic tracking-widest hover:bg-white hover:text-black transition-all"
          >
            SELESAI
          </button>
        </div>
      </div>
    </div>
  );
}
