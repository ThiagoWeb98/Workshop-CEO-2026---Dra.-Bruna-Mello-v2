
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[1200px] h-[300px] md:h-[1200px] bg-[#c8a178] rounded-full blur-[160px] opacity-[0.08] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          <div className="relative w-full max-w-[440px]">
            
            {/* Ticket Flutuante - Mais Elegante */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 md:w-80 h-40 z-30 transition-transform duration-1000 animate-float">
               <div 
                 className="w-full h-full rounded-3xl shadow-2xl flex flex-col p-6 relative overflow-hidden border border-white/20"
                 style={{
                   background: 'linear-gradient(135deg, #c8a178 0%, #9b6d4b 100%)',
                 }}
               >
                  <div className="flex justify-between items-start">
                    <span className="text-[#1a120b]/30 text-[8px] uppercase tracking-[0.5em] font-bold">Priority Pass</span>
                    <span className="text-[#1a120b]/20 font-serif text-4xl">#01</span>
                  </div>
                  <div className="mt-auto">
                    <h4 className="font-serif text-[#1a120b] text-2xl tracking-tighter">SMART PASS</h4>
                    <p className="text-[#1a120b]/50 text-[7px] uppercase tracking-[0.5em] font-bold">Planejamento 2026</p>
                  </div>
               </div>
            </div>

            {/* Elegant Card */}
            <div className="bg-[#f2f0ed] rounded-[60px] shadow-3xl p-10 md:p-16 pt-32 md:pt-40 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.02] bg-[url('assets/texture-paper.png')]"></div>
               
               <div className="text-center">
                  <span className="text-[#c8a178] text-[9px] uppercase tracking-[0.6em] font-bold block mb-6">Investment</span>
                  <h3 className="font-serif text-4xl md:text-5xl text-[#1a120b] mb-12 tracking-tight">Smart Pass</h3>
                  
                  <ul className="space-y-6 mb-16 text-left border-y border-[#1a120b]/5 py-12">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c8a178]"></div>
                        <span className="text-[#1a120b]/70 text-sm md:text-base font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-14">
                    <p className="text-[#c5a689] text-[10px] uppercase tracking-[0.5em] font-bold mb-6">Aproveite o Valor do 1º Lote</p>
                    <div className="flex flex-col items-center mb-6">
                      <span className="text-[#1a120b] text-7xl md:text-8xl font-serif tracking-tighter leading-none">R$ 147</span>
                      <span className="text-[#1a120b]/40 text-[10px] uppercase tracking-widest font-bold mt-2">Pagamento único</span>
                    </div>
                    <div className="inline-flex items-center gap-3 bg-[#1a120b]/5 px-6 py-3 rounded-full">
                       <span className="text-[#1a120b]/40 text-[10px] font-bold uppercase">Ou 12x de</span>
                       <span className="text-[#1a120b] text-xl font-serif italic font-bold">R$ 15,11</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#1a120b] text-[#f2f0ed] py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-[#4a3728] transition-all transform active:scale-95 group relative overflow-hidden">
                    <span className="relative z-10">Garantir Meu Lugar</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
