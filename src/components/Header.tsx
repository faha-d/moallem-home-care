import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/966XXXXXXXXXX";

export default function Header() {
  const { t, lang, toggleLang, dir } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b" dir={dir}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-extrabold text-primary tracking-tight">
          Moallem <span className="text-foreground">AC</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
          <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-full border text-xs font-semibold hover:bg-secondary transition-colors"
          >
            {lang === "en" ? "العربية" : "English"}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t.nav.getQuote}
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-t px-4 pb-4 space-y-3" dir={dir}>
          <a href="#services" className="block py-2 text-foreground/80 hover:text-primary" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#about" className="block py-2 text-foreground/80 hover:text-primary" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <a href="#contact" className="block py-2 text-foreground/80 hover:text-primary" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
          <button onClick={toggleLang} className="w-full text-left py-2 font-semibold text-primary">
            {lang === "en" ? "العربية" : "English"}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2 rounded-full bg-primary text-primary-foreground font-semibold"
          >
            {t.nav.getQuote}
          </a>
        </div>
      )}
    </header>
  );
}
