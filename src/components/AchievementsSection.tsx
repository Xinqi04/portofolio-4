import Link from 'next/link';
import Image from 'next/image';
import certificateImage from '../../public/achievements/iicyms-certificate.png';
import LocalizedText from './LocalizedText';

export default function AchievementsSection() {
return (
    <section id="achievements" aria-labelledby="achievements-heading" className="w-full scroll-mt-24 bg-[#111] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-start gap-4">
          <div aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-[#00ffff] bg-[#002222] text-[#00ffff] shadow-[4px_4px_0_#005555]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3h8v5a4 4 0 0 1-8 0V3ZM8 5H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 12v6m-4 3h8m-7-3h6v3H9z" />
            </svg>
          </div>
          <div>
            <h2 id="achievements-heading" className="text-2xl font-black uppercase italic tracking-wider text-[#00ffff] md:text-3xl">
              <LocalizedText id="Pencapaian" en="Achievements" />
            </h2>
            <p className="mt-2 text-gray-400">
              <LocalizedText id="Langkah nyata dalam perjalanan belajar dan berkarya." en="Milestones in a journey of learning and creating." />
            </p>
          </div>
        </div>
        <article className="grid overflow-hidden border-[3px] border-[#00ffff] bg-[#0a0a0a] shadow-[6px_6px_0_#003333] md:grid-cols-2">
          <a href="/achievements/iicyms-2025.pdf" target="_blank" rel="noopener noreferrer" aria-label="IICYMS 2025 certificate (PDF)" className="flex items-center bg-white p-3 focus-visible:outline-4 focus-visible:outline-inset focus-visible:outline-[#00ffff]">
            <Image src={certificateImage} alt="Gold Medal IICYMS 2025 — Riza Anwar Fadil" sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
          </a>
          <div className="flex flex-col items-start p-6 md:p-8">
            <span className="mb-5 border-2 border-amber-300 bg-amber-300/10 px-3 py-1 text-sm font-black uppercase tracking-wider text-amber-300">Gold Medal · 2025</span>
            <h3 className="mb-2 text-3xl font-black uppercase italic tracking-wide text-[#00ffff]">IICYMS 2025</h3>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">International Innovation Competition for Young Moslem Scientists</p>
            <p className="mb-4 text-sm font-bold text-[#c4c4ff]">
              <LocalizedText id="21–23 Juli 2025 · Kompetisi daring · Social Science" en="July 21–23, 2025 · Online competition · Social Science" />
            </p>
            <p className="mb-6 leading-relaxed text-gray-300">
              <LocalizedText id="Meraih medali emas untuk proyek “Tenangin: An AI-Based Self-Care Ecosystem for Student Well-Being”, mewakili Universitas Islam Negeri Sunan Gunung Djati Bandung." en="Awarded a gold medal for “Tenangin: An AI-Based Self-Care Ecosystem for Student Well-Being”, representing Universitas Islam Negeri Sunan Gunung Djati Bandung." />
            </p>
            <div className="mt-auto flex flex-wrap gap-4">
              <a href="/achievements/iicyms-2025.pdf" target="_blank" rel="noopener noreferrer" className="border-2 border-[#00ffff] bg-[#00ffff] px-4 py-3 text-sm font-black uppercase text-black transition-colors hover:bg-transparent hover:text-[#00ffff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffff]">
                <LocalizedText id="Lihat sertifikat" en="View certificate" /> &rarr;
              </a>
              <Link href="/project/tenangin" className="px-1 py-3 text-sm font-bold uppercase text-[#00ffff] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00ffff]">
                <LocalizedText id="Lihat proyek Tenangin" en="View Tenangin project" /> &rarr;
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

