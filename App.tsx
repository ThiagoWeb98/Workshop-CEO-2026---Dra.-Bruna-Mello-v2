
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import PainPleasure from './components/PainPleasure';
import VideoSection from './components/VideoSection';
import AccessSection from './components/AccessSection';
import ToolboxSection from './components/ToolboxSection';
import DiscountTicker from './components/DiscountTicker';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  useEffect(() => {
    // Observador Global para disparar as animações de slide-reveal em todo o site
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.slide-reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#c8a178] selection:text-[#1a120b] bg-[#1a120b]">
      {/* Navigation Bar - Responsive Sticky */}
      <nav className="sticky top-0 w-full bg-[#1a120b]/95 backdrop-blur-md text-[#f2f0ed] py-3 md:py-4 px-4 text-center border-b border-[#c8a178]/20 z-[100] shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4">
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-bold text-[#c8a178]">
            Workshop Planejamento Estratégico 2026
          </span>
          <span className="hidden md:inline text-[#c8a178]/40">•</span>
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-bold">
            Dra. Bruna Mello
          </span>
        </div>
      </nav>

      <Hero />
      
      <div className="slide-reveal">
        <PainPleasure />
      </div>

      <div className="slide-reveal">
        <VideoSection />
      </div>
      
      <DiscountTicker />
      
      <AccessSection />
      
      <div className="slide-reveal">
        <ToolboxSection />
      </div>
      
      {/* Bio Section */}
      <section className="py-24 md:py-40 bg-[#1a120b] border-y border-[#c8a178]/10 relative overflow-hidden slide-reveal">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-lg mx-auto w-full bg-[#241b14] relative shadow-[0_30px_60px_rgba(0,0,0,0.8)] group overflow-hidden">
             <img 
               src="assets/dra-bruna-bio.webp" 
               alt="Dra. Bruna Mello" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
             <div className="absolute inset-0 border border-[#c8a178]/20 group-hover:scale-95 transition-transform duration-1000 pointer-events-none"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent opacity-60"></div>
             <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <span className="font-serif italic text-[#f2f0ed] text-3xl md:text-4xl tracking-[0.3em]">Portrait</span>
             </div>
             <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <p className="text-[#c8a178] uppercase tracking-[0.5em] text-[8px] md:text-[10px] font-bold mb-2">The Founder</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#f2f0ed]">Dra. Bruna Mello</h3>
             </div>
          </div>
          <div className="order-1 lg:order-2 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl xl:text-6xl text-[#f2f0ed] mb-8 md:mb-12 leading-tight">
              De "embaixo da escada" à <span className="italic text-[#c8a178]">CEO</span> de Múltiplas Clínicas.
            </h2>
            <div className="space-y-6 md:space-y-10 text-[#c5a689] text-base md:text-lg font-light leading-relaxed">
              <p>
                Biomédica, Médica e CEO de 2 clínicas de alta performance. Eu nasci literalmente embaixo da escada de um salão de beleza, fali aos 26 anos e tive burnout por tentar carregar o mundo nas costas.
              </p>
              <p>
                A virada aconteceu quando entendi que <span className="italic text-[#f2f0ed]">amor pela estética não paga conta. Gestão paga.</span> Hoje, minha missão é poupar você de 10 anos de erros através de uma gestão sólida e validada.
              </p>
              <div className="pt-6 flex flex-col items-center lg:items-start">
                 <div className="w-16 h-px bg-[#c8a178] mb-4"></div>
                 <p className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-[#c8a178]">Fundadora do Método Acelera Clínicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="offer" className="slide-reveal">
        <Offer />
      </div>
      
      <div className="slide-reveal">
        <Guarantee />
      </div>

      <div className="slide-reveal">
        <FAQ />
      </div>
      
      <footer className="bg-[#1a120b] py-20 md:py-32 px-6 border-t border-[#c8a178]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl mb-2 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#f2f0ed]">WORKSHOP CEO</h3>
            <p className="text-[#c8a178] text-[8px] tracking-[0.5em] uppercase font-bold">The Gold Standard in Strategy</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-14 text-[#c5a689] text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Support Center</a>
          </div>
          <div className="text-[#c5a689]/30 text-[8px] md:text-[9px] tracking-[0.2em] leading-loose text-center md:text-right">
            TODOS OS DIREITOS RESERVADOS.<br/>
            DRA. BRUNA MELLO - ACELERA CLÍNICAS © 2026.
          </div>
        </div>
      </footer>

      <AIAdvisor />
    </div>
  );
};

export default App;
