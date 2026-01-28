import { Timeline, type TimelineEntry } from "./ui/Timeline";
import { ShoppingCart, Rocket, Zap, Award } from "lucide-react";

export const Experience = () => {
  const data: TimelineEntry[] = [
    {
      title: "2021",
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
      title: "2022",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <ShoppingCart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-heading text-xl lg:text-2xl font-semibold text-text-primary mb-2">
                Consectetur Adipiscing
              </h4>
              <p className="text-accent text-sm lg:text-base font-medium mb-3">
                Lorem Ipsum • Dolor Sit
              </p>
            </div>
          </div>

          <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>

          <div className="space-y-2">
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Voluptate velit esse cillum dolore</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Eu fugiat nulla pariatur excepteur</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Sint occaecat cupidatat non proident</span>
            </div>
            <div className="flex items-start gap-2 text-text-secondary text-xs lg:text-sm">
              <span className="text-accent">✓</span>
              <span>Sunt in culpa qui officia deserunt</span>
            </div>
          </div>

          <div className="mt-6 p-5 glass-card border border-glass-border rounded-lg backdrop-blur-sm">
            <p className="text-text-primary font-medium text-sm lg:text-base mb-2">
              🏆 Lorem Ipsum Dolor
            </p>
            <ul className="space-y-2 text-text-secondary text-xs lg:text-sm">
              <li>• Consectetur adipiscing elit sed do eiusmod tempor</li>
              <li>• Incididunt ut labore et dolore magna aliqua</li>
              <li>• Ut enim ad minim veniam quis nostrud</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
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
