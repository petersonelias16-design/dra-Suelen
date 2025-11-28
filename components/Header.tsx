import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'A Clínica', href: '#sobre' },
    { name: 'Tratamentos', href: '#servicos' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-deepBlack/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-2xl md:text-3xl text-white tracking-wide group-hover:text-gold-500 transition-colors">
            DRA. SUELEN
          </span>
          <span className="font-sans text-[0.65rem] md:text-xs tracking-[0.3em] text-gold-500 uppercase">
            Estética Avançada
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-500 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" className="!py-2 !px-6 text-xs" onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>
            Agendar
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-gold-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-deepBlack z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 transform ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
         {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-white hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => setMobileMenuOpen(false)}>
            Agendar Consulta
          </Button>
      </div>
    </header>
  );
};

export default Header;