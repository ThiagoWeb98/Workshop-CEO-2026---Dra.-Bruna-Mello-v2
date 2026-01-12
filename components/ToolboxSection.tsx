
import React from 'react';

const ToolboxSection: React.FC = () => {
  const tools = [
    {
      title: "Calculadora de Precificação Simplificada",
      type: "Planilha Editável",
      desc: "Pare de 'chutar' preços ou copiar a concorrência. Insira seus custos fixos e variáveis e descubra a margem exata de lucro em segundos.",
      value: "Vendido separadamente por: R$ 197,00",
      icon: "📊"
    },
    {
      title: "Kit Contratação Blindada",
      type: "Manual PDF",
      desc: "O roteiro de entrevista ('As 5 Perguntas Chave') e o modelo de teste prático para filtrar candidatos e blindar sua equipe.",
      value: "Vendido separadamente por: R$ 97,00",
      icon: "🤝"
    },
    {
      title: "Mapa de Funis para Vender Procedimentos",
      type: "Fluxograma Visual",
      desc: "O desenho estratégico para atrair pacientes com procedimentos de entrada e convertê-los em protocolos de High Ticket.",
      value: "Exclusivo do Workshop",
      icon: "🌪️"
    },
    {
      title: "Mapa dos Ralos Invisíveis",
      type: "Checklist Estratégico",
      desc: "O guia visual para estancar desperdícios financeiros imediatamente e resgatar o lucro que está fugindo do seu caixa.",
      value: "Bônus Estratégico",
      icon: "💎"
    }
  ];

  return (
    <section className="py-24 md:py-40 bg-[#1a120b] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[1200px] h-[300px] md:h-[1200px] bg-[#c8a178]/5 rounded-full blur-[80px] md:blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-24 gap-8 md:gap-12 text-center lg:text-left">
          <div className="max-w-3xl">
            <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-[10px] mb-6 md:mb-8 block font-bold">Ancoragem de Valor</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f2f0ed] mb-6 md:mb-8 tracking-tighter">
              Toolbox <span className="italic text-[#c8a178]">Digital</span>.
            </h2>
            <p className="text-[#c5a689] text-lg md:text-xl lg:text-2xl font-light leading-relaxed italic border-none lg:border-l lg:border-[#c8a178]/30 lg:pl-8">
              "Você não vai sair apenas com anotações. Você recebe as ferramentas executivas da minha própria clínica para baixar, editar e usar."
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <span className="text-[#f2f0ed] font-serif text-3xl md:text-4xl mb-2">R$ 391,00</span>
            <span className="text-[#c8a178] text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold">Valor total em ferramentas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="group bg-[#4a3728]/10 border border-[#c8a178]/10 p-8 md:p-14 hover:border-[#c8a178]/40 transition-all duration-700 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-4 right-4 md:top-10 md:right-10 text-4xl md:text-6xl opacity-5 group-hover:scale-125 transition-transform duration-1000">
                {tool.icon}
              </div>
              
              <div className="relative z-10">
                <span className="text-[#c8a178] text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold mb-4 block">{tool.type}</span>
                <h3 className="text-[#f2f0ed] font-serif text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors">{tool.title}</h3>
                <p className="text-[#c5a689] text-sm md:text-base font-light leading-relaxed mb-8 md:mb-10 max-w-md">
                  {tool.desc}
                </p>
                
                <div className="pt-6 md:pt-8 border-t border-[#c8a178]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-[#c8a178] text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-bold">Status: Ativo</span>
                  <span className="text-[#f2f0ed]/40 text-[8px] md:text-[9px] uppercase tracking-widest font-medium italic">{tool.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-20 flex justify-center">
          <div className="inline-flex items-center gap-4 md:gap-6 px-6 md:px-10 py-4 md:py-6 bg-[#c8a178]/10 border border-[#c8a178]/20 rounded-full">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#c8a178] rounded-full animate-pulse"></div>
            <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">Acesso imediato após a inscrição</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;
