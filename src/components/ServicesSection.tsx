import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

import serviceAc from "@/assets/service-ac.jpg";
import serviceWater from "@/assets/service-water.jpg";
import servicePool from "@/assets/service-pool.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import servicePest from "@/assets/service-pest.jpg";
import serviceRodent from "@/assets/service-rodent.jpg";
import serviceMould from "@/assets/service-mould.jpg";
import serviceBedbug from "@/assets/service-bedbug.jpg";

const serviceKeys = ["ac", "water", "pool", "furniture", "pest", "bedbug" ,"rodent", "mould" ] as const;
const serviceImages = [serviceAc, serviceWater, servicePool, serviceFurniture, servicePest, serviceBedbug, serviceRodent, serviceMould];

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
            const service = t.services[key];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl bg-card overflow-hidden service-card-shadow hover:service-card-hover-shadow transition-shadow duration-300 border"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={serviceImages[i]}
                    alt={service.title}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
