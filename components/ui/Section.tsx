import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`relative py-20 md:py-32 px-6 overflow-hidden ${darker ? 'bg-black' : 'bg-deepBlack'} ${className}`}
    >
      {/* Subtle Background Grain/Noise could go here */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;