import React from 'react';
import type { Language, Translations } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  translations: Translations['header'];
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, translations }) => {
  return (
    <header className="sticky top-0 bg-[#FFFBF2]/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <div className="flex-shrink-0 text-2xl font-extrabold text-orange-500">
              Logic<span className="text-blue-500">Hacene</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => onLanguageChange('fr')} 
                className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'fr' ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'}`}
              >
                FR
              </button>
              <button 
                onClick={() => onLanguageChange('de')}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${language === 'de' ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'}`}
              >
                DE
              </button>
            </div>
            <a href="#" className="hidden sm:inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105">
              {translations.download}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};