import React from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { Briefcase, Users, LayoutGrid, MessageCircle, ShieldCheck, GraduationCap } from 'lucide-react';

const Deliverables: React.FC = () => {
  return (
    <Section id="entregaveis" className="border-t border-dark-700">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">O que você recebe ao entrar hoje</h2>
          <p className="text-gray-400 text-lg">
            A Black reúne, em um único acesso, os pilares que estruturam a advocacia moderna: método, comunidade, oportunidades e tecnologia.
          </p>
        </Reveal>
      </div>

      {/* Formation Header Block - Strictly following copy hierarchy */}
      <div className="mb-10">
        <Reveal>
          <div className="border-l-4 border-gold pl-6 py-2">
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-2">Formação Completa do Advogado Estratégico</h3>
            <p className="text-gold font-medium uppercase tracking-wide text-sm md:text-base mb-4">
              Programa principal — aulas gravadas + aulas extras ao vivo
            </p>
            <p className="text-gray-300 text-lg">
              A formação conduz o advogado por três fases práticas e aplicáveis:
            </p>
          </div>
        </Reveal>
      </div>

      {/* Main Formation Phases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <DeliverableCard 
          phase="Fase 1" 
          title="Pessoas" 
          icon={<Users className="w-6 h-6 text-black" />}
          items={[
            "Identificação do seu perfil estratégico",
            "Construção de autoridade de forma ética",
            "Como atrair oportunidades reais sem depender de redes sociais"
          ]}
        />
        <DeliverableCard 
          phase="Fase 2" 
          title="Parcerias Estratégicas" 
          icon={<Briefcase className="w-6 h-6 text-black" />}
          items={[
            "Como montar seu Ecossistema Inteligente",
            "Contratos prontos",
            "Scripts profissionais de abordagem e negociação",
            "Como fechar parcerias em qualquer região"
          ]}
          featured
        />
        <DeliverableCard 
          phase="Fase 3" 
          title="Gestão Inteligente" 
          icon={<LayoutGrid className="w-6 h-6 text-black" />}
          items={[
            "Rotinas simples e funcionais",
            "Painéis e ferramentas de organização",
            "Gestão de parceiros",
            "Estrutura para escalar sua advocacia sem sobrecarga"
          ]}
        />
      </div>

      {/* Additional Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <SecondaryCard 
           icon={<Users className="w-8 h-8 text-gold" />}
           title="Comunidade Sociedade do Direito"
           subtitle="Ambiente privado de networking jurídico"
           description={
             <div className="mt-4">
               <p className="text-gray-400 text-sm mb-2">Um espaço ativo onde acontecem:</p>
               <ul className="space-y-2 text-gray-400 text-sm list-disc pl-5 marker:text-gold">
                 <li>parcerias reais,</li>
                 <li>trocas profissionais,</li>
                 <li>oportunidades práticas,</li>
                 <li>apoio mútuo entre advogados,</li>
                 <li>conexões diretas entre regiões e especialidades.</li>
               </ul>
               <p className="text-white pt-4 font-medium">Aqui você deixa de atuar sozinho.</p>
             </div>
           }
         />
         
         <SecondaryCard 
           icon={<LayoutGrid className="w-8 h-8 text-gold" />}
           title="Vitrine de Especialidades"
           subtitle="Ferramenta de conexão jurídica entre colegas"
           badge="Bônus da Formação"
           description={
             <div className="mt-4">
                <p className="text-gray-400 text-sm mb-2">Uma vitrine inteligente que mostra:</p>
                <ul className="space-y-2 text-gray-400 text-sm list-disc pl-5 marker:text-gold">
                  <li>advogados por área,</li>
                  <li>advogados por região,</li>
                  <li>oportunidades práticas para atuar juntos.</li>
                </ul>
                <p className="text-white text-sm mt-4 font-medium border-l-2 border-gold pl-3">Facilita parcerias técnicas e captação de casos.</p>
             </div>
           }
         />

        <SecondaryCard 
           icon={<MessageCircle className="w-8 h-8 text-gold" />}
           title="Suporte Direto com a Dra. Tatiane"
           subtitle="Acompanhamento humano e estratégico"
           badge="Bônus da Formação"
           description={
             <div className="mt-4">
               <p className="text-gray-400 text-sm mb-2">A Dra. Tatiane acompanha os alunos pela:</p>
               <ul className="space-y-2 text-gray-400 text-sm list-disc pl-5 marker:text-gold">
                  <li>comunidade,</li>
                  <li>aulas extras ao vivo,</li>
                  <li>esclarecimento de dúvidas,</li>
                  <li>direcionamento prático.</li>
               </ul>
               <p className="text-gold text-lg font-serif italic mt-4">Apoio real, próximo e contínuo.</p>
             </div>
           }
         />

        <SecondaryCard 
           icon={<GraduationCap className="w-8 h-8 text-gold" />}
           title="Certificado de Extensão Universitária (MEC)"
           subtitle="Reconhecimento acadêmico"
           badge="Bônus da Formação"
           description={
             <p className="text-gray-400 text-sm mt-4">
               Certificado opcional que reforça o seu currículo e posicionamento profissional.
             </p>
           }
         />
      </div>

    </Section>
  );
};

const DeliverableCard: React.FC<{phase: string, title: string, items: string[], icon: React.ReactNode, featured?: boolean}> = ({phase, title, items, icon, featured}) => (
  <Reveal>
    <div className={`
      h-full p-8 rounded-lg border flex flex-col
      ${featured ? 'bg-dark-700 border-gold shadow-[0_0_30px_rgba(212,175,55,0.1)]' : 'bg-dark-800 border-dark-600'}
    `}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gold rounded flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-gold mb-1 block">{phase}</span>
          <h3 className="text-xl md:text-2xl font-serif text-white">{title}</h3>
        </div>
      </div>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Reveal>
);

const SecondaryCard: React.FC<{icon: React.ReactNode, title: string, subtitle: string, description: React.ReactNode, badge?: string}> = ({icon, title, subtitle, description, badge}) => (
  <Reveal>
    <div className="h-full p-6 md:p-8 rounded-lg bg-dark-800 border border-dark-600 hover:border-dark-500 transition-colors relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-all"></div>
      
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider text-gold border border-gold/30 px-2 py-1 rounded bg-black/50 backdrop-blur-md">
          {badge}
        </span>
      )}

      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-serif text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-4 border-b border-dark-600 pb-4">{subtitle}</p>
      <div>{description}</div>
    </div>
  </Reveal>
);

export default Deliverables;