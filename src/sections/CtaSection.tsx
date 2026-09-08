import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

interface CtaSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function CtaSection({ onPrimaryClick }: CtaSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center text-primary-foreground shadow-xl md:p-16">
          <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px]" />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl">
            {t("ctaSection.heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-primary-foreground/90 leading-relaxed">
            {t("ctaSection.subheading")}
          </p>
          <div className="mt-8">
            <a
              href="#complaint-form"
              onClick={onPrimaryClick}
              className="inline-flex items-center gap-2.5 rounded-xl bg-background px-8 py-3.5 text-base font-bold text-primary shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              {t("ctaSection.button")}
              <ArrowLeft className="h-4 w-4 shrink-0 rtl:rotate-0 ltr:rotate-180" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}