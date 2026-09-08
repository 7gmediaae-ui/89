import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Clock, Timer, HelpCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildHead, PageHeader } from "@/components/site/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "تواصل معنا | منصة شكاوى المستهلك",
      description:
        "تواصل مع فريق الدعم الفني لـ منصة شكاوى المستهلك المستقلة عبر البريد الإلكتروني. نرد على استفساراتكم وملاحظاتكم خلال 24 ساعة عمل.",
      path: "/contact",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "تواصل معنا", path: "/contact" },
      ],
    }),
  component: ContactPage,
});

const CONTACT_EMAIL = "moetshakawi-uae@gmail.com";

function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader
        eyebrow={t("contact.eyebrow", "تواصل معنا")}
        title={t("contact.title", "نحن هنا للإجابة على استفساراتك")}
        description={t(
          "contact.description",
          "سواء كنت بحاجة إلى مساعدة في تقديم شكوى، أو لديك سؤال عام، يسعدنا التواصل معك عبر البريد الإلكتروني."
        )}
      />

      <section className="container-page grid gap-4 py-14 md:grid-cols-2">
        <InfoCard icon={Mail} title={t("contact.emailTitle", "البريد الإلكتروني")}>
          <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="text-primary underline">
            {CONTACT_EMAIL}
          </a>
        </InfoCard>

        <InfoCard icon={Clock} title={t("contact.workingHoursTitle", "ساعات العمل")}>
          {t("contact.workingDays", "من الأحد إلى الخميس")}
          <br />
          {t("contact.workingTime", "9:00 صباحًا – 6:00 مساءً (بتوقيت الإمارات)")}
        </InfoCard>

        <InfoCard icon={Timer} title={t("contact.responseTimeTitle", "زمن الرد المتوقع")}>
          {t("contact.responseTimeDesc", "خلال 24 ساعة عمل من استلام الرسالة.")}
        </InfoCard>

        <InfoCard icon={HelpCircle} title={t("contact.faqTitle", "الأسئلة الشائعة")}>
          {t("contact.faqText", "هل سؤالك عام؟ تفقد ")}{" "}
          <Link to="/faq" className="text-primary underline">
            {t("contact.faqLink", "صفحة الأسئلة الشائعة")}
          </Link>
          .
        </InfoCard>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Mail;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-primary">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
      <div className="mt-3 text-sm leading-7 text-muted-foreground">{children}</div>
    </div>
  );
}