import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.38_0.07_160_/_0.35),transparent_60%)]" />
      <div className="container-px mx-auto max-w-5xl text-center">
        <span className="eyebrow text-forest">{eyebrow}</span>
        <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-10 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
