'use client';

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';

const tools = [
  { name: 'Visual Studio Code', category: 'Code Editor', icon: '/assets/vscode.png' },
  { name: 'React JS', category: 'Framework', icon: '/assets/reactjs.png' },
  { name: 'Tailwind CSS', category: 'Framework', icon: '/assets/tailwind.png' },
  { name: 'Bootstrap', category: 'Framework', icon: '/assets/bootstrap.png' },
  { name: 'Javascript', category: 'Language', icon: '/assets/js.png' },
  { name: 'Node JS', category: 'Javascript Runtime', icon: '/assets/nodejs.png' },
  { name: 'Github', category: 'Repository', icon: '/assets/github.png' },
  { name: 'Android Studio', category: 'Code Editor', icon: '/assets/as.png' },
  { name: 'Canva', category: 'Design App', icon: '/assets/canva.png' },
  { name: 'Figma', category: 'Design App', icon: '/assets/figma.png' },
  { name: 'Kotlin', category: 'Language', icon: '/assets/kotlin.png' }
];

export default function ToolsSection() {
  const { language } = useLanguage();

  return (
    <section id="powers" className="w-full border-y-[4px] border-[#00ffff] bg-[#0d0f12] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-12 flex items-end gap-5">
          <div className="shrink-0">
            <span className="mb-2 inline-block bg-[#00ffff] px-3 py-1 text-xs font-black italic tracking-[0.2em] text-black">
              TECH STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-wider text-[#00ffff]">
            POWERS
            </h2>
          </div>
          <div className="mb-2 hidden h-[3px] flex-1 bg-[#00ffff]/40 sm:block" />
          <span className="mb-0.5 hidden font-mono text-sm font-bold tracking-widest text-gray-500 sm:block">
            {language === 'id' ? '11 KEMAMPUAN' : '11 ABILITIES'}
          </span>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group relative"
            >
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#00ffff]/20 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

              <div className="relative flex min-h-24 items-center gap-4 border-2 border-[#00ffff]/65 bg-[#101317] p-4 transition-[transform,border-color,background-color] duration-300 group-hover:-translate-y-1 group-hover:border-[#00ffff] group-hover:bg-[#151a1e]">
                <span className="absolute right-3 top-2 font-mono text-[11px] font-black tracking-wider text-[#00ffff]/45">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center border border-[#00ffff]/35 bg-[#07090b] p-2.5">
                  <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tool.icon}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex min-w-0 flex-col pr-5">
                  <span className="text-sm font-black tracking-wide text-gray-100">
                    {tool.name}
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-widest text-[#00ffff]/60">
                    {tool.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
