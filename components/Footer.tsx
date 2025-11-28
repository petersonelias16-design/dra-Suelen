import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/5 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl text-white tracking-wide">
            DRA. SUELEN
          </span>
          <span className="font-sans text-[0.5rem] tracking-[0.3em] text-gold-500 uppercase">
            Estética Avançada
          </span>
        </div>
        
        <div className="text-gray-600 text-xs font-light tracking-wider">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
        
        <div className="flex gap-6 text-gray-500 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;