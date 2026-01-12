
import React from 'react';

const PainPleasure: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const personas = [
    {
      num: "01",
      title: "A Centralizadora Exausta",
      desc: "Você não consegue delegar porque sente que se virar as costas, a qualidade cai e o faturamento despenca."
    },
    {
      num: "02",
      title: "O Sócio Oculto",
      desc: "O faturamento bruto cresce, mas quando paga impostos e fornecedores, o lucro líquido é frustrante."
    },
    {
      num: "03",
      title: "A Bombeira de Luxo",
      desc: "Passa o dia resolvendo problemas operacionais e tem zero tempo para pensar no futuro da empresa."
    }
  ];

  return (
    <section className="py-24 md:py-48 relative bg-[#1a120b] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.015] pointer-events-none select-none hidden sm:block">
        <span className="font-serif italic text-[25vw] text-[#f2f0ed] leading-none tracking-tighter">ESSENCE</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-24 md:mb-48 text-center">
          <span className="text-[#c8a178] uppercase tracking-[0.8em] text-[9px] mb-8 block font-bold">O Diagnóstico</span>
          <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl text-[#f2f0ed] mb-12 leading-[1] tracking-tighter">
            Por que a conta <br/>
            <span className="italic text-[#c8a178]">não está fechando?</span>
          </h2>
          <div className="w-px h-24 bg-gradient-to-b from-[#c8a178]/40 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 md:mb-48">
          {personas.map((p, i) => (
            <div key={i} className="bg-[#4a3728]/10 p-10 md:p-14 lg:p-16 rounded-[40px] border border-[#c8a178]/5 group hover:bg-[#c8a178]/5 hover:border-[#c8a178]/20 transition-all duration-1000 relative overflow-hidden flex flex-col justify-center">
              <span className="font-serif italic text-7xl md:text-9xl text-[#c8a178]/5 mb-8 block transition-colors duration-1000 group-hover:text-[#c8a178]/10">
                {p.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-[#f2f0ed] font-serif text-2xl md:text-3xl mb-6 tracking-wide uppercase italic leading-tight">{p.title}</h3>
                <p className="text-[#c5a689] text-lg leading-relaxed font-light opacity-80">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto bg-[#4a3728]/10 border border-[#c8a178]/10 p-10 md:p-24 rounded-[60px] relative shadow-2xl backdrop-blur-xl overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('assets/texture-linen.png')] opacity-[0.02] pointer-events-none"></div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                 <span className="text-[#c8a178] text-[9px] uppercase tracking-[0.6em] font-bold mb-6 block">Workshop 2026</span>
                 <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tighter italic text-[#f2f0ed] leading-tight">Um novo padrão de gestão.</h3>
                 <p className="text-[#c5a689] text-lg md:text-xl leading-relaxed mb-10 font-light italic">
                   "Não é um curso teórico. Vou abrir a estratégia exata das minhas clínicas para você implementar em 72 horas."
                 </p>
                 <button 
                  onClick={scrollToOffer}
                  className="text-[#f2f0ed] border-b border-[#c8a178]/40 pb-2 text-xs uppercase tracking-[0.4em] font-bold hover:text-[#c8a178] hover:border-[#c8a178] transition-all"
                 >
                    Começar o Planejamento
                 </button>
              </div>
              <div className="space-y-6 lg:pl-16 lg:border-l border-[#c8a178]/10">
                 {[
                   "Metas Financeiras Reais",
                   "Equipe Autogerenciável",
                   "Escala de Alto Ticket",
                   "Mapa da Liberdade"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-1.5 h-1.5 bg-[#c8a178] rounded-full opacity-40 group-hover:scale-150 group-hover:opacity-100 transition-all duration-500"></div>
                      <span className="text-[#f2f0ed] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PainPleasure;
