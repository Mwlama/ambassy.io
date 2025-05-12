import { t } from "i18next";
import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";


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
                title: "Plan",
                tagline: "AMBASSADOR",
                href: "/features/ambassador",
                icon: Link2Icon,
            },
            {
                title: "Plan",
                tagline: "PRO",
                href: "/features/pro",
                icon: LockIcon,
            },
            {
                title: "Plan",
                tagline: "VIP",
                href: "/features/vip",
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