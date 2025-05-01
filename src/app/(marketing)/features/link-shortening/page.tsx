"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicAmbassador from "@/components/ui/MagicAmbassador";
import { Vortex } from "@/components/ui/vortex";
import VideoBanner from "@/components/VideoBanner";
import { COMPANIES } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle, Award, TrendingUp, DollarSign, Zap, Users, Shield, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";

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
    title: "Apply",
    icon: "✦",
    description: "Create your profile and showcase your unique style and audience demographics.",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Get Verified",
    icon: "✓",
    description: "Our team reviews your profile and verifies your authenticity within 24 hours.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Connect",
    icon: "⟐",
    description: "Match with brands aligned with your values and content style.",
    color: "from-cyan-500 to-teal-500"
  },
  {
    title: "Collaborate",
    icon: "⬢",
    description: "Create authentic content that resonates with your audience and drives results.",
    color: "from-teal-500 to-green-500"
  },
  {
    title: "Earn",
    icon: "$",
    description: "Get compensated for your influence through various monetization methods.",
    color: "from-green-500 to-emerald-500"
  }
];

// Ambassador benefits
const benefits = [
  {
    title: "Exclusive Brand Partnerships",
    description: "Connect with premium brands seeking authentic ambassadors for long-term partnerships.",
    icon: <Award className="h-6 w-6" />
  },
  {
    title: "Flexible Collaboration Terms",
    description: "Work with brands on your terms - product exchanges, commissions, flat fees, or hybrid models.",
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    title: "Growth Opportunities",
    description: "Leverage our platform to expand your reach and build your personal brand.",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "Professional Development",
    description: "Access exclusive resources and coaching to elevate your content creation skills.",
    icon: <Zap className="h-6 w-6" />
  },
  {
    title: "Community Connection",
    description: "Join a network of like-minded creators for collaboration and support.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Global Reach",
    description: "Connect with brands and audiences worldwide through our international platform.",
    icon: <Globe className="h-6 w-6" />
  }
];

// Ambassador success metrics
const successMetrics = [
  { metric: "Average Earnings", value: "$1,200", period: "per month" },
  { metric: "Brand Collaborations", value: "5-10", period: "per quarter" },
  { metric: "Audience Growth", value: "35%", period: "average increase" },
  { metric: "Content Engagement", value: "3x", period: "industry average" }
];

// Ambassador testimonials
const testimonials = [
  {
    name: "Sarah J.",
    role: "Beauty Creator",
    image: "/api/placeholder/100/100",
    quote: "Joining Ambassy transformed my passion into a career. I've connected with my dream brands and increased my monthly income by 200%.",
    metrics: "42K followers • 15 brand partnerships"
  },
  {
    name: "Mark T.",
    role: "Fitness Ambassador",
    image: "/api/placeholder/100/100",
    quote: "The platform's ease of use and quality of brand partnerships sets it apart. I've been able to focus on creating authentic content while Ambassy handles the business side.",
    metrics: "78K followers • 22 brand partnerships"
  },
  {
    name: "Elena R.",
    role: "Travel Content Creator",
    image: "/api/placeholder/100/100",
    quote: "As someone who was just starting out, Ambassy gave me the tools and opportunities I needed to grow. Now I'm traveling the world doing what I love.",
    metrics: "29K followers • 8 brand partnerships"
  }
];

