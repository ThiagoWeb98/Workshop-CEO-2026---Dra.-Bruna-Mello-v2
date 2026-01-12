
import React from 'react';

const DiscountTicker: React.FC = () => {
  return (
    <div className="bg-[#4a3728] border-y border-[#c8a178]/30 overflow-hidden py-8 relative shadow-2xl">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            <span className="text-[#f2f0ed] font-serif text-4xl italic tracking-tighter">
              50% OFF NO SMART PASS
            </span>
            <div className="w-3 h-3 bg-[#c8a178] rotate-45"></div>
            <span className="text-[#f2f0ed]/30 font-serif text-3xl uppercase tracking-[0.5em] font-light">
              Lote Estratégico
            </span>
            <div className="w-3 h-3 bg-[#c8a178] rotate-45"></div>
            <span className="text-[#f2f0ed] font-serif text-4xl italic tracking-tighter">
              ÚLTIMAS VAGAS
            </span>
            <div className="w-3 h-3 bg-[#c8a178] rotate-45"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountTicker;
