
import React, { useState } from 'react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "O curso é 100% online?",
    answer: "Sim! Todas as aulas são gravadas e estão disponíveis na área de membros. Você também terá acesso às gravações das aulas ao vivo e mentorias para assistir quando e onde quiser."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O acesso é vitalício. Nesta condição exclusiva, você garante acesso permanente a todo o conteúdo, atualizações futuras, comunidade e bônus, sem prazo de expiração. Você pode assistir às aulas quantas vezes quiser."
  },
  {
    question: "O certificado é reconhecido?",
    answer: "Sim. Ao concluir a formação, você pode emitir o Certificado de Extensão Universitária, reconhecido pelo MEC, conferindo peso acadêmico e autoridade ao seu currículo profissional."
  },
  {
    question: "Serve para quem está começando agora?",
    answer: "Com certeza. A Formação foi desenhada para fornecer a estrutura prática de negócios que a faculdade não ensina. É o caminho mais seguro para iniciar na advocacia sem cometer erros básicos de gestão e posicionamento."
  },
  {
    question: "Como funciona a garantia?",
    answer: "É simples e transparente: você tem 7 dias para entrar, assistir às aulas e conhecer a metodologia. Se por qualquer motivo achar que não é para você, basta enviar um e-mail e devolvemos 100% do seu investimento."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Perguntas Frequentes</h2>
            <div className="w-16 h-1 bg-gold rounded-full mx-auto"></div>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="border border-dark-700 rounded-lg bg-dark-800 overflow-hidden transition-all duration-300 hover:border-dark-600">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className={`font-medium text-lg pr-4 transition-colors ${openIndex === index ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 p-1 rounded-full border transition-all duration-300 ${openIndex === index ? 'border-gold text-gold rotate-180' : 'border-gray-600 text-gray-400 group-hover:border-gold group-hover:text-gold'}`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-dark-700/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
