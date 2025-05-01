"use client";

import { useState } from "react";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicPro from "@/components/ui/MagicPro";
import { COMPANIES } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircle, TrendingUp, DollarSign, Users, Globe, Zap, Shield, BarChart, MessageCircle, Settings, Video } from "lucide-react";
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

// Pro Plan Benefits
const proBenefits = [
  {
    title: "All Ambassador Features",
    description: "Access all the tools and benefits of our Ambassador Plan, plus exclusive Pro features.",
    icon: <CheckCircle className="h-6 w-6" />
  },
  {
    title: "Advanced Campaign Analytics",
    description: "Track your campaign performance with real-time insights and detailed metrics.",
    icon: <BarChart className="h-6 w-6" />
  },
  {
    title: "Priority Support",
    description: "Get 24/7 access to a dedicated account manager and premium support.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Custom Campaign Creation",
    description: "Design tailored campaigns that align with your brand’s goals and audience.",
    icon: <Settings className="h-6 w-6" />
  },
  {
    title: "Unlimited Influencer Outreach",
    description: "Connect with an unlimited number of influencers to promote your brand.",
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Performance Tracking",
    description: "Monitor your ROI, engagement, and conversions with advanced tracking tools.",
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    title: "AI-Powered Chatbot",
    description: "Automate customer interactions and streamline communication with AI technology.",
    icon: <MessageCircle className="h-6 w-6" />
  },
  {
    title: "Exclusive Webinars",
    description: "Gain access to exclusive training sessions and industry insights.",
    icon: <Video className="h-6 w-6" />
  }
];

// Pro Plan Success Metrics
const successMetrics = [
  { metric: "Monthly Reach", value: "1M+", period: "across all platforms" },
  { metric: "Engagement Rate", value: "25%", period: "average increase" },
  { metric: "Conversion Rate", value: "20%", period: "average increase" },
  { metric: "ROI", value: "4x", period: "average return on investment" }
];

// Testimonials
const testimonials = [
  {
    name: "Alex M.",
    role: "E-commerce Brand Owner",
    image: "/api/placeholder/100/100",
    quote: "The Pro Plan transformed my business. My sales increased by 200% in just 3 months thanks to the ambassador network and advanced analytics.",
    metrics: "$50K revenue • 10K new customers"
  },
  {
    name: "Jessica L.",
    role: "Fitness Brand Founder",
    image: "/api/placeholder/100/100",
    quote: "For $39.99/month, I got access to an army of promoters and AI tools that helped me grow my Instagram following by 35%.",
    metrics: "35% growth • 15K new followers"
  },
  {
    name: "Ryan T.",
    role: "Tech Startup CEO",
    image: "/api/placeholder/100/100",
    quote: "The ROI is insane. I spent $120 on the Pro Plan and generated $10K in sales within a month using custom campaigns and performance tracking.",
    metrics: "$10K revenue • 5K new leads"
  }
];

// FAQ Items
const faqItems = [
  {
    question: "How does the ambassador army work?",
    answer: "Your brand gets promoted by hundreds of ambassadors who share your products with their audiences, driving traffic and sales."
  },
  {
    question: "Is there a long-term commitment?",
    answer: "No, the Pro Plan is a monthly subscription. You can cancel anytime."
  },
  {
    question: "What kind of brands can benefit?",
    answer: "E-commerce, fitness, tech, fashion, and more. Any brand looking to scale quickly can benefit."
  },
  {
    question: "How do I track my results?",
    answer: "You’ll get access to advanced analytics that show reach, engagement, and ROI in real-time."
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
            <MagicBadge title="PRO Plan" />
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-0 !leading-tight">
              Scale Your Brand with Advanced Tools
            </h1>
            <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
              For just <span className="font-bold text-fuchsia-500">$39.99/month</span>, unlock exclusive features like advanced analytics, AI chatbots, and unlimited influencer outreach.
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
            <MagicBadge title="Why Pro?" />
            <h2 className="text-3xl md:text-4xl font-bold mt-6">The Pro Plan Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Unlock the power of advanced tools and take your brand to the next level.
            </p>
          </div>

          {/* Toggle Between Features and Benefits */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeTab === "features" ? "primary" : "outline"}
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
            {(activeTab === "features" ? proBenefits.slice(0, 3) : proBenefits.slice(3, 6)).map((benefit, index) => (
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
                Average performance of Pro Plan users
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
            <h2 className="text-3xl md:text-4xl font-bold mt-6">From Our Pro Plan Users</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Hear directly from brands that scaled with our advanced tools.
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
              Everything you need to know about the Pro Plan.
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
                Ready to Scale Your Brand?
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-gray-300">
                For just $39.99/month, unlock the power of advanced tools and watch your sales skyrocket.
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
                No obligations. No hidden fees. Start for $39.99/month.
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