"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const INTERNAL_LINKS = [
  {
    titleKey: "twoWays.ambassador.title",
    descriptionKey: "twoWays.ambassador.description",
    link: "/features/ambassador",
    image: "/assets/twoways1.jpg", // Path to the team image
  },
  {
    titleKey: "twoWays.pro.title",
    descriptionKey: "twoWays.pro.description",
    link: "/features/pro",
    image: "/assets/twoways2.jpg", // Path to the about image
  },
];

const TwoWays = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 bg-black dark:bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTERNAL_LINKS.map((link, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-black dark:bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-6">
                <Image
                  src={link.image}
                  alt={t(link.titleKey)}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold text-white dark:text-gray-900 mb-4">
                  {t(link.titleKey)}
                </h2>
                <p className="text-gray-300 dark:text-gray-600 mb-6">
                  {t(link.descriptionKey)}
                </p>
                <Link
                  href={link.link}
                  className="inline-flex items-center px-8 py-4 bg-gray-500/50 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full hover:bg-neutral-500/30 transition-all duration-300"
                >
                  {t('common.learnMore')}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwoWays;