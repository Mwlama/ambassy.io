"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { AnimatedTestAmb } from "@/components/ui/animatedTestAmb";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import MagicAmbassador from "@/components/ui/MagicAmbassador";
import { Vortex } from "@/components/ui/vortex";
import VideoBanner from "@/components/VideoBanner";
import { COMPANIES } from "@/utils";
import { motion } from 'framer-motion';
import { t } from "i18next";
import { ArrowRightIcon, Award, TrendingUp, DollarSign, Zap, Users, Shield, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {  useState } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Ambassador journey steps
const journeySteps = [
  {
    title:  t('ambassador.journey.steps.0.title'),
    icon: "✦",
    description: t('ambassador.journey.steps.0.description'),
    color: "from-purple-500 to-blue-500"
  },
  {
    title: t('ambassador.journey.steps.1.title'),
    icon: "✓",
    description: t('ambassador.journey.steps.1.description'),
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: t('ambassador.journey.steps.2.title'),
    icon: "⟐",
    description: t('ambassador.journey.steps.2.description'),
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: t('ambassador.journey.steps.3.title'),
    icon: "⬢",
    description: t('ambassador.journey.steps.3.description'),
    color: "from-teal-500 to-green-500"
  },
  {
    title: t('ambassador.journey.steps.4.title'),
    icon: "$",
    description: t('ambassador.journey.steps.4.description'),
    color: "from-green-500 to-emerald-500"
  }
];

// Ambassador benefits
const benefits = [
  {
    title:  t('ambassador.benefits.list.0.title'),
    description: t('ambassador.benefits.list.0.description'),
    icon: <Award className="h-6 w-6" />
  },
  {
    title: t('ambassador.benefits.list.1.title'),
    description: t('ambassador.benefits.list.1.description'),
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    title: t('ambassador.benefits.list.2.title'),
    description: t('ambassador.benefits.list.2.description'),
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: t('ambassador.benefits.list.3.title'),
    description: t('ambassador.benefits.list.3.description'),
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: t('ambassador.benefits.list.4.title'),
    description: t('ambassador.benefits.list.4.description'),
    icon: <Users className="h-6 w-6" />
  },
  {
    title: t('ambassador.benefits.list.5.title'),
    description: t('ambassador.benefits.list.5.description'),
    icon: <Globe className="h-6 w-6" />
  }
];

const win = [
  {
    title:  t('ambassador.win.list.0.title'),
    description: t('ambassador.win.list.0.description'),
    icon: <Award className="h-6 w-6" />
  },
  {
    title: t('ambassador.win.list.1.title'),
    description: t('ambassador.win.list.1.description'),
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    title: t('ambassador.win.list.2.title'),
    description: t('ambassador.win.list.2.description'),
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: t('ambassador.win.list.3.title'),
    description: t('ambassador.win.list.3.description'),
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: t('ambassador.win.list.4.title'),
    description: t('ambassador.win.list.4.description'),
    icon: <Users className="h-6 w-6" />
  },
  {
    title: t('ambassador.win.list.5.title'),
    description: t('ambassador.win.list.5.description'),
    icon: <Globe className="h-6 w-6" />
  }
];

// Ambassador success metrics
const successMetrics = [
  { metric: t('ambassador.metrics.items.0.label'), value: "1 200€", period: t('ambassador.metrics.items.0.period') },
  { metric: t('ambassador.metrics.items.1.label'), value: "5-10", period: t('ambassador.metrics.items.1.period') },
  { metric: t('ambassador.metrics.items.2.label'), value: "35%", period: t('ambassador.metrics.items.2.period') },
  { metric: t('ambassador.metrics.items.3.label'), value: "x3", period: t('ambassador.metrics.items.3.period') }
];


// FAQ items
const faqItems = [
  {
    question: t('ambassador.faq.items.0.question'),
    answer: t('ambassador.faq.items.0.answer')
  },
  {
    question: t('ambassador.faq.items.1.question'),
    answer: t('ambassador.faq.items.1.answer')
  },
  {
    question: t('ambassador.faq.items.2.question'),
    answer: t('ambassador.faq.items.2.answer')
  },
  {
    question: t('ambassador.faq.items.3.question'),
    answer: t('ambassador.faq.items.3.answer')
  }
];

const ForAmbassadorsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
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
              <MagicBadge title={t('badges.ambassador')} />
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-20 !leading-tight">
                {t('ambassador.hero.title')}
              </h1>
              <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                {t('ambassador.hero.subtitle')}
              </p>
            </AnimationContainer>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://ambassy.lovable.app/register"
              className="mt-4 px-8 py-4 relative bg-gradient-to-r from-fuchsia-500 to-purple-500 backdrop-blur-sm border border-white/20 text-white text-bold font-medium rounded-full hover:from-fuchsia-600 hover:to-purple-600 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/20 hover:shadow-xl active:shadow-md active:scale-95 overflow-hidden group"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500/50 to-purple-500/50 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
              
              {/* Shine effect */}
              <span className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shine_1.5s_ease_infinite] opacity-0 group-hover:opacity-100"></span>
              
              {/* Inner highlight */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Text with proper z-index */}
              <span className="relative z-10">{t('ambassador.hero.cta')}</span>
            </Link>
            </motion.div>
            <p className="mt-4 text-sm text-gray-400">
              {t('ambassador.finalCta.note')}
            </p>
          </motion.div>
        </section>

        <MaxWidthWrapper className="py-20">
          {/* Key Advantages Section */}
          <AnimationContainer delay={0.1} className="w-full mb-20">
            <div className="text-center mb-12">
              <MagicBadge title={t('badges.whyJoin')} />
              <h2 className="text-3xl md:text-4xl font-bold mt-6">
                {t('ambassador.benefits.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              {t('ambassador.benefits.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/8 backdrop-blur-sm border border-fuchsia-800 rounded-2xl p-8 hover:border-gray-500 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Award className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                {t('ambassador.benefits.list.0.title')}
                </h3>
                <p className="text-muted-foreground">
                {t('ambassador.benefits.list.0.description')}
                </p>
              </div>

              <div className="bg-black/8 backdrop-blur-sm border border-fuchsia-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t('ambassador.benefits.list.1.title')}
                </h3>
                <p className="text-muted-foreground">
                {t('ambassador.benefits.list.1.description')}                
                </p>
              </div>

              <div className="bg-black/8 backdrop-blur-sm border border-fuchsia-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t('ambassador.benefits.list.2.title')}
                </h3>
                <p className="text-muted-foreground">
                {t('ambassador.benefits.list.2.description')}                
                </p>
              </div>
            </div>
          </AnimationContainer>

          {/* Video Showcase Section */}
          <AnimationContainer delay={0.2} className="w-full mb-20">
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <VideoBanner />
            </div>
          </AnimationContainer>

          {/* Journey Section */}
          <AnimationContainer delay={0.3} className="w-full mb-15 scroll-mt-20">
            <div className="text-center mb-12">
              <MagicBadge title={t('badges.processus')} />
              <h2 className="text-3xl md:text-4xl font-bold mt-6">{t('ambassador.journey.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              {t('ambassador.journey.subtitle')}              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-purple-600 via-blue-600 to-emerald-600 hidden md:block"></div>

              <div className="space-y-12">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  >
                    <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    <div className="flex-shrink-0 mx-4 my-2 z-10">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-xl font-bold text-white`}>
                        {step.icon}
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 p-6"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimationContainer>

          {/* Benefits Section */}
          <AnimationContainer delay={0.4} className="w-full mb-20">
            <div className="text-center mt-5 mb-12">
              <MagicBadge title={t('badges.avantages')} />
              <h2 className="text-3xl md:text-4xl font-bold mt-6">
                {t('ambassador.win.title')}
                </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              {t('ambassador.win.subtitle')} 
              </p>
            </div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {win.map((win, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 bg-black/8 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all"
                >
                  <div className="flex items-start mb-4">
                    <div className="mr-4 mt-1 text-blue-500">
                      {win.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{win.title}</h3>
                      <p className="text-sm text-muted-foreground">{win.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimationContainer>

          {/* Success Metrics */}
          <AnimationContainer delay={0.5} className="w-full mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-fuchsia-800 rounded-2xl p-10">
              <div className="text-center mb-12">
                <h2 className="text-white text-3xl font-bold">{t('ambassador.metrics.title')}</h2>
                <p className="text-muted-foreground mt-4">
                  {t('ambassador.metrics.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {successMetrics.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      {item.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">{item.metric}</div>
                    <div className="text-xs text-gray-500">{item.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimationContainer>

          {/* Testimonials */}
          <AnimationContainer delay={0.6} className="w-full mb-20">
            <div className="text-center mb-12">
              <MagicBadge title={t('badges.testimony')} />
              <h2 className="text-3xl md:text-4xl font-bold mt-6">
                {t('ambassador.testimonials.title')}
                </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                {t('ambassador.testimonials.subtitle')}
              </p>
            </div>

            <AnimatedTestAmb />
          </AnimationContainer>

          {/* Featured Brands */}
          <AnimationContainer delay={0.7} className="w-full mb-20">
            <div className="text-center mb-10">
              <h2 className="text-xl font-medium text-gray-400">
                {t('ambassador.Colab.title')}
              </h2>
            </div>
            <div className="mt-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
                {COMPANIES.map((company) => (
                  <li key={company.name} className="transition-all hover:opacity-80">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={100}
                      height={100}
                      quality={100}
                      className="w-32 h-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </AnimationContainer>

          {/* FAQ Section */}
          <AnimationContainer delay={0.8} className="w-full mb-20">
            <div className="text-center mb-12">
              <MagicBadge title={t('badges.faq')} />
              <h2 className="text-3xl md:text-4xl font-bold mt-6">
                {t('ambassador.faq.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
                {t('ambassador.faq.subtitle')}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-900/50 transition-colors"
                  >
                    <span className="font-medium">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="p-6 pt-0 text-muted-foreground">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimationContainer>
        </MaxWidthWrapper>

        {/* Final CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-700/70 to-transparent z-0"></div>

          <MaxWidthWrapper className="relative z-10">
            <AnimationContainer delay={0.9} className="w-full">
              <div className="flex flex-col items-center justify-center text-center">
                <MagicBadge title={t('badges.joinUs')} />
                <h2 className="mt-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                  {t('ambassador.finalCta.title')}
                </h2>
                <p className="mt-6 max-w-2xl text-lg text-gray-300">
                  {t('ambassador.finalCta.description')}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="px-10 py-7 text-lg" asChild>
                    <Link href="https://ambassy.lovable.app/register">
                      {t('ambassador.finalCta.apply')}
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  {/* <Button size="lg" variant="outline" className="px-10 py-7 text-lg" asChild>
                    <Link href="/contact">
                      {t('ambassador.finalCta.support')}
                    </Link> */}
                  {/* </Button> */}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  {t('ambassador.finalCta.note')}
                </p>
              </div>
            </AnimationContainer>
          </MaxWidthWrapper>
        </section>
      </div>
      {/* MagicAmbassador Component (kept from original) */}
      <div className="hidden">
        <MagicAmbassador />
      </div>
    </>
  );
};

export default ForAmbassadorsPage;
