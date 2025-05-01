"use client"; 

import { AnimationContainer } from "@/components";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Image, MessageSquare, Video } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl shadow-lg backdrop-blur-sm"
  >
    <Icon className="w-12 h-12 mb-4 text-purple-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const Aitools = () => {
  const tools = [
    { icon: MessageSquare, title: "AI Chat Assistant", description: "Engage with our advanced AI chatbot for ideas, instant support and information." },
    { icon: Video, title: "Video Generator", description: "Transform your ideas into video with our AI-partner." },
    { icon: Image, title: "Image Creator", description: "Create stunning visuals and artwork using our AI-partner." },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-transparent">
      <AnimationContainer delay={0.1} className="w-full max-w-6xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mt-6 bg-clip-text text-white dark:text-black ">
          AI Tools for the Future
        </h1>
        <p className="text-lg md:text-xl mt-6 text-center text-muted-foreground max-w-2xl mx-auto">
          Empower your creativity and productivity with our cutting-edge AI tools.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {tools.map((tool, index) => (
            <AnimationContainer key={index} delay={0.2 + index * 0.1}>
              <ToolCard {...tool} />
            </AnimationContainer>
          ))}
        </div>
        
        <AnimationContainer delay={0.5} className="mt-16 text-center">
          <motion.a 
            href="#" 
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skyrocket
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
        </AnimationContainer>
      </AnimationContainer>
    </div>
  );
};

export default Aitools;
