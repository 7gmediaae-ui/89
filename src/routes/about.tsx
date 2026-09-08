import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, CheckCircle2, XCircle, LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildHead, PageHeader } from "@/components/site/seo";
import { IndependenceNotice } from "@/components/site/IndependenceNotice";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "من نحن | منصة شكاوى المستهلك - توثيق شكاوى المستهلكين في الإمارات",
      description:
        "تعرّف على منصة شكاوى المستهلك - المنصة المستقلة لتوثيق شكاوى المستهلكين في الإمارات: رؤيتنا ومهمتنا وحمايتهم وتوفير مساحة آمنة لإيصال صوتهم.",
      path: "/about",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "من نحن", path: "/about" },
      ],
    }),
  component: AboutPage,
});

// مصفوفة أيقونات القيم لتتناسق مع البيانات القادمة من الترجمة
const valueIcons: LucideIcon[] = [Target, Eye, Heart];

function AboutPage() {
  const { t } = useTranslation();

  // جلب البيانات الديناميكية المترجمة
  const valuesData = (t("about.values", { returnObjects: true }) as Array<{ title: string; desc: string }>) || [];
  const storyStepsData = (t("about.storySteps", { returnObjects: true }) as string[]) || [];
  const provideData = (t("about.provide", { returnObjects: true }) as string[]) || [];
  const dontProvideData = (t("about.dontProvide", { returnObjects: true }) as string[]) || [];

  return (
    <>
      <PageHeader
        eyebrow={t("about.eyebrow", "من نحن")}
        title={t("about.title", "منصة مستقلة لخدمة المستهلك في الإمارات")}
        description={t(
          "about.description",
          "نساعد المستهلكين على توثيق شكواهم تجاه الشركات الخاصة، بأسلوب احترافي وسهل، بعيدًا عن التعقيد."
        )}
      />

      <section className="container-page py-14">
        <IndependenceNotice />
      </section>

      {/* قسم المهمة والرؤية والقيم */}
      <section className="container-page grid gap-6 pb-16 md:grid-cols-3">
        {Array.isArray(valuesData) &&
          valuesData.map((v, idx) => {
            const IconComponent = valueIcons[idx] || Target;
            return (
              <article key={v.title || idx} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-primary">
                  <IconComponent className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-4 text-xl font-bold">{v.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{v.desc}</p>
              </article>
            );
          })}
      </section>

      {/* قسم قصتنا وكيف تراجع الشكاوى */}
      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="container-page prose prose-neutral max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">{t("about.storyTitle", "قصتنا")}</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            {t(
              "about.storyP1",
              "بدأت المنصة كمبادرة خاصة يقودها فريق يؤمن بأن المستهلك يستحق قناة واضحة لتوثيق تجربته مع الشركات الخاصة. لاحظنا أن كثيرًا من الشكاوى تضيع بين رسائل البريد الإلكتروني ومكالمات مراكز الاتصال، فقررنا بناء منصة تُبقي الشكوى موثقة من لحظة تقديمها وحتى الرد عليها."
            )}
          </p>
          <p className="mt-4 leading-8 text-muted-foreground">
            {t(
              "about.storyP2",
              "نحن كيان خاص مستقل، ولا نمثّل أي جهة حكومية. نعمل ضمن إطار الشفافية والالتزام بحقوق المستخدم في الخصوصية وحماية البيانات."
            )}
          </p>

          <h3 className="mt-10 text-xl font-bold">{t("about.howTitle", "كيف تُراجَع الشكاوى")}</h3>
          <ol className="mt-4 list-decimal space-y-2 pr-5 text-muted-foreground">
            {Array.isArray(storyStepsData) &&
              storyStepsData.map((step, idx) => <li key={idx}>{step}</li>)}
          </ol>
        </div>
      </section>

      {/* قسم ما نقدمه وما لا نقدمه */}
      <section className="container-page grid gap-6 py-16 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-xl font-bold">{t("about.provideTitle", "ما نقدّمه")}</h3>
          <ul className="mt-4 space-y-3">
            {Array.isArray(provideData) &&
              provideData.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h3 className="text-xl font-bold">{t("about.dontProvideTitle", "ما لا نقدّمه")}</h3>
          <ul className="mt-4 space-y-3">
            {Array.isArray(dontProvideData) &&
              dontProvideData.map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-7 text-foreground">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden />
                  <span>{text}</span>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}