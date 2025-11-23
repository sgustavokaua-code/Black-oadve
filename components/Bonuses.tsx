import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { Gift, MessageSquare, Instagram, FileText } from 'lucide-react';

const Bonuses: React.FC = () => {
  return (
    <Section id="bonus" darker className="border-t border-dark-700">
      <Reveal>
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">Exclusividade</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Bônus Oficiais da Formação</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BonusCard 
          number="01"
          icon={<Gift className="w-6 h-6" />}
          title="Módulo Extra de Captação com Anúncios"
          desc="Campanhas simples e objetivas que trazem clientes direto para o WhatsApp."
        />
        <BonusCard 
          number="02"
          icon={<MessageSquare className="w-6 h-6" />}
          title="Pack de Mensagens Profissionais"
          desc="Modelos prontos de atendimento, negociação e fechamento."
        />
        <BonusCard 
          number="03"
          icon={<Instagram className="w-6 h-6" />}
          title="Mini Módulo de Posicionamento Estratégico nas Redes"
          desc="Autoridade estratégica mesmo sem gravar vídeos."
        />
        <BonusCard 
          number="04"
          icon={<FileText className="w-6 h-6" />}
          title="Template Oficial de Gestão do Ecossistema"
          desc="Painel prático para organizar tarefas, prazos, financeiro e parcerias."
        />
      </div>
    </Section>
  );
};

const BonusCard: React.FC<{number: string, icon: React.ReactNode, title: string, desc: string}> = ({number, icon, title, desc}) => (
  <Reveal>
    <div className="bg-dark-900 border border-dark-700 p-6 rounded-lg relative group hover:bg-dark-800 transition-colors h-full flex flex-col">
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-gold text-black font-bold flex items-center justify-center text-sm rounded-sm z-10 shadow-lg">
        {number}
      </div>
      <div className="text-gold/50 mb-4 group-hover:text-gold transition-colors">{icon}</div>
      <h3 className="font-serif text-lg text-white mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mt-auto">{desc}</p>
    </div>
  </Reveal>
);

export default Bonuses;