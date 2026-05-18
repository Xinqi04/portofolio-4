import { projects } from '../../lib/projects';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Helper for icons based on index
const getIcon = (index: number) => {
  if (index % 3 === 0) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
  if (index % 3 === 1) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#111] font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-[4px] border-[#00ffff] pb-6">
          <div>
            <h1 className="text-[#00ffff] text-4xl font-black italic uppercase tracking-widest">
              SEMUA MISI
            </h1>
            <p className="text-gray-400 italic mt-2 text-lg">
              Arsip lengkap misi heroik yang telah diselesaikan.
            </p>
          </div>
          <Link href="/#gallery" className="text-[#00ffff] font-black italic hover:underline flex items-center gap-2 mb-2 md:mb-0">
            <span>&larr;</span> KEMBALI
          </Link>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, idx) => (
            <div key={project.id} className="flex flex-col border-[4px] border-[#00ffff] bg-[#0a0a0a] group">

              {/* Header */}
              <div className="bg-[#00ffff] text-black px-4 py-2 flex justify-between items-center">
                <span className="font-bold italic text-sm tracking-wider">{project.episode}</span>
                {getIcon(idx)}
              </div>

              {/* Image Section */}
              <div className="relative h-56 w-full border-b-[4px] border-[#00ffff] overflow-hidden bg-gray-900 group">
                {project.images[0] === '/images/default-project.jpg' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600 text-sm italic">Project Image Placeholder</span>
                  </div>
                ) : (
                  <Image 
                    src={project.images[0]} 
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                )}
              </div>

              {/* Body Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#00ffff] font-black italic tracking-wider mb-4 uppercase text-lg">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-[#00ffff]/40 text-gray-400 text-xs px-2 py-1 tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Action Button */}
                <Link
                  href={`/project/${project.id}`}
                  className="w-full block border-[2px] border-[#00ffff] py-3 text-center text-[#00ffff] font-black italic tracking-wider hover:bg-[#00ffff] hover:text-black transition-colors mt-auto"
                >
                  DETAIL MISI
                </Link>
              </div>

            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
