
import React from 'react';
import { Instagram, Facebook, Youtube, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://i.pinimg.com/736x/c7/f8/0a/c7f80a6a8215cebc0ea93ea6671c1daf.jpg";
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border border-red-600/30 shadow-[0_0_12px_rgba(220,38,38,0.15)]">
                <img 
                  src={logoUrl} 
                  alt="Emanuel Car Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter leading-none uppercase">EMANUEL CAR</span>
                <span className="text-xs text-red-600 font-bold uppercase tracking-[0.3em]">Reparos Automotivos</span>
              </div>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              Especialistas em mecânica de precisão. Compromisso com a transparência, peças de qualidade e a melhor experiência para você e seu Hyundai.
            </p>
            <div className="flex items-start gap-3 text-zinc-500 mb-8">
              <MapPin size={18} className="text-red-600 mt-1 flex-shrink-0" />
              <p className="text-sm">
                R. Nossa Sra. de Fátima, 88 - Nova Esperança<br/>
                Manaus - AM, 69037-504
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-zinc-900 p-3 rounded-full hover:bg-red-600 transition-colors text-zinc-400 hover:text-white border border-zinc-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-full hover:bg-red-600 transition-colors text-zinc-400 hover:text-white border border-zinc-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-zinc-900 p-3 rounded-full hover:bg-red-600 transition-colors text-zinc-400 hover:text-white border border-zinc-800">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-500 hover:text-red-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-zinc-500 hover:text-red-500 transition-colors">Sobre a Oficina</a></li>
              <li><a href="#servicos" className="text-zinc-500 hover:text-red-500 transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" className="text-zinc-500 hover:text-red-500 transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-6 tracking-widest text-sm">Serviços</h4>
            <ul className="space-y-4 text-zinc-500">
              <li>Injeção Eletrônica</li>
              <li>Câmbio Automático</li>
              <li>Suspensão & Freios</li>
              <li>Manutenção Preventiva</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Emanuel Car Reparos Automotivos. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs uppercase tracking-widest">
            Design & Tecnologia para o seu Motor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
