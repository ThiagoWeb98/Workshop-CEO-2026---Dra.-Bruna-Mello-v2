
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Minha clínica ainda é pequena, serve para mim?",
      a: "Sim. O planejamento é adaptável para quem fatura 10k ou 100k. Começar com a estrutura certa (separação de contas, precificação) é muito mais barato do que corrigir vícios de gestão depois."
    },
    {
      q: "Já faturo bem, mas não tenho tempo. Vale a pena?",
      a: "É obrigatório. Se você tem dinheiro mas não tem tempo, você tem um erro grave de processo. Vamos corrigir isso no Dia 2 (Equipe e Delegação)."
    },
    {
      q: "As aulas ficam gravadas?",
      a: "Sim! Você terá acesso à gravação na área de membros por 1 ano para rever com sua sócia ou equipe estratégica sempre que precisar."
    },
    {
      q: "Como recebo as ferramentas da Toolbox Digital?",
      a: "O acesso é imediato após a confirmação da inscrição. Você receberá um e-mail com as planilhas e PDFs prontos para baixar e usar."
    },
    {
      q: "Como funciona a garantia de 1 dia?",
      a: "Basta assistir ao primeiro encontro ao vivo. Se não for o que esperava, mande um e-mail até o dia seguinte e reembolsamos 100% sem burocracia."
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#1a120b]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-[9px] mb-4 block font-bold">Respostas aos Questionamentos</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#f2f0ed]">Esclareça seus <span className="italic text-[#c8a178]">pontos</span>.</h2>
        </div>

        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#c8a178]/10 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-8 md:py-10 text-left group"
              >
                <span className={`text-base md:text-lg font-serif tracking-wide transition-colors duration-500 ${openIndex === i ? 'text-[#f2f0ed]' : 'text-[#c5a689] group-hover:text-[#f2f0ed]'}`}>
                  {faq.q}
                </span>
                <span className={`transition-all duration-500 transform ${openIndex === i ? 'rotate-45 scale-110' : ''}`}>
                   <svg className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${openIndex === i ? 'text-[#c8a178]' : 'text-[#c8a178]/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-10 md:pb-12' : 'max-h-0'}`}>
                <p className="text-[#c5a689] leading-relaxed md:leading-loose font-light text-sm md:text-base max-w-3xl">
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
