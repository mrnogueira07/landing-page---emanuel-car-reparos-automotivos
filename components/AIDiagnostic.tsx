
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Cpu, Info, Send, Loader2 } from 'lucide-react';

const AIDiagnostic: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ cause: string, severity: string, advice: string } | null>(null);

  const handleDiagnosis = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analise os seguintes sintomas de um veículo e sugira causas prováveis, nível de urgência e conselhos iniciais. Retorne APENAS um JSON estruturado. Sintomas: ${query}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              cause: { type: Type.STRING, description: 'Provável causa mecânica' },
              severity: { type: Type.STRING, description: 'Gravidade (Baixa, Média, Alta)' },
              advice: { type: Type.STRING, description: 'Conselho imediato para o motorista' }
            },
            required: ['cause', 'severity', 'advice']
          }
        }
      });

      const data = JSON.parse(response.text);
      setResult(data);
    } catch (error) {
      console.error("AI Error:", error);
      setResult({
        cause: "Não foi possível processar o diagnóstico automaticamente.",
        severity: "N/A",
        advice: "Por favor, entre em contato via WhatsApp para uma avaliação humana."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-diagnostic" className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950 scroll-mt-24 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-red-600 p-6 md:p-10 flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-center sm:text-left">
            <Cpu className="text-white" size={40} />
            <div>
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-none">Assistente Digital</h2>
              <p className="text-white/80 text-xs md:text-sm mt-2 tracking-wide font-medium uppercase">Diagnóstico inteligente instantâneo.</p>
            </div>
          </div>

          <div className="p-6 md:p-12">
            <form onSubmit={handleDiagnosis} className="space-y-6 md:space-y-8">
              <div>
                <label className="block text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">O que seu carro apresenta?</label>
                <textarea 
                  className="w-full bg-black border border-zinc-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-white focus:border-red-600 outline-none transition-all h-32 md:h-40 resize-none placeholder:text-zinc-700 text-sm md:text-base"
                  placeholder="Ex: Barulho metálico ao frear, luz da injeção acesa..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white font-black py-4 md:py-6 rounded-full uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 text-xs md:text-sm shadow-xl shadow-red-600/10"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                {loading ? 'Analisando...' : 'Solicitar Diagnóstico AI'}
              </button>
            </form>

            {result && (
              <div className="mt-8 md:mt-12 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
                  <div className="bg-black p-4 md:p-6 border border-zinc-800 rounded-xl md:rounded-2xl">
                    <span className="text-red-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest block mb-2">Causa</span>
                    <p className="text-white font-bold text-xs md:text-sm">{result.cause}</p>
                  </div>
                  <div className="bg-black p-4 md:p-6 border border-zinc-800 rounded-xl md:rounded-2xl">
                    <span className="text-red-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest block mb-2">Gravidade</span>
                    <p className={`font-black text-xs md:text-sm uppercase ${result.severity.toLowerCase().includes('alta') ? 'text-red-600' : 'text-yellow-500'}`}>
                      {result.severity}
                    </p>
                  </div>
                  <div className="bg-black p-4 md:p-6 border border-zinc-800 rounded-xl md:rounded-2xl">
                    <span className="text-red-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest block mb-2">Conselho</span>
                    <p className="text-zinc-400 text-[10px] md:text-xs leading-relaxed">{result.advice}</p>
                  </div>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl flex items-start gap-3 border border-zinc-900">
                  <Info className="text-zinc-700 flex-shrink-0" size={16} />
                  <p className="text-zinc-600 text-[9px] md:text-[10px] italic">
                    Tecnologia experimental. Sempre valide com nossa equipe técnica presencialmente.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostic;
