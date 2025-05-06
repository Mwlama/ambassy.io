import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { t } from "i18next";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: t('vipPlan.testimonials.1.quote'),
      name: t('vipPlan.testimonials.1.name'),
      designation: t('vipPlan.testimonials.1.role'),
      src: "/pro2.png",
    },
    {
      quote: t('vipPlan.testimonials.0.quote'),
      name: t('vipPlan.testimonials.0.name'),
      designation: t('vipPlan.testimonials.0.role'),
      src: "/dermadia.png",
    },
    {
      quote: t('vipPlan.testimonials.2.quote'),
      name: t('vipPlan.testimonials.2.name'),
      designation: t('vipPlan.testimonials.2.role'),
      src: "/Orma.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
