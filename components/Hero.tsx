
import React from 'react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a120b]">
      <div className="absolute inset-0 bg-luxury-gradient opacity-40"></div>
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-gradient-to-l from-[#4a3728]/10 to-transparent pointer-events-none blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 py-24">
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1 slide-reveal active">
          <div className="mb-8 inline-flex items-center gap-6">
            <div className="hidden sm:block h-[1px] w-12 bg-[#c8a178]/50"></div>
            <span className="text-[#c8a178] uppercase tracking-[0.6em] text-[8px] md:text-[10px] font-bold">ESTRATÉGIA DE ALTO PADRÃO PARA 2026</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-10 text-[#f2f0ed] tracking-tighter">
            Como fazer o <span className="italic text-[#c8a178]">Planejamento</span> da sua clínica para 2026
          </h1>
          
          <p className="text-[#c5a689] text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light italic opacity-80">
            3 Encontros ao vivo para definir suas Metas, Organizar sua Equipe e Traçar o Plano de Ação para romper a barreira dos 6 dígitos mensais.
          </p>

          <div className="bg-[#4a3728]/20 border border-[#c8a178]/10 p-6 md:p-8 rounded-[32px] mb-12 flex flex-col sm:flex-row gap-8 items-center backdrop-blur-md">
            <div className="flex items-center gap-4">
              <span className="text-xl">🗓️</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[9px] uppercase tracking-widest font-bold">Datas</span>
                <span className="text-[#c5a689] text-xs font-medium uppercase tracking-tighter">20, 21 e 22 de Jan</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-[#c8a178]/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-xl">⏰</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[9px] uppercase tracking-widest font-bold">Horário</span>
                <span className="text-[#c5a689] text-xs font-medium uppercase tracking-tighter">19h30</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
            <button 
              onClick={scrollToOffer}
              className="w-full sm:w-auto bg-[#c8a178] text-[#1a120b] px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-xl hover:bg-[#f2f0ed] transition-all transform hover:scale-[1.02] active:scale-95 group relative overflow-hidden"
            >
               <span className="relative z-10">Garantir Minha Vaga</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <span className="text-[#c8a178]/60 text-[9px] uppercase tracking-[0.3em] italic">Acesso exclusivo via Zoom</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center order-1 lg:order-2 slide-reveal active">
           <div className="w-full max-w-md lg:max-w-xl aspect-[4/5] bg-[#241b14] rounded-[48px] shadow-3xl relative group overflow-hidden border border-[#c8a178]/5">
              <img 
                src="assets/dra-bruna-hero.webp" 
                alt="Dra. Bruna Mello - CEO" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.1'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent opacity-80"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
