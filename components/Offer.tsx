
import React from 'react';

const Offer: React.FC = () => {
  const benefits = [
    "3 Encontros Ao Vivo (Zoom)",
    "Gravação por 1 Ano",
    "Calculadora de Precificação (Planilha)",
    "Kit Contratação Blindada (PDF)",
    "Mapa de Funis de Vendas",
    "Checklist Ralos Invisíveis"
  ];

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 md:py-60 bg-[#1a120b] relative overflow-hidden flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#4a3728]/30 via-[#1a120b] to-[#1a120b] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[1000px] h-[300px] md:h-[600px] bg-[#c8a178] rounded-full blur-[80px] md:blur-[160px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          <div className="relative w-full max-w-[340px] md:max-w-[420px] perspective-[2000px]">
            
            {/* 3D Floating Ticket - Scaled for Mobile */}
            <div className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 w-56 md:w-72 h-32 md:h-44 z-30 transition-transform duration-1000 hover:scale-105">
               <div 
                 className="w-full h-full rounded-xl shadow-2xl flex flex-col p-4 md:p-6 relative overflow-hidden border border-white/10 animate-float"
                 style={{
                   background: 'linear-gradient(135deg, #c8a178 0%, #9b6d4b 50%, #c8a178 100%)',
                   transform: 'rotateY(-15deg) rotateX(10deg)',
                   boxShadow: 'inset 0 0 20px rgba(255,255,255,0.2), 0 20px 40px rgba(0,0,0,0.5)'
                 }}
               >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex flex-col">
                      <span className="text-[#1a120b]/40 text-[6px] md:text-[7px] uppercase tracking-[0.4em] font-bold">Priority Pass</span>
                      <span className="text-[#1a120b] font-serif italic text-[10px] md:text-xs">Planejamento 2026</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <h4 className="font-serif text-[#1a120b] text-xl md:text-3xl tracking-tighter mb-0.5">SMART PASS</h4>
                    <div className="flex justify-between items-end">
                      <p className="text-[#1a120b]/60 text-[6px] md:text-[7px] uppercase tracking-[0.5em] font-light">Dra. Bruna Mello</p>
                      <span className="text-[#1a120b]/20 font-serif text-[28px] md:text-[40px] leading-none select-none">#01</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Elegant Card */}
            <div className="bg-[#f2f0ed] rounded-[4px] shadow-3xl p-8 md:p-12 pt-24 md:pt-32 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] bg-[url('assets/texture-paper.png')] pointer-events-none"></div>
               
               <div className="text-center">
                  <span className="text-[#c8a178] text-[8px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold block mb-4">Investment Selection</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1a120b] mb-10 md:mb-12 tracking-tight">Ingresso Smart Pass</h3>
                  
                  <ul className="space-y-4 md:space-y-6 mb-12 md:mb-16 text-left border-y border-[#1a120b]/5 py-10 md:py-12">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4">
                        <div className="mt-1 flex-shrink-0 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-[#c8a178] to-[#4a3728] flex items-center justify-center shadow-md">
                          <svg className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#1a120b]/70 text-[12px] md:text-[13px] font-medium leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-10 md:mb-14">
                    <p className="text-[#c5a689] text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold mb-4">Aproveite o Valor Promocional</p>
                    <div className="flex items-baseline justify-center gap-1 md:gap-2">
                       <span className="text-[#1a120b] text-5xl md:text-7xl font-serif tracking-tighter leading-none">R$ 147,00</span>
                    </div>
                    <p className="text-[#1a120b]/40 text-[10px] md:text-[12px] mt-4 font-medium tracking-wide">
                      ou 12x de <span className="text-[#1a120b] font-bold">R$ 15,11</span> no cartão de crédito
                    </p>
                  </div>

                  <button className="w-full bg-[#4a3728] text-[#f2f0ed] py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] shadow-2xl hover:bg-[#1a120b] transition-all transform active:scale-95 relative group overflow-hidden">
                    <span className="relative z-10">Quero Fazer Meu Planejamento</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  
                  <div className="mt-8 flex items-center justify-center gap-3 md:gap-4 opacity-30">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-2.5 md:h-3 grayscale" />
                    <div className="w-px h-3 bg-[#1a120b]"></div>
                    <span className="text-[#1a120b] text-[7px] md:text-[8px] uppercase tracking-widest font-bold">Secure Checkout</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
