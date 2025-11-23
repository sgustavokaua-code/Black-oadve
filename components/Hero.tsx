import React from 'react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

// Add type definition for the custom element to avoid TS errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { id?: string };
      [elemName: string]: any;
    }
  }
}

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    const section = document.getElementById('oferta');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 md:px-8 bg-dark-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-700 via-dark-900 to-black opacity-80 z-0"></div>
      
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10">
        
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1]">
              A condição oficial <span className="gold-gradient-text italic">mais exclusiva</span> da Formação do Advogado Estratégico, válida somente nesta Black.
            </h1>
          </Reveal>

          {/* Video Player */}
          <Reveal delay={0.2} width="100%">
            <div className="w-full flex justify-center py-2">
              <vturb-smartplayer 
                id="vid-69232c26b4565a02eb35e78b" 
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto"></div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light max-w-2xl mx-auto">
              A advocacia está passando pela maior mudança dos últimos anos. 
              Esta Black reúne tudo o que você precisa para atuar com previsibilidade, autoridade e liberdade, alinhado às novas diretrizes estratégicas da OAB.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-4">
              <Button text="Garantir meu acesso agora" className="px-12 py-5 text-lg" onClick={scrollToOffer} />
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
};

export default Hero;