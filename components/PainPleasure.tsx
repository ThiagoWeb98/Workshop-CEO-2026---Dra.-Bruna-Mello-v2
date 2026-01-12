
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
    <section className="py-24 md:py-40 relative bg-[#1a120b] overflow-hidden">
      {/* Background Decor - Massive Watermark - Hidden on small mobile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none hidden sm:block">
        <span className="font-serif italic text-[30vw] text-[#f2f0ed] leading-none">STRATEGY</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-20 md:mb-40">
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-[10px] mb-6 md:mb-8 block font-bold">O Diagnóstico Estratégico</span>
            <h2 className="font-serif text-3xl md:text-6xl lg:text-8xl text-[#f2f0ed] mb-8 md:mb-12 leading-[1.1] md:leading-[0.9] tracking-tighter max-w-4xl">
              Você já tem a clínica. <br/>
              Já fatura alto. <br/>
              <span className="italic text-[#c8a178]">Então por que a conta não fecha?</span>
            </h2>
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[#c8a178] to-transparent"></div>
          </div>
          
          <div className="bg-[#4a3728]/20 border border-[#c8a178]/10 p-8 md:p-12 lg:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-[#c8a178]/5 blur-3xl rounded-full"></div>
            <p className="text-[#f2f0ed] text-xl md:text-2xl lg:text-4xl font-serif italic leading-relaxed text-center relative z-10">
              "Sua rotina é um caos silencioso que ninguém vê no Instagram. Você não está cansada de trabalhar. <span className="text-[#c8a178] not-italic font-sans font-bold uppercase tracking-tighter block md:inline">Você está cansada de trabalhar errado.</span>"
            </p>
          </div>
        </div>

        {/* Personas Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-[#c8a178]/5 border border-[#c8a178]/10 mb-20 md:mb-40">
          {personas.map((p, i) => (
            <div key={i} className={`bg-[#1a120b] p-8 md:p-12 lg:p-20 group hover:bg-[#4a3728]/30 transition-all duration-1000 relative overflow-hidden border-[#c8a178]/10 ${i === 0 ? '' : 'border-t md:border-t-0 md:border-l'}`}>
              <span className="absolute -right-4 -bottom-8 md:-right-8 md:-bottom-16 font-serif italic text-[10rem] md:text-[18rem] text-[#c8a178]/5 group-hover:text-[#c8a178]/10 transition-colors duration-1000 pointer-events-none">
                {p.num}
              </span>
              <div className="relative z-10">
                <span className="text-[#c8a178] font-serif text-3xl md:text-4xl mb-6 block opacity-40">/</span>
                <h3 className="text-[#f2f0ed] font-serif text-2xl md:text-3xl mb-4 md:mb-8 tracking-wide uppercase italic leading-tight">{p.title}</h3>
                <p className="text-[#c5a689] text-base md:text-lg leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Block - Stacked for Mobile */}
        <div className="max-w-5xl mx-auto bg-[#4a3728]/30 border border-[#c8a178]/20 p-8 md:p-16 lg:p-24 relative shadow-4xl backdrop-blur-sm">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                 <span className="text-[#c8a178] text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold mb-4 md:mb-6 block">The Transformation</span>
                 <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 tracking-tighter italic text-[#f2f0ed]">Workshop Planejamento 2026</h3>
                 <p className="text-[#c5a689] text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
                   Não é um curso teórico. É uma <span className="text-[#f2f0ed] font-medium">Imersão Executiva</span> onde vou abrir a estratégia exata das minhas duas clínicas para você copiar e colar.
                 </p>
                 <button 
                  onClick={scrollToOffer}
                  className="text-[#f2f0ed] border-b border-[#c8a178] pb-2 text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold hover:text-[#c8a178] transition-colors"
                 >
                    Sair do campo das ideias
                 </button>
              </div>
              <div className="space-y-4 md:space-y-6 lg:pl-12 lg:border-l border-[#c8a178]/10">
                 {[
                   "Definição de Metas Financeiras Reais",
                   "Construção de Equipe Autogerenciável",
                   "Escala para Múltiplos 6 Dígitos Mensais",
                   "Mapa da Liberdade para os próximos 12 meses"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-4 md:gap-6 group">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#c8a178] rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-[#f2f0ed] text-[9px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="mt-16 md:mt-24 text-center">
              <blockquote className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-[#f2f0ed] leading-tight max-w-3xl mx-auto">
                "Você merece liderar um negócio que funcione para você, <span className="text-[#c8a178] block sm:inline">e não por causa de você.</span>"
              </blockquote>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PainPleasure;
