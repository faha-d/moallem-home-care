import { useI18n } from "@/lib/i18n";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

export default function Index() {
  const { dir, lang } = useI18n();

  return (
    <div dir={dir}>
      <Helmet>
        <html lang={lang} dir={dir} />
        <title>Moallem AC Services | Professional AC & Home Cleaning Services</title>
        <meta name="description" content="Professional AC cleaning, water tank sanitization, pest control, furniture cleaning, and more. Trusted home services in Saudi Arabia." />
        <link rel="canonical" href="https://moallemac.com" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
