
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
    // Adiciona classe para permitir animações apenas se o JS estiver funcionando
    document.documentElement.classList.add('js-animate');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.slide-reveal');
    
    // Ativação imediata para elementos visíveis
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('active');
      } else {
        revealObserver.observe(el);
      }
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a120b] selection:bg-[#c8a178] selection:text-[#1a120b]">
      <nav className="sticky top-0 w-full bg-[#1a120b]/95 backdrop-blur-md py-4 px-4 text-center border-b border-[#c8a178]/20 z-[100] shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold text-[#c8a178]">
            Workshop Planejamento Estratégico 2026
          </span>
          <span className="hidden md:inline text-[#c8a178]/40">•</span>
          <span className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold text-[#f2f0ed]">
            Dra. Bruna Mello
          </span>
        </div>
      </nav>

      <Hero />
      
      <div className="slide-reveal"><PainPleasure /></div>
      <div className="slide-reveal"><VideoSection /></div>
      <div className="slide-reveal"><DiscountTicker /></div>
      <AccessSection />
      <div className="slide-reveal"><ToolboxSection /></div>
      
      <section className="py-24 md:py-40 bg-[#1a120b] border-y border-[#c8a178]/10 relative overflow-hidden slide-reveal">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-[3/4] max-w-lg mx-auto w-full bg-[#241b14] relative shadow-3xl overflow-hidden group">
             <div className="absolute inset-0 bg-[#c8a178]/5"></div>
             <img 
               src="assets/dra-bruna-bio.webp" 
               alt="Dra. Bruna Mello" 
               className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000"
               onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.2'; }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] to-transparent opacity-60"></div>
             <div className="absolute bottom-6 left-6">
                <p className="text-[#c8a178] uppercase tracking-[0.5em] text-[10px] font-bold mb-2">The Founder</p>
                <h3 className="font-serif text-2xl text-[#f2f0ed]">Dra. Bruna Mello</h3>
             </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl text-[#f2f0ed] mb-8 leading-tight">
              De "embaixo da escada" à <span className="italic text-[#c8a178]">CEO</span> de Múltiplas Clínicas.
            </h2>
            <div className="space-y-6 text-[#c5a689] text-base md:text-lg font-light leading-relaxed">
              <p>Biomédica, Médica e CEO de 2 clínicas de alta performance. Eu nasci literalmente embaixo da escada de um salão de beleza, fali aos 26 anos e tive burnout.</p>
              <p>A virada aconteceu quando entendi que <span className="italic text-[#f2f0ed]">amor pela estética não paga conta. Gestão paga.</span></p>
            </div>
          </div>
        </div>
      </section>

      <div id="offer" className="slide-reveal"><Offer /></div>
      <div className="slide-reveal"><Guarantee /></div>
      <div className="slide-reveal"><FAQ /></div>
      
      <footer className="bg-[#1a120b] py-20 px-6 border-t border-[#c8a178]/5 text-center">
        <h3 className="font-serif text-2xl mb-4 tracking-[0.4em] uppercase text-[#f2f0ed]">WORKSHOP CEO</h3>
        <p className="text-[#c5a689]/40 text-[9px] tracking-[0.2em] uppercase">
          DRA. BRUNA MELLO - ACELERA CLÍNICAS © 2026.
        </p>
      </footer>

      <AIAdvisor />
    </div>
  );
};

export default App;
