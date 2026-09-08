import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldCheck,
  Home,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildHead } from "@/components/site/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    buildHead({
      title: "تم استلام شكواك بنجاح | منصة شكاوى المستهلك",
      description:
        "شكرًا لتقديم شكواك عبر منصة شكاوى المستهلك. تم استلام الطلب وبدأت عملية المراجعة.",
      path: "/thank-you",
    }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-background py-12 md:py-20 flex items-center justify-center border-b border-border/50"
    >
      {/* 1. خلفية الصورة مع التغشية الكحلية */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hh.jpg"
          alt="خلفية منصة شكاوى المستهلك"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0b1a30]/85 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
      </div>

      <div className="container-page relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          {/* أيقونة النجاح */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-[#9a7322]/20 blur-2xl animate-pulse" />
              <div className="relative grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-full border border-[#bd9438]/40 bg-[#0b1a30]/80 shadow-2xl backdrop-blur-md">
                <div className="grid h-14 w-14 sm:h-16 sm:w-16 place-items-center rounded-full bg-gradient-to-br from-[#9a7322] to-[#735414] shadow-lg">
                  <Check className="h-7 w-7 sm:h-8 sm:w-8 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* محتوى الشكر والعناوين */}
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bd9438]/30 bg-[#0b1a30]/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-bold text-[#bd9438]">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {t("thankYou.badge", "تم تسجيل الطلب بنجاح")}
            </div>

            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-md"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("thankYou.heading", "شكواك وصلت إلينا بنجاح")}
            </h1>

            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/90 font-medium drop-shadow-sm">
              {t("thankYou.subheadingP1", "شكرًا لثقتك بـ")}{" "}
              <span className="font-extrabold text-[#bd9438]">
                {t("thankYou.platformName", "منصة شكاوى المستهلك")}
              </span>
              . {t("thankYou.subheadingP2", "تم استلام بيانات شكواك وتحويلها إلى القسم المختص لبدء عملية المراجعة.")}
            </p>
          </div>

          {/* بطاقة متابعة حالة الطلب */}
          <div
            className={`mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0b1a30]/75 backdrop-blur-md shadow-2xl ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            {/* الهيدر الخاص بالبطاقة */}
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-white/70">
                  {t("thankYou.statusLabel", "حالة الشكوى الحالية")}
                </p>
                <p className="mt-1 text-base sm:text-lg font-bold text-[#bd9438] flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bd9438] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9a7322]"></span>
                  </span>
                  {t("thankYou.statusValue", "قيد المراجعة والتدقيق")}
                </p>
              </div>

              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-[#bd9438]/30 bg-[#9a7322]/10 text-[#bd9438]">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
            </div>

            {/* مراحل الشكوى (Timeline) */}
            <div className="p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-3 relative">
                {/* الخطوة 1: المكتملة */}
                <div className="relative flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3 w-full">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#9a7322] text-white shadow-md">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm sm:text-base">
                        {t("thankYou.step1Title", "استلام الشكوى")}
                      </p>
                      <p className="text-xs text-white/70">
                        {t("thankYou.step1Desc", "تم حفظ بياناتك بنجاح")}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden md:block absolute top-5 h-[2px] bg-gradient-to-r from-[#9a7322] to-white/20 -z-0 ${
                      isRtl ? "right-12 left-0" : "left-12 right-0"
                    }`}
                  />
                </div>

                {/* الخطوة 2: الحالية */}
                <div className="relative flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3 w-full">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#bd9438] bg-[#9a7322]/20 text-[#bd9438] shadow-md animate-pulse">
                      <Clock3 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-[#bd9438] text-sm sm:text-base">
                        {t("thankYou.step2Title", "المراجعة الأولية")}
                      </p>
                      <p className="text-xs text-white/70">
                        {t("thankYou.step2Desc", "جاري التحقق من التفاصيل")}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`hidden md:block absolute top-5 h-[2px] bg-white/20 -z-0 ${
                      isRtl ? "right-12 left-0" : "left-12 right-0"
                    }`}
                  />
                </div>

                {/* الخطوة 3: القادمة */}
                <div className="relative flex flex-col items-start gap-3">
                  <div className="flex items-center gap-3 w-full">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5 text-white/50">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-white/60 text-sm sm:text-base">
                        {t("thankYou.step3Title", "إشعار بالنتيجة")}
                      </p>
                      <p className="text-xs text-white/50">
                        {t("thankYou.step3Desc", "التحديثات عبر البريد")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* صندوق التنبيه والإرشادات */}
          <div
            className={`mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#0b1a30]/50 backdrop-blur-sm px-5 py-4 ${
              isRtl ? "text-right" : "text-left"
            }`}
          >
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#bd9438]" aria-hidden="true" />
              <div>
                <p className="text-xs sm:text-sm font-bold text-white">
                  {t("thankYou.emailAlertTitle", "تفقد بريدك الإلكتروني")}
                </p>
                <p className="mt-0.5 text-xs text-white/70">
                  {t("thankYou.emailAlertDesc", "تم إرسال تأكيد الاستلام والرقم المرجعي الخاص بشكواك إلى إيميلك.")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#bd9438] bg-[#bd9438]/10 border border-[#bd9438]/20 px-3 py-1.5 rounded-lg shrink-0">
              <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
              {t("thankYou.processingTime", "المعالجة خلال 24 ساعة")}
            </div>
          </div>

          {/* أزرار الإجراءات والتحويل */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#9a7322] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-200 hover:bg-[#735414] active:scale-[0.98]"
            >
              <Home className="h-4 w-4 text-[#bd9438]" />
              <span>{t("thankYou.backHome", "العودة للصفحة الرئيسية")}</span>
              <ArrowLeft
                className={`h-4 w-4 transition-transform ${
                  isRtl ? "group-hover:-translate-x-1" : "rotate-180 group-hover:translate-x-1"
                }`}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* شريط الطمأنة الأمني في الأسفل */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-white/70">
            <ShieldCheck className="h-4 w-4 text-[#bd9438]" aria-hidden="true" />
            <span>{t("thankYou.securityNote", "معلوماتك مشفرة ومحمية بأعلى معايير السرية والأمان")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}