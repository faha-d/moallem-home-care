import { createContext, useContext, useState, ReactNode, useCallback } from "react";

type Lang = "en" | "ar";

const translations = {
  en: {
    nav: { services: "Services", about: "About Us", contact: "Contact Us", getQuote: "Get a Quote" },
    hero: {
      title: "Professional Home Services You Can Trust",
      subtitle: "AC cleaning, water tank sanitation, pest control, and more — keeping your home healthy and comfortable.",
      cta: "Book Now via WhatsApp",
      stats: {
        customers: "Happy Customers",
        experience: "Years Experience",
        rating: "Google Rating",
        services: "Services Offered",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Complete home maintenance and sanitation solutions",
      ac: {
        title: "AC Cleaning & Maintenance",
        desc: "Professional cleaning and sanitizing for all AC types — Split, Cabinet, Cassette, and FCU units.",
        items: ["Split AC", "Cabinet AC", "Cassette AC", "FCU Units"],
      },
      water: {
        title: "Water Tank Cleaning",
        desc: "Thorough cleaning and sanitization of water tanks to ensure safe, clean water for your family.",
        items: ["Underground Tanks", "Rooftop Tanks", "Pipeline Disinfection"],
      },
      pool: {
        title: "Swimming Pool Cleaning",
        desc: "Complete pool maintenance and cleaning services for pools of all sizes.",
        items: ["Large Pools", "Medium Pools", "Small Pools"],
      },
      furniture: {
        title: "Furniture Cleaning & Sanitizing",
        desc: "Deep cleaning and sanitizing for all soft furnishings in your home.",
        items: ["Beds & Mattresses", "Sofas", "Dining Chairs", "Majlis / Council", "Carpets", "Window Curtains"],
      },
      pest: {
        title: "Pest Control",
        desc: "Effective pest control solutions for a safe and healthy home environment.",
        items: ["General Pest Control", "Premium Treatment", "Monthly Plans"],
      },
      rodent: {
        title: "Rodent & Rat Control",
        desc: "Professional rodent control to keep your home safe from rats and other rodents.",
        items: ["Inspection", "Treatment", "Prevention"],
      },
      mould: {
        title: "Mould Wall Treatment",
        desc: "Specialized mould removal and wall treatment to restore healthy indoor surfaces.",
        items: ["Mould Removal", "Wall Treatment", "Prevention Coating"],
      },
    },
    whyUs: {
      title: "Why Choose Moallem AC Services?",
      reasons: [
        { title: "Certified Professionals", desc: "Our trained technicians deliver quality service every time." },
        { title: "Eco-Friendly Products", desc: "We use safe, non-toxic sanitizers and cleaning solutions." },
        { title: "Affordable Pricing", desc: "Competitive rates with no hidden costs." },
        { title: "Quick Response", desc: "Fast booking and same-day service availability." },
      ],
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Your trusted partner for home services.",
    },
    cta: {
      title: "Ready to Book a Service?",
      subtitle: "Contact us on WhatsApp for instant booking and free quotes.",
      button: "Chat on WhatsApp",
    },
  },
  ar: {
    nav: { services: "خدماتنا", about: "من نحن", contact: "اتصل بنا", getQuote: "احصل على عرض سعر" },
    hero: {
      title: "خدمات منزلية احترافية يمكنك الوثوق بها",
      subtitle: "تنظيف المكيفات، تعقيم خزانات المياه، مكافحة الحشرات، والمزيد — نحافظ على منزلك صحياً ومريحاً.",
      cta: "احجز الآن عبر واتساب",
      stats: {
        customers: "عملاء سعداء",
        experience: "سنوات خبرة",
        rating: "تقييم جوجل",
        services: "خدمة متوفرة",
      },
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول شاملة لصيانة وتعقيم المنزل",
      ac: {
        title: "تنظيف وصيانة المكيفات",
        desc: "تنظيف وتعقيم احترافي لجميع أنواع المكيفات — سبليت، خزانة، كاسيت، ووحدات FCU.",
        items: ["سبليت", "خزانة", "كاسيت", "وحدات FCU"],
      },
      water: {
        title: "تنظيف خزانات المياه",
        desc: "تنظيف وتعقيم شامل لخزانات المياه لضمان مياه آمنة ونظيفة لعائلتك.",
        items: ["خزانات أرضية", "خزانات علوية", "تعقيم الأنابيب"],
      },
      pool: {
        title: "تنظيف المسابح",
        desc: "خدمات صيانة وتنظيف شاملة للمسابح بجميع الأحجام.",
        items: ["مسابح كبيرة", "مسابح متوسطة", "مسابح صغيرة"],
      },
      furniture: {
        title: "تنظيف وتعقيم المفروشات",
        desc: "تنظيف عميق وتعقيم لجميع المفروشات الناعمة في منزلك.",
        items: ["أسرّة ومراتب", "كنب", "كراسي طعام", "مجلس", "سجاد", "ستائر النوافذ"],
      },
      pest: {
        title: "مكافحة الحشرات",
        desc: "حلول فعّالة لمكافحة الحشرات لمنزل آمن وصحي.",
        items: ["مكافحة عامة", "علاج متميز", "خطط شهرية"],
      },
      rodent: {
        title: "مكافحة القوارض والفئران",
        desc: "مكافحة احترافية للقوارض لحماية منزلك من الفئران والقوارض.",
        items: ["فحص", "علاج", "وقاية"],
      },
      mould: {
        title: "معالجة جدار العفن",
        desc: "إزالة متخصصة للعفن ومعالجة الجدران لاستعادة أسطح داخلية صحية.",
        items: ["إزالة العفن", "معالجة الجدران", "طلاء وقائي"],
      },
    },
    whyUs: {
      title: "لماذا تختار خدمات معلّم للتكييف؟",
      reasons: [
        { title: "فنيون معتمدون", desc: "فنيونا المدربون يقدمون خدمة عالية الجودة في كل مرة." },
        { title: "منتجات صديقة للبيئة", desc: "نستخدم معقمات ومحاليل تنظيف آمنة وغير سامة." },
        { title: "أسعار معقولة", desc: "أسعار تنافسية بدون تكاليف مخفية." },
        { title: "استجابة سريعة", desc: "حجز سريع وتوفر خدمة في نفس اليوم." },
      ],
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      tagline: "شريكك الموثوق لخدمات المنزل.",
    },
    cta: {
      title: "هل أنت مستعد لحجز خدمة؟",
      subtitle: "تواصل معنا عبر واتساب للحجز الفوري والحصول على عرض سعر مجاني.",
      button: "تواصل عبر واتساب",
    },
  },
};

type Translations = typeof translations.en;

interface I18nContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const value: I18nContextType = {
    lang,
    t: translations[lang],
    toggleLang,
    dir: lang === "ar" ? "rtl" : "ltr",
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
