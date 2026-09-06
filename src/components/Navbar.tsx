'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const isNearTop = currentScrollY < 80;
        const isScrollingUp = currentScrollY < lastScrollY.current;

        setIsVisible(isNearTop || isScrollingUp);
        lastScrollY.current = currentScrollY;
      });
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar-enter sticky top-0 z-50 w-full border-b-[3px] border-[#00ffff]/70 bg-[#111111]/75 px-6 py-4 flex items-center justify-between backdrop-blur-md transition-[transform,opacity] duration-300 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      {/* Logo */}
      <div className="text-[#00ffff] text-2xl md:text-3xl font-black italic tracking-wider">
        {language === 'id' ? 'EPISODE: PORTOFOLIO' : 'EPISODE: PORTOFOLIO'}
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-5 text-sm font-bold text-gray-300 uppercase">
        <Link href="/#origins" className="hover:text-[#00ffff] transition-colors">{language === 'id' ? 'ASAL' : 'ORIGINS'}</Link>
        <Link href="/#powers" className="hover:text-[#00ffff] transition-colors">{language === 'id' ? 'KEMAMPUAN' : 'POWERS'}</Link>
        <Link href="/#gallery" className="hover:text-[#00ffff] transition-colors">{language === 'id' ? 'GALERI' : 'GALLERY'}</Link>
        <Link href="/#certificates" className="hover:text-[#00ffff] transition-colors">{language === 'id' ? 'SERTIFIKAT' : 'CERTIFICATES'}</Link>
        <Link href="/#timeline" className="hover:text-[#00ffff] transition-colors">{language === 'id' ? 'LINIMASA' : 'TIMELINE'}</Link>
        <Link href="/#contact" className="hover:text-[#00ffff] transition-colors">{language === 'id' ? 'KONTAK' : 'CONTACT'}</Link>
        <div className="flex items-center border-2 border-[#00ffff] p-0.5" role="group" aria-label={language === 'id' ? 'Pilih bahasa' : 'Language selector'}>
          {(['id', 'en'] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLanguage(option)}
              aria-pressed={language === option}
              className={`px-2.5 py-1 text-xs transition-colors cursor-pointer ${language === option ? 'bg-[#00ffff] text-black' : 'text-[#00ffff] hover:bg-[#00ffff]/15'}`}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
        className="lg:hidden border-2 border-[#00ffff] px-3 py-1.5 text-xs font-black text-[#00ffff] cursor-pointer"
        aria-label={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      >
        {language === 'id' ? 'EN' : 'ID'}
      </button>

      {/* CTA Button */}
      {/* <button className="bg-[#00ffff] text-black font-black italic px-6 py-2 hover:bg-white transition-colors">
        HIRE ME
      </button> */}
    </nav>
  );
}
