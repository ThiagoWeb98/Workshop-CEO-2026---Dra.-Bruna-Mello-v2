
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
      result: "Liberdade Operacional"
    },
    {
      name: "Dra. Camila Farias",
      role: "Dermatologia Avançada",
      quote: "A imersão mudou meu posicionamento. Parei de atrair curiosos e passei a atrair clientes de alto ticket que valorizam meu trabalho.",
      result: "Ticket Médio 3x Maior"
    },
    {
      name: "Dra. Letícia Pontes",
      role: "Clínica Pontes",
      quote: "Antes eu era escrava da minha agenda. Hoje tenho clareza de cada centavo que entra e sai. O lucro triplicou em 6 meses.",
      result: "Lucro Líquido +200%"
    },
    {
      name: "Beatriz Amaral",
      role: "Studio BA",
      quote: "A planilha de precificação valeu cada centavo. Descobri que estava pagando para trabalhar em protocolos que eu achava lucrativos.",
      result: "Margem de Lucro 45%"
    },
    {
      name: "Mariana Costa",
      role: "CEO Mariana Costa Estética",
      quote: "O plano de ação do dia 3 foi o divisor de águas. Implementamos a escada de valor e o ticket médio subiu instantaneamente.",
      result: "Ticket +R$ 1.200"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#1a120b] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[8px] md:text-[10px] mb-6 block font-bold">A Prova da Metodologia</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#f2f0ed] mb-4 leading-tight">
            Resultados reais de quem <br/>
            <span className="italic text-[#c8a178]">decidiu ser CEO</span>.
          </h2>
          <p className="text-[#c5a689] text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] mt-6 md:mt-8 font-light">Documentando o crescimento da elite da estética brasileira</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#4a3728]/10 border border-[#c8a178]/10 p-8 md:p-10 relative group hover:border-[#c8a178]/40 transition-all duration-700 shadow-2xl backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="text-4xl md:text-5xl font-serif text-[#c8a178]/10 group-hover:text-[#c8a178]/20 transition-colors mb-4 md:mb-0">“</div>
                <p className="text-[#f2f0ed]/90 text-[13px] md:text-[14px] leading-relaxed mb-8 font-light italic relative z-10">
                  {t.quote}
                </p>
              </div>
              
              <div>
                <div className="flex flex-col border-t border-[#c8a178]/5 pt-6 md:pt-8">
                  <span className="text-[#f2f0ed] font-serif text-lg tracking-wide">{t.name}</span>
                  <span className="text-[#c8a178] text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold mt-2">{t.role}</span>
                </div>
                <div className="mt-6 md:mt-8 flex justify-between items-center bg-[#1a120b]/50 p-3 md:p-4 border-l-2 border-[#c8a178]">
                  <span className="text-[#c8a178] text-[7px] md:text-[8px] uppercase tracking-widest font-bold">Métrica:</span>
                  <span className="text-[#f2f0ed] text-[10px] md:text-[11px] font-bold tracking-tight">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-[#4a3728] p-8 md:p-12 text-center shadow-4xl flex flex-col items-center justify-center min-h-[300px] border border-[#c8a178]/30 relative overflow-hidden group md:col-span-2 lg:col-span-1">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-10"></div>
             <h4 className="font-serif text-white text-2xl md:text-3xl italic mb-6 relative z-10">O próximo resultado será o seu.</h4>
             <p className="text-[#c5a689] text-[8px] md:text-[9px] uppercase tracking-[0.4em] mb-8 md:mb-10 font-bold leading-loose relative z-10">Planejamento Estratégico 2026</p>
             <button 
              onClick={scrollToOffer}
              className="relative z-10 bg-[#c8a178] text-[#1a120b] px-8 md:px-10 py-4 md:py-5 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-[#f2f0ed] transition-all transform hover:-translate-y-1"
             >
                Garantir Ingresso
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
