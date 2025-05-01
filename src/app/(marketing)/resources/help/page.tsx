"use client";

import { AnimationContainer } from "@/components";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Lightbulb, Link, TrendingUp, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

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


interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const KowledgeCard: React.FC<ToolCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl shadow-lg backdrop-blur-sm"
  >
    <Icon className="w-12 h-12 mb-4 text-purple-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);


const KnowledgePage = () => {
  const knowledgeAreas = [
    { icon: Lightbulb, title: "AI Prompt Engineering", description: "Master the art of crafting effective prompts for AI systems." },
    { icon: TrendingUp, title: "Google Ads Optimization", description: "Advanced techniques for optimizing your Google Ads campaigns." },
    { icon: Zap, title: "Marketing Automation", description: "Strategies for automating your marketing workflows." },
    { icon: BookOpen, title: "Continuous Learning", description: "Library of resources to stay updated with the latest trends." },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-transparent">
      <AnimationContainer delay={0.1} className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mt-6 bg-clip-text text-white dark:text-black">
          Knowledge Hub
        </h1>
        <p className="text-lg md:text-xl mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
          Empower your marketing and sales skills with our curated knowledge resources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {knowledgeAreas.map((area, index) => (
            <AnimationContainer key={index} delay={0.2 + index * 0.1}>
              <KowledgeCard {...area} />
            </AnimationContainer>
          ))}
        </div>
        
        <AnimationContainer delay={0.5} className="mt-16 text-center">
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-started"
                className="mt-4 px-8 py-4 bg-fuchsia-500/50 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-neutral-500/30 transition-all duration-300"
              >
                Skyrocket
              </Link>
            </motion.div>
          
        </AnimationContainer>
      </AnimationContainer>
    </div>
  );
};

export default KnowledgePage;
