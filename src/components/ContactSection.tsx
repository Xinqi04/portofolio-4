export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-[#111] flex justify-center px-4 md:px-8">
      <div className="w-full max-w-6xl relative p-8 md:p-16 flex flex-col items-center justify-center min-h-[400px]">

        {/* Background Question Mark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="text-[250px] md:text-[400px] font-black text-[#00ffff]/10 italic leading-none translate-y-12">
            ?
          </span>
        </div>

        {/* Text BERSAMBUNG... */}
        <div className="relative z-10 mb-8 mt-4">
          <h2 className="text-[#00ffff] font-bold italic tracking-widest text-lg md:text-xl">
            BERSAMBUNG...
          </h2>
        </div>

        {/* Inner Box */}
        <div className="relative z-10 w-full max-w-3xl mb-4">
          {/* Shadow Offset */}
          <div className="absolute inset-0 bg-[#00ffff]/20 translate-x-3 translate-y-3 -z-10"></div>

          <div className="relative border-[4px] border-[#00ffff] bg-[#0a0a0a] p-8 md:p-14 flex flex-col items-center text-center">

            <p className="text-gray-200 italic text-lg md:text-xl font-medium mb-10 leading-relaxed">
              "Apakah Anda siap untuk memulai petualangan berikutnya bersama saya?"
            </p>

            <div className="flex flex-col gap-6 items-center">

              {/* Main Button */}
              <a href="mailto:rizaanwarfadil@gmail.com" className="relative group inline-block">
                {/* Shadow */}
                <div className="absolute inset-0 bg-[#111] border-[3px] border-[#00ffff] translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform -z-10"></div>
                {/* Button Base */}
                <div className="relative bg-[#00ffff] border-[3px] border-[#111] text-[#111] font-black italic px-8 py-3 tracking-widest text-lg hover:bg-white transition-colors">
                  HUBUNGI SAYA!
                </div>
              </a>

              {/* Social Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-4 mt-4 sm:mt-0">
                {/* WhatsApp */}
                <a href="https://wa.me/6285701767698" target="_blank" rel="noopener noreferrer" className="relative group w-14 h-14">
                  <div className="absolute inset-0 bg-[#111] border-[3px] border-[#00ffff] translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform -z-10"></div>
                  <div className="relative w-full h-full border-[3px] border-[#00ffff] bg-[#111] flex items-center justify-center text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Xinqi04" target="_blank" rel="noopener noreferrer" className="relative group w-14 h-14">
                  <div className="absolute inset-0 bg-[#111] border-[3px] border-[#00ffff] translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform -z-10"></div>
                  <div className="relative w-full h-full border-[3px] border-[#00ffff] bg-[#111] flex items-center justify-center text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </div>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/riza-anwar-fadil-ab674b278" target="_blank" rel="noopener noreferrer" className="relative group w-14 h-14">
                  <div className="absolute inset-0 bg-[#111] border-[3px] border-[#00ffff] translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform -z-10"></div>
                  <div className="relative w-full h-full border-[3px] border-[#00ffff] bg-[#111] flex items-center justify-center text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </div>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/riza.nw" target="_blank" rel="noopener noreferrer" className="relative group w-14 h-14">
                  <div className="absolute inset-0 bg-[#111] border-[3px] border-[#00ffff] translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform -z-10"></div>
                  <div className="relative w-full h-full border-[3px] border-[#00ffff] bg-[#111] flex items-center justify-center text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
