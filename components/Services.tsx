
import React, { useEffect, useRef, useState } from 'react';
import { Wrench, Settings, Droplets, Gauge, Fan, Search, ArrowRight, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Mecânica Geral",
      desc: "Diagnóstico e reparo completo de motores, suspensão e freios com precisão cirúrgica.",
      icon: <Wrench className="text-white" size={28} />,
      id: "01"
    },
    {
      title: "Revisão Premium",
      desc: "Check-up preventivo de 50 itens para garantir performance máxima e segurança.",
      icon: <Search className="text-white" size={28} />,
      id: "02"
    },
    {
      title: "Troca de Fluidos",
      desc: "Óleos sintéticos de alta performance e filtros originais para longevidade do motor.",
      icon: <Droplets className="text-white" size={28} />,
      id: "03"
    },
    {
      title: "Injeção Eletrônica",
      desc: "Mapeamento digital e limpeza de bicos para otimização de consumo e potência.",
      icon: <Gauge className="text-white" size={28} />,
      id: "04"
    },
    {
      title: "Climatização",
      desc: "Higienização completa com ozônio e recarga de gás para conforto térmico ideal.",
      icon: <Fan className="text-white" size={28} />,
      id: "05"
    },
    {
      title: "Transmissão",
      desc: "Manutenção especializada em caixas de câmbio manuais e automáticas.",
      icon: <Settings className="text-white" size={28} />,
      id: "06"
    }
  ];

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-black relative overflow-hidden scroll-mt-20"
    >
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-red-600 font-bold text-xs uppercase tracking-[0.3em]">Expertise Técnica</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter text-white leading-none">
            Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Completas</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed">
            Combinamos tecnologia de diagnóstico avançada com mecânica tradicional de excelência para entregar resultados superiores.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-zinc-900/40 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-red-600/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Background Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-zinc-800/20 group-hover:text-red-600/10 transition-colors duration-500 select-none pointer-events-none font-oswald">
                {service.id}
              </div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-8 relative inline-block">
                  <div className="absolute inset-0 bg-red-600 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
                  <div className="w-16 h-16 bg-zinc-950 rounded-2xl border border-zinc-800 group-hover:border-red-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/50">
                    <div className="text-zinc-400 group-hover:text-red-600 transition-colors duration-300">
                      {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28, className: "transition-colors" })}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-tight text-white group-hover:text-red-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors duration-300 border-b border-zinc-800/50 pb-8 group-hover:border-red-900/30">
                  {service.desc}
                </p>

                <a href="#contato" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-red-500 transition-colors group/btn">
                  Agendar Serviço
                  <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
