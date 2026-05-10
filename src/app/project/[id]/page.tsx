import { projects } from '../../../lib/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // Await params in case of Next.js 15+
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#111] font-sans flex flex-col pb-12">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center">

        {/* Back button */}
        <div className="w-full mb-8">
          <Link href="/#powers" className="text-[#00ffff] font-black italic hover:underline flex items-center gap-2">
            <span>&larr;</span> KEMBALI KE POWERS
          </Link>
        </div>

        {/* Content Box */}
        <article className="w-full border-[4px] border-[#00ffff] bg-[#0a0a0a] flex flex-col relative">

          {/* Header */}
          <header className="bg-[#00ffff] text-black px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-bold italic text-lg tracking-wider">{project.episode}</span>
            <h1 className="text-2xl md:text-3xl font-black italic tracking-widest uppercase text-center md:text-right">
              {project.title}
            </h1>
          </header>

          {/* Images Gallery */}
          {project.images[0] === '/images/default-project.jpg' ? (
            <div className="relative w-full aspect-video border-b-[4px] border-[#00ffff] bg-gray-900 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 italic">Project Image Placeholder</span>
              </div>
            </div>
          ) : (
            <>
              <div 
                className="w-full border-b-[4px] border-[#00ffff] bg-gray-900 flex overflow-x-auto snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.images.map((imgSrc, idx) => (
                  <div key={idx} className="relative w-full min-w-full md:min-w-[80%] aspect-video flex-shrink-0 snap-center border-r-[2px] border-black/50 last:border-0 group">
                    <Image 
                      src={imgSrc} 
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
              {project.images.length > 1 && (
                <div className="bg-[#0a0a0a] border-b-[4px] border-[#00ffff] py-3 text-center text-[#00ffff] text-sm italic tracking-widest font-black uppercase">
                  GESER GAMBAR &rarr;
                </div>
              )}
            </>
          )}

          {/* Body */}
          <div className="p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ffff]/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 z-10">
              {project.tags.map(tag => (
                <span key={tag} className="border-[2px] border-[#00ffff]/40 bg-[#111] text-[#00ffff] font-bold text-sm px-4 py-2 tracking-wider uppercase">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg z-10">
              <p className="italic font-medium text-gray-400 border-l-[4px] border-[#00ffff] pl-5 py-2 bg-[#1a1a1a]">
                {project.description}
              </p>
              <p className="text-gray-200">
                {project.fullDescription}
              </p>
              <p className="text-[#00ffff] text-sm font-bold italic mt-8 tracking-wider">
                TIMELINE: {project.date.toUpperCase()}
              </p>
            </div>

            {/* External Link */}
            <div className="mt-8 z-10">
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-[3px] border-[#00ffff] bg-[#00ffff] text-black px-8 py-4 font-black italic tracking-wider hover:bg-black hover:text-[#00ffff] transition-colors"
              >
                LIHAT HASIL PROJECT &rarr;
              </a>
            </div>

          </div>
        </article>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
