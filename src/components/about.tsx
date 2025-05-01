"use client";

import React from 'react';
import { Award, Users, Clock, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stats = [
  { 
    valueKey: 'stats.campaigns.value',
    labelKey: 'stats.campaigns.label',
    descriptionKey: 'stats.campaigns.description'
  },
  { 
    valueKey: 'stats.reach.value',
    labelKey: 'stats.reach.label',
    descriptionKey: 'stats.reach.description'
  },
  { 
    valueKey: 'stats.support.value',
    labelKey: 'stats.support.label',
    descriptionKey: 'stats.support.description'
  },
  { 
    valueKey: 'stats.engagement.value',
    labelKey: 'stats.engagement.label',
    descriptionKey: 'stats.engagement.description'
  }
];

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-10 bg-transparent sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 mt-1 text-center lg:mt-4 sm:gap-x-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="font-bold text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                  {t(stat.valueKey)}
                </span>
              </h3>
              <p className="mt-4 text-xl font-medium text-white dark:text-black">{t(stat.labelKey)}</p>
              <p className="text-base mt-0.5 text-gray-500">{t(stat.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}