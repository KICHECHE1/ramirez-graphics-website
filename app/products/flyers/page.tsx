"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  Star,
  Clock,
  Truck,
  Palette,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ─── placeholder helper ─── */
const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

/* ─── Sidebar: all 8 product categories ─── */
const productCategories = [
  { label: "Banners", href: "/products/banners" },
  { label: "Booklet Magazines", href: "/products/booklet-magazines" },
  { label: "Branded Apparel", href: "/products/branded-apparel" },
  { label: "Business Cards", href: "/products/business-cards" },
  { label: "Digital Printing", href: "/products/digital-printing" },
  { label: "Election Printing", href: "/products/election-printing" },
  { label: "Events Display", href: "/products/events-display" },
  { label: "Flyers", href: "/products/flyers" },
];

const moreCategories = [
  { label: "Graphic Design", href: "/products/graphic-design" },
  { label: "Mug Printing & Branded Drinkware", href: "/products/mug-printing" },
  { label: "Packaging", href: "/products/packaging" },
  { label: "Photo Printing and Framing", href: "/products/photo-printing" },
  { label: "Posters", href: "/products/posters" },
  { label: "Promotional Items", href: "/products/promotional-items" },
  { label: "Signages", href: "/products/signages" },
  { label: "Stationary", href: "/products/stationary" },
  { label: "Stickers", href: "/products/stickers" },
  { label: "T-shirts", href: "/products/t-shirts" },
];

/* ─── Products ─── */
const flyerProducts = [
  {
    id: "fl-1",
    name: "Flyers Printing",
    image: ph(400, 320, "Flyers+Printing"),
    href: "/products/flyers/flyers-printing",
    badge: "Most Popular",
  },
  {
    id: "fl-2",
    name: "Brochures Printing",
    image: ph(400, 320, "Brochures+Printing"),
    href: "/products/flyers/brochures-printing",
    badge: "Best Seller",
  },
];

/* ─── Product descriptions ─── */
const flyerDescriptions = [
  {
    name: "Flyers Printing",
    href: "/products/flyers/flyers-printing",
    description:
      "Our flyers are printed in full colour on premium paper stocks — available in A6, A5, and A4 sizes to suit every campaign. Whether you need handouts for a product launch, event invitations, promotional offers, or business announcements, our flyers deliver vivid, eye-catching results every time. We offer single and double-sided printing on gloss, matte, or silk-coated paper in weights from 100gsm to 170gsm. With fast turnaround times, bulk discounts, and free design assistance, Ramirez Ventures is your go-to flyer printer in Kenya.",
    sizes: [
      {
        label: "A6 Flyers",
        dimensions: "148 × 105 mm",
        detail:
          "A6 is the most compact and cost-effective flyer size — roughly the size of a postcard at 148 × 105 mm. The small footprint makes them extremely easy to hand out in high-traffic locations such as shopping malls, matatus, event entrances, and street activations. They are ideal for promotional vouchers, discount offers, event invitations, and short announcements where a punchy message is all you need. Despite the smaller canvas, our A6 flyers are printed in vibrant full colour on quality stock so your brand always looks sharp.",
      },
      {
        label: "A5 Flyers",
        dimensions: "210 × 148 mm",
        detail:
          "At 210 × 148 mm, A5 is our most popular and versatile flyer size — exactly half an A4 sheet. It gives you enough space to include your logo, headline, key message, contact details, and supporting imagery without overwhelming the reader. A5 flyers are widely used for restaurant menus, real estate listings, church programmes, product launches, and business promotions. They work equally well as street handouts, counter-top leaflets, or inserts in packaging and mailers. Available on a range of paper weights and finishes to suit any budget.",
      },
      {
        label: "A4 Flyers",
        dimensions: "297 × 210 mm",
        detail:
          "A4 flyers at 297 × 210 mm offer the largest canvas in our standard flyer range, giving maximum room for detailed content, large imagery, and impactful design. They are the format of choice for corporate communications, seminar programmes, exhibition handouts, event schedules, and any situation where you need to convey rich information on a single sheet. Our A4 flyers are printed on high-quality gloss or matte paper and are available in single or double-sided print — a powerful and professional tool for any marketing campaign.",
      },
    ],
  },
  {
    name: "Brochures Printing",
    href: "/products/flyers/brochures-printing",
    description:
      "A well-designed brochure is one of the most effective tools for communicating your brand story, products, and services in a compact and professional format. We print bi-fold and tri-fold brochures in A4 and A5 sizes on high-quality gloss or matte paper, with sharp full-colour imagery and text. Ideal for corporate profiles, product catalogues, service menus, trade show handouts, and real estate listings. Our in-house design team can create or adapt your brochure artwork — just send your content and brand assets and we'll handle the rest.",
  },
];

