"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn, PLANS } from "@/utils";
import { motion } from 'framer-motion';
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Tab = "monthly" | "yearly";

const PricingCards = () => {
  const MotionTabTrigger = motion(TabsTrigger);
  const [activeTab, setActiveTab] = useState<Tab>("monthly");
  const { t } = useTranslation();

  return (
    <Tabs defaultValue="monthly" className="w-full flex bg-transparent flex-col items-center justify-center">
      <TabsList>
        <MotionTabTrigger
          value="monthly"
          onClick={() => setActiveTab("monthly")}
          className="relative"
        >
          {activeTab === "monthly" && (
            <motion.div
              layoutId="active-tab-indicator"
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
            />
          )}
          <span className="z-20">Monthly</span>
        </MotionTabTrigger>
        <MotionTabTrigger
          value="yearly"
          onClick={() => setActiveTab("yearly")}
          className="relative"
        >
          {activeTab === "yearly" && (
            <motion.div
              layoutId="active-tab-indicator"
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute top-0 left-0 w-full h-full bg-background shadow-sm rounded-md z-10"
            />
          )}
          <span className="z-20">Yearly</span>
        </MotionTabTrigger>
      </TabsList>

      {(["monthly", "yearly"] as Tab[]).map((billingCycle) => (
        <TabsContent
          key={billingCycle}
          value={billingCycle}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6"
        >
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col w-full border-border rounded-xl",
                plan.name === "Pro" && "border-2 border-purple-500",
                plan.name === "VIP" && "border-2 border-yellow-500"
              )}
            >
              <CardHeader
                className={cn(
                  "border-b border-border",
                  plan.name === "Pro" ? "bg-purple-500/[0.07]" : "",
                  plan.name === "VIP" ? "bg-yellow-500/[0.07]" : "",
                  plan.name === "Free" ? "bg-gray-200/[0.07]" : ""
                )}
              >
                <CardTitle
                  className={cn(
                    plan.name !== "Pro" && plan.name !== "VIP" && plan.name !== "Free" && "text-muted-foreground",
                    "text-lg font-medium"
                  )}
                >
                  {t(`pricing.plans.${plan.name.toLowerCase()}.title`)}
                </CardTitle>
                <CardDescription>{t(`pricing.plans.${plan.name.toLowerCase()}.info`)}</CardDescription>
                <h5 className="text-3xl font-semibold flex items-end">
                  {/* Render the dollar sign ($) only for non-Free plans */}
                  {plan.name !== "Free" && "$"}
                  {plan.name === "Free" ? t(`pricing.plans.${plan.name.toLowerCase()}.price`) : plan.price[billingCycle]}
                  {/* Add /month or /year only for non-Free plans */}
                  {plan.name !== "Free" && (
                    <span className="text-base text-muted-foreground font-normal">
                      /{billingCycle}
                    </span>
                  )}
                  {/* Render -12% badge ONLY for Pro and VIP plans */}
                  {billingCycle === "yearly" &&
                    (plan.name === "Pro" || plan.name === "VIP") && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0.25 }}
                        className="px-2 py-0.5 ml-2 rounded-md bg-purple-500 text-white text-sm font-medium"
                      >
                        -12%
                      </motion.span>
                    )}
                </h5>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircleIcon className="text-purple-500 w-4 h-4" />
                    <TooltipProvider>
                      {feature.tooltip ? (
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger asChild>
                            <p className="border-b !border-dashed border-border cursor-pointer">
                              {feature.text}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <p>{feature.text}</p>
                      )}
                    </TooltipProvider>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="w-full mt-auto">
                <Link
                  href={plan.btn.href}
                  style={{ width: "100%" }}
                  className={buttonVariants({
                    className:
                      (plan.name === "Pro" &&
                        "bg-purple-500 hover:bg-purple-500/80 text-white") ||
                      (plan.name === "VIP" &&
                        "bg-yellow-500 hover:bg-yellow-600/80 text-white"),
                  })}
                >
                  {plan.btn.text}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PricingCards;