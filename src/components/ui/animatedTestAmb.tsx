import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { t } from "i18next";

export function AnimatedTestAmb() {
  const testimonials = [
    {
      quote: t('ambassador.testimonials.items.1.quote'),
      name: t('ambassador.testimonials.items.1.name'),
      designation: t('ambassador.testimonials.items.1.role'),
      metrics: t('ambassador.testimonials.items.1.metrics'),
      src: "/Testamonial2.jpg",
    },
    {
      quote: t('ambassador.testimonials.items.0.quote'),
      name: t('ambassador.testimonials.items.0.name'),
      designation: t('ambassador.testimonials.items.0.role'),
      metrics: t('ambassador.testimonials.items.0.metrics'),
      src: "/Testamonial3.jpg",
    },
    {
      quote: t('ambassador.testimonials.items.2.quote'),
      name: t('ambassador.testimonials.items.2.name'),
      designation: t('ambassador.testimonials.items.2.role'),
      metrics: t('ambassador.testimonials.items.2.metrics'),
      src: "/Testamonial4.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
