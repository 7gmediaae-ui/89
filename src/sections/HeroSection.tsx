"use client";

import { motion } from "framer-motion";
import {
  FileCheck2,
  ArrowLeft,
  HelpCircle,
  Lock,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  return (
    <section
      aria-label={t("hero.ariaLabel", "الرئيسية - تقديم الشكوى")}
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background image & Lighter Overlays */}
      <div className="absolute inset-0">
        <img
          src="/hh.jpg"
          alt={t("hero.bgAlt", "خلفية منصة شكاوى المستهلك لتقديم شكاوى المستهلك")}
          className="h-full w-full object-cover object-center opacity-30"
        />
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80" />
      </div>

      {/* Bright & Vivid Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Bright Golden & Blue Glows */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-[#e8c878]/25 to-sky-500/10 blur-[100px]" />
        <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] rounded-full bg-amber-500/15 blur-[100px]" />

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[12%] w-16 h-16 border border-amber-400/30 rounded-2xl rotate-12 bg-amber-400/5 backdrop-blur-xs"
        />
        <motion.div
          animate={{ y: [0, 22, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[15%] w-20 h-20 border border-sky-400/30 rounded-full bg-sky-400/5 backdrop-blur-xs"
        />
      </div>

      {/* Main content */}
      <div className="container-page relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center">

        {/* Heading — Single Line Layout */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-baseline gap-x-3 gap-y-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight pt-2"
        >
          <span className="text-white py-1">
            {t("hero.brandName", "منصة شكاوى المستهلك")}
          </span>

          <span className="relative inline-block py-1">
            <span className="bg-gradient-to-l from-amber-200 via-amber-400 to-yellow-100 bg-clip-text text-transparent py-1.5 leading-relaxed">
              {t("hero.mainHeading", "لرفع وتقديم شكاوى المستهلك")}
            </span>
            
            {/* Bright Underline */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            <span className="absolute -bottom-1 left-1/4 right-1/4 h-[8px] bg-amber-400/60 blur-md" />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-7 sm:mt-9 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-medium"
        >
          {t(
            "hero.subheading",
            "منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary button */}
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden rounded-2xl px-8 py-4 text-base font-bold text-slate-950 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-amber-500/20"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300" />
            
            <span className="relative flex items-center gap-3">
              <FileCheck2 className="h-5 w-5" />
              <span>{t("submitComplaintNow", "تقديم شكوى الآن")}</span>
              <ArrowLeft
                className={`h-4 w-4 transition-transform duration-300 ${
                  isRtl
                    ? "group-hover:-translate-x-1.5"
                    : "rotate-180 group-hover:translate-x-1.5"
                }`}
              />
            </span>
          </a>

          {/* Secondary Button */}
          <a
            href="#how-it-works"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:border-white/50 active:scale-[0.98]"
          >
            <HelpCircle className="h-4.5 w-4.5 text-amber-300 transition-transform group-hover:rotate-12" />
            <span>{t("hero.howItWorksBtn", "كيف نعمل؟")}</span>
          </a>
        </motion.div>

        {/* Guarantees - Lighter Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-3xl"
        >
          {[
            {
              icon: CheckCircle2,
              text: t("hero.guarantees.free", "خدمة مجانية بالكامل"),
            },
            {
              icon: Clock,
              text: t("hero.guarantees.tracking", "متابعة لحظية"),
            },
            {
              icon: Lock,
              text: t("hero.guarantees.fair", "معالجة عادلة"),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3.5 transition-all duration-300 hover:bg-white/20 hover:border-amber-400/50"
            >
              <item.icon className="h-4.5 w-4.5 text-amber-400 shrink-0 transition-transform group-hover:scale-110" />
              <span className="text-xs sm:text-sm font-semibold text-white">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  );
}