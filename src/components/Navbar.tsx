import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b-[4px] border-[#00ffff] bg-[#111111] px-6 py-4 flex items-center justify-between">
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
