import { Link } from "@tanstack/react-router";
import { HelpCircle, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface FaqItem {
  id?: string;
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

// مصفوفة الأسئلة الاحتياطية
export const faqPreview: FaqItem[] = [
  {
    id: "q1",
    question: "كيف تعمل منصة شكاوى المستهلك لتقديم الشكاوى؟",
    answer: "تتيح لك المنصة تقديم بيانات شكواك والوثائق الداعمة بسهولة. يقوم فريقنا بمراجعتها، توثيقها برقم مرجعي، ثم مخاطبة الشركة المعنية لمتابعة التوصل إلى حل إيجابي.",
  },
  {
    id: "q2",
    question: "هل خدمة تقديم الشكوى مجانية للمستهلكين في الإمارات؟",
    answer: "نعم، خدمة توثيق وتقديم ومتابعة الشكاوى مجانية بالكامل لجميع المستهلكين والمتعاملين داخل دولة الإمارات العربية المتحدة.",
  },
  {
    id: "q3",
    question: "ما الدور الذي تقوم به المنصة لحل المشكلة مع الشركة؟",
    answer: "نقوم بتوثيق الشكوى قانونياً، إصدار الرقم المرجعي، ومخاطبة إدارة المنشأة التجارية للوصول إلى تسوية عادلة تحمي حقوق المستهلك وفق الأنظمة المتبعة.",
  },
];

export function FaqSection() {
  const { t, i18n } = useTranslation();

  // جلب العناصر مباشرة من مفتاح items بملف الترجمة المفعل حالياً
  const rawItems = t("items", { returnObjects: true });
  
  // التأكد من جلب القائمة من الترجمة أولاً، وإذا لم توجد نعتمد على faqPreview
  const faqList: FaqItem[] = Array.isArray(rawItems) ? rawItems : faqPreview;

  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  return (
    <section className="border-t border-border bg-secondary/20 py-20 md:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-3">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase">
            <HelpCircle className="h-4 w-4 shrink-0" />
            <span>{t("badge", "الأسئلة الشائعة")}</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            {t("title", "استفسارات تتكرر باستمرار")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t("description", "إليك إجابات لأبرز الأسئلة المتعلقة بتقديم وتوثيق الشكاوى التجارية للمستهلكين.")}
          </p>
          <Link
            to="/faq"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80"
          >
            <span>{t("view_all", "عرض جميع الأسئلة")}</span>
            <ChevronLeft
              className={`h-4 w-4 shrink-0 transition-transform ${
                isRtl
                  ? "group-hover:-translate-x-1"
                  : "rotate-180 group-hover:translate-x-1"
              }`}
              aria-hidden="true"
            />
          </Link>
        </div>

        <dl className="space-y-4 lg:col-span-2">
          {faqList.map((f, idx) => (
            <div
              key={f.id || idx}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs"
            >
              {/* هنا يتم فحص مسمى question أو q وقراءتهما أيهما توفر */}
              <dt className="text-base font-bold text-foreground">
                {f.question || f.q}
              </dt>
              {/* هنا يتم فحص مسمى answer أو a وقراءتهما أيهما توفر */}
              <dd className="mt-2 text-xs leading-6 text-muted-foreground">
                {f.answer || f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}