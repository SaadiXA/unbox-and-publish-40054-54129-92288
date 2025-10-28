
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import Partners from '../components/Partners';
import MissionSection from '../components/MissionSection';
import ExclusiveFeaturesSection from '../components/ExclusiveFeaturesSection';

const HeroSection: React.FC = () => {
    const { t } = useTranslation();
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // This error is expected if the user rapidly clicks the play/pause button,
                        // interrupting the play() promise. We can safely ignore it.
                        if (error.name === 'AbortError') {
                            return;
                        }
                        console.error("Video playback failed", error);
                    });
                }
            } else {
                videoRef.current.pause();
            }
        }
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handlePlay = () => setIsVideoPlaying(true);
        const handlePause = () => setIsVideoPlaying(false);
        
        // Initial state might be paused if autoplay is blocked
        setIsVideoPlaying(!videoElement.paused);

        videoElement.addEventListener('play', handlePlay);
        videoElement.addEventListener('pause', handlePause);

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('play', handlePlay);
                videoElement.removeEventListener('pause', handlePause);
            }
        };
    }, []);

    const videoClasses = "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out opacity-100";
    const kenburnsClass = "animate-kenburns";

    return (
        <>
            <style>{`
                @keyframes kenburns-effect {
                    0% {
                        transform: scale(1.1) translate(0, 0);
                    }
                    50% {
                        transform: scale(1.2) translate(4%, -2%);
                    }
                    100% {
                        transform: scale(1.1) translate(0, 0);
                    }
                }
                .animate-kenburns {
                    animation: kenburns-effect 25s ease-in-out infinite;
                }
            `}</style>
            <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
                <video
                    ref={videoRef}
                    className={`${videoClasses} ${kenburnsClass}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1920&auto=format&fit=crop"
                >
                    <source src="https://cdn.pixabay.com/video/2024/05/27/211516-949019525_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/60"></div>
                
                <button onClick={togglePlay} className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors" aria-label={isVideoPlaying ? "Pause video" : "Play video"}>
                    {isVideoPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>
                
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-brand tracking-widest leading-tight text-shadow-lg" data-aos="fade-down">
                        {t('hero.title')}
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-brand tracking-wider" data-aos="fade-up" data-aos-delay="500">
                        {t('hero.subtitle')}
                    </p>
                    <Link
                        to="#welcome"
                        className="mt-8 inline-block bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-darker))] text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-[hsl(var(--gold))]/50"
                        data-aos="fade-up" data-aos-delay="1000"
                    >
                        {t('hero.discover')}
                    </Link>
                </div>
            </div>
        </>
    );
};

const WelcomeSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="welcome" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                <h2 className="text-4xl font-brand gold-gradient-text" data-aos="fade-up">{t('welcome.title')}</h2>
                <p className="mt-4 text-gray-300 leading-relaxed text-xl" data-aos="fade-up" data-aos-delay="200">
                    {t('welcome.content')}
                </p>
            </div>
        </section>
    )
}

const AboutSnippet: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-4xl font-brand gold-gradient-text">{t('about_snippet.title')}</h2>
                        <p className="mt-4 text-gray-300 leading-relaxed text-xl">
                            {t('about_snippet.content')}
                        </p>
                        <Link to="/about" className="mt-6 inline-block text-[var(--gold)] border border-[var(--gold)] py-2 px-6 rounded-md hover:bg-[var(--gold)] hover:text-black transition-colors duration-300">
                            {t('about_snippet.read_more')}
                        </Link>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-2xl" data-aos="fade-left">
                         <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" alt="Luxury Hotel Pool Area" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();
    const services = [
        { title: t('services_section.airport'), desc: t('services_section.airport_desc'), icon: 'https://i.ibb.co/SD6WhZxK/IMG-20251026-WA0338.jpg' },
        { title: t('services_section.lounge'), desc: t('services_section.lounge_desc'), icon: 'https://i.ibb.co/YBKfyvG9/IMG-20251026-WA0342.jpg' },
        { title: t('services_section.custom_trips'), desc: t('services_section.custom_trips_desc'), icon: 'https://i.ibb.co/ny5w4pH/IMG-20251026-WA0343.jpg' },
    ];
    return (
        <section className="py-20 bg-glass border-y border-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                <h2 className="text-4xl font-brand gold-gradient-text">{t('services_section.title')}</h2>
                <p className="mt-2 text-gray-400 text-xl">{t('services_section.subtitle')}</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-[var(--gold)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 100}>
                            <img src={service.icon} alt={service.title} className="w-48 h-48 object-cover rounded-lg mb-6 shadow-lg"/>
                            <h3 className="text-xl font-bold text-[var(--gold)]">{service.title}</h3>
                            <p className="mt-2 text-gray-400 flex-grow text-lg">{service.desc}</p>
                        </div>
                    ))}
                </div>
                 <Link to="/services" className="mt-12 inline-block text-[var(--gold)] border border-[var(--gold)] py-2 px-6 rounded-md hover:bg-[var(--gold)] hover:text-black transition-colors duration-300">
                    View All Services
                </Link>
            </div>
        </section>
    );
};

const WhyChooseUsSection: React.FC = () => {
    const { t } = useTranslation();
    const points = [
        { title: t('why_choose_us.point1_title'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414M12 18a6 6 0 100-12 6 6 0 000 12z" /> },
        { title: t('why_choose_us.point2_title'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
        { title: t('why_choose_us.point3_title'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> },
        { title: t('why_choose_us.point4_title'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
        { title: t('why_choose_us.point5_title'), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.938 6.128a11.95 11.95 0 018.124 0M12 20.25a15.96 15.96 0 01-3.42-1.002A16.002 16.002 0 014.5 16.5" /> },
    ];
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-2xl" data-aos="fade-right">
                     <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=800&auto=format&fit=crop" alt="Concierge Service" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div data-aos="fade-left">
                    <h2 className="text-4xl font-brand gold-gradient-text">{t('why_choose_us.title')}</h2>
                    <p className="mt-4 text-gray-300 leading-relaxed text-xl">
                       {t('why_choose_us.subtitle')}
                    </p>
                    <ul className="mt-6 space-y-4">
                        {points.map((point, index) => (
                           <li key={index} className="flex items-start bg-gray-900/30 p-4 rounded-lg border border-transparent hover:border-[var(--gold)] transition-colors">
                                <div className="flex-shrink-0 h-8 w-8 text-[var(--gold)] mt-1 bg-gray-800 rounded-full flex items-center justify-center">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {point.icon}
                                    </svg>
                                </div>
                                <span className="ms-4 text-xl">{point.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const DestinationsSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 bg-glass border-y border-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                <h2 className="text-4xl font-brand gold-gradient-text">{t('destinations_section.title')}</h2>
                <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-xl">{t('destinations_section.subtitle')}</p>
                 <div className="mt-8">
                     <Link to="/destinations" className="inline-block bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-darker))] text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 shadow-lg shadow-[hsl(var(--gold))]/50">
                        {t('hero.discover')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <AboutSnippet />
      <ServicesSection />
      <MissionSection />
      <WhyChooseUsSection />
      <DestinationsSection />
      <ExclusiveFeaturesSection />
      <Partners />
    </>
  );
};

export default HomePage;