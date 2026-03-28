import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Award, Leaf, BadgeDollarSign, Zap } from "lucide-react";

const icons = [Award, Leaf, BadgeDollarSign, Zap];

export default function WhyUsSection() {
  const { t, dir } = useI18n();

  return (
    <section id="about" className="py-24 bg-secondary/50" dir={dir}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-14">
          {t.whyUs.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.whyUs.reasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
