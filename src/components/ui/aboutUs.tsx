"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const InternalLinksSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 bg-black dark:bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-900 mb-6">
            {t('aboutUs.team.title')}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-600 mb-8">
            {t('aboutUs.team.description')}
          </p>

          {/* About Us Button */}
          <Link
            href="/about-us"
            className="inline-flex items-center px-8 py-4 bg-gray-500/50 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-neutral-500/30 transition-all duration-300"
          >
            
            {t('aboutUs.cta')}
            <svg
              className="w-5 h-5 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InternalLinksSection;