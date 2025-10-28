import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const PageHeader: React.FC<{ title: string; subtitle: string; }> = ({ title, subtitle }) => (
    <div 
        className="relative h-60 flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.ibb.co/nqFhsRQW/dda65e51574d8b94e6322377ce94b3d62e97d157-1598x560.jpg')" }}
    >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-4">
            <h1 className="text-5xl font-brand tracking-widest">{title}</h1>
            <p className="mt-2 text-xl text-gray-300">{subtitle}</p>
        </div>
    </div>
);

interface Service {
    title: string;
    longDesc: string;
    img: string;
}

const ServicesPage: React.FC = () => {
    const { t } = useTranslation();

    const services: Service[] = [
        { title: t('services_section.airport'), longDesc: t('services_page.airport_long'), img: 'https://i.ibb.co/SD6WhZxK/IMG-20251026-WA0338.jpg' },
        { title: t('services_section.lounge'), longDesc: t('services_page.lounge_long'), img: 'https://i.ibb.co/YBKfyvG9/IMG-20251026-WA0342.jpg' },
        { title: t('services_section.transport'), longDesc: t('services_page.transport_long'), img: 'https://i.ibb.co/5hZ90kDw/IMG-20251026-WA0336.jpg' },
        { title: t('services_section.pa'), longDesc: t('services_page.pa_long'), img: 'https://i.ibb.co/3ykRy8Zp/IMG-20251026-WA0339.jpg' },
        { title: t('services_section.custom_trips'), longDesc: t('services_page.custom_trips_long'), img: 'https://i.ibb.co/sd4gfC7Z/IMG-20251026-WA0344.jpg' },
    ];
    
    return (
        <div>
            <PageHeader title={t('services_section.title')} subtitle={t('services_section.subtitle')} />
            <div className="py-20 bg-glass overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 !== 0 ? 'md:col-start-2' : ''} data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}>
                                    <h3 className="text-3xl font-brand gold-gradient-text">{service.title}</h3>
                                    <p className="mt-4 text-gray-300 text-xl leading-relaxed">{service.longDesc}</p>
                                </div>
                                <div className={`rounded-lg overflow-hidden shadow-2xl flex justify-center items-center p-4 bg-black/20 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`} data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}>
                                    <img src={service.img} alt={service.title} className="w-full max-w-sm h-auto object-contain" loading="lazy"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;