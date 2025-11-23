import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', darker = false }) => {
  return (
    <section 
      id={id} 
      className={`
        relative w-full py-20 md:py-32 px-4 md:px-8 
        ${darker ? 'bg-dark-900' : 'bg-dark-800'} 
        ${className}
      `}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;