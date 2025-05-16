"use client";

import { useState } from "react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicPro from "@/components/ui/MagicPro";
import { COMPANIES } from "@/utils";
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircle, TrendingUp, DollarSign, Users, Globe, Zap, Shield, BarChart, MessageCircle, Settings, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";
import { t } from "i18next";
import { AnimatedTestPro } from "@/components/ui/animatedTestPro";

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

// Pro Plan Benefits
const proBenefits = [
  {
    title: t('proPlan.features.list.0.title'),
    description: t('proPlan.features.list.0.description'),
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.1.title'),
    description: t('proPlan.features.list.1.description'),
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.2.title'),
    description: t('proPlan.features.list.2.description'),
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.3.title'),
    description: t('proPlan.features.list.3.description'),
    icon: <Settings className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.4.title'),
    description: t('proPlan.features.list.4.description'),
    icon: <Users className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.5.title'),
    description: t('proPlan.features.list.5.description'),
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.6.title'),
    description: t('proPlan.features.list.6.description'),
    icon: <MessageCircle className="h-6 w-6" />
  },
  {
    title: t('proPlan.features.list.7.title'),
    description: t('proPlan.features.list.7.description'),
    icon: <Video className="h-6 w-6" />
  }
];

// Pro Plan Success Metrics
const successMetrics = [
  { metric: t('proPlan.metrics.items.0.label'), value: t('proPlan.metrics.items.0.value'), period: t('proPlan.metrics.items.0.period') },
  { metric: t('proPlan.metrics.items.1.label'), value: t('proPlan.metrics.items.1.value'), period: t('proPlan.metrics.items.1.period') },
  { metric: t('proPlan.metrics.items.2.label'), value: t('proPlan.metrics.items.2.value'), period: t('proPlan.metrics.items.2.period') },
  { metric: t('proPlan.metrics.items.3.label'), value: t('proPlan.metrics.items.3.value'), period: t('proPlan.metrics.items.3.period') }
];

// Testimonials
const testimonials = [
  {
    name: t('proPlan.testimonials.items.0.name'),
    role: t('proPlan.testimonials.items.0.role'),
    image: "/pro1.png",
    quote: t('proPlan.testimonials.items.0.quote'),
    metrics: t('proPlan.testimonials.items.0.metrics')
  },
  {
    name: t('proPlan.testimonials.items.1.name'),
    role: t('proPlan.testimonials.items.1.role'),
    image: "/masked.jpeg",
    quote: t('proPlan.testimonials.items.1.quote'),
    metrics: t('proPlan.testimonials.items.1.metrics')
  },
  {
    name: t('proPlan.testimonials.items.2.name'),
    role: t('proPlan.testimonials.items.2.role'),
    image: "/pro4.png",
    quote: t('proPlan.testimonials.items.2.quote'),
    metrics: t('proPlan.testimonials.items.2.metrics')
  }
];

// FAQ Items
const faqItems = [
  {
    question: t('proPlan.faq.items.0.question'),
    answer: t('proPlan.faq.items.0.answer')
  },
  {
    question: t('proPlan.faq.items.1.question'),
    answer: t('proPlan.faq.items.1.answer')
  },
  {
    question: t('proPlan.faq.items.2.question'),
    answer: t('proPlan.faq.items.2.answer')
  },
  {
    question: t('proPlan.faq.items.3.question'),
    answer: t('proPlan.faq.items.3.answer')
  }
];

const ProPlanPage = () => {
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
            <MagicBadge title={t('proPlan.hero.titl')} />
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-20 !leading-tight">
              {t('proPlan.hero.title')}
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
            {t('proPlan.hero.subtitle')}
            </p>
            </AnimationContainer>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://app.ambassy.io/register"
              className="mt-4 px-8 py-4 relative bg-gradient-to-r from-fuchsia-500 to-purple-500 backdrop-blur-sm border border-white/20 text-white text-bold font-medium rounded-full hover:from-fuchsia-600 hover:to-purple-600 hover:border-white/40 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-fuchsia-500/20 hover:shadow-xl active:shadow-md active:scale-95 overflow-hidden group"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500/50 to-purple-500/50 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></span>
              
              {/* Shine effect */}
              <span className="absolute -inset-x-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-[shine_1.5s_ease_infinite] opacity-0 group-hover:opacity-100"></span>
              
              {/* Inner highlight */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
              {/* Text with proper z-index */}
              <span className="relative z-10">{t('proPlan.hero.cta')}</span>
            </Link>
            </motion.div>
            <p className="mt-4 text-sm text-gray-400">
              {t('proPlan.cta.note')}
              </p>
          </motion.div>
          
        </section>


      <MaxWidthWrapper className="py-20">
        {/* Key Advantages Section */}
        <AnimationContainer delay={0.1} className="w-full mb-20">
          <div className="text-center mb-12">
            <MagicBadge title={t('proPlan.features.titl')} />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">
            {t('proPlan.features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t('proPlan.features.subtitle')}
            </p>
          </div>

          {/* Toggle Between Features and Benefits */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeTab === "features" ? "primary" : "outline"}
              onClick={() => setActiveTab("features")}
            >
              {t('common.features')}
            </Button>
            <Button
              variant={activeTab === "benefits" ? "primary" : "outline"}
              onClick={() => setActiveTab("benefits")}
            >
              {t('common.benefits')}
            </Button>
          </div>

          {/* Features/Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "features" ? proBenefits.slice(0, 3) : proBenefits.slice(3, 6)).map((benefit, index) => (
              <div key={index} className="bg-black/8 backdrop-blur-sm border border-fuchsia-600 rounded-2xl p-8 hover:border-gray-700 transition-all">
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
            <div className="text-white text-center mb-12">
              <h2 className="text-3xl font-bold">
              {t('proPlan.metrics.title')}
                </h2>
              <p className="text-muted-foreground mt-4">
              {t('proPlan.metrics.subtitle')}
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
            <MagicBadge title="Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">
            {t('proPlan.testimonials.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t('proPlan.testimonials.subtitle')}
            </p>
          </div>

          <AnimatedTestPro />
        </AnimationContainer>

        {/* FAQ Section */}
        <AnimationContainer delay={0.4} className="w-full">
          <div className="text-center mb-12">
            <MagicBadge title="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">
              {t('proPlan.faq.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {t('proPlan.faq.subtitle')}
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
        <div className="absolute inset-0 bg-transparent"></div>
        
        <MaxWidthWrapper className="relative z-10">
          <AnimationContainer delay={0.5} className="w-full">
            <div className="flex flex-col items-center justify-center text-center">
              <MagicBadge title="Join Today" />
              <h2 className="mt-6 bg-gradient-to-b from-gray-200 via-gray-500 to-gray-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
              {t('proPlan.cta.title')}
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-400">
              {t('proPlan.cta.description')}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-10 py-7 text-lg" asChild>
                  <Link href="https://app.ambassy.io/register">
                  {t('proPlan.cta.apply')}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" className="px-10 py-7 text-lg" asChild>
                  <Link href="/contact">
                  {t('proPlan.cta.support')}                  </Link>
                </Button> */}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
              {t('proPlan.cta.note')}
              </p>
            </div>
          </AnimationContainer>
        </MaxWidthWrapper>
      </section>
      </div>
    </>
  );
};

export default ProPlanPage;