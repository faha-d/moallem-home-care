import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t, dir } = useI18n();

  return (
    <footer className="py-10 bg-foreground text-background/70" dir={dir}>
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-bold text-background">Moallem AC Services</p>
        <p className="text-sm">{t.footer.tagline}</p>
        <p className="text-xs text-background/50">© {new Date().getFullYear()} Moallem AC Services. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
