import React from 'react';
import Section from './ui/Section';
import { Sparkles, Syringe, ScanFace, Crown } from 'lucide-react';

const services = [
  {
    id: '1',
    title: 'Harmonização Facial',
    description: 'Equilíbrio e simetria através de técnicas combinadas para realçar seus traços naturais.',
    icon: <ScanFace className="w-6 h-6 text-gold-500" />
  },
  {
    id: '2',
    title: 'Toxina Botulínica',
    description: 'Prevenção e tratamento de rugas dinâmicas, proporcionando uma aparência descansada e leve.',
    icon: <Sparkles className="w-6 h-6 text-gold-500" />
  },
  {
    id: '3',
    title: 'Bioestimuladores de Colágeno',
    description: 'Restruturação da firmeza da pele através da estimulação natural do seu próprio colágeno.',
    icon: <Syringe className="w-6 h-6 text-gold-500" />
  },
  {
    id: '4',
    title: 'Fios de Sustentação',
    description: 'Efeito lifting imediato e estímulo de colágeno a longo prazo para combater a flacidez.',
    icon: <Crown className="w-6 h-6 text-gold-500" />
  },
  {
    id: '5',
    title: 'Preenchimento Labial',
    description: 'Volume, contorno e hidratação com naturalidade, respeitando a proporção da face.',
    icon: null
  },
  {
    id: '6',
    title: 'Skinbooster & Hidratação',
    description: 'Hidratação profunda injetável para devolver o viço e a luminosidade da pele.',
    icon: null
  }
];

const Services: React.FC = () => {
  return (
    <Section id="servicos">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Nossos Protocolos</h2>
        <p className="text-gray-400 font-light text-lg">
          Tratamentos de alta performance desenhados para a mulher moderna que busca sofisticação.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
        {services.map((service) => (
          <div key={service.id} className="group relative bg-deepBlack p-10 hover:bg-neutral-900/50 transition-colors duration-500">
            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              {service.icon || <div className="w-6 h-6 border border-gold-500/50 rounded-full"></div>}
            </div>
            
            <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-500 transition-colors">
              {service.title}
            </h3>
            
            <p className="font-sans text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">
              {service.description}
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-500 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;