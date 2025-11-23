import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import Reveal from './ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

const Offer: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = "https://pay.hotmart.com/C101049236U?off=748lo01u";
  };

  return (
    <Section id="oferta" className="bg-gradient-to-b from-dark-900 to-black border-t border-dark-700">
      
      <div className="max-w-4xl mx-auto">
        {/* Anchoring */}
        <Reveal>
          <div className="text-center mb-12">
            <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-4">Quanto tudo isso custaria fora da Black?</h3>
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
              <span>Formação</span> <span className="text-gold">•</span>
              <span>Comunidade</span> <span className="text-gold">•</span>
              <span>Vitrine</span> <span className="text-gold">•</span>
              <span>Suporte</span> <span className="text-gold">•</span>
              <span>Certificação</span> <span className="text-gold">•</span>
              <span>Bônus</span> <span className="text-gold">•</span>
              <span>Central Jurídica</span>
            </div>
            <p className="text-2xl text-gray-500 line-through decoration-red-500/50 decoration-2 mt-4 font-serif">
              Total real: R$ 5.011
            </p>
          </div>
        </Reveal>

        {/* Pricing Card */}
        <Reveal delay={0.2}>
          <div className="bg-dark-800 border border-gold rounded-xl p-8 md:p-12 relative shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-black text-xs font-bold uppercase py-1 px-4 rounded-b-lg">
              Condição Exclusiva Black
            </div>

            <p className="text-white text-lg mb-6 mt-4">Na Black, você garante tudo por:</p>
            
            <div className="flex flex-col items-center justify-center mb-8">
               <span className="text-6xl md:text-7xl font-serif text-white font-bold tracking-tight">
                 <span className="text-2xl align-top text-gray-400 font-sans font-light mr-1">R$</span>
                 197
               </span>
               <span className="text-gray-400 uppercase text-sm tracking-wide mt-2">à vista</span>
               <div className="my-2 w-12 h-px bg-dark-600"></div>
               <span className="text-gold text-xl">ou 12x de R$ 19,97</span>
            </div>

            <div className="mb-10 p-4 bg-dark-900/50 rounded border border-dark-700 inline-block">
               <p className="text-sm md:text-base text-gray-300 italic font-serif">
                 "Uma condição excepcional, liberada apenas para esta edição — e não será repetida."
               </p>
            </div>

            <Button 
              text="Quero garantir meu acesso completo agora" 
              fullWidth={true} 
              className="text-sm md:text-base"
              onClick={handleCheckout}
            />
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-gray-500">
               <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-3 h-3 text-gold"/> Acesso Imediato</div>
               <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-3 h-3 text-gold"/> Compra Segura</div>
               <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-3 h-3 text-gold"/> Certificado Incluso</div>
               <div className="flex items-center justify-center gap-1"><CheckCircle2 className="w-3 h-3 text-gold"/> Garantia de 7 Dias</div>
            </div>

          </div>
        </Reveal>
      </div>

    </Section>
  );
};

export default Offer;