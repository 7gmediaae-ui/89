import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="mt-20 border-t border-border bg-slate-100/90">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2.5 font-display font-bold text-slate-900">
            <img 
              src="/The-Emirates.svg" 
              alt={t("logoAlt")} 
              width={40} 
              height={40} 
              className="h-10 w-auto shrink-0" 
              loading="lazy"
            />
            <span className="text-lg text-slate-950 font-extrabold">{t("siteTitle")}</span>
          </Link>
          <p className="mt-4 max-w-md text-xs leading-6 text-slate-700 font-medium">
            {t("footer.description")}
          </p>
        </div>

        <nav aria-label={t("footer.quickNavAria")}>
          <h3 className="text-sm font-bold text-slate-950">{t("footer.quickLinks")}</h3>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-700 font-medium">
            <li><Link to="/about" className="transition-colors hover:text-amber-700 focus-visible:text-amber-700">{t("nav.about")}</Link></li>
            <li><Link to="/how-it-works" className="transition-colors hover:text-amber-700 focus-visible:text-amber-700">{t("nav.howItWorks")}</Link></li>
            <li><Link to="/faq" className="transition-colors hover:text-amber-700 focus-visible:text-amber-700">{t("nav.faq")}</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-amber-700 focus-visible:text-amber-700">{t("nav.contact")}</Link></li>
          </ul>
        </nav>

        <nav aria-label={t("footer.legalNavAria")}>
          <h3 className="text-sm font-bold text-slate-950">{t("footer.legal")}</h3>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-700 font-medium">
            <li><Link to="/privacy" className="transition-colors hover:text-amber-700 focus-visible:text-amber-700">{t("footer.privacy")}</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-amber-700 focus-visible:text-amber-700">{t("footer.terms")}</Link></li>
            <li>
              <a 
                href="mailto:moetshakawi-uae@gmail.com" 
                className="inline-flex items-center gap-2 transition-colors hover:text-amber-700 focus-visible:text-amber-700" 
                dir="ltr"
              >
                <Mail className="h-4 w-4 shrink-0 text-slate-800" aria-hidden="true" />
                <span className="font-semibold text-slate-800">moetshakawi-uae@gmail.com</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-slate-200 bg-slate-200/60">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-xs font-medium text-slate-700 md:flex-row">
          <p>© {currentYear} {t("siteTitle")}. {t("footer.rights")}</p>
          <p className="text-center md:text-start">{t("footer.disclaimer")}</p>
        </div>
      </div>
    </footer>
  );
}