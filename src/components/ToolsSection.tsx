import Image from 'next/image';

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
  return (
    <section id="powers" className="m-4 mt-16 p-4 bg-[#111] border-[4px] border-[#00ffff]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Box - matching the portfolio theme */}
        <div className="mb-12">
          <h2 className="text-[#00ffff] text-3xl text-center font-black italic uppercase tracking-wider">
            POWERS
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 sm:p-5 border border-gray-800 rounded-xl bg-[#0a0a0a] hover:bg-[#1a1a1a] hover:border-gray-600 transition-all duration-300"
            >
              {/* Icon */}
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-gray-100 font-bold text-sm tracking-wide">
                  {tool.name}
                </span>
                <span className="text-gray-500 text-xs mt-0.5">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
