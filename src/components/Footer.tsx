import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t-[6px] border-[#00ffff] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-[#00ffff] text-xl font-black italic tracking-widest uppercase">
          EPISODE: PORTOFOLIO
        </div>

        {/* Center */}
        <div className="text-gray-400 text-xs md:text-sm italic font-bold tracking-widest text-center">
          TO BE CONTINUED... © 2026
        </div>

        {/* Right */}
        <div className="flex gap-6 text-gray-300 text-xs md:text-sm font-bold uppercase tracking-widest">
          <Link href="#" className="hover:text-[#00ffff] transition-colors">BACK TO START</Link>
          <Link href="/#contact" className="hover:text-[#00ffff] transition-colors">CONTACT HQ</Link>
          <Link href="#" className="hover:text-[#00ffff] transition-colors">RSS FEED</Link>
        </div>

      </div>
    </footer>
  );
}
