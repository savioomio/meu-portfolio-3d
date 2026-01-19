export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative z-10 p-6 md:p-20 overflow-hidden">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-sm text-cyan-400 text-sm font-mono mb-4">
                NAV-SYS: ONLINE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Sávio Pessôa Afonso
            </h1>
            
            <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                PROGRAMADOR FRONT END • WEB, MOBILE & DESKTOP • MODELADOR 3D
            </p>
            
            <p className="text-slate-200 max-w-md mx-auto md:mx-0">
                Transformo ideias em experiências digitais imersivas e funcionais.
            </p>
        </div>
        
        {/* Profile Image - Glass Container */}
        <div className="order-1 md:order-2 flex justify-center relative">
            {/* Decorative Rings */}
            <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-105 animate-pulse"></div>
            <div className="absolute inset-0 border border-purple-500/20 rounded-full scale-125 delay-75"></div>
            
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800/80 shadow-[0_0_40px_rgba(79,70,229,0.3)] backdrop-blur-sm bg-slate-900/50">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/capa_portifolio_mob.webp" />
                    <source media="(min-width: 769px)" srcSet="/capa_portifolio.webp" />
                    <img 
                        src="/capa_portifolio.webp" 
                        alt="Sávio Profile" 
                        width={434}
                        height={434}
                        loading="eager"
                        className="w-full h-full object-cover"
                    />
                </picture>
            </div>
        </div>
        
      </div>
      
      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-10 animate-bounce text-slate-500 text-sm font-light tracking-widest flex-col items-center gap-2">
        SCROLL TO EXPLORE
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  )
}
