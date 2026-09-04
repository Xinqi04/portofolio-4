'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

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
        EPISODE: PORTOFOLIO
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-300 uppercase">
        <Link href="/#origins" className="hover:text-[#00ffff] transition-colors">ORIGINS</Link>
        <Link href="/#powers" className="hover:text-[#00ffff] transition-colors">POWERS</Link>
        <Link href="/#gallery" className="hover:text-[#00ffff] transition-colors">GALLERY</Link>
        <Link href="/#certificates" className="hover:text-[#00ffff] transition-colors">CERTIFICATES</Link>
        <Link href="/#timeline" className="hover:text-[#00ffff] transition-colors">TIMELINE</Link>
        <Link href="/#contact" className="hover:text-[#00ffff] transition-colors">CONTACT</Link>
      </div>

      {/* CTA Button */}
      {/* <button className="bg-[#00ffff] text-black font-black italic px-6 py-2 hover:bg-white transition-colors">
        HIRE ME
      </button> */}
    </nav>
  );
}
