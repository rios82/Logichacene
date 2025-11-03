
import React from 'react';
import type { Translations } from '../types';
import { TigerIcon, BlocksIcon, ChartIcon } from './icons/FeatureIcons';

interface HeroProps {
  translations: Translations['hero'];
}

export const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="bg-yellow-300 rounded-3xl p-8 md:p-12 transform -rotate-1">
        <div className="transform rotate-1">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tighter">
            {translations.title}
          </h1>
          <div className="inline-block bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full mt-4">
            {translations.ages}
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-lime-200 p-6 rounded-3xl shadow-lg border-4 border-lime-300 transform hover:scale-105 transition-transform">
          <TigerIcon className="h-20 w-20 mx-auto text-lime-700" />
          <h3 className="mt-4 text-xl font-bold text-lime-800">{translations.card1Title}</h3>
        </div>
        <div className="bg-yellow-200 p-6 rounded-3xl shadow-lg border-4 border-yellow-300 transform hover:scale-105 transition-transform">
          <BlocksIcon className="h-20 w-20 mx-auto text-yellow-700" />
          <h3 className="mt-4 text-xl font-bold text-yellow-800">{translations.card2Title}</h3>
        </div>
        <div className="bg-purple-300 p-6 rounded-3xl shadow-lg border-4 border-purple-400 transform hover:scale-105 transition-transform">
          <ChartIcon className="h-20 w-20 mx-auto text-purple-700" />
          <h3 className="mt-4 text-xl font-bold text-purple-800">{translations.card3Title}</h3>
        </div>
      </div>
    </section>
  );
};
