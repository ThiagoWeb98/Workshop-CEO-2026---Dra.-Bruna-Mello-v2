
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#1a120b] relative px-6">
      <div className="container mx-auto flex justify-center">
        {/* Parchment Styled Container */}
        <div className="max-w-4xl w-full bg-[#e6d6c3] p-10 md:p-16 lg:p-28 shadow-3xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('assets/texture-parchment.png')]"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Wax Seal Effect */}
            <div className="w-16 h-16 md:w-24 md:h-24 mb-10 md:mb-16 relative">
              <div className="absolute inset-0 bg-[#4a3728] rounded-full shadow-lg transform rotate-12 scale-110"></div>
              <div className="absolute inset-2 border-2 border-[#c8a178]/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-white font-bold transform -rotate-12">B</span>
              </div>
            </div>
            
            <h2 className="font-serif italic text-3xl md:text-4xl text-[#1a120b] mb-8 md:mb-12 tracking-tight">Garantia Risco Zero</h2>
            
            <p className="text-[#1a120b] text-base md:text-xl leading-relaxed mb-10 md:mb-12 font-serif italic max-w-2xl opacity-80">
              "Eu valorizo seu tempo e seu dinheiro. Participe do primeiro dia (20/01). Se sentir que o planejamento não é aplicável à sua realidade, basta um e-mail e eu devolvo 100% do seu dinheiro. Sem perguntas. O risco é todo meu."
            </p>
            
            <div className="w-16 md:w-20 h-px bg-[#4a3728] opacity-30 mb-8"></div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-[#1a120b] text-base md:text-lg mb-1">Dra. Bruna Mello</span>
              <span className="text-[#4a3728] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] font-bold">CEO Acelera Clínicas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
