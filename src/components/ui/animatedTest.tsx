import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { t } from "i18next";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: t('vipPlan.testimonials.1.quote'),
      name: t('vipPlan.testimonials.1.name'),
      designation: t('vipPlan.testimonials.1.role'),
      src: "/wtd.png",
    },
    {
      quote: t('vipPlan.testimonials.0.quote'),
      name: t('vipPlan.testimonials.0.name'),
      designation: t('vipPlan.testimonials.0.role'),
      src: "/dermadia.png",
    },
    {
      quote: t('proPlan.testimonials.items.1.quote'),
      name: t('proPlan.testimonials.items.1.name'),
      designation: t('proPlan.testimonials.items.1.role'),
      src: "/Orma.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
