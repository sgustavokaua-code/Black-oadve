import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const Closing: React.FC = () => {
  const scrollToOffer = () => {
    const section = document.getElementById('oferta');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="fechamento" className="text-center pb-32">
       <div className="max-w-3xl mx-auto">
         <Reveal>
           <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
             A advocacia está mudando — e os profissionais que se estruturarem agora terão vantagem nos próximos anos.
           </h2>
         </Reveal>
         
         <Reveal delay={0.2}>
           <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
             A Black te entrega o método, a comunidade, as ferramentas e a tecnologia para fazer essa virada acontecer com segurança.
           </p>
           
           <div className="p-6 border border-dark-600 rounded bg-dark-800/50 mb-10 inline-block">
             <p className="text-white">Clique no botão enquanto a condição estiver ativa.</p>
           </div>
         </Reveal>

         <Reveal delay={0.3}>
           <Button text="Quero entrar na Black do Advogado Estratégico" className="mx-auto" onClick={scrollToOffer} />
         </Reveal>
       </div>
    </Section>
  );
};

export default Closing;