"use client";

import { buttonVariants } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { useClerk } from "@clerk/nextjs";
import { DivideIcon as LucideIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageSelector from "../ui/language-selector";
import { useTranslation } from "react-i18next";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const Navbar = () => {
    const { user } = useClerk();
    const [scroll, setScroll] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 8);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 inset-x-0 h-14 w-full border-b border-transparent z-[99999] select-none",
                scroll && "border-background/80 bg-background/40 backdrop-blur-md"
            )}
        >
            <AnimationContainer reverse delay={0.1} className="size-full">
                <MaxWidthWrapper className="flex items-center justify-between">
                    {/* Logo and Brand Name */}
                    <Link href="/#home" className="flex items-center space-x-3">
                        <Image
                            src="/icons/ambassy2Dok.png"
                            alt="Ambassy Logo"
                            width={40}
                            height={40}
                        />
                        <span className="text-lg font-bold font-heading ">Ambassy</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            {NAV_LINKS.map((link) => (
                                <NavigationMenuItem key={link.title}>
                                    {link.menu ? (
                                        <>
                                            <NavigationMenuTrigger>
                                                {t(`nav.${link.title.toLowerCase().replace(/\s+/g, '')}`)}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul
                                                    className={cn(
                                                        "grid gap-1 p-4 md:w-[400px] lg:w-[500px] rounded-xl",
                                                        link.title === "Features"
                                                            ? "lg:grid-cols-[.75fr_1fr]"
                                                            : "lg:grid-cols-2"
                                                    )}
                                                >
                                                    {link.title === "Features" && (
                                                        <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                                            <div className="text-neutral-500 absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href="/"
                                                                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md"
                                                                >
                                                                    <h6 className="mb-2 mt-4 text-lg font-medium">
                                                                        All You Need
                                                                    </h6>
                                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                                        Manage Campaigns, track performance, and more.
                                                                    </p>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    )}
                                                    {link.menu.map((menuItem) => (
                                                        <ListItem
                                                            key={menuItem.title}
                                                            title={menuItem.title}
                                                            href={menuItem.href}
                                                            icon={menuItem.icon}
                                                        >
                                                            {menuItem.tagline}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link href={link.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {t(`nav.${link.title.toLowerCase().replace(/\s+/g, '')}`)}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                            
                    {/* User Authentication Links */}
                    <div className="hidden lg:flex items-center gap-2">
                        <LanguageSelector />
                        <ThemeToggle />
                        {user ? (
                            <Link href="/dashboard" className={buttonVariants({ size: "sm" })}>
                                Dashboard
                            </Link>
                        ) : (
                            
                            <div className="flex items-center gap-x-4">
                                <Link
                                    href="https://app.ambassy.io/login"
                                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                                >
                                    {t('common.signIn')}
                                </Link>
                                <Link href="https://app.ambassy.io/register" className={buttonVariants({ size: "sm" })}>
                                    {t('common.getStarted')}
                                    <ZapIcon className="size-3.5 ml-1.5 text-fuchsia-600 fill-fuchsia-500" />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Navbar */}
                    <MobileNavbar />
                </MaxWidthWrapper>
            </AnimationContainer>
        </header>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: typeof LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href!}
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-sm px-3 py-1.5 leading-none no-underline outline-none transition-all duration-100 ease-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center space-x-2 text-neutral-300">
                        <Icon className="h-4 w-4" />
                        <h6 className="text-sm font-medium !leading-none">{title}</h6>
                    </div>
                    <p
                        title={children! as string}
                        className="line-clamp-1 text-sm leading-snug text-muted-foreground"
                    >
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default Navbar;