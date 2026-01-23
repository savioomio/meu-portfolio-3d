export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative z-10 section-padding overflow-hidden">
      
      <div className="container-base w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-glass backdrop-blur-md text-accent text-sm font-body font-medium mb-4 bg-glass-primary">
                NAV-SYS: ONLINE
            </div>
            
            <h1 className="font-heading text-5xl lg:text-7xl font-bold tracking-tight text-white">
              Sávio Pessôa Afonso
            </h1>
            
            <p className="text-text-primary font-body text-lg lg:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                PROGRAMADOR FRONT END • WEB, MOBILE & DESKTOP • MODELADOR 3D
            </p>
            
            <p className="text-text-secondary font-body max-w-md mx-auto lg:mx-0">
                Transformo ideias em experiências digitais imersivas e funcionais.
            </p>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center relative">
            
            <div className="relative overflow-hidden">
                <picture>
                    <source 
                        media="(max-width: 768px)" 
                        srcSet="/capa_portifolio_mob.webp?v=2" 
                        type="image/webp"
                        width="500"
                        height="500"
                    />
                    <source 
                        media="(min-width: 769px)" 
                        srcSet="/capa_portifolio_desk.webp" 
                        type="image/webp"
                        width="800"
                        height="800"
                    />
                    <img 
                        src="/capa_portifolio_desk.webp" 
                        alt="Sávio Profile" 
                        width={800}
                        height={800}
                        loading="eager"
                        className="w-full h-full object-contain"
                    />
                </picture>
                <div 
                    className="block absolute inset-0 pointer-events-none"
                    style={{
                        background: `
                            linear-gradient(to bottom, rgba(0,0,0,1) 0%, transparent 15%),
                            linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 15%),
                            linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 15%),
                            linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 15%)
                        `
                    }}
                />
            </div>
        </div>
      </div>
    </section>
  )
}
