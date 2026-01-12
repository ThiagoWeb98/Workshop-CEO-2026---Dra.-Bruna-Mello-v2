
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Minha clínica ainda é pequena, serve para mim?",
      a: "Sim. O planejamento é adaptável para quem fatura 10k ou 100k. Começar certo é muito mais barato do que corrigir depois."
    },
    {
      q: "Já faturo bem, mas não tenho tempo. Vale a pena?",
      a: "É obrigatório. Se você tem dinheiro mas não tem tempo, você tem um erro grave de processo. Corrigiremos isso no Dia 2."
    },
    {
      q: "As aulas ficam gravadas?",
      a: "Sim! Você terá acesso à gravação por 1 ano para rever sempre que precisar."
    },
    {
      q: "Como recebo as ferramentas da Toolbox?",
      a: "Acesso imediato. Após a inscrição, você receberá um e-mail com todas as planilhas e guias."
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#1a120b]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <span className="text-[#c8a178] uppercase tracking-[0.6em] text-[9px] mb-6 block font-bold">Dúvidas Frequentes</span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f2f0ed]">Esclarecimentos <span className="italic text-[#c8a178]">finais</span>.</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-[32px] border transition-all duration-700 ${openIndex === i ? 'bg-[#c8a178]/5 border-[#c8a178]/30' : 'bg-[#4a3728]/5 border-[#c8a178]/10'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-8 md:p-10 text-left group"
              >
                <span className={`text-lg md:text-xl font-serif tracking-wide transition-colors duration-700 ${openIndex === i ? 'text-[#f2f0ed]' : 'text-[#c5a689]'}`}>
                  {faq.q}
                </span>
                <span className={`transition-all duration-700 transform ${openIndex === i ? 'rotate-45 scale-110' : ''}`}>
                   <svg className={`w-5 h-5 transition-colors ${openIndex === i ? 'text-[#c8a178]' : 'text-[#c8a178]/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100 p-8 md:p-10 pt-0' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#c5a689] leading-relaxed font-light text-base md:text-lg italic max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
