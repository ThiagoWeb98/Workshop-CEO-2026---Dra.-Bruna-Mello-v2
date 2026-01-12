
import React from 'react';

const VideoSection: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Dra. Juliana Silveira",
      role: "Clínica Harmonize (SP)",
      quote: "Saí de um faturamento de 80k para 350k mensais em apenas 4 meses de aplicação. A liberdade geográfica que a Bruna ensina é real.",
      result: "+R$ 270k/mês"
    },
    {
      name: "Renata Mendes",
      role: "Instituto BioEsthetic",
      quote: "O maior ganho não foi só o lucro, foi a paz. Hoje minha equipe roda processos sem eu precisar estar no operacional 12h por dia.",
      result: "Paz Operacional"
    },
    {
      name: "Dra. Camila Farias",
      role: "Dermatologia Avançada",
      quote: "A imersão mudou meu posicionamento. Parei de atrair curiosos e passei a atrair clientes de alto ticket que valorizam meu trabalho.",
      result: "Ticket 3x Maior"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#1a120b] relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <span className="text-[#c8a178] uppercase tracking-[0.6em] text-[9px] mb-8 block font-bold">Elite Estratégica</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f2f0ed] mb-6 leading-tight tracking-tight">
            Resultados de quem <br/>
            <span className="italic text-[#c8a178]">escolheu liderar</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#4a3728]/5 border border-[#c8a178]/5 p-12 rounded-[40px] flex flex-col justify-between hover:border-[#c8a178]/20 hover:bg-[#c8a178]/5 transition-all duration-1000 shadow-xl group">
              <div>
                <span className="text-5xl font-serif text-[#c8a178]/20 mb-8 block group-hover:text-[#c8a178]/40 transition-colors italic">“</span>
                <p className="text-[#f2f0ed]/80 text-base leading-relaxed mb-10 font-light italic">
                  {t.quote}
                </p>
              </div>
              
              <div>
                <div className="flex flex-col mb-8">
                  <span className="text-[#f2f0ed] font-serif text-xl tracking-wide">{t.name}</span>
                  <span className="text-[#c8a178]/60 text-[9px] uppercase tracking-[0.4em] font-bold mt-2">{t.role}</span>
                </div>
                <div className="bg-[#1a120b] p-4 rounded-2xl border border-[#c8a178]/10 flex justify-between items-center group-hover:border-[#c8a178]/30 transition-all">
                  <span className="text-[#c8a178] text-[8px] uppercase tracking-widest font-bold">Resultado:</span>
                  <span className="text-[#f2f0ed] text-[11px] font-bold">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 flex justify-center">
            <button 
              onClick={scrollToOffer}
              className="bg-[#c8a178]/10 border border-[#c8a178]/30 text-[#c8a178] px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#c8a178] hover:text-[#1a120b] transition-all duration-500"
            >
              Fazer parte desse grupo
            </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
