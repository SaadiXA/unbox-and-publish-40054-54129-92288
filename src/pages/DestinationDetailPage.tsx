import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { destinationDetails } from '../constants/destinationDetails';

type DestinationId = keyof typeof destinationDetails;

// Define a type for the destination data that can have either heroVideo or heroImage
type DestinationData = {
  gallery: string[];
  heroVideo?: string;
  heroImage?: string;
};

const DestinationDetailPage: React.FC = () => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const { t } = useTranslation();

  const isValidDestinationId = (id: string | undefined): id is DestinationId => {
    return id ? id in destinationDetails : false;
  };

  if (!isValidDestinationId(destinationId)) {
    return (
        <div className="flex items-center justify-center h-screen text-center">
            <div>
                <h1 className="text-4xl font-brand text-[var(--gold)]">404</h1>
                <p className="mt-2 text-2xl text-gray-300">Destination Not Found</p>
                <Link to="/destinations" className="mt-6 inline-block text-[var(--gold)] border border-[var(--gold)] py-2 px-6 rounded-md hover:bg-[var(--gold)] hover:text-black transition-colors duration-300">
                    Back to Destinations
                </Link>
            </div>
        </div>
    );
  }

  const data: DestinationData = destinationDetails[destinationId];
  const translationKey = `destinations_detail.${destinationId}`;
  
  const experiences: string[] = t(`${translationKey}.experiences`).split(',');

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
        {data.heroVideo ? (
          <video
              key={destinationId}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
          >
              <source src={data.heroVideo} type="video/mp4" />
          </video>
        ) : data.heroImage && (
          <img 
            src={data.heroImage} 
            alt={t(`${translationKey}.title`)} 
            className="absolute top-0 left-0 w-full h-full object-cover" 
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4" data-aos="fade-in">
          <h1 className="text-4xl md:text-6xl font-brand tracking-widest text-shadow-lg">{t(`${translationKey}.title`)}</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto text-shadow-lg">{t(`${translationKey}.subtitle`)}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-gray-300 leading-loose text-xl space-y-6 text-center" data-aos="fade-up">
            <p>{t(`${translationKey}.description1`)}</p>
            <p>{t(`${translationKey}.description2`)}</p>
          </div>

          {/* Experiences */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl font-brand gold-gradient-text text-center">{t(`${translationKey}.experiences_title`)}</h2>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg text-gray-300">
              {Array.isArray(experiences) && experiences.map((exp: string, index: number) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-[var(--gold)] me-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-6l-7 7" /></svg>
                  <span>{exp.trim()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-3xl font-brand gold-gradient-text text-center">{t('destinations_detail.gallery_title')}</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.gallery.map((imgSrc, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <img src={imgSrc} alt={`${t(`${translationKey}.title`)} gallery image ${index + 1}`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="200">
              <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-darker))] text-gray-900 font-bold py-4 px-10 rounded-full text-xl hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-[hsl(var(--gold))]/50"
              >
                  {t('destinations_detail.cta')}
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;