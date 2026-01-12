
import React from 'react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#1a120b]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-luxury-gradient opacity-60"></div>
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#4a3728]/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 py-16 md:py-32">
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1 slide-reveal active">
          <div className="mb-6 md:mb-10 inline-flex items-center gap-4 md:gap-6">
            <div className="hidden sm:block h-px w-8 md:w-16 bg-[#c8a178]"></div>
            <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.7em] text-[7px] md:text-[10px] font-bold">ESTRATÉGIA DE ALTA PERFORMANCE PARA 2026</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1] mb-6 md:mb-10 text-[#f2f0ed] tracking-tighter max-w-2xl">
            Como fazer o <span className="italic text-[#c8a178]">Planejamento Estratégico</span> da sua clínica para 2026
          </h1>
          
          <p className="text-[#c5a689] text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-8 md:mb-12 font-light italic">
            3 Encontros ao vivo para definir suas Metas Financeiras, Organizar sua Equipe e Traçar o Plano de Ação para romper a barreira dos 6 dígitos mensais.
          </p>

          <div className="bg-[#4a3728]/40 border border-[#c8a178]/30 p-4 md:p-6 rounded-sm mb-10 md:mb-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 items-center backdrop-blur-sm w-full max-w-xl lg:max-w-none justify-center lg:justify-start">
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl">🗓️</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Datas</span>
                <span className="text-[#c5a689] text-[10px] md:text-xs font-medium uppercase">20, 21 e 22 de Jan</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#c8a178]/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl">⏰</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Horário</span>
                <span className="text-[#c5a689] text-[10px] md:text-xs font-medium uppercase">19h30</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#c8a178]/20"></div>
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl">💻</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Local</span>
                <span className="text-[#c5a689] text-[10px] md:text-xs font-medium uppercase">Online via Zoom</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 w-full sm:w-auto">
            <button 
              onClick={scrollToOffer}
              className="w-full sm:w-auto bg-[#c8a178] text-[#1a120b] px-8 md:px-12 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] shadow-2xl hover:bg-[#f2f0ed] transition-all group overflow-hidden relative"
            >
               <span className="relative z-10">Garantir Minha Vaga</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <span className="text-[#c8a178] text-[8px] md:text-[9px] uppercase tracking-[0.3em] italic">Vagas limitadas para a sala do Zoom</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center order-1 lg:order-2 slide-reveal active">
           <div className="w-full max-w-xs md:max-w-md lg:max-w-lg aspect-[4/5] bg-[#241b14] border border-[#c8a178]/10 shadow-3xl relative group overflow-hidden">
              <img 
                src="assets/dra-bruna-hero.webp" 
                alt="Dra. Bruna Mello - CEO" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.1'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-t border-l border-[#c8a178]/30"></div>
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-b border-r border-[#c8a178]/30"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
