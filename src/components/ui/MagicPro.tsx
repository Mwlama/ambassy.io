"use client";

import { cn } from "@/utils";
import React, { useRef, useState } from "react";

interface CardData {
  title: string;
  bullets: string[];

  icon?: string; // Optional icon/image path
}

const cardData: CardData[] = [
  {
    title: "In-Depth Campaign Analytics",
    bullets: [
      "Real-time performance metrics",
      "Audience demographic insights",
      "Engagement rate analysis",
      "ROI calculator",
    ],
  },
  {
    title: "Priority Customer Support",
    bullets: [
      "24/7 dedicated support team",
      "Fast-track issue resolution",
      "Personalized onboarding session",
      "Monthly strategy Advice"
    ],
  },
  {
    title: "Custom Campaign Creation",
    bullets: [
      "Campaign brief builder",
      "Content calendar integration",
      "Multi-platform campaign planning",
    ],
  },
  {
    title: "Unlimited Influencer Outreach",
    bullets: [
      "Advanced ambassador search filters",
      "Bulk messaging capabilities",
      "Collaboration proposal templates",
      "Influencer relationship management",
    ],
  },
  {
    title: "Comprehensive Performance Tracking",
    bullets: [
      "Cross-platform analytics dashboard",
      "Automated reporting",
      "Goal tracking and alerts",
      "Historical data analysis",
    ],
  },
  {
    title: "AI-Powered Chatbot Assistant",
    bullets: [
      "24/7 instant guidance",
      "Content optimization suggestions",
      "Trend analysis and recommendations",
      "Quick answers to platform queries",
    ],
  },
];

const MagicCard = ({ title, bullets, icon }: CardData) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative max-w-md overflow-hidden rounded-xl border border-border/60 bg-gradient-to-r from-background to-background/40 p-6 shadow-lg"
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(168,85,247,.15), transparent 60%)`,
        }}
      />
      <div className="flex items-start space-x-4">
        <div>
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground">
            {bullets.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Displaying all 6 cards in a grid layout
const MagicCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <MagicCard key={index} {...card} />
      ))}
    </div>
  );
};

export default MagicCardsGrid;
