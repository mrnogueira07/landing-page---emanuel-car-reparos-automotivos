
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const businessName = "Emanuel Car Reparos Automotivos";
  const address = "R. Nossa Sra. de Fátima, 88 - Nova Esperança, Manaus - AM, 69037-504, Brasil";
  
  // Combine business name and address for a more precise search result on Google Maps
  const searchQuery = `${businessName}, ${address}`;
  const fallbackMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(searchQuery)}&output=embed`;

  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    car: '',
    msg: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, tel, car, msg } = formData;

    // Construct the formatted message
    const whatsappMessage = `*OLÁ, EQUIPE EMANUEL CAR!* 🚗\n\n` +
      `Estou entrando em contato através do site e gostaria de um atendimento:\n\n` +
      `👤 *Nome:* ${name || 'Não informado'}\n` +
      `📱 *Contato:* ${tel || 'Não informado'}\n` +
      `🚘 *Veículo:* ${car || 'Não informado'}\n` +
      `🔧 *Relato do Problema:* ${msg || 'Não detalhado'}\n\n` +
      `_Aguardo retorno sobre disponibilidade._`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "559294193789";
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Info Side - Lean & Focused */}
          <div className="lg:w-2/5 w-full lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter leading-none">
              VAMOS <br /><span className="text-red-600">CONVERSAR?</span>
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-sm">
              Escolha o canal de sua preferência. Estamos prontos para cuidar do seu veículo.
            </p>
            
            <div className="space-y-8 mb-12">
              <a 
                href="https://wa.me/559294193789" 
                target="_blank" 
                className="flex items-center gap-6 group"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative w-full h-full bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden flex items-center justify-center transition-all group-hover:border-red-600">
                    <img 
                      src="https://i.pinimg.com/736x/06/ed/a4/06eda482a54ed3bcfb612c1e6050eddf.jpg" 
                      alt="WhatsApp Icon" 
                      className="w-full h-full object-cover rounded-full"
                      style={{ filter: 'hue-rotate(230deg) saturate(3) brightness(0.8)' }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-1">WhatsApp Rápido</h4>
                  <p className="text-zinc-400 text-lg font-light group-hover:text-white transition-colors">(92) 9419-3789</p>
                </div>
              </a>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="bg-zinc-900 p-4 rounded-full border border-zinc-800 text-zinc-600">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-1">Endereço</h4>
                    <p className="text-zinc-400 text-lg font-light">R. Nossa Sra. de Fátima, 88<br/>Nova Esperança, Manaus - AM</p>
                    <p className="text-zinc-600 text-sm mt-1">CEP: 69037-504</p>
                  </div>
                </div>

                {/* Google Maps Embed Container */}
                <div className="w-full mt-2 group relative">
                  <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                  <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden h-64 w-full shadow-2xl">
                    <iframe 
                      title="Localização Emanuel Car Reparos Automotivos"
                      src={fallbackMapUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-zinc-700 text-white p-2 rounded-lg flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 transition-colors"
                    >
                      Abrir no Maps
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="bg-zinc-900 p-4 rounded-full border border-zinc-800 text-zinc-600">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-1">Horário</h4>
                  <p className="text-zinc-400 text-lg font-light">Seg-Sex: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side - Minimalist & Direct */}
          <div className="lg:w-3/5 w-full">
            <div className="bg-zinc-900/40 p-8 md:p-12 rounded-[3rem] border border-zinc-800/40 backdrop-blur-md">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-red-600 outline-none transition-all placeholder-transparent" 
                      placeholder="Nome"
                      required
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-zinc-600 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-red-600 peer-focus:text-xs">
                      Seu Nome
                    </label>
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      id="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-red-600 outline-none transition-all placeholder-transparent" 
                      placeholder="WhatsApp"
                      required
                    />
                    <label htmlFor="tel" className="absolute left-0 -top-3.5 text-zinc-600 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-red-600 peer-focus:text-xs">
                      Seu WhatsApp
                    </label>
                  </div>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    id="car"
                    value={formData.car}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-red-600 outline-none transition-all placeholder-transparent" 
                    placeholder="Veículo"
                  />
                  <label htmlFor="car" className="absolute left-0 -top-3.5 text-zinc-600 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-red-600 peer-focus:text-xs">
                    Modelo do Veículo
                  </label>
                </div>

                <div className="relative">
                  <textarea 
                    id="msg"
                    value={formData.msg}
                    onChange={handleChange}
                    className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-red-600 outline-none transition-all h-20 resize-none placeholder-transparent" 
                    placeholder="O que o carro apresenta?"
                  ></textarea>
                  <label htmlFor="msg" className="absolute left-0 -top-3.5 text-zinc-600 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-700 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-red-600 peer-focus:text-xs">
                    O que o carro apresenta?
                  </label>
                </div>

                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 rounded-full uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-red-600/10">
                  ENVIAR VIA WHATSAPP
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
