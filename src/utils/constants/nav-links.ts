import { t } from "i18next";
import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

const nav = {
    amb: {
        title: "AMBASSADOR",
    },
    pro: {
        title: "PRO",
    },
    vip: {
        title: "VIP",
    },
};

export const NAV_LINKS = [
    {
        title: "About Us",
        href: "/aboutUs",
    },
    {
        title: "Explore",
        href: "/features",
        menu: [
            {
                title: t(nav.amb.title),
                tagline: "Accept, Share, and Earn.",
                href: "/features/link-shortening",
                icon: Link2Icon,
            },
            {
                title: t(nav.pro.title),
                tagline: "Create your Army.",
                href: "/features/password-protection",
                icon: LockIcon,
            },
            {
                title: t(nav.vip.title),
                tagline: "Fully Automated Promotion.",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            // {
            //     title: "Blog",
            //     tagline: "We share the Best with you.",
            //     href: "/features/qr-codes",
            //     icon: QrCodeIcon,
            // },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    // {
    //     title: "Benefits",
    //     href: "/enterprise",
    // },
    // {
    //     title: "Resources",
    //     href: "/resources",
    //     menu: [
    //         {
    //             title: "AI Tools",
    //             tagline: "Use Our AIs to generate, create and much more.",
    //             href: "/resources/Aitools",
    //             icon: NewspaperIcon,
    //         },
    //         {
    //             title: "Guides",
    //             tagline: "Get the best practices in digital, business and AI.",
    //             href: "/resources/help",
    //             icon: HelpCircleIcon,
    //         },
    //     ]
    // },
  
];