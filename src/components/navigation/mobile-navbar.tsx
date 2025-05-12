"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { cn, NAV_LINKS } from "@/utils";
import { useAuth } from "@clerk/nextjs";
import { DivideIcon as LucideIcon, Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React, { useState } from 'react';
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch"; // Assuming you have a Switch component
import LanguageSelector from "../ui/language-selector";
import { useTranslation } from "react-i18next";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const MobileNavbar = () => {
    const { isSignedIn } = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { theme, setTheme } = useTheme(); // Hook to manage theme
    const { t } = useTranslation();

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex lg:hidden items-center">
            <div className="flex-1" /> {/* This pushes the following items to the right */}
            <div className="flex items-center gap-4"> {/* Adjusted gap for better spacing */}
                <LanguageSelector />
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-screen bg-background text-foreground">
                        <SheetClose asChild className="absolute top-3 right-5 bg-background z-20 flex items-center justify-center">
                            <Button size="icon" variant="ghost" className="text-neutral-600 dark:text-neutral-400">
                                <X className="w-5 h-5" />
                            </Button>
                        </SheetClose>

                        {/* Authentication Links */}
                        <div className="flex items-center justify-evenly w-full space-x-2 mt-8">
                            {isSignedIn ? (
                                <Link href="/dashboard" className={buttonVariants({ variant: "outline", className: "w-full" })}>
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href="https://ambassy.lovable.app/login" className={buttonVariants({ variant: "outline", className: "w-full" })}>
                                        {t('common.signIn')}
                                    </Link>
                                    <Link href="https://ambassy.lovable.app/register" className={buttonVariants({ className: "w-full" })}>
                                        {t('common.signUp')}
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <div className="w-full mt-6">
                            <Accordion type="single" collapsible className="w-full">
                                {NAV_LINKS.map((link) => (
                                    <AccordionItem key={link.title} value={link.title} className="last:border-none">
                                        {link.menu ? (
                                            <>
                                                <AccordionTrigger className="hover:bg-accent hover:text-accent-foreground">
                                                    {t(`nav.${link.title.toLowerCase().replace(/\s+/g, '')}`)}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul
                                                        onClick={handleClose}
                                                        className={cn("w-full")}
                                                    >
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
                                                </AccordionContent>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={handleClose}
                                                className="flex items-center w-full py-4 font-medium text-muted-foreground hover:text-foreground hover:bg-accent"
                                            >
                                                <span>{t(`nav.${link.title.toLowerCase().replace(/\s+/g, '')}`)}</span>
                                            </Link>
                                        )}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Theme Toggle as a Standalone Item */}
                        <div className="mt-6 p-4 border-t border-border">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    {theme === "dark" ? (
                                        <Moon className="w-4 h-4" />
                                    ) : (
                                        <Sun className="w-4 h-4" />
                                    )}
                                    <span className="text-sm font-medium">Theme</span>
                                </div>
                                <Switch
                                    checked={theme === "dark"}
                                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                                />
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon: typeof LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
    return (
        <li>
            <Link
                href={href!}
                ref={ref}
                className={cn(
                    "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center space-x-2 text-foreground">
                    <Icon className="h-4 w-4" />
                    <h6 className="text-sm !leading-none">
                        {title}
                    </h6>
                </div>
                <p title={children! as string} className="line-clamp-1 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default MobileNavbar;