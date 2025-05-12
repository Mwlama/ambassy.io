"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from 'next/dynamic';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MagicBadge from "@/components/ui/magic-badge";
import { Vortex } from "@/components/ui/vortex";
import { AnimationContainer } from "@/components";
import { useTranslation } from "react-i18next";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { t } = useTranslation();

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Loading state for animations
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [missionAnim, setMissionAnim] = useState<any>(null);
  const [teamAnim, setTeamAnim] = useState<any>(null);
  const [impactAnim, setImpactAnim] = useState<any>(null);

  useEffect(() => {
    // Load animations only on the client side
    const loadAnimations = async () => {
      try {
        const missionAnimation = await import("@/components/lottie/anim5.json");
        const teamAnimation = await import("@/components/lottie/anim1.json");
        const impactAnimation = await import("@/components/lottie/anim4.json");
        
        setMissionAnim(missionAnimation.default || missionAnimation);
        setTeamAnim(teamAnimation.default || teamAnimation);
        setImpactAnim(impactAnimation.default || impactAnimation);
        setAnimationsLoaded(true);
      } catch (error) {
        console.error("Failed to load animations:", error);
      }
    };
    
    loadAnimations();
  }, []);

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
    {/* Hero Section */}
    <section className="relative flex items-center justify-center overflow-hidden bg-transparent">
      <Vortex containerClassName="absolute inset-0 z-0" className="w-full h-full" transparent />
  
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center relative z-10"
      >
        <AnimationContainer delay={0.1}>
          <MagicBadge title={t('aboutUs.badge')} />
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-20 !leading-tight">
            {t('aboutUs.title')}
          </h1>
          <p className="text-base md:text-lg mt-3 text-center text-muted-foreground">
            {t('aboutUs.subtitle')}
          </p>
        </AnimationContainer>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
              href="https://ambassy.lovable.app/"
              className="mt-4 px-8 py-4 relative bg-gradient-to-r from-fuchsia-500 to-purple-500 backdrop-blur-sm border border-white/20 text-white text-bold font-medium rounded-full hover:from-fuchsia-600 hover:to-purple-600 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/20 hover:shadow-xl active:shadow-md active:scale-95 overflow-hidden group"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500/50 to-purple-500/50 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
              
              {/* Shine effect */}
              <span className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shine_1.5s_ease_infinite] opacity-0 group-hover:opacity-100"></span>
              
              {/* Inner highlight */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Text with proper z-index */}
              <span className="relative z-10">{t('aboutUs.boutton')}</span>
            </Link>
        </motion.div>
        <p className="mt-4 text-sm text-gray-400">{t('aboutUs.noCommitment')}</p>
      </motion.div>
    </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-transparent via-fuchsia-900 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
          >
            {[
              { value: 500, suffix: "+", titleKey: "aboutUs.stats.brands" },
              { value: 10000, suffix: "+", titleKey: "aboutUs.stats.partnerships" },
              { value: 25, suffix: "M+", titleKey: "aboutUs.stats.audience" },
              { value: 95, suffix: "%", titleKey: "aboutUs.stats.satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-center"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-blue-400">
                  {inView ? (
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} separator="," />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-gray-400 mt-2">{t(stat.titleKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section with enhanced visuals */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-transparent"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeInLeft} className="flex-1">
              {animationsLoaded && missionAnim && (
                <Lottie animationData={missionAnim} className="max-w-md mx-auto md:mx-0" />
              )}
            </motion.div>
            <motion.div variants={fadeInRight} className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="absolute -left-6 text-fuchsia-500 opacity-70">|</span>
                  {t('aboutUs.mission.title')}
                </h2>
                <p className="text-xl text-white dark:text-black mb-8 leading-relaxed">
                  {t('aboutUs.mission.description')}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{t('aboutUs.mission.approach.title')}</h3>
                      <p className="text-gray-500">{t('aboutUs.mission.approach.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{t('aboutUs.mission.storytelling.title')}</h3>
                      <p className="text-gray-500">{t('aboutUs.mission.storytelling.description')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16 "
          >
            <motion.h2 variants={fadeInUp} className="text-white dark:text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {t('aboutUs.values.title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white dark:text-black text-xl text-gray-300">
              {t('aboutUs.values.subtitle')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-white dark:text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: "✦", titleKey: "aboutUs.values.authenticity.title", descriptionKey: "aboutUs.values.authenticity.description" },
              { icon: "◈", titleKey: "aboutUs.values.innovation.title", descriptionKey: "aboutUs.values.innovation.description" },
              { icon: "⬡", titleKey: "aboutUs.values.collaboration.title", descriptionKey: "aboutUs.values.collaboration.description" },
              { icon: "⬢", titleKey: "aboutUs.values.excellence.title", descriptionKey: "aboutUs.values.excellence.description" }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-black-800/10 backdrop-blur-sm border border-fuchsia-600 hover:bg-gray-500 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 text-fuchsia-500 group-hover:text-blue-600 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{t(value.titleKey)}</h3>
                <p className="text-white dark:text-black">{t(value.descriptionKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section with improved layout */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-transparent"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <motion.div variants={fadeInLeft} className="flex-1">
              {animationsLoaded && teamAnim && (
                <Lottie animationData={teamAnim} className="max-w-md mx-auto md:mx-0" />
              )}
            </motion.div>
            <motion.div variants={fadeInRight} className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="absolute -left-6 text-blue-600 opacity-70">|</span>
                  {t('aboutUs.team.title')}
                </h2>
                <p className="text-xl text-white dark:text-black mb-8 leading-relaxed">
                  {t('aboutUs.team.description')}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-blue-600 mb-1">35+</p>
                    <p className="text-white dark:text-black">{t('aboutUs.team.members')}</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-fuchsia-600 mb-1">12+</p>
                    <p className="text-white dark:text-black">{t('aboutUs.team.countries')}</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-blue-600 mb-1">8+</p>
                    <p className="text-white dark:text-black">{t('aboutUs.team.languages')}</p>
                  </div>
                  <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
                    <p className="text-3xl font-bold text-fuchsia-600 mb-1">15+</p>
                    <p className="text-white dark:text-black">{t('aboutUs.team.industries')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Timeline Section */}
      {/* <section className="py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-white dark:text-black text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t('aboutUs.journey.title')}</h2>
            <p className="text-xl text-gray-500">{t('aboutUs.journey.subtitle')}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              { year: "2023", titleKey: "aboutUs.journey.founded.title", descriptionKey: "aboutUs.journey.founded.description" },
              { year: "2024", titleKey: "aboutUs.journey.expansion.title", descriptionKey: "aboutUs.journey.expansion.description" },
              { year: "2025", titleKey: "aboutUs.journey.platform.title", descriptionKey: "aboutUs.journey.platform.description" },
              { year: "2027", titleKey: "aboutUs.journey.innovation.title", descriptionKey: "aboutUs.journey.innovation.description" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="flex gap-8 mb-12 relative"
              >
                <div className="w-24 md:w-32 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-fuchsia-500">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 absolute -left-10 top-3 z-10"></div>
                  {index !== 3 && (
                    <div className="w-0.5 bg-gray-700 absolute -left-8 top-6 h-full z-0"></div>
                  )}
                  <div className="pt-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{t(item.titleKey)}</h3>
                    <p className="text-gray-500">{t(item.descriptionKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Impact Section with data visualization */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-transparent"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div variants={fadeInLeft} className="flex-1">
              {animationsLoaded && impactAnim && (
                <Lottie animationData={impactAnim} className="max-w-md mx-auto md:mx-0" />
              )}
            </motion.div>
            <motion.div variants={fadeInRight} className="flex-1">
              <div className="max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 relative">
                  <span className="absolute -left-6 text-fuchsia-500 opacity-70">|</span>
                  {t('aboutUs.impact.title')}
                </h2>
                <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                  {t('aboutUs.impact.description')}
                </p>
                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{t('aboutUs.impact.revenue.title')}</span>
                      <span className="text-fuchsia-400">+185%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{t('aboutUs.impact.engagement.title')}</span>
                      <span className="text-blue-400">+210%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-fuchsia-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{t('aboutUs.impact.conversion.title')}</span>
                      <span className="text-fuchsia-400">+140%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Partner Logos Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-xl font-medium text-gray-400">
              {t('aboutUs.partners.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="h-16 flex items-center justify-center bg-gray-800/30 rounded-lg border border-gray-700/30"
              >
                <div className="text-gray-400 font-medium">{t('aboutUs.partners.logo')}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-transparent"
      >
        <div className="absolute inset-0 z-0">
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              {t('aboutUs.cta.title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-500 mb-8"
            >
              {t('aboutUs.cta.description')}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://ambassy.lovable.app/"
                className="px-8 py-4 bg-black backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/30 transition-all duration-300"
              >
                {t('common.getStarted')}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;