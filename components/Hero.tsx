
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
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

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://wallpapercave.com/wp/wp10472061.jpg" 
          alt="Premium Automotive Background" 
          className="w-full h-full object-cover opacity-0 animate-bg-hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-4xl pt-10 md:pt-20">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 md:mb-6 opacity-0 animate-reveal-badge" style={{ animationDelay: '0.8s' }}>
            <span className="text-red-600 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] border-l-4 border-red-600 pl-3 md:pl-4">
              Especialista Hyundai & Multimarcas
            </span>
          </div>
          
          {/* Main Title - Responsive sizing */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-8 leading-[0.9] uppercase tracking-tighter opacity-0 animate-reveal-text" style={{ animationDelay: '1.2s' }}>
            EMANUEL <br className="block sm:hidden" /> <span className="text-red-600 italic">CAR</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-zinc-400 text-base md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-xl leading-snug md:leading-tight font-light opacity-0 animate-reveal-text" style={{ animationDelay: '1.5s' }}>
            Alta performance e diagnóstico de precisão para quem exige o melhor do seu motor.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <div className="opacity-0 animate-reveal-btn" style={{ animationDelay: '2s' }}>
              <a 
                href="#contato" 
                onClick={(e) => scrollToSection(e, 'contato')}
                className="animate-pulse-red bg-red-600 hover:bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 group uppercase tracking-widest hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/20 w-full sm:w-auto"
              >
                Agendar Orçamento
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
            
            <div className="opacity-0 animate-reveal-btn" style={{ animationDelay: '2.2s' }}>
              <a 
                href="#servicos" 
                onClick={(e) => scrollToSection(e, 'servicos')}
                className="bg-transparent hover:bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 border border-white/20 uppercase tracking-widest backdrop-blur-sm hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
