import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contato" className="bg-deepBlack border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Inicie sua Jornada</h2>
            <p className="text-gray-400 font-light">
              Estamos prontos para receber você em nosso espaço exclusivo. Agende sua avaliação e descubra o poder da estética avançada.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h4 className="font-serif text-xl text-white">Localização</h4>
                <p className="text-gray-400 text-sm">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP</p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h4 className="font-serif text-xl text-white">Telefone</h4>
                <p className="text-gray-400 text-sm">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h4 className="font-serif text-xl text-white">Email</h4>
                <p className="text-gray-400 text-sm">contato@drasuelencorreia.com.br</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
             <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:border-gold-500 hover:text-gold-500 transition-all">
                <Instagram size={20} />
             </a>
             <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:border-gold-500 hover:text-gold-500 transition-all">
                <MessageCircle size={20} />
             </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 p-8 md:p-12 border border-white/5 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nome Completo</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Digite seu nome" />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Telefone</label>
              <input type="tel" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="(00) 00000-0000" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Interesse</label>
              <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors [&>option]:bg-deepBlack">
                <option>Harmonização Facial</option>
                <option>Botox</option>
                <option>Bioestimuladores</option>
                <option>Outros</option>
              </select>
            </div>

             <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Mensagem</label>
              <textarea rows={3} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Como podemos ajudar?"></textarea>
            </div>

            <Button type="submit" className="w-full mt-4">Enviar Solicitação</Button>
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;