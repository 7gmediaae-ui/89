import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  date: string;
  verified: boolean;
}

const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    name: "محمد الشامسي",
    location: "دبي",
    comment: "تم حل الشكوى التجارية مع الشركة خلال أقل من أسبوع وتوثيق التسوية بشكل رسمي. خدمة احترافية وسريعة جداً.",
    rating: 5,
    date: "منذ 3 أيام",
    verified: true,
  },
  {
    id: 2,
    name: "سارة العلي",
    location: "أبوظبي",
    comment: "منصة ممتازة وسلسة، تضمن حق المستهلك والمنشأة بشفافية عالية. تم متابعة الطلب حتى استرجاع المستحقات.",
    rating: 5,
    date: "منذ أسبوع",
    verified: true,
  },
  {
    id: 3,
    name: "أحمد القاسمي",
    location: "الشارقة",
    comment: "سهولة في تقديم الشكوى وتتبع حالتها فورياً. أشكر القائمين على هذا العمل الاحترافي المتميز.",
    rating: 5,
    date: "منذ أسبوعين",
    verified: true,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-background)] relative overflow-hidden">
      <div className="container-page">
        {/* العنونة الهيدر */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-muted)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-primary)] mb-4">
            <Star className="w-3.5 h-3.5 fill-current text-[var(--color-primary)]" />
            <span>تقييمات المتعاملين</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] tracking-tight mb-4">
            آراء وتجارب المستهلكين
          </h2>
          
          <p className="text-base md:text-lg text-[var(--color-muted-foreground)] leading-relaxed">
            تجارب حقيقية لمستهلكين اعتمدوا على المنصة لتوثيق وتسوية شكاويهم التجارية بكل شفافية.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-[var(--color-surface)] p-6 md:p-8 rounded-[var(--radius)] border border-[var(--color-border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* أيقونة اقتباس خلفية للتزيين */}
              <Quote className="absolute top-6 left-6 w-10 h-10 text-[var(--color-muted)] opacity-50 group-hover:text-[var(--color-primary)] group-hover:opacity-10 transition-all duration-300 pointer-events-none" />

              <div>
                {/* النجوم والتاريخ */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[var(--color-primary)]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[var(--color-muted-foreground)]">
                    {review.date}
                  </span>
                </div>

                {/* نص التقييم */}
                <p className="text-[var(--color-foreground)] text-sm md:text-base leading-relaxed mb-6 font-normal">
                  "{review.comment}"
                </p>
              </div>

              {/* تفاصيل المقيّم */}
              <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)] text-sm md:text-base">
                    {review.name}
                  </h3>
                  <span className="text-xs text-[var(--color-muted-foreground)]">
                    {review.location}
                  </span>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[var(--color-primary)] text-xs font-medium bg-[var(--color-muted)] px-2.5 py-1 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>مُوثّق</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}