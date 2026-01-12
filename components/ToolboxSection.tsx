
import React from 'react';

const ToolboxSection: React.FC = () => {
  const tools = [
    {
      title: "Calculadora de Precificação",
      type: "Planilha Editável",
      desc: "Descubra a margem exata de lucro em segundos. Sem 'chutes' ou cópias da concorrência.",
      icon: "📊"
    },
    {
      title: "Kit Contratação Blindada",
      type: "Manual PDF",
      desc: "Roteiros e testes práticos para filtrar candidatos e blindar sua equipe estratégica.",
      icon: "🤝"
    },
    {
      title: "Mapa de Funis de Vendas",
      type: "Fluxograma Visual",
      desc: "Estratégia para atrair pacientes e convertê-los em protocolos de alto ticket.",
      icon: "🌪️"
    },
    {
      title: "Mapa dos Ralos Invisíveis",
      type: "Checklist",
      desc: "Guia para estancar desperdícios financeiros e resgatar o lucro imediato do caixa.",
      icon: "💎"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#1a120b] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#c8a178] uppercase tracking-[0.8em] text-[9px] mb-8 block font-bold">Valor Agregado</span>
          <h2 className="font-serif text-4xl md:text-7xl text-[#f2f0ed] mb-10 tracking-tighter">
            Toolbox <span className="italic text-[#c8a178]">Digital</span>.
          </h2>
          <p className="text-[#c5a689] text-xl md:text-2xl font-light italic max-w-3xl mx-auto opacity-70">
            "Você recebe as ferramentas executivas da minha própria clínica para baixar, editar e usar."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {tools.map((tool, i) => (
            <div key={i} className="group bg-[#4a3728]/5 border border-[#c8a178]/10 p-12 md:p-16 rounded-[48px] hover:bg-[#c8a178]/5 hover:border-[#c8a178]/30 transition-all duration-1000 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-10 right-10 text-6xl opacity-5 group-hover:scale-110 transition-transform duration-1000">
                {tool.icon}
              </div>
              
              <div className="relative z-10">
                <span className="text-[#c8a178] text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block opacity-60">{tool.type}</span>
                <h3 className="text-[#f2f0ed] font-serif text-2xl md:text-3xl mb-6 group-hover:text-white transition-colors">{tool.title}</h3>
                <p className="text-[#c5a689] text-base md:text-lg font-light leading-relaxed mb-10 opacity-80">
                  {tool.desc}
                </p>
                <div className="pt-8 border-t border-[#c8a178]/10">
                  <span className="text-[#c8a178] text-[10px] uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">Acesso Imediato</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;
