
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
import FloatingCTA from './components/FloatingCTA';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('js-animate');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
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
      <nav className="sticky top-0 w-full bg-[#1a120b]/80 backdrop-blur-xl py-5 px-4 text-center border-b border-[#c8a178]/10 z-[100]">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
          <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-semibold text-[#c8a178]">
            Workshop Planejamento Estratégico 2026
          </span>
          <span className="hidden md:inline text-[#c8a178]/20">/</span>
          <span className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-semibold text-[#f2f0ed]/60">
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
      
      <section className="py-24 md:py-48 bg-[#1a120b] border-y border-[#c8a178]/5 relative overflow-hidden slide-reveal">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-[3/4] max-w-lg mx-auto w-full bg-[#241b14] relative rounded-[40px] overflow-hidden shadow-2xl group transition-transform duration-1000">
             <div className="absolute inset-0 bg-[#c8a178]/5"></div>
             <img 
               src="assets/dra-bruna-bio.webp" 
               alt="Dra. Bruna Mello" 
               className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
               onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.2'; }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent opacity-80"></div>
             <div className="absolute bottom-10 left-10">
                <p className="text-[#c8a178] uppercase tracking-[0.6em] text-[10px] font-bold mb-3">The Founder</p>
                <h3 className="font-serif text-3xl text-[#f2f0ed]">Dra. Bruna Mello</h3>
             </div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-serif text-4xl md:text-6xl text-[#f2f0ed] mb-10 leading-tight tracking-tight">
              De "embaixo da escada" à <span className="italic text-[#c8a178]">CEO</span> de Clínicas.
            </h2>
            <div className="space-y-8 text-[#c5a689] text-lg md:text-xl font-light leading-relaxed">
              <p>Biomédica, Médica e CEO de 2 clínicas de alta performance. Eu nasci literalmente embaixo da escada de um salão de beleza, fali aos 26 anos e tive burnout.</p>
              <p>A virada aconteceu quando entendi que <span className="italic text-[#f2f0ed]">amor pela estética não paga conta. Gestão paga.</span></p>
              <div className="pt-8 flex justify-center lg:justify-start">
                <div className="w-12 h-px bg-[#c8a178]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="offer" className="slide-reveal"><Offer /></div>
      <div className="slide-reveal"><Guarantee /></div>
      <div className="slide-reveal"><FAQ /></div>
      
      <footer className="bg-[#1a120b] py-24 px-6 border-t border-[#c8a178]/5 text-center">
        <h3 className="font-serif text-3xl mb-6 tracking-[0.5em] uppercase text-[#f2f0ed]">WORKSHOP CEO</h3>
        <p className="text-[#c5a689]/30 text-[10px] tracking-[0.4em] uppercase font-medium">
          DRA. BRUNA MELLO - ACELERA CLÍNICAS © 2026.
        </p>
      </footer>

      <FloatingCTA />
    </div>
  );
};

export default App;
