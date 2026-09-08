import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { buildHead, PageHeader } from "@/components/site/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

export const Route = createFileRoute("/faq")({
  head: () =>
    buildHead({
      title: "الأسئلة الشائعة | منصة شكاوى المستهلك",
      description:
        "إجابات مفصلة وشاملة عن أكثر الأسئلة شيوعًا حول منصة شكاوى المستهلك: كيفية تقديم الشكاوى، شروط الخدمة، والخصوصية.",
      path: "/faq",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "الأسئلة الشائعة", path: "/faq" },
      ],
    }),
  component: FaqPage,
});

function FaqPage() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n?.dir ? i18n.dir() === "rtl" : true;

  // جلب مصفوفة الأسئلة من ملف الترجمة
  const faqsData = (t("faq.items", { returnObjects: true }) as FaqItem[]) || [];
  const faqsList: FaqItem[] = Array.isArray(faqsData) ? faqsData : [];

  return (
    <>
      <PageHeader
        eyebrow={t("faq.eyebrow", "الأسئلة الشائعة")}
        title={t("faq.title", "إجابات لأكثر أسئلتكم شيوعًا")}
        description={t(
          "faq.description",
          "جمعنا لكم أهم التساؤلات التي تصلنا حول عمل المنصة والخدمات التي نقدمها."
        )}
      />
      <section className="container-page py-14">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqsList.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger
                  className={`text-base font-semibold hover:no-underline ${
                    isRtl ? "text-right" : "text-left"
                  }`}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}