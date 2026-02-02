import React, { useRef, useState, useEffect } from 'react';
import { Award, User, Layers } from 'lucide-react';

const HyundaiSpecialty: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sequence of images to simulate a story/process as user scrolls
  const images = [
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=1000", // Wide view of shop
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1000", // Mechanic inspecting engine
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000"  // Engine bay detail
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to the section's visibility
      const scrollDistance = windowHeight + height;
      const position = windowHeight - top;
      
      // Normalize position to 0-1
      const progress = position / scrollDistance;
      
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const index = Math.min(Math.floor(clampedProgress * images.length), images.length - 1);
      
      setCurrentImageIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images.length]);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden scroll-mt-24"
    >
      {/* Decorative background text */}
      <div className="absolute -top-5 md:-top-10 -right-10 md:-right-20 text-[100px] md:text-[180px] font-bold text-white/[0.02] select-none pointer-events-none uppercase leading-none">
        Paixão
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 md:gap-16 lg:items-center">
        {/* Image Section - Dynamic Scroll Frame */}
        <div className="relative group order-2 lg:order-1 h-full min-h-[400px] md:min-h-[500px]">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-red-600 to-zinc-800 rounded-2xl blur opacity-10 md:opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative overflow-hidden rounded-2xl w-full h-full aspect-[4/3] bg-zinc-900 border border-zinc-800/50 shadow-2xl">
             {images.map((img, index) => (
               <img 
                key={img}
                src={img} 
                alt={`Emanuel Car Oficina Frame ${index + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  index === currentImageIndex 
                    ? 'opacity-100 scale-105 blur-0' 
                    : 'opacity-0 scale-100 blur-sm'
                }`}
                style={{ zIndex: index === currentImageIndex ? 10 : 0 }}
              />
             ))}
            
            {/* Tag Overlay - Constant */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/80 backdrop-blur-md border border-zinc-700 text-white p-4 md:p-5 rounded-xl shadow-xl z-20">
              <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest mb-1">Certificação Master</p>
              <p className="text-lg md:text-xl font-bold leading-none">Excelência Técnica</p>
            </div>
            
            {/* Scroll Indicator Hint */}
            <div className="absolute bottom-4 right-4 z-20 flex gap-1">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    idx === currentImageIndex ? 'bg-red-600' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Text Section - The Story */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-red-600"></div>
            <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-sm">Nossa História</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tighter leading-tight">
            Mais que Mecânica, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Uma Paixão por Motores</span>
          </h2>
          
          <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p>
              A <strong>Emanuel Car</strong> nasceu de um fascínio de infância: entender exatamente como as coisas funcionam. O que começou como curiosidade transformou-se em mais de 15 anos de dedicação total à engenharia automotiva.
            </p>
            <p>
              Não tratamos carros apenas como máquinas, mas como parte fundamental da vida de nossos clientes. Entendemos que cada veículo carrega histórias, compromissos e famílias.
            </p>
            <p className="text-white border-l-4 border-red-600 pl-4 py-1 bg-zinc-900/50 rounded-r-lg">
              "Nosso objetivo não é apenas consertar o defeito, mas devolver a confiança que você tem no seu carro."
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-900 hover:border-red-900/50 transition-all">
              <div className="bg-zinc-900 p-3 rounded-lg h-fit border border-zinc-800">
                <Award className="text-red-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">DNA Hyundai</h4>
                <p className="text-zinc-500 text-sm leading-snug">Especialização profunda nos sistemas da marca coreana, utilizando ferramental e diagnósticos originais.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/30 border border-zinc-900 hover:border-red-900/50 transition-all">
              <div className="bg-zinc-900 p-3 rounded-lg h-fit border border-zinc-800">
                <Layers className="text-red-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Domínio Multimarcas</h4>
                <p className="text-zinc-500 text-sm leading-snug">Aplicamos o mesmo rigor técnico e precisão de concessionária para veículos de todas as montadoras.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HyundaiSpecialty;