'use client';

import Image from 'next/image';
import { useState } from 'react';
import comicPortrait from '../../public/images/pp-komik.png';
import formalPortrait from '../../public/images/pp-formal.png';
import { useLanguage } from './LanguageProvider';

export default function MainSection() {
  const { language } = useLanguage();
  const [portraitFlipped, setPortraitFlipped] = useState(false);
  return (
    <section className="w-full max-w-6xl mx-auto mt-8 border-[4px] border-[#00ffff] bg-[#1a1c20] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between min-h-[600px] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ffff]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Left Content */}
      <div className="flex flex-col items-start gap-8 z-10 max-w-xl">
        {/* Issue Badge */}
        <div className="bg-[#00ffff] text-black font-black italic px-4 py-1 transform -skew-x-12">
          <span className="transform skew-x-12 block text-sm tracking-wider">{language === 'id' ? 'ISSUE #01 - PERDANA!' : 'ISSUE #01 - PREMIERE!'}</span>
        </div>

        {/* Title */}
        <div className="leading-tight">
          <h2 className="text-gray-400 font-bold text-lg tracking-wider">EPISODE:</h2>
          <h1 className="text-[#00ffff] text-4xl md:text-5xl font-black tracking-wider uppercase">Riza Anwar Fadil</h1>
        </div>

        {/* Description Box */}
        <div className="border-l-[6px] border-[#00ffff] bg-[#111111]/80 p-5 backdrop-blur-sm max-w-md">
          <p className="text-gray-300 italic text-lg leading-relaxed">
            {language === 'id' ? 'Memperkenalkan ' : 'Introducing '}
            <span className="text-[#00ffff] font-bold">{language === 'id' ? 'Sang Arsitek Kode' : 'The Code Architect'}</span>
            {language === 'id' ? ' — pahlawan di balik antarmuka web modern yang luar biasa!' : ' — the hero behind exceptional modern web interfaces!'}
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative mt-4 group cursor-pointer inline-block">
          {/* Shadow element */}
          <div className="absolute inset-0 bg-[#00aaaa] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
          {/* Main button */}
          <a
            href="/CV_Riza Anwar Fadil_ML.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-[#a6c1ee] border-[3px] border-[#00ffff] text-[#111] italic font-black text-lg px-8 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            {language === 'id' ? 'Lihat CV' : 'View CV'}
          </a>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="z-10 mt-16 md:mt-0 relative">
        {/* Shadow */}
        <div className="absolute inset-0 bg-black/50 translate-x-4 translate-y-6 blur-md"></div>

        {/* Card */}
        <button
          type="button"
          className="portrait-card relative block border-[4px] border-[#00ffff] bg-[#111] p-2 pb-0 w-72 md:w-[350px] cursor-pointer focus-visible:outline-4 focus-visible:outline-offset-8 focus-visible:outline-[#00ffff]"
          data-flipped={portraitFlipped}
          aria-label={language === 'id' ? 'Ganti foto komik dan formal' : 'Switch comic and formal portraits'}
          aria-pressed={portraitFlipped}
          onPointerEnter={(event) => { if (event.pointerType === 'mouse') setPortraitFlipped(true); }}
          onPointerLeave={(event) => { if (event.pointerType === 'mouse') setPortraitFlipped(false); }}
          onClick={() => setPortraitFlipped((flipped) => !flipped)}
          onBlur={() => setPortraitFlipped(false)}
        >
          <div className="portrait-scene relative w-full aspect-[3/4] border-b-[4px] border-[#00ffff]">
            <div className="portrait-flipper absolute inset-0">
            <div className="portrait-face absolute inset-0 overflow-hidden" aria-hidden={portraitFlipped}>
            <Image
              src={comicPortrait}
              alt={language === 'id' ? 'Sang Penulis Kode' : 'The Code Author'}
              fill
              sizes="(min-width: 768px) 326px, 264px"
              preload
              className="object-cover"
            />
            </div>
            <div className="portrait-face portrait-back absolute inset-0 overflow-hidden" aria-hidden={!portraitFlipped}>
              <Image
                src={formalPortrait}
                alt={language === 'id' ? 'Foto formal Riza Anwar Fadil' : 'Formal portrait of Riza Anwar Fadil'}
                fill
                sizes="(min-width: 768px) 326px, 264px"
                loading="eager"
                className="object-cover"
              />
            </div>
            </div>
          </div>
          <div className="bg-[#00ffff] text-black text-center font-black italic py-3 text-lg">
            RIZA ANWAR FADIL
          </div>
        </button>
      </div>
    </section>
  );
}
