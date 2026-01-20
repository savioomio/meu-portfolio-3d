export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative z-10 section-padding overflow-hidden">
      
      <div className="container-base w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-glass backdrop-blur-md text-accent text-sm font-body font-medium mb-4 bg-glass-primary">
                NAV-SYS: ONLINE
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white">
              Sávio Pessôa Afonso
            </h1>
            
            <p className="text-text-primary font-body text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                PROGRAMADOR FRONT END • WEB, MOBILE & DESKTOP • MODELADOR 3D
            </p>
            
            <p className="text-text-secondary font-body max-w-md mx-auto md:mx-0">
                Transformo ideias em experiências digitais imersivas e funcionais.
            </p>
        </div>
        
        {/* Profile Image - Glass Container */}
        <div className="order-1 md:order-2 flex justify-center relative">
            {/* Decorative Rings */}
            <div className="absolute inset-0 border border-accent/20 rounded-full scale-105 animate-pulse"></div>
            <div className="absolute inset-0 border border-accent/10 rounded-full scale-125 delay-75"></div>
            
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-glass backdrop-blur-sm bg-glass-secondary shadow-glow-accent">
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
      <div className="hidden md:flex absolute bottom-10 animate-bounce text-text-disabled text-sm font-body font-light tracking-widest flex-col items-center gap-2">
        SCROLL TO EXPLORE
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  )
}
