import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Cpu,
  Star
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HyundaiSpecialty from './components/HyundaiSpecialty';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollCounter, setScrollCounter] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.scrollY;
      const atTopNow = currentPos < 10;
      
      // If we just arrived back at the very top, increment counter to re-trigger Hero key
      if (atTopNow && !isAtTop) {
        setScrollCounter(prev => prev + 1);
      }
      
      setIsAtTop(atTopNow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAtTop]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="flex-grow">
        {/* We use key based on scrollCounter to force Hero to re-mount and re-run its animations when back at top */}
        <Hero key={`hero-animation-${scrollCounter}`} />
        
        {/* Quick Stats */}
        <div className="bg-zinc-900 border-y border-zinc-800 py-8">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-red-600 text-3xl font-bold mb-1">15+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-red-600 text-3xl font-bold mb-1">5000+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">Veículos Atendidos</div>
            </div>
            <div>
              <div className="text-red-600 text-3xl font-bold mb-1">100%</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">Peças Genuínas</div>
            </div>
            <div>
              <div className="text-red-600 text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">Avaliação Google</div>
            </div>
          </div>
        </div>

        <HyundaiSpecialty />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button with Custom Icon */}
      <a 
        href="https://wa.me/559294193789" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all hover:scale-110 z-50 flex items-center justify-center overflow-hidden hover:rotate-6 group"
      >
        <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 group-hover:opacity-10 shadow-[0_0_30px_rgba(220,38,38,0.5)] transition-opacity"></div>
        <img 
          src="https://i.pinimg.com/736x/06/ed/a4/06eda482a54ed3bcfb612c1e6050eddf.jpg" 
          alt="WhatsApp Emanuel Car" 
          className="w-full h-full object-cover transform transition-transform"
          style={{ filter: 'hue-rotate(230deg) saturate(3) brightness(0.8)' }}
        />
      </a>
    </div>
  );
};

export default App;