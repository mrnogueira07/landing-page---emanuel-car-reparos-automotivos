
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const logoUrl = "https://i.pinimg.com/736x/c7/f8/0a/c7f80a6a8215cebc0ea93ea6671c1daf.jpg";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'sobre', 'servicos', 'depoimentos', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setIsMenuOpen(false);
      const offset = 90; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Depoimentos', href: '#depoimentos', id: 'depoimentos' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'top-4 w-[95%] max-w-[1400px] bg-black/80 backdrop-blur-xl border border-zinc-800 py-2 rounded-2xl shadow-2xl shadow-black/50' 
        : 'top-0 w-full bg-transparent py-4 md:py-8'
    }`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Pushed more to the left by the max-width increase and responsive padding */}
          <div className="flex items-center opacity-0 animate-nav-item">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex-shrink-0 flex items-center gap-3 md:gap-4 group transition-transform hover:scale-105 active:scale-95"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg md:rounded-xl overflow-hidden border border-red-600/40 shadow-[0_0_15px_rgba(220,38,38,0.2)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] group-hover:border-red-600 group-hover:rotate-2 transition-all duration-700 ease-in-out">
                <img 
                  src={logoUrl} 
                  alt="Emanuel Car Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-3xl font-black tracking-tighter leading-none text-white group-hover:text-red-600 transition-colors uppercase">EMANUEL CAR</span>
                <span className="text-[8px] md:text-xs text-zinc-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">Reparos Automotivos</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-3 xl:px-5 py-2 text-[10px] xl:text-xs font-bold transition-all uppercase tracking-widest group opacity-0 animate-nav-item ${
                    activeSection === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.15}s` }}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform transition-transform duration-300 origin-left ${
                    activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              ))}
              <div className="pl-6 opacity-0 animate-nav-item" style={{ animationDelay: `${0.1 + navLinks.length * 0.15}s` }}>
                <a 
                  href="#contato" 
                  onClick={(e) => handleLinkClick(e, '#contato')}
                  className="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-full text-[10px] xl:text-xs font-black transition-all uppercase tracking-[0.2em] shadow-xl shadow-red-600/20 hover:shadow-red-600/40 active:scale-95 inline-block group"
                >
                  <span className="relative z-10">Agendar</span>
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 ease-in-out"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all focus:outline-none active:scale-90"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-[80px] md:top-[100px] left-0 w-full bg-black/98 backdrop-blur-3xl transition-all duration-500 ease-in-out border-b border-zinc-900 overflow-hidden rounded-b-2xl ${
        isMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-6 py-8 space-y-1 flex flex-col items-center text-center">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 transform border-b border-zinc-900/50 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${
                activeSection === link.id ? 'text-red-600' : 'text-zinc-400 hover:text-white'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className={`pt-8 w-full transition-all duration-500 transform ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`} style={{ transitionDelay: `${navLinks.length * 50}ms` }}>
            <a 
              href="#contato" 
              onClick={(e) => handleLinkClick(e, '#contato')}
              className="w-full block bg-red-600 hover:bg-red-700 text-white py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] active:scale-95 shadow-2xl shadow-red-600/30"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
