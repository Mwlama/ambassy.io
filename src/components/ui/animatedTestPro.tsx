import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { t } from "i18next";

export function AnimatedTestPro() {
  const testimonials = [
    {
      quote: t('proPlan.testimonials.items.1.quote'),
      name: t('proPlan.testimonials.items.1.name'),
      designation: t('proPlan.testimonials.items.1.role'),
      metrics: t('proPlan.testimonials.items.1.metrics'),
      src: "/Orma.jpg",
    },
    {
      quote: t('proPlan.testimonials.items.0.quote'),
      name: t('proPlan.testimonials.items.0.name'),
      designation: t('proPlan.testimonials.items.0.role'),
      metrics: t('proPlan.testimonials.items.0.metrics'),
      src: "/neonovv.png",
    },
    {
      quote: t('proPlan.testimonials.items.2.quote'),
      name: t('proPlan.testimonials.items.2.name'),
      designation: t('proPlan.testimonials.items.2.role'),
      metrics: t('proPlan.testimonials.items.2.metrics'),
      src: "/rentop.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
