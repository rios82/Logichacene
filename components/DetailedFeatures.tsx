
import React from 'react';
import type { Translations } from '../types';

interface DetailedFeaturesProps {
  translations: Translations['detailedFeatures'];
}

export const DetailedFeatures: React.FC<DetailedFeaturesProps> = ({ translations }) => {
  return (
    <section className="py-16 md:py-24 space-y-16">
      <div className="bg-cyan-100 rounded-3xl p-8 overflow-hidden relative">
        <div className="md:flex md:items-center gap-8">
            <div className="md:w-1/2 relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-cyan-800">{translations.feature1Title}</h2>
              <h3 className="mt-2 text-2xl md:text-4xl font-bold bg-yellow-300 inline-block px-4 py-1 rounded-full text-yellow-800 transform -rotate-2">{translations.feature1Subtitle}</h3>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="https://placehold.co/600x400/E0F2FE/0891B2.png?text=Creative+Activities" alt="Creativity" className="rounded-2xl shadow-lg w-full" />
            </div>
        </div>
      </div>

      <div className="bg-lime-100 rounded-3xl p-8 overflow-hidden relative">
         <div className="md:flex md:items-center md:flex-row-reverse gap-8">
            <div className="md:w-1/2 relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-lime-800">{translations.feature2Title}</h2>
               <h3 className="mt-2 text-2xl md:text-4xl font-bold bg-green-300 inline-block px-4 py-1 rounded-full text-green-800 transform rotate-2">{translations.feature2Subtitle}</h3>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
               <img src="https://placehold.co/600x400/F0FDF4/166534.png?text=Logic+%26+Math" alt="Logic and Math" className="rounded-2xl shadow-lg w-full" />
            </div>
        </div>
      </div>
    </section>
  );
};
