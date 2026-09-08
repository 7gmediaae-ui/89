import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Smartphone,
  ShoppingCart,
  Building2,
  Plane,
  CreditCard,
  Wrench,
  Truck,
  Users,
  LucideIcon,
} from "lucide-react";

export interface CategoryItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const categoryRawData: { icon: LucideIcon; key: string }[] = [
  { icon: Smartphone, key: "telecom" },
  { icon: ShoppingCart, key: "shopping" },
  { icon: Building2, key: "realEstate" },
  { icon: Plane, key: "travel" },
  { icon: CreditCard, key: "banking" },
  { icon: Wrench, key: "maintenance" },
  { icon: Truck, key: "delivery" },
  { icon: Users, key: "other" },
];

export function CategoriesSection() {
  const { t } = useTranslation();

  const categories = useMemo(() => {
    return categoryRawData.map((item) => ({
      icon: item.icon,
      title: t(`categories.items.${item.key}.title`),
      desc: t(`categories.items.${item.key}.desc`),
    }));
  }, [t]);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">
            {t("categories.heading")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {t("categories.subheading")}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <article
              key={idx}
              className="group relative rounded-2xl border border-border/80 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}