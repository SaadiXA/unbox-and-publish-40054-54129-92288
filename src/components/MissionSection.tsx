import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const MissionSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-glass border-y border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-brand gold-gradient-text mb-4">{t('mission_section.title')}</h2>
          <p className="text-xl text-[var(--gold)] mb-6">{t('mission_section.subtitle')}</p>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {t('mission_section.content')}
          </div>
          <p className="mt-8 text-2xl font-brand text-[var(--gold)] italic">{t('mission_section.tagline')}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
