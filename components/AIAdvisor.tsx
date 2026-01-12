
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getAdvice = async () => {
    if (!query.trim()) return;
    
    // Fallback caso a chave não exista
    let apiKey = '';
    try {
      apiKey = (process?.env?.API_KEY) || '';
    } catch (e) {
      apiKey = '';
    }

    if (!apiKey) {
      setResponse("O acesso à IA requer uma chave configurada. No momento, esta funcionalidade está em modo demonstração.");
      return;
    }

    setIsLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Você é o Consultor Estratégico da Dra. Bruna Mello. Responda em português de forma luxuosa: "${query}"`,
      });
      setResponse(res.text || "Sem resposta do servidor.");
    } catch (error) {
      setResponse("Erro de conexão com o servidor de estratégia.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [response]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c8a178] to-[#4a3728] flex items-center justify-center shadow-2xl border border-white/10 hover:scale-110 transition-all"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
      ) : (
        <div className="w-[320px] md:w-[400px] bg-[#1a120b] rounded-xl border border-[#c8a178]/40 shadow-3xl flex flex-col overflow-hidden">
          <div className="p-4 bg-[#1a120b] border-b border-[#c8a178]/20 flex justify-between items-center">
            <span className="font-serif text-[#f2f0ed] text-xs uppercase tracking-widest">Sala de Estratégia</span>
            <button onClick={() => setIsOpen(false)} className="text-[#c5a689]">&times;</button>
          </div>
          <div ref={scrollRef} className="p-6 h-[300px] overflow-y-auto space-y-4 text-[#f2f0ed] text-xs leading-relaxed">
            {response ? response : "Qual sua dúvida estratégica hoje?"}
            {isLoading && <div className="animate-pulse">Consultando mentores...</div>}
          </div>
          <div className="p-4 flex gap-2 border-t border-[#c8a178]/10">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && getAdvice()}
              placeholder="Pergunta..."
              className="flex-1 bg-black/40 border border-[#c8a178]/30 rounded-full px-4 py-2 text-xs text-white focus:outline-none"
            />
            <button onClick={getAdvice} className="w-8 h-8 rounded-full bg-[#c8a178] text-black">✓</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;
