import Image from 'next/image';

const panels = [
  {
    id: 1,
    imageSrc: "/images/coding-bg.png",
    text: "Semua dimulai dari 'Hello World!'. Dari situ aku mulai suka coding dan terus belajar sampai sekarang."
  },
  {
    id: 2,
    imageSrc: "/images/alam-bg.png",
    text: "Kadang aku suka ke alam, lihat gunung atau laut. Lumayan buat refreshing dari aktivitas sehari-hari."
  },
  {
    id: 3,
    imageSrc: "/images/buku-bg.png",
    text: "Aku juga suka baca buku. Dari situ bisa dapet banyak sudut pandang dan ide baru."
  },
  {
    id: 4,
    imageSrc: "/images/film-bg.png",
    text: "Nonton film jadi hiburan favorit. Seru aja ngikutin cerita dan visualnya."
  },
  {
    id: 5,
    imageSrc: "/images/badmin-bg.png",
    text: "Kalau olahraga, biasanya main badminton. Biar tetap aktif dan nggak cuma di depan layar."
  }
];

export default function OriginsSection() {
  return (
    <section id="origins" className="w-full mt-24 py-12 relative overflow-hidden bg-[#111] border-y-[4px] border-[#00ffff]">

      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-[#00ffff] text-3xl font-black italic uppercase tracking-wider">
          ORIGINS
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="flex animate-marquee w-max hover:[animation-play-state:paused]">

        {/* Set 1 */}
        <div className="flex gap-6 pr-6 pl-6">
          {panels.map((panel) => (
            <div key={`set1-${panel.id}`} className="relative w-[320px] md:w-[386px] h-[350px] md:h-[392px] border-[4px] border-[#00ffff] shrink-0 overflow-hidden bg-[#1a1a1a] group">

              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={panel.imageSrc}
                  alt="Origins panel"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 grayscale transition-opacity duration-500"
                />
              </div>

              {/* Speech Bubble */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="relative bg-[#0a0a0a] border-[3px] border-[#00ffff] p-5 shadow-lg">
                  <p className="text-gray-200 italic text-sm md:text-base leading-relaxed">
                    "{panel.text}"
                  </p>
                  {/* Pointer */}
                  <div className="absolute -bottom-[8px] left-10 w-[14px] h-[14px] bg-[#0a0a0a] border-b-[3px] border-r-[3px] border-[#00ffff] rotate-45"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Set 2 (Duplicate for infinite scroll) */}
        <div className="flex gap-6 pr-6">
          {panels.map((panel) => (
            <div key={`set2-${panel.id}`} className="relative w-[320px] md:w-[386px] h-[350px] md:h-[392px] border-[4px] border-[#00ffff] shrink-0 overflow-hidden bg-[#1a1a1a] group">

              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={panel.imageSrc}
                  alt="Origins panel"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 grayscale transition-opacity duration-500"
                />
              </div>

              {/* Speech Bubble */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="relative bg-[#0a0a0a] border-[3px] border-[#00ffff] p-5 shadow-lg">
                  <p className="text-gray-200 italic text-sm md:text-base leading-relaxed">
                    "{panel.text}"
                  </p>
                  {/* Pointer */}
                  <div className="absolute -bottom-[8px] left-10 w-[14px] h-[14px] bg-[#0a0a0a] border-b-[3px] border-r-[3px] border-[#00ffff] rotate-45"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
