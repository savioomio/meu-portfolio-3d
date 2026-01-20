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
    <section id="projects" className="section-padding flex flex-col items-center relative z-10">
       <div className="container-base w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
             <span className="w-2 h-10 bg-accent rounded-full"></span>
             Mission Log (Projetos)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div 
                key={i}
                className="glass-card p-8 hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                 <div className="h-40 bg-glass-primary rounded-lg mb-6 flex items-center justify-center overflow-hidden relative border border-glass">
                    {/* Placeholder Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <span className="text-text-disabled font-body text-sm border border-glass px-3 py-1 rounded relative z-10">No Image Signal</span>
                 </div>
                 
                 <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                   {p.title}
                 </h3>
                 <p className="text-text-secondary font-body text-sm mb-6 leading-relaxed">
                   {p.desc}
                 </p>
                 <div className="text-xs font-body text-accent pt-4 border-t border-glass">
                   {p.tech}
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}
