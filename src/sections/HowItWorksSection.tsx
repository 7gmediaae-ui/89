import { useTranslation } from "react-i18next";

export interface StepItem {
  n: string;
  title: string;
  desc: string;
}

export function HowItWorksSection() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  // جلب مصفوفة الخطوات ديناميكياً من ملف الترجمة
  const rawSteps = t("howItWorks.steps", { returnObjects: true });
  const stepsList: StepItem[] = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section
      id="how-it-works"
      className="border-y border-border/80 bg-secondary/30 py-20 md:py-28"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {t("howItWorks.badge", "خطوات عمل بسيطة")}
          </span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl text-foreground">
            {t("howItWorks.heading", "آلية توثيق ومتابعة الشكاوى")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {t(
              "howItWorks.subheading",
              "آلية عمل شفافة تضمن متابعة حقك برقم مرجعي رسمي."
            )}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stepsList.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/30"
            >
              {/* تعديل مكان الرقم بناءً على اتجاه اللغة */}
              <span
                className={`font-mono text-4xl font-black text-primary/40 absolute top-4 select-none ${
                  isRtl ? "left-5" : "right-5"
                }`}
              >
                {s.n}
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground relative z-10">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground relative z-10">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}