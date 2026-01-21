import { FocusRail, type FocusRailItem } from "./ui/FocusRail";

export function Projects() {
  const projects: FocusRailItem[] = [
    { 
      id: 1,
      title: 'E-commerce Platform', 
      description: 'Plataforma completa de vendas online com integração de pagamentos e gestão de estoque.',
      tech: 'React • TypeScript • Stripe',
      meta: 'Full-Stack • E-commerce',
      imageSrcDesktop: '/projects/ecommerce-desktop.png',
      imageSrcMobile: '/projects/ecommerce-mobile.png',
      href: 'https://github.com/savioomio' // Substitua pelo link real do projeto
    },
    { 
      id: 2,
      title: 'Task Management App', 
      description: 'Sistema de produtividade para equipes com funcionalidades de tempo real.',
      tech: 'Next.js • Prisma • PostgreSQL',
      meta: 'Productivity • Real-time',
      imageSrcDesktop: '/projects/task-management-desktop.png',
      imageSrcMobile: '/projects/task-management-mobile.png',
      href: 'https://github.com/savioomio' // Substitua pelo link real do projeto
    },
    { 
      id: 3,
      title: '3D Portfolio Website', 
      description: 'Este site! Uma experiência imersiva combinando performance web e gráficos 3D.',
      tech: 'React Three Fiber • GSAP • Framer Motion',
      meta: 'Portfolio • 3D Graphics',
      imageSrcDesktop: '/projects/portfolio-3d-desktop.png',
      imageSrcMobile: '/projects/portfolio-3d-mobile.png',
      href: 'https://github.com/savioomio/meu-portfolio-3d'
    }
  ]

  return (
    <section id="projects" className="section-padding flex flex-col items-center relative z-10">
       {/* Title and Description with Container */}
       <div className="container-base w-full mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
             <span className="w-2 h-10 bg-accent rounded-full"></span>
             Mission Log (Projetos)
          </h2>

          <p className="text-text-secondary font-body text-center max-w-2xl mx-auto">
            Navegue pelo carrossel usando as setas, mouse wheel, ou arraste os cards para explorar os projetos.
          </p>
       </div>

       {/* FocusRail 3D Carousel - Full Width */}
       <FocusRail 
         items={projects} 
         autoPlay={false} 
         loop={true}
         className="w-full"
       />
    </section>
  )
}
