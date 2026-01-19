export function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center p-6 relative z-10">
            <div className="max-w-4xl w-full bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 md:p-12 relative overflow-hidden group">
                 {/* Decorative Corner Markers (Sci-Fi HUD) */}
                 <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
                 <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg"></div>

                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
                    <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></span>
                    Sobre Mim_
                 </h2>
                 
                 <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                    <p>
                        Atualmente trabalhando na <strong className="text-white">Wicomm</strong>. 
                        Estudando Inglês na Wise Up (Basic III).
                    </p>
                    <p>
                        Sou especialista em criar interfaces que não apenas funcionam, mas encantam.
                        Minha paixão está na interseção entre código limpo, performance extrema e design de ponta.
                        Seja desenvolvendo para Web, Mobile ou Desktop, meu foco é entregar a melhor experiência possível.
                    </p>
                 </div>
            </div>
        </section>
    )
}
