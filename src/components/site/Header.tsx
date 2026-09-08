"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowLeft, ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isAr = i18n.language === "ar";

  // قائمة التنقل تستدعي المفاتيح مباشرة من ملف الـ JSON
  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/how-it-works", label: t("nav.howItWorks") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  // دالة تغيير اللغة مع ضبط الاتجاه
  const toggleLanguage = () => {
    const nextLang = isAr ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/75 backdrop-blur-xl transition-all duration-300">
      {/* تم استخدام flex بدلاً من grid لضمان انعكاس مكان اللوغو وأزرار الأكشن بسلاسة حسب اللغة */}
      <div className="container-page flex h-20 items-center justify-between px-4 gap-4">
        
        {/* أقصى البداية (اليمين بالعربي / اليسار بالإنجليزي): اللوغو + النص */}
        <div className="flex items-center justify-start shrink-0">
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
          >
            <img 
              src="/The-Emirates.svg" 
              alt={t("logoAlt")} 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              // @ts-ignore
              fetchpriority="high"
            />
            <span className={cn(
              "text-sm md:text-base font-bold text-foreground leading-tight tracking-tight",
              isAr ? "border-r border-border/60 pr-3 pl-0" : "border-l border-border/60 pl-3 pr-0"
            )}>
              {t("siteTitle")}
            </span>
          </Link>
        </div>

        {/* المنتصف: القائمة الرئيسية (تظهر في الشاشات الكبيرة) */}
        <div className="hidden md:flex justify-center items-center flex-1">
          <nav 
            aria-label={t("navAria")}
            className="flex items-center gap-1 rounded-full border border-border/50 bg-surface/60 p-1.5 shadow-sm backdrop-blur-md"
          >
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative rounded-full px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-background/80 whitespace-nowrap"
                activeProps={{ 
                  className: "bg-background text-primary font-bold shadow-sm ring-1 ring-border/60 text-foreground" 
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* أقصى النهاية (اليسار بالعربي / اليمين بالإنجليزي): زر الترجمة + تقديم الشكوى + زر الموبايل */}
        <div className="flex items-center justify-end gap-2 shrink-0">
          
          {/* زر تغيير اللغة (سطح المكتب) */}
         <button
              type="button"
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-3.5 py-2 text-xs font-semibold text-foreground transition-all hover:bg-secondary hover:border-border hover:shadow-sm active:scale-95"
              title={isAr ? "Switch to English" : "التحويل للغة العربية"}
            >
              <Globe className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{isAr ? "English" : "عربي"}</span>
            </button>

          {/* زر تقديم الشكوى (سطح المكتب) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              hash="complaint-form"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-xs lg:text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-primary/95 hover:shadow-md hover:shadow-primary/20 active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              <ShieldCheck className="h-4 w-4 shrink-0 opacity-90 transition-transform group-hover:rotate-12" aria-hidden="true" />
              <span>{t("submitComplaint")}</span>
              {isAr ? (
                <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              )}
            </Link>
          </div>

          {/* زر القائمة للموبايل */}
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-border/80 bg-surface text-foreground md:hidden transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5 shrink-0" /> : <Menu className="h-5 w-5 shrink-0" />}
          </button>
        </div>

      </div>

      {/* القائمة الجانبية للموبايل */}
      <div 
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border/60 bg-background/95 backdrop-blur-2xl", 
          open ? "max-h-[480px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="container-page flex flex-col gap-2">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:bg-secondary/80 hover:text-foreground active:bg-secondary"
              activeProps={{ className: "bg-primary/10 text-primary font-bold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
            </Link>
          ))}

          {/* زر تغيير اللغة للموبايل */}
        <button
            type="button"
            onClick={() => {
              toggleLanguage();
              setOpen(false);
            }}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-all hover:bg-secondary/80 mt-1 border border-border/40"
          >
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              {t("changeLanguage", "تغيير اللغة")}
            </span>
            <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-lg">
              {isAr ? "English" : "عربي"}
            </span>
          </button>

          <div className="pt-2 mt-2 border-t border-border/40">
            <Link
              to="/"
              hash="complaint-form"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-all active:scale-98"
            >
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>{t("submitComplaintNow")}</span>
              {isAr ? (
                <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}