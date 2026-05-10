
const timelineData = [
  {
    id: 1,
    year: '2022 - SEKARANG',
    title: 'MAHASISWA TEKNIK INFORMATIKA',
    description: 'Menempuh pendidikan di Teknik Informatika dengan fokus pada pengembangan web, backend development, dan Machine Learning.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    )
  },
  {
    id: 2,
    year: '2025',
    title: 'DBS CODING CAMP',
    description: 'Mengikuti program DBS Coding Camp untuk memperdalam kemampuan pemrograman, problem solving, dan pengembangan aplikasi modern.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  },
  {
    id: 3,
    year: '2026',
    title: 'JUNIOR WEB DEVELOPMENT',
    description: 'Mengembangkan kemampuan sebagai Junior Web Developer dengan membangun website responsif serta khususnya di bidang frontend development.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-24 bg-[#111] relative overflow-hidden">

      {/* Decorative dashed lines */}
      <div className="absolute top-[120px] w-full border-t border-dashed border-[#00ffff]/50"></div>
      <div className="absolute bottom-[40px] w-full border-t border-dashed border-[#00ffff]/50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title Box */}
        <div className="inline-block border-[3px] border-[#00ffff] bg-[#001111] px-6 py-3 mb-24">
          <h2 className="text-[#00ffff] text-xl font-black italic tracking-widest uppercase">
            TIMELINE
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-8">

          {/* Central Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[4px] bg-[#00ffff] transform -translate-x-1/2 z-0"></div>

          <div className="flex flex-col gap-16 md:gap-24">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={item.id} className="relative w-full flex">

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isLeft ? 'md:pr-16 md:mr-auto' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="relative group">

                      {/* Box Shadow */}
                      <div className="absolute inset-0 bg-[#00ffff]/10 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>

                      <div className="border-[4px] border-[#00ffff] bg-[#0a0a0a] p-8 md:p-10 w-full relative z-10">
                        {/* Year Badge */}
                        <div className="bg-[#c4c4ff] text-[#000033] inline-block px-4 py-1.5 font-bold italic text-sm mb-6 tracking-wider shadow-[2px_2px_0px_#00ffff]">
                          {item.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-[#00ffff] font-black italic tracking-widest mb-4 uppercase text-lg md:text-xl">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 italic text-base md:text-lg leading-relaxed font-medium">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Diamond Icon */}
                  <div className="absolute left-8 md:left-1/2 w-14 h-14 bg-[#0a0a0a] border-[4px] border-[#00ffff] rotate-45 transform -translate-x-1/2 mt-8 md:mt-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:bg-[#002222]">
                    <div className="-rotate-45 text-[#00ffff]">
                      {item.icon}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
