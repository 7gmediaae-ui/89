import { ShieldCheck, Clock, Scale, Users, ArrowLeft, LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

// مصفوفة الأيقونات المربوطة بالترتيب
const iconsList: LucideIcon[] = [ShieldCheck, Clock, Scale, Users];

interface WhyUsSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function WhyUsSection({ onPrimaryClick }: WhyUsSectionProps) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  // جلب مصفوفة المميزات ديناميكياً من ملف الترجمة
  const rawItems = t("whyUs.items", { returnObjects: true });
  const itemsList = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold md:text-4xl leading-tight text-foreground">
            {t("whyUs.heading", "لماذا تعتبر منصتنا الخيار الأفضل لتوثيق شكواك؟")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {t(
              "whyUs.subheading",
              "نوفر لك منصة متكاملة وسلسة تجمع بين السرعة والشفافية التامة في التعامل مع القضايا والشكاوى التجارية في كافة إمارات الدولة."
            )}
          </p>
          <div className="mt-8">
            <a
              href="#complaint-form"
              onClick={onPrimaryClick}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              <span>{t("whyUs.submitBtn", "تقديم شكوى جديدة")}</span>
              <ArrowLeft
                className={`h-4 w-4 shrink-0 transition-transform ${
                  isRtl ? "" : "rotate-180"
                }`}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {itemsList.map((item: { title: string; desc: string }, idx: number) => {
            const IconComponent = iconsList[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <IconComponent className="h-5 w-5 shrink-0" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}