// FAQ items
const faqItems = [
  {
    question: "Do I need a minimum follower count to join?",
    answer: "We focus on engagement quality rather than just follower count. Micro-influencers with highly engaged communities are welcome and often achieve exceptional results for brands."
  },
  {
    question: "How do I get paid for collaborations?",
    answer: "We offer secure payment processing through our platform with multiple payout options including direct deposit, PayPal, and crypto. Payments are typically processed within 7-14 days after campaign completion."
  },
  {
    question: "Can I join if I'm not in the US?",
    answer: "Absolutely! We're a global platform with ambassadors and brands from over 40 countries. Our international reach allows creators worldwide to connect with both local and global opportunities."
  },
  {
    question: "What kind of support does Ambassy provide?",
    answer: "We offer personalized onboarding, dedicated account managers, content strategy consultation, negotiation assistance, contract templates, and 24/7 technical support to ensure your success."
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
                <MagicBadge title="Ambassador" />
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-0 !leading-tight">
                Transform Your Influence Into Impact                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                Join a community of creators turning passion into profession. Authentic partnerships, real rewards, unlimited potential.
                </p>
                </AnimationContainer>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/get-started"
                    className="mt-4 px-8 py-4 bg-fuchsia-500/50 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-neutral-500/30 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <p className="mt-4 text-sm text-gray-400">No commitments. Cancel anytime.</p>
              </motion.div>
              
            </section>

      <MaxWidthWrapper className="py-20">
        {/* Key Advantages Section */}
        <AnimationContainer delay={0.1} className="w-full mb-20">
          <div className="text-center mb-12">
            <MagicBadge title="Why Join" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">The Ambassy Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              We&apos;re revolutionizing how creators collaborate with brands, turning passionate content creators into professional ambassadors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Brand Connections</h3>
              <p className="text-muted-foreground">
                Skip the cold outreach. We partner with curated brands actively seeking authentic ambassadors like you.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Transparent</h3>
              <p className="text-muted-foreground">
                Clear contracts, guaranteed payments, and advocate protection—we handle the business so you can focus on creating.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Ecosystem</h3>
              <p className="text-muted-foreground">
                Access resources, analytics, and community support designed to elevate your content and expand your influence.
              </p>
            </div>
          </div>
        </AnimationContainer>

        {/* Video Showcase Section */}
        <AnimationContainer delay={0.2} className="w-full mb-20">
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <VideoBanner />
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how creators like you have transformed their passion into professional opportunities with Ambassy.
            </p>
          </div>
        </AnimationContainer>

        {/* Journey Section */}
        <AnimationContainer delay={0.3} className="w-full mb-20 scroll-mt-20">
          <div className="text-center mb-12">
            <MagicBadge title="Process" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">Your Ambassador Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              A simple path from application to earning with transparent steps along the way.
            </p>
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
          <div className="text-center mb-12">
            <MagicBadge title="Perks" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">What You&apos;ll Gain</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Beyond partnerships, Ambassy offers a complete ecosystem for creator growth and success.
            </p>
          </div>

          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-gray-700 transition-all"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1 text-blue-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimationContainer>

        {/* Success Metrics */}
        <AnimationContainer delay={0.5} className="w-full mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">The Numbers Speak</h2>
              <p className="text-muted-foreground mt-4">
                Average performance of ambassadors on our platform
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
            <MagicBadge title="Success Stories" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">From Our Ambassadors</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Hear directly from creators who have grown their influence through Ambassy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-6 bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl flex flex-col"
              >
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8 16.2C12.1255 16.2 13.2 17.2745 13.2 18.6C13.2 19.9255 12.1255 21 10.8 21C9.47452 21 8.4 19.9255 8.4 18.6C8.4 18.3392 8.44381 18.0895 8.52428 17.8576L5.2 12V8.4H9.6V12H7.87587L10.8 16.2ZM22.8 16.2C24.1255 16.2 25.2 17.2745 25.2 18.6C25.2 19.9255 24.1255 21 22.8 21C21.4745 21 20.4 19.9255 20.4 18.6C20.4 18.3392 20.4438 18.0895 20.5243 17.8576L17.2 12V8.4H21.6V12H19.8759L22.8 16.2Z" fill="url(#paint0_linear_123_456)"/>
                    <defs>
                      <linearGradient id="paint0_linear_123_456" x1="5.2" y1="8.4" x2="25.2" y2="21" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#8B5CF6"/>
                        <stop offset="1" stopColor="#3B82F6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="italic text-gray-300 mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-auto flex items-center">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    width={48} 
                    height={48} 
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 mt-1">{testimonial.metrics}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimationContainer>

        {/* Featured Brands */}
        <AnimationContainer delay={0.7} className="w-full mb-20">
          <div className="text-center mb-10">
            <h2 className="text-xl font-medium text-gray-400">
              Collaborate with leading brands across industries
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
            <MagicBadge title="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">Common Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Everything you need to know about becoming an Ambassy Ambassador.
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black z-0"></div>
        
        <MaxWidthWrapper className="relative z-10">
          <AnimationContainer delay={0.9} className="w-full">
            <div className="flex flex-col items-center justify-center text-center">
              <MagicBadge title="Join Today" />
              <h2 className="mt-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                Ready to Elevate Your Influence?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-300">
                Take the first step toward transforming your passion into a professional ambassador career. Apply now and start collaborating with top brands in as little as 24 hours.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-10 py-7 text-lg" asChild>
                  <Link href="/dashboard">
                    Apply Now
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-10 py-7 text-lg" asChild>
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                No obligations. No hidden fees. Start for free.
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