
import React from 'react';
import type { Translations } from '../types';
import { LogicIcon, GlobeIcon, AbcIcon, StarIcon, PawIcon, PaintBrushIcon } from './icons/CategoryIcons';


interface FeatureGridProps {
  translations: Translations['featureGrid'];
}

const categoryCards = [
  { color: 'bg-purple-300', icon: LogicIcon, key: 'logicMath' as const },
  { color: 'bg-yellow-300', icon: GlobeIcon, key: 'countries' as const },
  { color: 'bg-cyan-300', icon: AbcIcon, key: 'wordGames' as const },
  { color: 'bg-pink-300', icon: StarIcon, key: 'funTrivia' as const },
  { color: 'bg-green-300', icon: PawIcon, key: 'naturalWorld' as const },
  { color: 'bg-orange-300', icon: PaintBrushIcon, key: 'creativity' as const },
];

export const FeatureGrid: React.FC<FeatureGridProps> = ({ translations }) => {
  return (
    <section className="py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-black text-center text-gray-800 mb-12">
        {translations.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {categoryCards.map((card, index) => (
          <div key={index} className={`${card.color} p-6 rounded-3xl text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300`}>
            <card.icon className="h-16 w-16 md:h-24 md:w-24 mx-auto text-gray-800/70" />
            <h3 className="mt-4 text-lg md:text-2xl font-bold text-gray-800">
              {translations[card.key]}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
