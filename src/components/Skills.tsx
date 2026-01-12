export function Skills() {
  const skills = [
    'Arduino', 'C', 'Bootstrap', 'Tailwind', 'PHP', 
    'WordPress', 'Python', 'Django', 'JavaScript', 
    'React', 'TypeScript', 'Three.js', 'Next.js'
  ]

  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative z-10">
       <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Tech Stack
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-200 mt-4 max-w-lg mx-auto">
              Ferramentas e tecnologias que utilizo para transformar ideias em código.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, i) => (
              <div 
                key={i}
                className="group relative px-6 py-3 bg-slate-800/40 backdrop-blur-md border border-slate-700 rounded-full hover:border-cyan-500/50 transition-all duration-300 cursor-default"
              >
                 <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <span className="relative text-slate-300 group-hover:text-cyan-300 font-medium">
                   {skill}
                 </span>
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}
