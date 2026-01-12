
import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra o botão apenas após scrollar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={scrollToOffer}
        className="relative overflow-hidden group bg-gradient-to-r from-[#c8a178] to-[#9b6d4b] hover:from-[#f2f0ed] hover:to-[#c8a178] px-6 py-4 md:px-8 md:py-5 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shine-effect flex items-center gap-3 border border-white/20"
      >
        <span className="text-[#1a120b] font-bold uppercase tracking-[0.2em] text-[10px] md:text-[12px] whitespace-nowrap">
          Garantir Minha Vaga
        </span>
        <div className="w-8 h-8 rounded-full bg-[#1a120b]/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#1a120b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FloatingCTA;
