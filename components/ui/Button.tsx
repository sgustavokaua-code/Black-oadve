import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden
        bg-gold hover:bg-gold-light text-black font-sans font-bold uppercase tracking-wide
        py-4 px-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
        flex items-center justify-center gap-2
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <span className="relative z-10">{text}</span>
      <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      
      {/* Shine effect overlay */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent z-0" />
    </button>
  );
};

export default Button;