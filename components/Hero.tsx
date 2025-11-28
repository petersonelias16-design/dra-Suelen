import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
          alt="Estética Elegante" 
          className="w-full h-full object-cover object-top opacity-50 filter grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deepBlack/80 via-deepBlack/40 to-deepBlack"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="mb-6 animate-fade-in-down">
          <span className="inline-block py-1 px-3 border border-gold-500/30 rounded-full bg-deepBlack/50 backdrop-blur-sm text-gold-400 text-xs tracking-[0.2em] uppercase mb-6">
            Excelência em Harmonização
          </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 font-light tracking-tight">
          A arte de realçar <br />
          <span className="italic text-gold-gradient font-normal">sua essência</span>
        </h1>
        
        <p className="font-sans text-gray-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12 opacity-90">
          Medicina estética avançada com um olhar artístico e técnico. 
          Resultados naturais que respeitam sua anatomia e elevam sua autoconfiança.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <Button icon onClick={() => document.getElementById('servicos')?.scrollIntoView({behavior: 'smooth'})}>
            Conheça os Tratamentos
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'})}>
            Sobre a Dra. Suelen
          </Button>
        </div>
      </div>

      {/* Decorative Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-gold-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;