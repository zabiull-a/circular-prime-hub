import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — E-Waste Buyers" },
      { name: "description", content: "Industry-specific IT asset recovery and e-waste disposal solutions for IT, data centers, manufacturing, BFSI, healthcare, telecom, government, education and OEMs." },
      { property: "og:title", content: "Industries — E-Waste Buyers" },
      { property: "og:description", content: "Built for regulated enterprise environments across India." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Industry-specific solutions."
          subtitle="Compliance, security and recovery tuned to the operating constraints of your sector."
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((i) => (
                <div
                  key={i.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-forest/10 text-forest">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display mt-6 text-lg font-bold text-charcoal">{i.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
                  <p className="mt-5 text-xs font-semibold text-forest">{i.ex}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyActions />
    </PageShell>
  );
}
