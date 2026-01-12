export function Contact() {
  return (
    <footer className="py-20 border-t border-slate-800 bg-black/60 backdrop-blur-lg relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
         <h2 className="text-3xl font-bold text-white mb-8">Iniciar Transmissão</h2>
         <p className="text-slate-400 mb-8 max-w-lg mx-auto">
           Tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia e o universo?
         </p>
         
         <a 
           href="mailto:saviopessaafonso@gmail.com"
           className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:text-black text-black font-bold rounded-full hover:scale-105 transition-all duration-300"
         >
           saviopessaafonso@gmail.com
         </a>

         <div className="mt-12 flex justify-center gap-8">
            <a href="https://linkedin.com/in/savioomio" target="_blank" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com/savioomio" target="_blank" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
            <a href="https://github.com/savioomio" target="_blank" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
         </div>
         
         <div className="mt-20 text-xs text-slate-500">
           © 2026 Sávio Pessôa Afonso. All systems nominal.
         </div>
      </div>
    </footer>
  )
}
