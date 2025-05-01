"use client";

import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState, useEffect } from "react";
import MagicBadge from "@/components/ui/magic-badge";
import { Vortex } from "@/components/ui/vortex";
import { FAQ } from "@/utils/constants/faq";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PricingPage = () => {
    const { t } = useTranslation();
    
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
                      <MagicBadge title={t('pricing.title')} />
                      <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold font-heading text-center mt-0 !leading-tight">
                      {t('pricing.subtitle')}
                      </h1>
                      <p className="text-base md:text-lg mt-3 text-center text-muted-foreground">
                      Choose a plan that works for you. No hidden fees. No surprises.
                      </p>
                    </AnimationContainer>
                  </motion.div>
                </section>
            <MaxWidthWrapper className="mb-40">

            <AnimationContainer delay={0.2}>
                <PricingCards />
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
                <div className="mt-20 w-full">
                    <div className="flex flex-col items-center justify-center w-full pt-12">
                        <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-lg mt-6 text-center text-neutral-500">
                            Here are some of the most common questions we get asked. If you have a question that isn&apos;t answered here, feel free to reach out to us.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto w-full mt-20">
                        <Accordion type="single" collapsible>
                            {FAQ.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </AnimationContainer>

        </MaxWidthWrapper>
        </div>
    )
};

export default PricingPage