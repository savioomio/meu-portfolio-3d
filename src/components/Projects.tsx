export function Projects() {
  const projects = [
    { 
      title: 'E-commerce Platform', 
      desc: 'Plataforma completa de vendas online com integração de pagamentos e gestão de estoque.',
      tech: 'React • TypeScript • Stripe' 
    },
    { 
      title: 'Task Management App', 
      desc: 'Sistema de produtividade para equipes com funcionalidades de tempo real.',
      tech: 'Next.js • Prisma • PostgreSQL' 
    },
    { 
      title: '3D Portfolio Website', 
      desc: 'Este site! Uma experiência imersiva combinando performance web e gráficos 3D.',
      tech: 'React Three Fiber • GSAP' 
    }
  ]

  return (
    <section className="py-20 flex flex-col items-center p-6 relative z-10">
       <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
             <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
             Mission Log (Projetos)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div 
                key={i}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-xl hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 group"
              >
                 <div className="h-40 bg-slate-800/50 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative">
                    {/* Placeholder Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    <span className="text-slate-600 font-mono text-sm border border-slate-700 px-3 py-1 rounded">No Image Signal</span>
                 </div>
                 
                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                   {p.title}
                 </h3>
                 <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                   {p.desc}
                 </p>
                 <div className="text-xs font-mono text-cyan-400 pt-4 border-t border-slate-800">
                   {p.tech}
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}
