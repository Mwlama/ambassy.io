"use client";

import { useState } from "react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicVIP from "@/components/ui/MagicVIP";
import { COMPANIES } from "@/utils";
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircle, TrendingUp, DollarSign, Users, Globe, Zap, Shield, BarChart, MessageCircle, Settings, Video, Rocket, Target, PieChart, Headphones, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";
import { t } from "i18next";
import { AnimatedTestimonialsDemo } from "@/components/ui/animatedTest";

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

// VIP Plan Benefits
const vipBenefits = [
  {
    title: t('vipPlan.advantages.0.title'),
    description: t('vipPlan.advantages.0.description'),
    icon: <Globe className="h-6 w-6" />
  },
  {
    title: t('vipPlan.advantages.1.title'),
    description: t('vipPlan.advantages.1.description'),
    icon: <Target className="h-6 w-6" />
  },
  {
    title: t('vipPlan.advantages.2.title'),
    description: t('vipPlan.advantages.2.description'),
    icon: <Rocket className="h-6 w-6" />
  },
  {
    title: t('vipPlan.advantages.3.title'),
    description: t('vipPlan.advantages.3.description'),
    icon: <PieChart className="h-6 w-6" />
  },
  {
    title: t('vipPlan.advantages.4.title'),
    description: t('vipPlan.advantages.4.description'),
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: t('vipPlan.advantages.5.title'),
    description: t('vipPlan.advantages.5.description'),
    icon: <Headphones className="h-6 w-6" />
  },
  
];

// VIP Plan Success Metrics
const successMetrics = [
  { metric: t('vipPlan.metrics.1.metric'), value: "2M+", period: t('vipPlan.metrics.1.period') },
  { metric: t('vipPlan.metrics.2.metric'), value: "30%", period: t('vipPlan.metrics.2.period') },
  { metric: t('vipPlan.metrics.3.metric'), value: "25%", period: t('vipPlan.metrics.3.period') },
  { metric: t('vipPlan.metrics.4.metric'), value: "5x", period: t('vipPlan.metrics.4.period') }
];

// FAQ Items
const faqItems = [
  {
    question: t('vipPlan.faq.1.question'),
    answer: t('ambassador.faq.1.answer')
  },
  {
    question: t('vipPlan.faq.2.question'),
    answer: t('ambassador.faq.2.answer')
  },
  {
    question: t('vipPlan.faq.3.question'),
    answer: t('ambassador.faq.3.answer')
  },
  {
    question: t('vipPlan.faq.4.question'),
    answer: t('ambassador.faq.4.answer')
  }
];


const VIPPlanPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"features" | "benefits">("features");

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
            <MagicBadge title= {t('vipPlan.hero.badge')} />
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-20 !leading-tight">
            {t('vipPlan.hero.title')}
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
            {t('vipPlan.hero.subtitle')}            </p>
            </AnimationContainer>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://ambassy.pages.dev/register"
              className="mt-4 px-8 py-4 relative bg-gradient-to-r from-fuchsia-500 to-purple-500 backdrop-blur-sm border border-white/20 text-white text-bold font-medium rounded-full hover:from-fuchsia-600 hover:to-purple-600 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/20 hover:shadow-xl active:shadow-md active:scale-95 overflow-hidden group"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500/50 to-purple-500/50 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
              
              {/* Shine effect */}
              <span className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shine_1.5s_ease_infinite] opacity-0 group-hover:opacity-100"></span>
              
              {/* Inner highlight */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Text with proper z-index */}
              <span className="relative z-10">{t('vipPlan.hero.getStarted')}</span>
            </Link>
            </motion.div>
            <p className="mt-4 text-sm text-gray-400">{t('vipPlan.hero.noCommitments')}</p>
          </motion.div>
          
        </section>

      <MaxWidthWrapper className="py-20">
        {/* Key Advantages Section */}
        <AnimationContainer delay={0.1} className="w-full mb-20">
          <div className="text-center mb-12">
            <MagicBadge title={t('vipPlan.advantages.badge')} />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">{t('vipPlan.advantages.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t('vipPlan.advantages.subtitle')}
            </p>
          </div>

          {/* Toggle Between Features and Benefits */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeTab === "features" ? "subtle" : "outline"}
              onClick={() => setActiveTab("features")}
            >
              {t('vipPlan.advantages.features')}
            </Button>
            <Button
              variant={activeTab === "benefits" ? "primary" : "outline"}
              onClick={() => setActiveTab("benefits")}
            >
              {t('vipPlan.advantages.benefits')}
            </Button>
          </div>

          {/* Features/Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "features" ? vipBenefits.slice(0, 3) : vipBenefits.slice(3, 6)).map((benefit, index) => (
              <div key={index} className="bg-black/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </AnimationContainer>

        {/* Success Metrics */}
        <AnimationContainer delay={0.2} className="w-full mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10">
            <div className="text-center mb-12">
              <h2 className="text-white text-3xl font-bold">{t('vipPlan.metrics.title')}</h2>
              <p className="text-muted-foreground mt-4">
              {t('vipPlan.metrics.subtitle')}
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
        <AnimationContainer delay={0.3} className="w-full mb-20">
          <div className="text-center mb-12">
            <MagicBadge title={t('vipPlan.testimonials.badge')} />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">{t('vipPlan.testimonials.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t('vipPlan.testimonials.title')}
            </p>
          </div>
              <AnimatedTestimonialsDemo />
        </AnimationContainer>

        {/* FAQ Section */}
        <AnimationContainer delay={0.4} className="w-full mb-20">
          <div className="text-center mb-12">
            <MagicBadge title={t('vipPlan.faq.badge')} />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">{t('vipPlan.faq.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t('vipPlan.faq.subtitle')}
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
          <AnimationContainer delay={0.5} className="w-full">
            <div className="flex flex-col items-center justify-center text-center">
              <MagicBadge title={t('vipPlan.cta.badge')} />
              <h2 className="mt-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
              {t('vipPlan.cta.title')}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-300">
              {t('vipPlan.cta.subtitle')} 
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-10 py-7 text-lg" asChild>
                  <Link href="https://ambassy.pages.dev/register">
                  {t('vipPlan.cta.getStarted')}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="px-10 py-7 text-lg" asChild>
                  <Link href="/contact">
                  {t('vipPlan.cta.contact')}
                  </Link>
                </Button> */}
              </div>
              <p className="mt-6 text-gray-300 text-sm text-muted-foreground">
              {t('vipPlan.cta.noObligations')}
              </p>
            </div>
          </AnimationContainer>
        </MaxWidthWrapper>
      </section>
    </div>
    </>
    
  );
};

export default VIPPlanPage;