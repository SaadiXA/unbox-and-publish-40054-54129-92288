import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import fourSeasonsLogo from '../assets/partners/four-seasons.png';
import ritzCarltonLogo from '../assets/partners/ritz-carlton.png';
import marriottLogo from '../assets/partners/marriott.png';
import hiltonLogo from '../assets/partners/hilton.png';
import hyattLogo from '../assets/partners/hyatt.png';
import ihgLogo from '../assets/partners/ihg.png';
import waldorfLogo from '../assets/partners/waldorf.png';
import stRegisLogo from '../assets/partners/st-regis.png';

const partners = [
  { 
    name: 'Four Seasons', 
    logo: fourSeasonsLogo,
    alt: 'Four Seasons Hotels and Resorts'
  },
  { 
    name: 'Ritz-Carlton', 
    logo: ritzCarltonLogo,
    alt: 'The Ritz-Carlton'
  },
  { 
    name: 'Marriott', 
    logo: marriottLogo,
    alt: 'Marriott Hotels'
  },
  { 
    name: 'Hilton', 
    logo: hiltonLogo,
    alt: 'Hilton Hotels & Resorts'
  },
  { 
    name: 'Hyatt', 
    logo: hyattLogo,
    alt: 'Hyatt Hotels'
  },
  { 
    name: 'InterContinental', 
    logo: ihgLogo,
    alt: 'InterContinental Hotels Group'
  },
  { 
    name: 'Waldorf Astoria', 
    logo: waldorfLogo,
    alt: 'Waldorf Astoria'
  },
  { 
    name: 'St. Regis', 
    logo: stRegisLogo,
    alt: 'St. Regis Hotels & Resorts'
  },
];

const Partners: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(224, 184, 65, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(224, 184, 65, 0.4);
          }
        }
        
        .partner-logo-container {
          animation: float 3s ease-in-out infinite;
        }
        
        .partner-logo-container:hover {
          animation: pulse-glow 1.5s ease-in-out infinite;
        }
        
        .partner-logo-container:nth-child(1) { animation-delay: 0s; }
        .partner-logo-container:nth-child(2) { animation-delay: 0.3s; }
        .partner-logo-container:nth-child(3) { animation-delay: 0.6s; }
        .partner-logo-container:nth-child(4) { animation-delay: 0.9s; }
        .partner-logo-container:nth-child(5) { animation-delay: 1.2s; }
        .partner-logo-container:nth-child(6) { animation-delay: 1.5s; }
        .partner-logo-container:nth-child(7) { animation-delay: 1.8s; }
        .partner-logo-container:nth-child(8) { animation-delay: 2.1s; }
      `}</style>
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black/40 via-gray-900/30 to-black/40 border-y border-[var(--gold)]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--gold)]/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-gray-400 uppercase mb-2">{t('partners.title')}</h2>
            <p className="text-2xl sm:text-3xl font-brand text-[var(--gold)]">{t('partners.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="partner-logo-container flex justify-center items-center bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-300/50 hover:border-[var(--gold)] transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[var(--gold)]/20" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="w-full h-auto max-h-12 sm:max-h-14 md:max-h-16 lg:max-h-20 object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
