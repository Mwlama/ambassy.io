"use client";

import Link from 'next/link';
import Image from 'next/image';
import { AnimationContainer, Icons } from "@/components"
import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        <Image src="/icons/ambassy2Dok.png" alt="Ambassy Logo"  width={200} height={200}  />
                    </div>
                        
                    </div>
                </AnimationContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimationContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    {t('footer.product')}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.features')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.pricing')}
                                        </Link>
                                    </li>
                                    
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.integration')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/payment" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.payments')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    {t('footer.company')}
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="/aboutUs" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.aboutUs')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.privacyPolicy')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.termsConditions')}
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/legalPage" className="hover:text-foreground transition-all duration-300">
                                            {t('footer.creatorTerms')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                    <AnimationContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    {t('footer.followUs')}
                                </h3>
                                <ul className="mt-4 grid grid-cols-5 gap-1">
                                    <li>
                                        <Link href="https://www.facebook.com/ambassyapp/" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/facebook.svg" alt="Facebook" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/ambassy.io/" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/instagram.svg" alt="Instagram" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/x.svg" alt="Twitter" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="www.linkedin.com/in/ambassy-app-327303352" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/linkedin.svg" alt="LinkedIn" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.snapchat.com/add/ambassy.io?share_id=NSyBNM7XnbA&locale=en-GB                                    " className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/snap.svg" alt="Snapchat" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="www.linkedin.com/in/ambassy-app-327303352" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/twitch.svg" alt="Twitch" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="http://t.me/Mwlamane" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/telegram.svg" alt="Telegram" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="www.linkedin.com/in/ambassy-app-327303352" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/discord.svg" alt="Discord" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="https://www.tiktok.com/@ambassy.io?_t=ZN-8wN5keKr75i&_r=1" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/tiktok.svg" alt="Discord" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/@ambassyapp" className="hover:text-foreground transition-all duration-300">
                                            <Image src="/assets/youtube.svg" alt="Discord" className="w-9 h-9 hover:opacity-80 transition-all duration-300" width={10}  height={10}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimationContainer>
                        
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            {t('footer.description')}
                        </p>
                    </div>
                </div>

            </div>
            <div className="h-[10rem] lg:h-[10rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="GO%35" />
            </div>

            <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimationContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} AMBASSY INC. {t('footer.allRightsReserved')}
                    </p>
                </AnimationContainer>
            </div>

           
        </footer>
    )
}

export default Footer