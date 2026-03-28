import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import {
  Wind, Droplets, Waves, Sofa, Bug, Rat, PaintBucket,
} from "lucide-react";

const serviceKeys = ["ac", "water", "pool", "furniture", "pest", "rodent", "mould"] as const;
const serviceIcons = [Wind, Droplets, Waves, Sofa, Bug, Rat, PaintBucket];

export default function ServicesSection() {
  const { t, dir } = useI18n();

  return (
    <section id="services" className="py-24 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">{t.services.title}</h2>
          <p className="mt-3 text-muted-foreground text-lg">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            const service = t.services[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl bg-card p-6 service-card-shadow hover:service-card-hover-shadow transition-shadow duration-300 border"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
