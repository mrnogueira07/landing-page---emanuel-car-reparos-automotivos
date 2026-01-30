
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ricardo Mendes",
      car: "Hyundai Creta",
      comment: "Melhor oficina para Hyundai em toda a região. Diagnóstico honesto e preço justo. Meu carro parece novo.",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      car: "Honda Civic",
      comment: "Atendimento impecável. Explicam tudo o que precisa ser feito com fotos e vídeos via WhatsApp. Recomendo muito!",
      rating: 5
    },
    {
      name: "João Pedro",
      car: "Toyota Corolla",
      comment: "Profissionais de alto nível. Levei meu carro para uma revisão multimarcas e o cuidado deles foi excepcional.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-zinc-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">O que dizem nossos <span className="text-red-600">Clientes</span></h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />)}
          </div>
          <p className="text-zinc-500">Milhares de motoristas confiam na Emanuel Car para cuidar de seus veículos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-zinc-900 p-8 rounded-2xl relative border border-zinc-800">
              <Quote className="absolute top-4 right-4 text-red-600/20" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="text-red-600 fill-red-600" size={14} />)}
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">"{rev.comment}"</p>
              <div>
                <h4 className="font-bold text-white uppercase">{rev.name}</h4>
                <p className="text-red-500 text-sm font-bold">{rev.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
