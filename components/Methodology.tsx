import React from 'react';
import Section from './ui/Section';

const Methodology: React.FC = () => {
  return (
    <Section id="metodologia" className="bg-charcoal" darker>
      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent"></div>

        <div className="space-y-16 md:space-y-24">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative">
            <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0">
              <h3 className="font-serif text-2xl text-gold-500 mb-2">1. Consulta Diagnóstica</h3>
              <p className="text-gray-400 font-light text-sm md:text-base">
                Análise detalhada da anatomia facial e escuta ativa dos seus desejos. Mapeamos suas necessidades para um plano personalizado.
              </p>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-deepBlack border border-gold-500 rounded-full z-10">
               <div className="w-full h-full bg-gold-500 rounded-full opacity-50 animate-ping"></div>
            </div>
            <div className="md:w-1/2 order-3 md:order-2 pl-12 md:pl-0">
              <span className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold">O Início</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative">
             <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0">
               <span className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold">O Planejamento</span>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-deepBlack border border-gold-500 rounded-full z-10"></div>
            <div className="md:w-1/2 order-3 md:order-2 pl-12 md:pl-0">
              <h3 className="font-serif text-2xl text-gold-500 mb-2">2. Design Estratégico</h3>
              <p className="text-gray-400 font-light text-sm md:text-base">
                Definição dos protocolos ideais e alinhamento de expectativas. A ciência e a arte se encontram para desenhar sua melhor versão.
              </p>
            </div>
          </div>

           {/* Step 3 */}
           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative">
            <div className="md:w-1/2 md:text-right order-2 md:order-1 pl-12 md:pl-0">
              <h3 className="font-serif text-2xl text-gold-500 mb-2">3. Execução de Excelência</h3>
              <p className="text-gray-400 font-light text-sm md:text-base">
                Aplicação dos procedimentos com técnicas minimamente invasivas, produtos premium e máximo conforto.
              </p>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-deepBlack border border-gold-500 rounded-full z-10"></div>
            <div className="md:w-1/2 order-3 md:order-2 pl-12 md:pl-0">
               <span className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold">A Arte</span>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Methodology;