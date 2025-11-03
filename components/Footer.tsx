import React from 'react';
import type { Translations } from '../types';
import { AppleIcon, GooglePlayIcon } from './icons/StoreIcons';

interface FooterProps {
  translations: Translations['footer'];
}

export const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <footer className="bg-gray-800 text-white mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-orange-400">
              Logic<span className="text-blue-400">Hacene</span>
            </h3>
            <p className="mt-2 text-gray-400">
              {new Date().getFullYear()} LogicHacene. {translations.rightsReserved}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-300">Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.about}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.contact}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{translations.privacy}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-300">Download the App</h4>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
                <AppleIcon className="h-6 w-6" />
                <div>
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
               <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors">
                <GooglePlayIcon className="h-6 w-6" />
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};