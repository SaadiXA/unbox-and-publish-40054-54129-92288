import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const ExclusiveFeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    { icon: '👑', text: t('exclusive_features.feature1') },
    { icon: '💎', text: t('exclusive_features.feature2') },
    { icon: '🕐', text: t('exclusive_features.feature3') },
    { icon: '⭐', text: t('exclusive_features.feature4') },
    { icon: '🍳', text: t('exclusive_features.feature5') },
    { icon: '💆', text: t('exclusive_features.feature6') },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-brand gold-gradient-text mb-4">{t('exclusive_features.title')}</h2>
          <p className="text-xl text-[var(--gold)] italic">{t('exclusive_features.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-[var(--gold)] transition-all duration-300 hover:scale-105 flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl">{feature.icon}</div>
              <p className="text-gray-300 text-lg flex-1">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeaturesSection;
