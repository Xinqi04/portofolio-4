'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { certificates, Certificate } from '../lib/certificates';
import PdfPreviewModal from './PdfPreviewModal';

// Helper for award icons
const getAwardIcon = (index: number) => {
  if (index % 3 === 0) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
  if (index % 3 === 1) return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
};

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreview = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="certificates" className="w-full py-16 bg-[#111] border-t-[4px] border-[#00ffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="mb-12">
          <h2 className="text-[#00ffff] text-3xl font-black italic uppercase tracking-wider">
            CERTIFICATES
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.slice(0, 3).map((cert, idx) => (
            <div key={cert.id} className="flex flex-col border-[4px] border-[#00ffff] bg-[#0a0a0a] group">

              {/* Header */}
              <div className="bg-[#00ffff] text-black px-4 py-2 flex justify-between items-center">
                <span className="font-bold italic text-sm tracking-wider">{cert.award}</span>
                {getAwardIcon(idx)}
              </div>

              {/* Image Section */}
              <div className="relative h-56 w-full border-b-[4px] border-[#00ffff] overflow-hidden bg-gray-900 group">
                <Image 
                  src={cert.imageUrl} 
                  alt={cert.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Body Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[#00ffff] font-black italic tracking-wider mb-2 uppercase text-lg leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-6">
                  ISSUER: <span className="text-white">{cert.issuer}</span>
                </p>

                {/* Action Button */}
                <button
                  onClick={() => handlePreview(cert)}
                  className="w-full block border-[2px] border-[#00ffff] py-3 text-center text-[#00ffff] font-black italic tracking-wider hover:bg-[#00ffff] hover:text-black transition-colors mt-auto cursor-pointer"
                >
                  PRATINJAU PDF
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/certificates"
            className="inline-block border-[3px] border-[#00ffff] bg-transparent text-[#00ffff] px-10 py-4 font-black italic tracking-widest hover:bg-[#00ffff] hover:text-black transition-all duration-300"
          >
            LIHAT SEMUA SERTIFIKAT &rarr;
          </Link>
        </div>

      </div>

      {/* Pop-up PDF Preview Modal */}
      {selectedCert && (
        <PdfPreviewModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pdfUrl={selectedCert.pdfUrl}
          title={selectedCert.title}
        />
      )}
    </section>
  );
}
