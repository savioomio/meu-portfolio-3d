
import { Timeline, type TimelineEntry } from "./ui/Timeline";
import { Rocket, Zap, Award, Cpu, Database, Globe } from "lucide-react";

const VideoPlayer = ({ videoId, title }: { videoId: string; title: string }) => {
  return (
    <div className="w-full max-w-[355px] h-[200px] rounded-lg overflow-hidden relative shadow-lg glass-card group">
      <div className="absolute inset-0 z-10 bg-transparent/10" />
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&playsinline=1&disablekb=1&fs=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="w-full h-full scale-[1.35] pointer-events-none"
      />
    </div>
  );
};

export const Experience = () => {
  const data: TimelineEntry[] = [
    {
      title: "2021/22",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-heading text-xl lg:text-2xl font-semibold text-text-primary mb-2">
                Técnico em Informática para Internet
              </h4>
              <p className="text-accent text-sm lg:text-base font-medium mb-3">
                IF Baiano • Campus Guanambi
              </p>
            </div>
          </div>

          <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
            Em 2021, comecei meu ensino médio integrado com o curso Técnico em Informática para Internet 
            no Instituto Federal de Educação, Ciência e Tecnologia Baiano. Foi lá que tive meu primeiro 
            contato significativo com tecnologia, descobrindo minha paixão por desenvolvimento.
          </p>

          <div className="space-y-2">
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Lógica de Programação</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Webdesign</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Fundamentos de Informática</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Fundamentos de Sistemas Operacionais</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 mt-6">
            <div className="p-4 glass-card border border-glass-border rounded-lg backdrop-blur-sm min-w-[200px]">
              <Award className="w-6 h-6 text-accent mb-2" />
              <p className="text-text-primary text-sm font-medium">Formação Técnica</p>
              <p className="text-text-secondary text-xs mt-1">Ensino Médio Integrado</p>
            </div>
            <div className="p-4 glass-card border border-glass-border rounded-lg backdrop-blur-sm min-w-[200px]">
              <Rocket className="w-6 h-6 text-accent mb-2" />
              <p className="text-text-primary text-sm font-medium">Primeiro Contato</p>
              <p className="text-text-secondary text-xs mt-1">Com Tecnologia</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022/23",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Cpu className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-heading text-xl lg:text-2xl font-semibold text-text-primary mb-2">
                Robótica & Desenvolvimento Web
              </h4>
              <p className="text-accent text-sm lg:text-base font-medium mb-3">
                Projetos Integradores • IF Baiano
              </p>
            </div>
          </div>

          <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
            Já no segundo ano do ensino médio, tive contato com robótica através da disciplina de "Projeto Integrador I",
            onde desenvolvemos projetos fascinantes como uma aranha robô e um sistema de detecção de vazamento de gás.
          </p>

          <div className="flex flex-row flex-wrap gap-3 mt-6">
            <VideoPlayer videoId="ujD9UP9rh4U" title="Aranha Robô - Projeto Integrador" />
            <div className="aspect-square sm:max-h-[200px] relative overflow-hidden rounded-lg group">
              <img
                src="/timeline/control_aranha.webp"
                alt="Controle da Aranha Robô"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square sm:max-h-[200px] relative overflow-hidden rounded-lg group">
              <img
                src="/timeline/sistema_reconhecimento_gas.webp"
                alt="Sistema de detecção de vazamento de gás"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Análise de Sistemas para Web</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Banco de Dados</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Programação de Sistemas para Web I</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Redes de Computadores</span>
            </div>
          </div>

          <div className="mt-4 p-5 glass-card border border-glass-border rounded-lg backdrop-blur-sm">
            <p className="text-text-primary font-medium text-sm lg:text-base mb-2 flex items-center gap-2">
              <Database className="w-4 h-4 text-accent" /> Projeto Integrado
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              As disciplinas de Análise, Banco de Dados e Programação se uniram para um grande trabalho integrado.
              Tivemos a experiência de desenvolver um protótipo de sistema completo, desde o levantamento de requisitos
              e abstração do banco de dados até o sistema documentado.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              O resultado foi um <strong>Sistema de Gerenciamento de Tarefas</strong> com ranking da turma,
              projetado para causar competitividade e estimular a produtividade.
            </p>
            <div className="rounded-lg overflow-hidden group relative w-fit sm:h-[200px] ">
              <img 
                src="/timeline/jsor_projeto_integrado.webp" 
                alt="Sistema de Gerenciamento de Tarefas" 
                className="w-auto h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <h5 className="font-heading text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" /> Estágio no CETEIA
            </h5>
            <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-4">
              Realizei meu estágio obrigatório do IF Baiano (não remunerado) desenvolvendo um site institucional para o <a href="https://www.instagram.com/ceteia_ifbaiano/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">CETEIA</a>,
              garantindo experiência prática com WordPress.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-3">
              <div className="aspect-video max-h-[200px] relative overflow-hidden rounded-lg group ">
                <img 
                  src="/timeline/build_site_ceteia.webp" 
                  alt="Construção do site CETEIA" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square sm:max-h-[200px] relative overflow-hidden rounded-lg group">
                <img 
                  src="/timeline/present_site_ceteia.webp" 
                  alt="Apresentação do site CETEIA" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <a 
              href="https://www.instagram.com/p/CuZ90PeguEZ/?img_index=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm hover:underline"
            >
              Ver post no Instagram <Zap className="w-3 h-3" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2023/24",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Rocket className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-heading text-xl lg:text-2xl font-semibold text-text-primary mb-2">
                Sed Do Eiusmod Tempor
              </h4>
              <p className="text-accent text-sm lg:text-base font-medium mb-3">
                Lorem Ipsum Dolor • Adipiscing & Elit
              </p>
            </div>
          </div>
          
          <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore.
          </p>

          <div className="space-y-2">
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Nemo enim ipsam voluptatem quia voluptas</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Aspernatur aut odit aut fugit sed quia</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Consequuntur magni dolores eos qui ratione</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Neque porro quisquam est qui dolorem</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            <div className="glass-card p-4 text-center border border-glass-border rounded-lg backdrop-blur-sm">
              <p className="text-accent text-2xl font-bold font-heading">+40%</p>
              <p className="text-text-secondary text-xs mt-1">Lorem Ipsum</p>
            </div>
            <div className="glass-card p-4 text-center border border-glass-border rounded-lg backdrop-blur-sm">
              <p className="text-accent text-2xl font-bold font-heading">-60%</p>
              <p className="text-text-secondary text-xs mt-1">Dolor Sit</p>
            </div>
            <div className="glass-card p-4 text-center border border-glass-border rounded-lg backdrop-blur-sm">
              <p className="text-accent text-2xl font-bold font-heading">95+</p>
              <p className="text-text-secondary text-xs mt-1">Amet</p>
            </div>
            <div className="glass-card p-4 text-center border border-glass-border rounded-lg backdrop-blur-sm">
              <p className="text-accent text-2xl font-bold font-heading">100%</p>
              <p className="text-text-secondary text-xs mt-1">Consectetur</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experience" className="min-h-screen w-full section-padding">
      <Timeline data={data} />
    </section>
  );
};
