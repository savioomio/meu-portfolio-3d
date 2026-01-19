import { useState, useEffect } from 'react';
import { Home, User, Cpu, Briefcase, Mail } from 'lucide-react';
import { MenuBar } from '@/components/ui/GlowMenu';
import type { MenuItem } from '@/components/ui/GlowMenu';

import logoSrc from '@/components/assets/logo.png';

import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = true;



  const menuItems: MenuItem[] = [
    {
      icon: Home,
      label: 'Home',
      href: '#home',
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: User,
      label: 'Sobre',
      href: '#about',
      gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
      iconColor: "text-purple-500",
    },
    {
      icon: Cpu,
      label: 'Skills',
      href: '#skills',
      gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    {
      icon: Briefcase,
      label: 'Projetos',
      href: '#projects',
      gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: Mail,
      label: 'Contato',
      href: '#contact',
      gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "text-red-500",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = menuItems.map(item => ({ id: item.href.substring(1), label: item.label }));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-6 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center pointer-events-auto">
        {/* Logo with Bubble Style */}
        <a href="#home" className="group relative z-50">
           <div className={cn(
             "rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg shadow-lg relative overflow-hidden transition-transform duration-300 hover:scale-105",
             isScrolled ? "bg-background/80" : "bg-transparent"
           )}>
             <div className={`absolute bg-gradient-radial from-transparent ${
                isDark
                  ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
                  : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
              } to-transparent rounded-3xl z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
             
                <img src={logoSrc} alt="Logo" className="h-14 w-14" />
           </div>
        </a>

        {/* Desktop Navigation - Glow Menu */}
        <div className="hidden md:block">
          <MenuBar 
            items={menuItems} 
            activeItem={activeSection} 
            onItemClick={(label) => {
               setActiveSection(label);
               // Also scroll to section if needed, but anchor tag in MenuBar handles it naturally if href is correct?
               // MenuBar uses <a> tag so it should work.
            }}
            className={isScrolled ? "bg-background/80" : ""}
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white z-50 focus:outline-none p-2 rounded-2xl bg-black/20 backdrop-blur-lg border-none min-w-14 min-h-14 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden pointer-events-auto ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="w-full max-w-sm px-4 py-20 h-screen bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg shadow-lg">
            <MenuBar 
              items={menuItems} 
              activeItem={activeSection} 
              onItemClick={(label) => {
                 setActiveSection(label);
                 setIsMobileMenuOpen(false);
              }}
              orientation="vertical"
              className="bg-transparent border-none shadow-none w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
