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
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#050d18]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hh.jpg"
          alt={t("hero.bgAlt", "خلفية منصة شكاوى المستهلك لتقديم شكاوى المستهلك")}
          className="h-full w-full object-cover object-center opacity-40"
        />
        {/* Strong dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d18]/90 via-[#050d18]/75 to-[#050d18]" />
      </div>

      {/* Creative decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large soft gold glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#bd9438]/12 blur-[120px]" />
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[12%] w-16 h-16 border border-[#bd9438]/25 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{ y: [0, 22, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-[15%] w-20 h-20 border border-[#bd9438]/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-[8%] w-3 h-3 rounded-full bg-[#bd9438]/40"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-1/4 left-[10%] w-2.5 h-2.5 rounded-full bg-[#e8c878]/50"
        />
      </div>

      {/* Main content */}
      <div className="container-page relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center flex flex-col items-center">

       
        {/* Heading – more dramatic hierarchy */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] tracking-tight"
        >
          <span className="block mb-3 text-white/95">
            {t("hero.brandName", "منصة شكاوى المستهلك")}
          </span>

          <span className="relative inline-block">
            <span className="bg-gradient-to-l from-[#f0d78c] via-[#bd9438] to-[#e8c878] bg-clip-text text-transparent">
              {t("hero.mainHeading", "لرفع وتقديم شكاوى المستهلك")}
            </span>
            
            {/* Creative underline with glow */}
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#bd9438] to-transparent rounded-full opacity-80" />
            <span className="absolute -bottom-1 left-1/4 right-1/4 h-[6px] bg-[#bd9438]/40 blur-md" />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-7 sm:mt-9 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-medium"
        >
          {t(
            "hero.subheading",
            "منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد."
          )}
        </motion.p>

        {/* CTAs – more creative styling */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary button – glowing gold */}
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden rounded-2xl px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* Animated gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#9a7322] via-[#bd9438] to-[#9a7322] bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#bd9438] via-[#e8c878] to-[#bd9438]" />
            
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

          {/* Secondary – glass style */}
          <a
            href="#how-it-works"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 active:scale-[0.98]"
          >
            <HelpCircle className="h-4.5 w-4.5 text-[#e8c878] transition-transform group-hover:rotate-12" />
            <span>{t("hero.howItWorksBtn", "كيف نعمل؟")}</span>
          </a>
        </motion.div>

        {/* Guarantees – creative card style */}
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
              className="group flex items-center justify-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 py-3.5 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#bd9438]/30"
            >
              <item.icon className="h-4.5 w-4.5 text-[#bd9438] shrink-0 transition-transform group-hover:scale-110" />
              <span className="text-xs sm:text-sm font-semibold text-white/90">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050d18] to-transparent pointer-events-none" />
    </section>
  );
}