/* ─── Why choose us ─── */
const features = [
  {
    icon: Star,
    title: "Vibrant Full-Colour Printing",
    description:
      "We use premium CMYK printing technology to produce flyers with vivid, true-to-life colours that make your designs leap off the page.",
  },
  {
    icon: Clock,
    title: "Same-Day & Express Printing",
    description:
      "Tight deadline? No problem. We offer same-day and next-day flyer printing for standard sizes across all paper stocks.",
  },
  {
    icon: Truck,
    title: "Delivered Across Kenya",
    description:
      "We deliver to Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and all major towns — fast, tracked, and reliable.",
  },
  {
    icon: Palette,
    title: "Free Design Assistance",
    description:
      "No designer? No problem. Our creative team will design your flyer at no extra cost — just send your logo, copy, and brand colours.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Paper Stocks",
    description:
      "Choose from gloss, matte, or silk-coated paper in 100gsm, 130gsm, or 170gsm weights to match your budget and printing goals.",
  },
  {
    icon: CheckCircle2,
    title: "Competitive Bulk Pricing",
    description:
      "The more you print, the more you save. We offer significant discounts on bulk flyer orders — perfect for campaigns and events.",
  },
];

const PHONE = "+254 700 000 000";
const WHATSAPP = "254700000000";

export default function FlyersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 480, "Flyers+Printing+Kenya")}
          alt="Flyer printing hero"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="hover:text-primary-foreground transition-colors">
              Products
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary-foreground font-medium">Flyers</span>
          </nav>

          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Flyer Printing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Flyer Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              High-quality A6, A5, and A4 flyers printed in full colour on premium paper — fast
              turnaround, bulk discounts, and delivery across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                asChild
              >
                <a href="#products">View Sizes</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-primary-foreground hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 lg:items-start">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-24">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                Product Categories
              </h2>
              <nav className="flex flex-col gap-0.5">
                {productCategories.map((cat) => {
                  const isActive = cat.href === "/products/flyers";
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <ChevronRight className="size-3.5 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <Separator className="my-4" />

              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 px-2">
                More Categories
              </h2>
              <nav className="flex flex-col gap-0.5">
                {moreCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    <span>{cat.label}</span>
                    <ChevronRight className="size-3.5 opacity-50" />
                  </Link>
                ))}
              </nav>

              <Separator className="my-4" />
              <div className="px-2 flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Need flyers printed fast?</p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* ── Body ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-14">

            {/* Mobile category pills */}
            <div className="flex gap-2 flex-wrap lg:hidden">
              {productCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    cat.href === "/products/flyers"
                      ? "bg-primary text-primary-foreground border-primary font-semibold"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* ── Products display grid ── */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click any product to view full pricing and options
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {flyerProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {flyerProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2">
                          <Badge className="text-xs shadow">{product.badge}</Badge>
                        </div>
                      )}
                    </div>
                    <div className="px-4 py-3">
                      <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                        {product.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Product descriptions ── */}
            <section>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">About Our Products</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Everything you need to know about our printing options
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {flyerDescriptions.map((item, index) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-border bg-card p-6 flex gap-5"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-foreground mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>

                      {/* A6 / A5 / A4 sub-sections */}
                      {"sizes" in item && item.sizes && (
                        <div className="mt-5 flex flex-col gap-3">
                          {item.sizes.map((s) => (
                            <div
                              key={s.label}
                              className="rounded-lg border border-border/70 bg-muted/30 px-4 py-3"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="font-semibold text-sm text-foreground">
                                  {s.label}
                                </span>
                                <span className="rounded border border-border px-1.5 py-0.5 text-xs font-mono text-muted-foreground">
                                  {s.dimensions}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {s.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <Link
                        href={item.href}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        View details <ChevronRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Why Choose Ramirez Ventures ── */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why Choose Ramirez Ventures for Flyer Printing?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  From small runs to large campaigns, we deliver consistent quality, fast
                  turnaround, and competitive pricing on every flyer order.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-xl bg-muted/40 p-5 border border-border/60"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CTA section ── */}
            <section className="rounded-2xl overflow-hidden border border-border bg-primary">
              <div className="p-8 sm:p-10 text-primary-foreground text-center flex flex-col items-center gap-5">
                <Badge className="bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
                  Ready to Print?
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug max-w-xl">
                  Print Your Flyers Today — Fast, Affordable &amp; Delivered
                </h2>
                <p className="text-primary-foreground/80 max-w-lg">
                  Call or WhatsApp us now for a quick quote. Bulk orders and same-day printing
                  available for A6, A5, and A4 flyers across Kenya.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg font-semibold"
                    asChild
                  >
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                      <Phone className="size-4" />
                      {PHONE}
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-primary-foreground hover:bg-white/15 gap-2"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                        "Hi, I'd like a quote for flyer printing."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-primary-foreground hover:bg-white/15"
                    asChild
                  >
                    <Link href="/contact">Get a Quote Online</Link>
                  </Button>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
