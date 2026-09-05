'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export default function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  const { language } = useLanguage();
  const galleryId = useId();
  const viewport = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function navigate(index: number) {
    const container = viewport.current;
    if (!container) return;
    const target = Math.max(0, Math.min(images.length - 1, index));
    container.scrollTo({
      left: target * container.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <div className="border-b-[4px] border-[#00ffff]">
      <div
        id={galleryId}
        ref={viewport}
        role="region"
        aria-label={language === 'id' ? `Galeri ${title}` : `${title} gallery`}
        tabIndex={images.length > 1 ? 0 : undefined}
        className="flex w-full overflow-x-auto snap-x snap-mandatory bg-gray-900 focus-visible:outline-4 focus-visible:outline-inset focus-visible:outline-[#00ffff]"
        onScroll={(event) => {
          const container = event.currentTarget;
          setActive(Math.round(container.scrollLeft / container.clientWidth));
        }}
        onKeyDown={(event) => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
          event.preventDefault();
          navigate(event.key === 'Home' ? 0 : event.key === 'End' ? images.length - 1 : active + (event.key === 'ArrowRight' ? 1 : -1));
        }}
      >
        {images.map((src, index) => (
          <div key={src} className="relative w-full shrink-0 snap-start aspect-video">
            <Image src={src} alt={`${title} - ${language === 'id' ? 'Gambar' : 'Image'} ${index + 1}`} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-contain" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-between gap-3 bg-[#0a0a0a] p-3 text-[#00ffff]">
          <button type="button" aria-controls={galleryId} aria-label={language === 'id' ? 'Gambar sebelumnya' : 'Previous image'} disabled={active === 0} onClick={() => navigate(active - 1)} className="min-h-11 min-w-11 border-2 border-[#00ffff] px-3 text-xl cursor-pointer hover:bg-[#00ffff] hover:text-black disabled:opacity-30 disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2">
            &larr;
          </button>
          <div className="text-center text-sm">
            <p aria-live="polite" className="font-bold">{active + 1} / {images.length}</p>
            <p className="mt-1 text-xs text-gray-400">{language === 'id' ? 'Klik panah atau geser gambar' : 'Click the arrows or swipe'}</p>
          </div>
          <button type="button" aria-controls={galleryId} aria-label={language === 'id' ? 'Gambar berikutnya' : 'Next image'} disabled={active === images.length - 1} onClick={() => navigate(active + 1)} className="min-h-11 min-w-11 border-2 border-[#00ffff] px-3 text-xl cursor-pointer hover:bg-[#00ffff] hover:text-black disabled:opacity-30 disabled:cursor-default focus-visible:outline-2 focus-visible:outline-offset-2">
            &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
