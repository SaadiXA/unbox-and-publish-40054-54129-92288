import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import VipGateLogo from './VipGateLogo';

const socialLinks = {
    Facebook: "https://www.facebook.com/share/1APP9vYM5x/",
    TikTok: "https://www.tiktok.com/@vipgatetvl?_t=ZS-90k7nl8qPrE&_r=1",
    Snapchat: "https://www.snapchat.com/add/vipgatetvl?share_id=VkTucRxGmSE&locale=en-GB",
    Instagram: "https://www.instagram.com/vipgatetvl/profilecard/?igsh=MWpieW95cmw2Njh0Zg==",
    Twitter: "https://x.com/vipgatetvl?t=Go5D4m67mTTrcKaw34mhXA&s=09",
    LinkedIn: "https://www.linkedin.com/company/vip-gate/"
};

const SocialIcon: React.FC<{ platform: keyof typeof socialLinks; }> = ({ platform }) => {
    const icons: { [key in keyof typeof socialLinks]: React.ReactNode } = {
        Facebook: <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />,
        Instagram: <path d="M16.98 0H7.02C3.14 0 0 3.14 0 7.02v9.96C0 20.86 3.14 24 7.02 24h9.96c3.88 0 7.02-3.14 7.02-7.02V7.02C24 3.14 20.86 0 16.98 0zM12 18.16c-3.4 0-6.16-2.76-6.16-6.16s2.76-6.16 6.16-6.16 6.16 2.76 6.16 6.16-2.76 6.16-6.16 6.16zm6.3-11.8c-.9 0-1.63-.72-1.63-1.63s.72-1.63 1.63-1.63 1.63.72 1.63 1.63-.72 1.63-1.63 1.63z" />,
        Twitter: <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />,
        LinkedIn: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />,
        Snapchat: <path d="M11.98.08c-6.66 0-11.98 4.6-11.98 10.3 0 3.84 2.18 7.15 5.48 8.87.1.06.15.17.15.28v1.94c0 .28.23.5.5.5h8.5c.28 0 .5-.22.5-.5v-1.94c0-.1.05-.2.15-.27 3.3-1.72 5.47-5.03 5.47-8.88 0-5.7-5.32-10.3-11.97-10.3zm-5.03 13.06c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10.05 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />,
        TikTok: <path d="M16.6 0H7.4C3.32 0 0 3.32 0 7.4v9.2C0 20.68 3.32 24 7.4 24h9.2c4.08 0 7.4-3.32 7.4-7.4V7.4C24 3.32 20.68 0 16.6 0z M13.13 10.37c-.07-.03-2.04-.9-2.04-2.8v5.54c0 2.22-1.8 4.02-4.02 4.02S3.07 15.33 3.07 13.11c0-1.92 1.4-3.56 3.24-3.9v1.92c-.8.3-1.36 1.1-1.36 2 0 1.18.96 2.14 2.14 2.14s2.14-.96 2.14-2.14V3.88h1.88c.03.88.1 1.76.2 2.62.16 1.4.4 2.8.92 4.08.06.14.12.28.18.42l.02.04z" />,
    };

    return (
        <a href={socialLinks[platform]} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--gold)] transition-all duration-300 transform hover:scale-110" aria-label={platform}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                {icons[platform]}
            </svg>
        </a>
    );
};

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const contact = {
      phones: ['+966 59 720 1776', '+966 599 32 6782'],
      address: '3134 Umar Ibn Abdul Aziz, Az Zahra, 12812 Riyadh, 6190 Saudi Arabia.',
    };
    
  return (
    <footer className="bg-glass border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <VipGateLogo className="h-10 w-auto mb-4" />
            <p className="text-gray-400 text-lg">
              {t('footer.about')}
            </p>
            <div className="mt-4 flex space-x-4 rtl:space-x-reverse">
              {Object.keys(socialLinks).map((platform) => (
                <SocialIcon key={platform} platform={platform as keyof typeof socialLinks} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-brand text-[var(--gold)] tracking-wider">{t('footer.links')}</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/about" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-lg">{t('nav.about')}</NavLink></li>
              <li><NavLink to="/services" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-lg">{t('nav.services')}</NavLink></li>
              <li><NavLink to="/destinations" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-lg">{t('nav.destinations')}</NavLink></li>
              <li><NavLink to="/contact" className="text-gray-400 hover:text-[var(--gold)] transition-colors text-lg">{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-brand text-[var(--gold)] tracking-wider">{t('footer.contact_info')}</h3>
            <div className="mt-4 text-gray-400 space-y-2 text-lg" dir="ltr">
              {contact.phones.map((phone, index) => (
                <p key={index}>{phone}</p>
              ))}
              <p className="mt-3">{contact.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-lg">
          <p>&copy; {new Date().getFullYear()} VIP GATE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
