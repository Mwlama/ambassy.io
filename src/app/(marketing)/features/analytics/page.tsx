"use client";

import { useState } from "react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicVIP from "@/components/ui/MagicVIP";
import { COMPANIES } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle, TrendingUp, DollarSign, Users, Globe, Zap, Shield, BarChart, MessageCircle, Settings, Video, Rocket, Target, PieChart, Headphones, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Vortex } from "@/components/ui/vortex";

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
    title: "All Ambassador & Pro Features",
    description: "Access every feature from our Ambassador and Pro plans, plus exclusive VIP tools.",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: "Fully Automated Management",
    description: "Let our system handle campaign management, influencer outreach, and performance tracking.",
    icon: <Rocket className="h-6 w-6" />
  },
  {
    title: "Google Ads Campaign",
    description: "Run high-performing Google Ads campaigns optimized for your brand.",
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "TikTok Ads Campaign",
    description: "Leverage TikTok Ads to reach younger, highly engaged audiences.",
    icon: <Video className="h-6 w-6" />
  },
  {
    title: "TikTok Shop Integration",
    description: "Seamlessly integrate your products into TikTok Shop for direct sales.",
    icon: <ShoppingCart className="h-6 w-6" />
  },
  {
    title: "Dedicated Account Manager",
    description: "Get personalized support from a dedicated account manager.",
    icon: <Headphones className="h-6 w-6" />
  },
  {
    title: "Custom Reporting",
    description: "Receive tailored reports with actionable insights for your campaigns.",
    icon: <PieChart className="h-6 w-6" />
  },
  {
    title: "Exclusive Partnerships",
    description: "Access exclusive brand partnerships and premium collaborations.",
    icon: <Globe className="h-6 w-6" />
  }
];

// VIP Plan Success Metrics
const successMetrics = [
  { metric: "Monthly Reach", value: "2M+", period: "across all platforms" },
  { metric: "Engagement Rate", value: "30%", period: "average increase" },
  { metric: "Conversion Rate", value: "25%", period: "average increase" },
  { metric: "ROI", value: "5x", period: "average return on investment" }
];

// Testimonials
const testimonials = [
  {
    name: "Alex M.",
    role: "E-commerce Brand Owner",
    image: "/api/placeholder/100/100",
    quote: "The VIP Plan is a game-changer. My sales tripled in just 2 months thanks to TikTok Ads and automated management.",
    metrics: "$150K revenue • 20K new customers"
  },
  {
    name: "Jessica L.",
    role: "Fitness Brand Founder",
    image: "/api/placeholder/100/100",
    quote: "The dedicated account manager and custom reporting made all the difference. I’ve never seen such growth!",
    metrics: "50% growth • 25K new followers"
  },
  {
    name: "Ryan T.",
    role: "Tech Startup CEO",
    image: "/api/placeholder/100/100",
    quote: "The ROI is incredible. I spent $500 on the VIP Plan and generated $50K in sales within a month.",
    metrics: "$50K revenue • 10K new leads"
  }
];

// FAQ Items
const faqItems = [
  {
    question: "What makes the VIP Plan different?",
    answer: "The VIP Plan includes all features from the Ambassador and Pro plans, plus exclusive tools like TikTok Ads, Google Ads, and a dedicated account manager."
  },
  {
    question: "Is there a long-term commitment?",
    answer: "No, the VIP Plan is a monthly subscription. You can cancel anytime."
  },
  {
    question: "How do I track my results?",
    answer: "You’ll get access to custom reporting and advanced analytics that show reach, engagement, and ROI in real-time."
  },
  {
    question: "What kind of brands can benefit?",
    answer: "E-commerce, fitness, tech, fashion, and more. Any brand looking to scale quickly can benefit."
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
            <MagicBadge title="VIP Plan" />
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-0 !leading-tight">
            The Ultimate Marketing Suite
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
              For just <span className="font-bold text-fuchsia-500">$299.99/month</span>, unlock exclusive assistance like TikTok Ads & Shop, Google Ads, Meta Ads and the ultimate support of a dedicated account manager to elevate your brand’s success!.
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
            <MagicBadge title="Why VIP?" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">The VIP Plan Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Access exclusive tools and personalized support to dominate your market.
            </p>
          </div>

          {/* Toggle Between Features and Benefits */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeTab === "features" ? "subtle" : "outline"}
              onClick={() => setActiveTab("features")}
            >
              Features
            </Button>
            <Button
              variant={activeTab === "benefits" ? "primary" : "outline"}
              onClick={() => setActiveTab("benefits")}
            >
              Benefits
            </Button>
          </div>

          {/* Features/Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "features" ? vipBenefits.slice(0, 3) : vipBenefits.slice(3, 6)).map((benefit, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all">
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
              <h2 className="text-3xl font-bold">The Numbers Speak</h2>
              <p className="text-muted-foreground mt-4">
                Average performance of VIP Plan users
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
            <h2 className="text-3xl md:text-4xl font-bold mt-6">From Our VIP Plan Users</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Hear directly from brands that scaled with our VIP tools.
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

        {/* FAQ Section */}
        <AnimationContainer delay={0.4} className="w-full mb-20">
          <div className="text-center mb-12">
            <MagicBadge title="FAQ" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">Common Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Everything you need to know about the VIP Plan.
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
          <AnimationContainer delay={0.5} className="w-full">
            <div className="flex flex-col items-center justify-center text-center">
              <MagicBadge title="Join Today" />
              <h2 className="mt-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                Ready to Dominate Your Market?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-300">
                Unlock the full power of the VIP Plan and take your brand to the next level.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-10 py-7 text-lg" asChild>
                  <Link href="/dashboard">
                    Get Started
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
                No obligations. No hidden fees. Start your VIP journey today.
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