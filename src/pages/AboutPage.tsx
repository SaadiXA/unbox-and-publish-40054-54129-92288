import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const PageHeader: React.FC<{ title: string }> = ({ title }) => (
    <div 
        className="relative h-60 flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/Z1B09bXQ/Experience-Luxury-Private-Jet-Travel-to-Top-Winter-Destinations.jpg')" }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-5xl font-brand tracking-widest text-shadow-lg">{title}</h1>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader title={t('nav.about')} />
      <div className="py-20 bg-glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-gray-300">
            <div className="text-center" data-aos="fade-down">
                <h2 className="text-4xl font-brand gold-gradient-text mb-6">{t('about_page.title')}</h2>
                <p className="mb-12 leading-relaxed text-xl">
                  {t('about_page.section1')}
                </p>
            </div>
            
            <div className="mt-12 bg-black/30 border border-gray-700 rounded-lg p-8 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
                 <div className="text-center">
                    <h3 className="text-3xl font-brand gold-gradient-text">{t('about_page.section2_title')}</h3>
                 </div>
                 <p className="mt-6 text-center text-gray-300 leading-loose text-xl">
                    {t('about_page.section2_content')}
                 </p>
                 <p className="mt-6 text-center text-xl font-bold text-[var(--gold)] tracking-wide">
                    {t('about_page.section2_tagline')}
                 </p>
            </div>

            <div className="mt-16" data-aos="fade-in" data-aos-delay="400">
                <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1000&auto=format&fit=crop" alt="VIP GATE Team Planning" className="rounded-lg shadow-xl w-full object-cover" loading="lazy"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;