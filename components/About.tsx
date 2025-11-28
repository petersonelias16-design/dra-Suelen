import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const About: React.FC = () => {
  return (
    <Section id="sobre" className="bg-charcoal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Precisão Técnica, <br />
              <span className="text-gold-500 italic">Olhar Artístico</span>
            </h2>
            <div className="w-20 h-[1px] bg-gold-500"></div>
          </div>

          <div className="font-sans font-light text-gray-300 space-y-6 leading-relaxed text-lg">
            <p>
              A Dra. Suelen Correia é referência em estética avançada, combinando profundo conhecimento anatômico com uma sensibilidade artística única. Sua filosofia baseia-se no <strong className="text-white font-normal">gerenciamento do envelhecimento</strong> de forma elegante e sutil.
            </p>
            <p>
              Acreditamos que a verdadeira sofisticação reside na naturalidade. Cada protocolo é desenhado exclusivamente para você, respeitando seus traços singulares e realçando o que você tem de melhor.
            </p>
            <p>
              Em um ambiente acolhedor e altamente tecnológico, oferecemos uma experiência de cuidado que vai além da estética, promovendo bem-estar e confiança.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-2 gap-8 border-t border-white/10">
            <div>
              <span className="block text-3xl font-serif text-gold-500 mb-1">10+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Anos de Experiência</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-gold-500 mb-1">5k+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Pacientes Atendidas</span>
            </div>
          </div>
          
          <div className="pt-6">
             <Button variant="text" icon onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}>Agendar Avaliação</Button>
          </div>
        </div>

        {/* Image/Visuals */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            {/* Decorative Frames */}
            <div className="absolute inset-0 border border-gold-500/20 translate-x-4 translate-y-4"></div>
            
            {/* Main Image */}
            <div className="absolute inset-0 bg-neutral-800 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Dra. Suelen Correia" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;