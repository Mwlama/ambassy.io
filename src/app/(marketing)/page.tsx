"use client";

import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoBanner from "@/components/VideoBanner";
import About from "@/components/about";
import SearchBar from "@/components/searchBar";
import InternalLinksSection from "@/components/ui/aboutUs";
import TwoWays from "@/components/ui/twoWays";
import { useTranslation } from "react-i18next";
import BackToUp from "@uiw/react-back-to-top";

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle"), { ssr: false });


const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full"> 
       
            <BackToUp
                style={{ position: "fixed", bottom: 20, right: 80 }}
                
                width={50}
                height={50}
                

                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >/\</BackToUp>
            
                        
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col justify-center w-full">
                    <SearchBar />
                </div>
            </MaxWidthWrapper >
          {/* Key Advantages Section */}
          <AnimationContainer delay={0.1} >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 mx-auto max-w-7xl">
            <div className="bg-black/8 backdrop-blur-sm border border-fuchsia-800 rounded-2xl p-8 hover:border-gray-500 transition-all mx-auto max-w-sm text-center">
                <h3 className="text-xl font-bold mb-3">
                {t('benef.list.0.title')}
                </h3>
                <p className="text-muted-foreground">
                {t('benef.list.0.description')}
                </p>
            </div>
            <div className="bg-black/8 backdrop-blur-sm border border-fuchsia-800 rounded-2xl p-8 hover:border-gray-700 transition-all mx-auto max-w-sm text-center">
                <h3 className="text-xl font-bold mb-3">
                {t('benef.list.1.title')}
                </h3>
                <p className="text-muted-foreground">
                {t('benef.list.1.description')}
                </p>
            </div>
            <div className="bg-black/8 backdrop-blur-sm border border-fuchsia-800 rounded-2xl p-8 hover:border-gray-700 transition-all mx-auto max-w-sm text-center">
                <h3 className="text-xl font-bold mb-3">
                {t('benef.list.2.title')}
                </h3>
                <p className="text-muted-foreground">
                {t('benef.list.2.description')}
                </p>
            </div>
            </div>

          </AnimationContainer>
            
            {/* Pricing Section */}
            <MaxWidthWrapper >
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t('badges.simplePricing')} />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t('pricing.subtitle')}
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            {t('pricing.description')}
                        </p>
                        
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
                
            </MaxWidthWrapper >
          <div className="max-w-7xl mx-auto px-4 py-10">
            <VideoBanner />
          </div>
          {/* Process Section */}
          <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title={t('home.process.title')} />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t('home.process.subtitle')}
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                        {t('home.process.description')}
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {t(`process.${id}.title`)}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {t(`process.${id}.description`)}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
                <div className="max-w-7xl mx-auto px-4">
                     <About />
                </div>
                
            </MaxWidthWrapper>

            {/* Companies Section */}
            <MaxWidthWrapper className="relative">
            <AnimationContainer delay={0.4}>
                <LampContainer>
                <div className="py-6 relative z-10">
                    <div className="mx-auto px-4 md:px-8">
                    {/* Add margin-top for mobile only */}
                    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 mt-8 sm:mt-0">
                        {COMPANIES.map((company) => (
                        <li key={company.name}>
                            <a 
                            href={company.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block transition-transform hover:scale-110"
                            >
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={40}
                                height={40}
                                quality={100}
                                className="w-10 h-10 md:w-12 md:h-12"
                            />
                            </a>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </LampContainer>
            </AnimationContainer>
            </MaxWidthWrapper>
            <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center">
                    <MagicBadge title={t('twoWays.title')} />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                        {t('twoWays.subtitle')}
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                        {t('twoWays.description')}
                        </p>
                    </div>
                </AnimationContainer>
            <AnimationContainer>
                <TwoWays />
            </AnimationContainer>
            {/* Features Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center">
                        <MagicBadge title={t('features.title')} />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            {t('features.subtitle')}
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            {t('features.description')}
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* <AnimationContainer>
                <InternalLinksSection />
            </AnimationContainer> */}
                
            {/* CTA Section */}
            <MaxWidthWrapper className="mt-1 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-800 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                {t('cta.title')}
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                {t('cta.description')}
                            </p>
                            <Link
                            href="https://ambassy.lovable.app/register">
                            <div className="mt-6 mb-10">
                                <Button>
                                    {t('common.getStarted')}
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                            </Link>
                        </div>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default HomePage