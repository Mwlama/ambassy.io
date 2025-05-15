"use client";

import React, { useState } from "react";
import AnimationContainer from "./global/animation-container";
import GridGlobe from "./ui/GridGlobe";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MemoizedGridGlobe = React.memo(GridGlobe);

const HeroSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowStats(true);
    }, 2000);
  };

  const ambassadors = [
    { id: 1, image: "/ambassador1.jpg", location: "Rabat, Morocco" },
    { id: 2, image: "/ambassador3.jpg", location: "New York, USA" },
    { id: 3, image: "/ambassador2.jpg", location: "Berlin, Germany" },
    { id: 4, image: "/ambassador4.jpg", location: "Tokyo, Japan" },
    { id: 5, image: "/ambassador5.jpg", location: "Sydney, Australia" },
    { id: 6, image: "/ambassador6.jpg", location: "Paris, France" },
  ];

  return (
    <section
      className={`relative w-full ${
        showStats
          ? "h-auto min-h-[50vh] pb-12"
          : "h-[50vh] lg:h-[calc(100vh-4rem)]"
      }`}
    >
      <div className="container h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Text Content and Search Bar */}
          <AnimationContainer className="z-20 flex flex-col justify-start lg:justify-center">
            <div className="max-w-xl">
              <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-black mb-4">
                {t('home.hero.title')}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                {t('home.hero.titlee')}{" "}
                </span>
              </h1>

              <p
                className={`text-left text-lg md:text-xl lg:text-2xl text-white dark:text-black ${
                  showStats ? "mb-6" : "mb-0"
                }`}
              >
                {t('home.hero.subtitle')}
              </p>

              {/* Search Bar */}
              <div className="relative mt-4 mb-4 md:mb-0">
                <div className="relative flex items-center bg-black/80 backdrop-blur-sm rounded-full shadow-lg border border-white/10">
                  <div className="flex-1 flex items-center">
                    <Search className="w-5 h-5 text-white/50 ml-4 sm:ml-6" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('home.hero.search')}
                      className="w-full px-4 py-3 sm:py-4 bg-transparent text-white placeholder-white/50 focus:outline-none text-base sm:text-lg"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    disabled={isLoading || !searchQuery.trim()}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium transition-all duration-300 mr-2
                      inline-flex items-center bg-gray-500/50 backdrop-blur-sm border border-fuchsia-500 text-white font-medium rounded-full hover:bg-neutral-500/30 transition-all duration-300
                      disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="hidden sm:inline">{t('common.loading')}</span>
                      </div>
                    ) : (
                      <>
                        <span className="hidden sm:inline">{t('home.hero.cta')}</span>
                        <ArrowRight className="inline sm:hidden w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Results - Stacked Vertically */}
              {showStats && (
                <div className="mt-4 md:mt-2 block lg:hidden">
                  <div className="w-full p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="flex flex-col gap-4"> {/* Changed from grid to flex-col */}
                      {ambassadors.slice(0, 3).map((ambassador) => (
                        <div key={ambassador.id} className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                          <Image
                            src={ambassador.image}
                            alt="Ambassador"
                            width={200}
                            height={200}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <p className="text-center mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                            {ambassador.location}
                          </p>
                        </div>
                      ))}
                    </div>
                    {/* <div className="relative mt-2">
                      <div className="absolute inset-0 flex items-center justify-center p-2 pointer-events-none">
                        <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                          +3k Ambassadors available
                        </p>
                      </div>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          </AnimationContainer>

          {/* Right Column - Globe Animation and Desktop Results */}
          <div className="relative h-full w-full hidden lg:block">
            {/* Globe Animation */}
            <div
              className={`absolute inset-0 z-0 w-full h-full transition-all duration-500 ${
                showStats ? "scale-75" : "scale-100"
              }`}
            >
              <MemoizedGridGlobe />
            </div>

            {/* Desktop Results - Grid Layout */}
            {showStats && (
              <div className="absolute inset-0 z-10 flex items-center justify-center h-full">
                <div className="w-full max-w-4xl p-4 sm:p-6 space-y-4 sm:space-y-6 bg-transparent rounded-xl backdrop-blur-sm border border-transparent">
                  <div className="grid grid-cols-3 gap-4">
                    {ambassadors.map((ambassador) => (
                      <div key={ambassador.id} className="bg-black/80 rounded-xl backdrop-blur-sm border border-white/10 transform transition-transform">
                        <Image
                          src={ambassador.image}
                          alt="Ambassador"
                          width={200}
                          height={200}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <p className="text-center mt-2 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                          {ambassador.location}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-neutral-400">
                        {t('common.3k')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;