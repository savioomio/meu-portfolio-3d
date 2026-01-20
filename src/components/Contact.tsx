export function Contact() {
  return (
    <footer id="contact" className="section-padding glass-header relative z-10">
      <div className="container-medium text-center">
         <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">Iniciar Transmissão</h2>
         <p className="text-text-secondary font-body mb-12 max-w-lg mx-auto leading-relaxed">
           Tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia e o universo?
         </p>
         
         <a 
           href="mailto:saviopessaafonso@gmail.com"
           className="btn-primary inline-flex items-center gap-2"
         >
           saviopessaafonso@gmail.com
         </a>

         <div className="mt-16 flex justify-center gap-8">
            <a 
              href="https://linkedin.com/in/savioomio" 
              target="_blank" 
              className="text-text-secondary font-body hover:text-accent transition-colors link-underline"
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com/savioomio" 
              target="_blank" 
              className="text-text-secondary font-body hover:text-accent transition-colors link-underline"
            >
              Instagram
            </a>
            <a 
              href="https://github.com/savioomio" 
              target="_blank" 
              className="text-text-secondary font-body hover:text-accent transition-colors link-underline"
            >
              GitHub
            </a>
         </div>
         
         <div className="mt-20 text-xs font-body text-text-secondary">
           © 2026 Sávio Pessôa Afonso. All systems nominal.
         </div>
      </div>
    </footer>
  )
}
