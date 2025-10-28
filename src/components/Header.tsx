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
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ top: '64px', zIndex: 40 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden fixed right-0 rtl:right-auto rtl:left-0 top-16 bottom-0 w-64 bg-gray-900/98 backdrop-blur-lg border-l rtl:border-l-0 rtl:border-r border-gray-800 overflow-y-auto shadow-2xl" style={{ zIndex: 50 }}>
            <div className="py-6 space-y-1 px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-md text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[hsl(var(--gold))] bg-gray-800/70 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[hsl(var(--gold))]'
                        : 'text-gray-300 hover:text-[hsl(var(--gold))] hover:bg-gray-800/50 hover:border-l-2 rtl:hover:border-l-0 rtl:hover:border-r-2 hover:border-[hsl(var(--gold))]/50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
