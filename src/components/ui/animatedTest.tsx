import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { t } from "i18next";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: t('proPlan.testimonials.items.1.quote'),
      name: t('proPlan.testimonials.items.1.name'),
      designation: t('proPlan.testimonials.items.1.role'),
      src: "/Testamonial1.jpg",
    },
    {
      quote: t('proPlan.testimonials.items.0.quote'),
      name: t('proPlan.testimonials.items.0.name'),
      designation: t('proPlan.testimonials.items.0.role'),
      src: "/Testamonial2.jpg",
    },
    {
      quote: t('proPlan.testimonials.items.2.quote'),
      name: t('proPlan.testimonials.items.2.name'),
      designation: t('proPlan.testimonials.items.2.role'),
      src: "/Testamonial3.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
