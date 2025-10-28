import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import VipGateLogo from './VipGateLogo';

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    const buttonLabel = language === 'en' ? 'ع' : 'EN';
    const ariaLabel = language === 'en' ? 'Switch to Arabic' : 'Switch to English';

    return (
        <button
            onClick={toggleLanguage}
            className="bg-[hsl(var(--gold-darker))] hover:bg-[hsl(var(--gold))] text-gray-900 font-bold py-2 px-4 rounded-full transition-colors duration-300 text-base flex items-center justify-center w-16 h-9 shadow-md"
            aria-label={ariaLabel}
        >
            {buttonLabel}
        </button>
    );
};

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/destinations', label: t('nav.destinations') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center">
            <VipGateLogo className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--gold)]'
                      : 'text-gray-300 hover:text-[var(--gold)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-[var(--gold)] transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            style={{ top: '64px', zIndex: 40 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu - Full Width Dropdown */}
        <div 
          className={`md:hidden fixed left-0 right-0 bg-gray-900/98 backdrop-blur-xl border-b border-gray-800 shadow-2xl overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ top: '64px', zIndex: 50 }}
        >
          <nav className="container mx-auto px-6 py-8">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-4 px-6 text-lg font-medium transition-all duration-300 rounded-lg ${
                      isActive
                        ? 'text-[hsl(var(--gold))] bg-gray-800/80 border-l-4 rtl:border-l-0 rtl:border-r-4 border-[hsl(var(--gold))] shadow-lg'
                        : 'text-gray-200 hover:text-[hsl(var(--gold))] hover:bg-gray-800/50 hover:translate-x-2 rtl:hover:-translate-x-2'
                    }`
                  }
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
