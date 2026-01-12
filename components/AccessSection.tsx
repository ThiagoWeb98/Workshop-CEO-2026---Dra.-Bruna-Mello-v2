
import React, { useEffect, useRef } from 'react';

const AccessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.slide-reveal');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const deliverables = [
    {
      id: "DIA 1",
      title: "Estratégia Financeira",
      desc: "O Fim do 'Ralo Invisível' e o Resgate do Lucro. Vamos identificar onde o dinheiro está vazando e precificar com lucro real.",
      bg: "bg-[#1a120b]",
      label: "20 de Janeiro"
    },
    {
      id: "DIA 2",
      title: "Estratégia de Equipe",
      desc: "Construindo uma Equipe que Vende e Executa sem Você. Do organograma chave ao filtro de contratação blindada.",
      bg: "bg-[#241b14]",
      label: "21 de Janeiro"
    },
    {
      id: "DIA 3",
      title: "Vendas e Escala",
      desc: "Como Romper a Barreira dos 100k/mês. Desenhe seu funil de procedimentos e escada de valor para protocolos de alto ticket.",
      bg: "bg-[#1a120b]",
      label: "22 de Janeiro"
    }
  ];

  return (
    <section ref={containerRef} className="relative">
      {/* Header da Seção */}
      <div className="min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center bg-[#1a120b] text-center px-6 md:px-8 slide-reveal">
        <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-[10px] mb-6 md:mb-8 block font-bold">The Strategic Roadmap</span>
        <h2 className="font-serif text-4xl md:text-7xl lg:text-8xl text-[#f2f0ed] tracking-tighter leading-[1.1] mb-4">
          Cronograma <span className="italic text-[#c8a178]">Executivo</span>.
        </h2>
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-[#c8a178] to-transparent mt-8 md:mt-12 animate-pulse"></div>
      </div>

      {/* Seções de Slide */}
      <div className="relative">
        {deliverables.map((item, i) => (
          <div 
            key={i} 
            className={`min-h-[70vh] md:min-h-[85vh] sticky top-0 md:top-14 flex items-center justify-center ${item.bg} border-t border-[#c8a178]/10 slide-reveal transition-all duration-1000 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}
          >
            {/* Texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('assets/texture-linen.png')] pointer-events-none"></div>
            
            <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 lg:gap-24 items-center relative z-10 py-16 md:py-20">
              <div className="text-center lg:text-left">
                <span className="font-serif italic text-[5rem] md:text-[10rem] lg:text-[14rem] text-[#c8a178]/20 leading-none block">
                  {item.id}
                </span>
                <span className="text-[#c8a178] text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold block mt-2 md:mt-4 md:pl-4">{item.label}</span>
              </div>
              
              <div className="max-w-3xl text-center lg:text-left">
                <div className="hidden lg:block h-px w-24 bg-[#c8a178] mb-12"></div>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-7xl text-[#f2f0ed] mb-6 md:mb-10 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#c5a689] text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-8 md:mb-12 italic">
                  "{item.desc}"
                </p>
                <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
                  <div className="w-8 md:w-12 h-px bg-[#c8a178]/30"></div>
                  <span className="text-[#c8a178] text-[7px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">Entrega Prática e Ferramental</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessSection;
