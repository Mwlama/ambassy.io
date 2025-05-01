export const PLANS = [
    {
        name: "Ambassador",
        info: "For TikTokers, Instagramers, YouTubers, and all social media influencers",
        price: {
            monthly: "Always Free",
            yearly: "Always Free",
        },
        features: [
            { text: "Customize your profile"},
            { text: "Brand opportunities"},
            { text: "Links to share"},
            { text: "Basic analytics", tooltip: "Track essential stats about your audience growth"},
            { text: "Direct messaging", tooltip: "Chat directly with brands and influencers"},
            { text: "Approach the pros", tooltip: "Reach out to top professionals in your niche"},
            { text: "Community access", tooltip: "Join a vibrant community of ambassadors"},
        ],
        btn: {
            text: "Start for Free",
            href: "/auth/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "For shops and brands looking to skyrocket their growth",
        price: {
            monthly: 39.99,
            yearly: Math.round(39.99 * 12 * (1 - 0.12)), // Applying a 12% discount for yearly plan
        },
        features: [
            { text: "All Ambassador features" },
            { text: "Advanced campaign analytics", tooltip: "Deep insights into your campaign performance" },
            { text: "Priority support", tooltip: "Faster responses from our dedicated support team" },
            { text: "Custom campaign creation", tooltip: "Launch personalized marketing campaigns tailored to your brand" },
            { text: "Unlimited influencer outreach", tooltip: "Connect with an unlimited number of influencers" },
            { text: "Performance tracking", tooltip: "Monitor the success of your campaigns in real-time" },
            { text: "AI-powered chatbot", tooltip: "Automate customer interactions and improve engagement" },
            { text: "Exclusive webinars", tooltip: "Access to exclusive webinars and training sessions" },
        ],
        btn: {
            text: "Get Started",
            href: "/auth/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "VIP",
        info: "For busy shop owners who want effortless promotion and skyrocket",
        price: {
            monthly: 299.99,
            yearly: Math.round(299.99 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "All Ambassador & Pro features" },
            { text: "Fully automated management", tooltip: "Automate influencer and campaign management processes" },
            { text: "Google Ads Campaign", tooltip: "Run Google Ads directly through our platform" },
            { text: "TikTok Ads Campaign", tooltip: "Launch high-performing TikTok Ads with ease" },
            { text: "TikTok Shop Integration", tooltip: "Seamlessly integrate your TikTok Shop for enhanced sales" },
            { text: "Dedicated account manager", tooltip: "Personalized support from a dedicated account manager" },
            { text: "Custom reporting", tooltip: "Tailored reports to meet your organization's needs" },
            { text: "Exclusive partnerships", tooltip: "Access to exclusive partnerships and collaborations" },
        ],
        btn: {
            text: "Get Started",
            href: "/auth/sign-up?plan=business",
            variant: "default",
        }
    }
];
