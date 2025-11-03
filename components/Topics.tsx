
import React from 'react';
import type { Translations } from '../types';

interface TopicsProps {
  translations: Translations['topics'];
}

export const Topics: React.FC<TopicsProps> = ({ translations }) => {
  const topics = [
    translations.item1,
    translations.item2,
    translations.item3,
    translations.item4,
    translations.item5,
    translations.item6,
    translations.item7,
    translations.item8,
    translations.item9,
  ];

  return (
    <section className="py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-black text-center text-gray-800 mb-12">
        {translations.title}
      </h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white border-2 border-gray-200 text-gray-700 font-bold py-2 px-5 rounded-full shadow-sm hover:bg-yellow-100 hover:border-yellow-300 transition-colors">
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
};
