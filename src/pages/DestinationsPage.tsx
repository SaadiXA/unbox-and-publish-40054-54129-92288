import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const PageHeader: React.FC<{ title: string; subtitle: string; }> = ({ title, subtitle }) => (
    <div 
        className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/4gtmNfPF/672e8e387d7ef97e211bc0e2-The-Lana-High-Society-pool-Burj-Dorchester-Collection-copy1.webp')" }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
            <h1 
                className="text-4xl md:text-6xl font-brand tracking-widest"
                style={{ filter: 'drop-shadow(0 3px 15px rgba(0, 0, 0, 0.8))' }}
                data-aos="fade-down"
            >
                {title}
            </h1>
            <p 
                className="mt-4 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto"
                style={{ filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7))' }}
                data-aos="fade-up" 
                data-aos-delay="300"
            >
                {subtitle}
            </p>
        </div>
    </div>
);

const destinations = [
  {
    nameKey: "destinations_page.maldives_name",
    descKey: "destinations_page.maldives_desc",
    image: "https://i.ibb.co/qMwjSdVb/vignette-collection-noonu-atoll-9970118335-16x9.jpg",
    path: "/destinations/maldives"
  },
  {
    nameKey: "destinations_page.switzerland_name",
    descKey: "destinations_page.switzerland_desc",
    image: "https://i.ibb.co/9HpgKvFN/Zermatt-and-the-Matterhorn-1024x576.png",
    path: "/destinations/switzerland"
  },
  {
    nameKey: "destinations_page.paris_name",
    descKey: "destinations_page.paris_desc",
    image: "https://i.ibb.co/Ps9rJTKn/photo-1499856871958-5b9627545d1a.jpg",
    path: "/destinations/paris"
  },
  {
    nameKey: "destinations_page.santorini_name",
    descKey: "destinations_page.santorini_desc",
    image: "https://i.ibb.co/RG8r39pf/Santorini-Oia.jpg",
    path: "/destinations/santorini"
  },
  {
    nameKey: "destinations_page.london_name",
    descKey: "destinations_page.london_desc",
    image: "https://i.ibb.co/YTN8yJnt/westminster-at-dusk-london-1280x720.jpg",
    path: "/destinations/london"
  },
  {
    nameKey: "destinations_page.istanbul_name",
    descKey: "destinations_page.istanbul_desc",
    image: "https://i.ibb.co/jPMtRZhH/blue-mosque-Turkey-where-to-stay-in-istanbul.webp",
    path: "/destinations/istanbul"
  },
  {
    nameKey: "destinations_page.dubai_name",
    descKey: "destinations_page.dubai_desc",
    image: "https://i.ibb.co/JwRqgz2m/shutterstock-2414539851-ss-non-editorial-dcx0bm.jpg",
    path: "/destinations/dubai"
  }
];

const DestinationCard: React.FC<{ dest: typeof destinations[0], index: number }> = ({ dest, index }) => {
    const { t } = useTranslation();
    return (
        <Link 
            to={dest.path} 
            className="relative block aspect-[4/5] w-full rounded-lg overflow-hidden group shadow-lg transform hover:-translate-y-2 transition-transform duration-300" 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
        >
            <img src={dest.image} alt={t(dest.nameKey)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
                    <h3 className="text-3xl font-brand tracking-wide">{t(dest.nameKey)}</h3>
                    <p className="mt-2 text-gray-200 leading-snug">{t(dest.descKey)}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block text-[var(--gold)] border border-[var(--gold)] py-2 px-5 rounded-md text-sm font-semibold">
                            {t('destinations_page.card_button')}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};


const DestinationsPage: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <PageHeader title={t('destinations_page.header_title')} subtitle={t('destinations_page.header_subtitle')} />
            <div className="py-20 bg-glass">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-gray-300 mb-16" data-aos="fade-up">
                        <p className="leading-loose text-xl">{t('destinations_page.intro')}</p>
                         <p className="mt-6 text-xl font-bold text-[var(--gold)] tracking-wide">
                            {t('destinations_page.tagline')}
                         </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {destinations.map((dest, index) => (
                           <DestinationCard key={dest.nameKey} dest={dest} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationsPage;