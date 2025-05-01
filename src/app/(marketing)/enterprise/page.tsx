"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, TrendingUp, Users, Globe, DollarSign, Award, Rocket, Link } from 'lucide-react';
import { AnimationContainer, MaxWidthWrapper } from '@/components';
import MagicBadge from '@/components/ui/magic-badge';
import { Vortex } from '@/components/ui/vortex';

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl shadow-lg backdrop-blur-sm"
  >
    <Icon className="w-12 h-12 mb-4 text-purple-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BenefitsPage: React.FC = () => {
  const proBenefits = [
    {
      icon: Users,
      title: "Army of Promoters",
      description: "Access a vast network of Ambassadors to promote your brand to millions for a fraction of traditional costs.",
    },
    {
      icon: Globe,
      title: "Exponential Reach",
      description: "Potentially reach millions of viewers and grow your audience rapidly through our Ambassador network.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Marketing",
      description: "Achieve widespread brand exposure for just a few dollars compared to expensive traditional campaigns.",
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Utilize cutting-edge AI tools for content creation and optimization to enhance your marketing efforts.",
    },
  ];

  const ambassadorBenefits = [
    {
      icon: TrendingUp,
      title: "Massive Community Growth",
      description: "Rapidly expand your follower base and online presence by promoting popular brands and products.",
    },
    {
      icon: Rocket,
      title: "Viral Content Potential",
      description: "Create content that could reach millions of views, boosting your profile and influence.",
    },
    {
      icon: Award,
      title: "Monetization Opportunities",
      description: "Earn income by promoting brands to your growing audience and leveraging your influence.",
    },
    {
      icon: Star,
      title: "Networking Opportunities",
      description: "Connect with other successful Ambassadors and Pro users to learn and grow together.",
    },
  ];

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
                              <MagicBadge title="Benefits" />
                              <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-0 !leading-tight">
                              Unlock Your Potential
                              </h1>
                              <p className="text-base md:text-lg mt-3 text-center text-muted-foreground">
                              Discover the amazing benefits our app offers to both Pro users and Ambassadors.
                              </p>
                            </AnimationContainer>
                          </motion.div>
                        </section>
      <MaxWidthWrapper className="mb-40">
        <h2 className="text-3xl font-semibold text-center mb-8">Pro User Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {proBenefits.map((benefit, index) => (
            <BenefitCard key={`pro-${index}`} {...benefit} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-center mb-8">Ambassador Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ambassadorBenefits.map((benefit, index) => (
            <BenefitCard key={`ambassador-${index}`} {...benefit} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                      href="/get-started"
                      className="mt-4 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300">
                      Become a Pro
                    </Link>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
             <Link
                href="/get-started"
                className="mt-4 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300">
                  Ambassador
             </Link>
        </motion.div>
        </div>
        </MaxWidthWrapper>
    </div>
  );
};

export default BenefitsPage;
