import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <Section id="garantia" className="border-t border-dark-700 bg-dark-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        <Reveal width="fit-content">
           <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center">
              <Shield className="w-full h-full text-gold stroke-[1] fill-gold/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gold">
                <span className="text-3xl font-bold font-serif">7</span>
                <span className="text-xs uppercase tracking-widest">Dias</span>
              </div>
           </div>
        </Reveal>

        <Reveal>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Garantia incondicional de 7 dias</h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Entre, assista, aplique. <br />
              Se não fizer sentido, devolvemos 100% do valor. <br />
              <span className="text-white font-medium">Simples, claro e sem burocracia.</span>
            </p>
          </div>
        </Reveal>

      </div>
    </Section>
  );
};

export default Guarantee;