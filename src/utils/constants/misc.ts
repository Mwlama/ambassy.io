import { BarChart3Icon, BarChartIcon, FolderOpenIcon, LinkIcon, UsersIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Telegram",
        logo: "/assets/telegram.svg",
        url: "https://www.snapchat.com/add/your-username"
    },
    {
        name: "Discord",
        logo: "/assets/discord.svg",
        url: "https://www.snapchat.com/add/your-username"
    },
    {
        name: "Snapchat",
        logo: "/assets/snap.svg",
        url: "https://www.snapchat.com/add/your-username"
    },
    {
        name: "TikTok",
        logo: "/assets/tiktok.svg",
        url: "https://www.tiktok.com/@ambassy.io"
    },
    {
        name: "Instagram",
        logo: "/assets/instagram.svg",
        url: "https://www.instagram.com/ambassy.io/"
    },
    {
        name: "Facebook",
        logo: "/assets/facebook.svg",
        url: "https://www.facebook.com/ambassyapp/"
    },
    {
        name: "Twitter",
        logo: "/assets/x.svg",
        url: "https://twitter.com/your-profile"
    },
    {
        name: "YouTube",
        logo: "/assets/youtube.svg",
        url: "https://www.youtube.com/your-channel"
    },
    {
        name: "Linkedin",
        logo: "/assets/linkedin.svg",
        url: "www.linkedin.com/in/ambassy-app-327303352"
    },
    {
        name: "Twitch",
        logo: "/assets/twitch.svg",
        url: "https://www.snapchat.com/add/your-username"
    }
] as const;

export const PROCESS = [
    {
        title: "Ambassador Selection and Onboarding",
        description: "Strategically scout and recruit the perfect social media ambassadors who align with your brand's vision and target audience.",
        icon: LinkIcon,
    },
    {
        title: "Campaign Creation and Execution",
        description: "Design compelling, platform-specific content strategies that transform Ambassador into powerful storytellers of your product's unique value.",
        icon: UsersIcon,
    },
    {
        title: "Performance Tracking and Optimization",
        description: "Implement data-driven analytics to continuously measure, learn, and evolve your influencer marketing approach for maximum ROI.",
        icon: BarChartIcon,
    },
] as const;

