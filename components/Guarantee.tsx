
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-[#1a120b] relative px-6">
      <div className="container mx-auto flex justify-center">
        <div className="max-w-4xl w-full bg-[#e6d6c3] p-12 md:p-24 lg:p-32 rounded-[60px] shadow-3xl relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('assets/texture-parchment.png')]"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-12 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#4a3728] rounded-full shadow-lg transform rotate-12 scale-110"></div>
              <span className="font-serif text-3xl text-white font-bold relative z-10 transform -rotate-12">B</span>
            </div>
            
            <h2 className="font-serif italic text-4xl md:text-5xl text-[#1a120b] mb-10 tracking-tight leading-tight">Garantia Risco Zero</h2>
            
            <p className="text-[#1a120b]/80 text-lg md:text-2xl leading-relaxed mb-12 font-serif italic max-w-2xl">
              "Participe do primeiro dia. Se sentir que o planejamento não é para você, basta um e-mail e eu devolvo 100% do seu investimento. O risco é meu."
            </p>
            
            <div className="w-12 h-[1px] bg-[#4a3728]/20 mb-8"></div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-[#1a120b] text-xl mb-1 italic">Dra. Bruna Mello</span>
              <span className="text-[#4a3728]/60 uppercase tracking-[0.5em] text-[9px] font-bold">CEO Acelera Clínicas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
