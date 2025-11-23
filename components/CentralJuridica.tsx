import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { Bot, Zap, Clock, FileCheck } from 'lucide-react';

const CentralJuridica: React.FC = () => {
  return (
    <Section id="central-juridica" className="relative overflow-hidden !py-24">
      {/* Background Effect for Tech Feel */}
      <div className="absolute inset-0 bg-dark-900 z-0">
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
           <Reveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" /> Nova Ferramenta Oficial
             </div>
             <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">Central Jurídica</h2>
             <p className="text-xl text-gray-400 mb-8 font-light">
               Inclusa gratuitamente somente nesta Black.
             </p>
           </Reveal>

           <Reveal delay={0.2}>
             <div className="space-y-8">
               <div>
                 <h3 className="text-gold text-lg font-semibold mb-2">O que é?</h3>
                 <p className="text-gray-300">Uma suíte de Agentes de IA jurídicos, funcionando dentro do ChatGPT.</p>
               </div>

               <div>
                 <h3 className="text-gold text-lg font-semibold mb-3">O que fazem?</h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {[
                     "Criam peças, contratos e análises",
                     "Organizam rotinas internas",
                     "Automatizam tarefas repetitivas",
                     "Ajudam na gestão de prazos",
                     "Reduzem o operacional",
                     "Aumentam eficiência imediata"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                       <Bot className="w-4 h-4 text-gold/70" /> {item}
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="p-6 bg-dark-700/50 border-l-4 border-gold rounded-r-lg backdrop-blur-sm">
                 <h3 className="text-white font-medium mb-1">Por que é importante?</h3>
                 <p className="text-sm text-gray-400 italic">
                   A Central Jurídica se torna o motor de produtividade da sua advocacia, liberando você para atuar de forma realmente estratégica.
                 </p>
               </div>
             </div>
           </Reveal>
        </div>

        {/* Visual Mockup */}
        <div className="relative">
          <Reveal delay={0.4}>
            {/* 3D Mockup Container */}
            <div className="relative w-full aspect-square md:aspect-[4/3] transform lg:rotate-y-12 lg:rotate-x-6 transition-all duration-500 hover:rotate-0 perspective-1000">
               {/* Main Screen */}
               <div className="absolute inset-0 bg-dark-800 rounded-xl border border-dark-600 shadow-2xl overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="h-10 bg-dark-900 border-b border-dark-700 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  {/* Content Mockup */}
                  <div className="flex-1 p-6 relative">
                     <div className="flex gap-4 mb-6">
                        <div className="w-16 h-16 bg-gold/20 rounded-lg flex items-center justify-center">
                          <Bot className="w-8 h-8 text-gold" />
                        </div>
                        <div>
                          <div className="h-4 w-32 bg-dark-600 rounded mb-2"></div>
                          <div className="h-3 w-48 bg-dark-700 rounded"></div>
                        </div>
                     </div>
                     
                     {/* Chat bubbles */}
                     <div className="space-y-4">
                        <div className="flex justify-end">
                           <div className="bg-dark-700 text-gray-300 p-3 rounded-lg rounded-tr-none text-xs w-2/3">
                              Gerar contrato de parceria comercial...
                           </div>
                        </div>
                        <div className="flex justify-start">
                           <div className="bg-gold/10 text-gold p-3 rounded-lg rounded-tl-none text-xs w-3/4 border border-gold/20">
                              <p className="mb-2">Analisando parâmetros...</p>
                              <div className="h-2 w-full bg-gold/20 rounded mb-1"></div>
                              <div className="h-2 w-2/3 bg-gold/20 rounded"></div>
                           </div>
                        </div>
                     </div>

                     {/* Floating Cards */}
                     <div className="absolute -bottom-6 -right-6 bg-dark-800 border border-gold p-4 rounded-lg shadow-xl w-48 animate-pulse">
                        <div className="flex items-center gap-2 mb-2">
                          <FileCheck className="w-4 h-4 text-green-500" />
                          <span className="text-white text-xs font-bold">Contrato Gerado</span>
                        </div>
                        <div className="h-1.5 w-full bg-dark-600 rounded-full overflow-hidden">
                           <div className="h-full bg-green-500 w-full"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>

      </div>
    </Section>
  );
};

export default CentralJuridica;