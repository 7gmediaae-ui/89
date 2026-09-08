import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Search, Send, Bell, ArrowLeft, LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildHead, PageHeader } from "@/components/site/seo";

interface StepItem {
  title: string;
  desc: string;
}

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    buildHead({
      title: "كيف تعمل المنصة | منصة شكاوى المستهلك",
      description:
        "تعرف على كيفية تقديم وتوثيق الشكاوى عبر منصة شكاوى المستهلك خطوة بخطوة: من تعبئة النموذج وحتى متابعة الرد واستلام الإشعارات.",
      path: "/how-it-works",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "كيف تعمل المنصة", path: "/how-it-works" },
      ],
    }),
  component: HowItWorksPage,
});

// قائمة الأيقونات المترابطة بالترتيب مع الخطوات
const stepIcons: LucideIcon[] = [FileText, Search, Send, Bell];

function HowItWorksPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  // جلب خطوات العمل ديناميكياً من ملف الترجمة
  const rawSteps = t("howItWorksPage.steps", { returnObjects: true });
  const stepsList: StepItem[] = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <>
      <PageHeader
        eyebrow={t("howItWorksPage.eyebrow", "آلية العمل")}
        title={t("howItWorksPage.title", "من الفكرة إلى الرد… خطوة بخطوة")}
        description={t(
          "howItWorksPage.description",
          "صمّمنا العملية لتكون بسيطة وشفافة، تُبقيك على اطلاع في كل مرحلة."
        )}
      />

      <section className="container-page py-16">
        <ol className="grid gap-6 md:grid-cols-2">
          {stepsList.map((s, idx) => {
            const IconComponent = stepIcons[idx] || FileText;
            return (
              <li
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <IconComponent className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-5 text-xl font-bold">{s.title}</h2>
                <p className="mt-2 leading-7 text-muted-foreground">{s.desc}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 rounded-3xl border border-border bg-secondary/50 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            {t("howItWorksPage.ctaTitle", "جاهز للبدء؟")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {t(
              "howItWorksPage.ctaDesc",
              "قدّم شكواك الآن، وسنتولى الباقي. تقديم الشكوى مجاني عبر المنصة."
            )}
          </p>
          <Link
            to="/"
            hash="complaint-form"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant"
          >
            <span>{t("howItWorksPage.ctaBtn", "تقديم شكوى")}</span>
            <ArrowLeft
              className={`h-4 w-4 transition-transform ${
                isRtl ? "" : "rotate-180"
              }`}
              aria-hidden
            />
          </Link>
        </div>
      </section>
    </>
  );
}