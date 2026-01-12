
import React from 'react';

const Offer: React.FC = () => {
  const benefits = [
    "3 Encontros Ao Vivo (Zoom)",
    "Gravação por 1 Ano",
    "Calculadora de Precificação",
    "Kit Contratação Blindada",
    "Mapa de Funis de Vendas",
    "Checklist Ralos Invisíveis"
  ];

  return (
    <section className="py-32 md:py-64 bg-[#1a120b] relative overflow-hidden flex items-center justify-center">
      {/* Glow de fundo ultra suave para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[1200px] h-[300px] md:h-[1200px] bg-[#c8a178] rounded-full blur-[180px] opacity-[0.05] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <div className="relative w-full max-w-[460px]">
          
          {/* Ticket Priority Pass - Centralizado e com Sobreposição */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[85%] sm:w-80 h-48 z-30 animate-float drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
             <div 
               className="w-full h-full rounded-[35px] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden border border-white/30 backdrop-blur-md"
               style={{
                 background: 'linear-gradient(135deg, #c8a178 0%, #9b6d4b 100%)',
               }}
             >
                {/* Recortes de Ticket (Notches) - Agora usam a cor do BG da seção */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a120b] rounded-full shadow-inner"></div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a120b] rounded-full shadow-inner"></div>
                
                {/* Conteúdo Centralizado */}
                <div className="space-y-1 relative z-10">
                  <span className="text-[#1a120b]/50 text-[10px] uppercase tracking-[0.7em] font-black block mb-3">Priority Pass</span>
                  
                  <div className="relative">
                    <span className="text-[#1a120b]/10 font-serif text-7xl absolute -top-8 left-1/2 -translate-x-1/2 select-none">#01</span>
                    <h4 className="font-serif text-[#1a120b] text-4xl tracking-tighter leading-none relative z-10">SMART PASS</h4>
                  </div>
                  
                  <p className="text-[#1a120b]/70 text-[9px] uppercase tracking-[0.6em] font-bold pt-2">Planejamento 2026</p>
                </div>
                
                {/* Linha pontilhada estética */}
                <div className="absolute bottom-8 left-12 right-12 h-px border-t border-dashed border-[#1a120b]/20"></div>
             </div>
          </div>

          {/* Card Principal de Investimento */}
          <div className="bg-[#f2f0ed] rounded-[80px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] p-10 md:p-16 pt-36 md:pt-48 relative overflow-hidden border border-white/50">
             {/* Textura sutil de papel luxuoso */}
             <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
             
             <div className="text-center relative z-10">
                <span className="text-[#c8a178] text-[11px] uppercase tracking-[0.9em] font-bold block mb-10">Investment</span>
                <h3 className="font-serif text-5xl md:text-6xl text-[#1a120b] mb-14 tracking-tighter italic leading-tight">Oportunidade Única</h3>
                
                <ul className="space-y-6 mb-16 text-left border-y border-[#1a120b]/5 py-14 px-2">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-5 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c8a178] group-hover:scale-150 transition-transform duration-500 shadow-sm"></div>
                      <span className="text-[#1a120b]/70 text-base md:text-lg font-medium tracking-tight group-hover:text-[#1a120b] transition-colors duration-500">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-14">
                  <p className="text-[#c5a689] text-[12px] uppercase tracking-[0.7em] font-bold mb-8">Lote de Lançamento</p>
                  <div className="flex flex-col items-center mb-10">
                    <span className="text-[#1a120b] text-8xl md:text-9xl font-serif tracking-tighter leading-none">R$ 147</span>
                    <span className="text-[#1a120b]/40 text-[11px] uppercase tracking-[0.5em] font-bold mt-5">Parcela única · Acesso vitalício às ferramentas</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-5 bg-[#1a120b]/5 px-10 py-5 rounded-full backdrop-blur-sm border border-[#1a120b]/5">
                     <span className="text-[#1a120b]/40 text-[11px] font-bold uppercase tracking-widest">Ou em até 12x</span>
                     <span className="text-[#1a120b] text-2xl font-serif italic font-bold">R$ 15,11</span>
                  </div>
                </div>

                <button className="w-full bg-[#1a120b] text-[#f2f0ed] py-8 rounded-full font-bold uppercase tracking-[0.6em] text-[12px] shadow-3xl hover:bg-[#31251c] transition-all duration-700 transform active:scale-[0.98] group relative overflow-hidden">
                  <span className="relative z-10">Garantir Minha Vaga</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
                
                <p className="mt-10 text-[#1a120b]/40 text-[10px] uppercase tracking-[0.4em] font-semibold">Vagas limitadas para acompanhamento via Zoom</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
