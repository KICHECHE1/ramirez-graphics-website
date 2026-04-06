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
const businessCardProducts = [
  {
    id: "bc-1",
    name: "Spot UV Business Cards",
    image: ph(400, 320, "Spot+UV+Cards"),
    href: "/products/business-cards/spot-uv",
    badge: "Best Seller",
  },
  {
    id: "bc-2",
    name: "Bookmarks Printing",
    image: ph(400, 320, "Bookmarks"),
    href: "/products/business-cards/bookmarks",
  },
  {
    id: "bc-3",
    name: "Postcards Printing",
    image: ph(400, 320, "Postcards"),
    href: "/products/business-cards/postcards",
    badge: "Popular",
  },
  {
    id: "bc-4",
    name: "Business Cards Printing",
    image: ph(400, 320, "Business+Cards"),
    href: "/products/business-cards/standard",
    badge: "Popular",
  },
  {
    id: "bc-5",
    name: "Gift Voucher Printing",
    image: ph(400, 320, "Gift+Vouchers"),
    href: "/products/business-cards/gift-vouchers",
  },
];

/* ─── Why choose us ─── */
const features = [
  {
    icon: Star,
    title: "Premium Print Finishes",
    description:
      "From Spot UV gloss to matte lamination and embossing — we offer finishes that make your cards stand out and feel luxurious.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Standard orders are ready within 24–48 hours. Same-day printing available for urgent requests — just let us know.",
  },
  {
    icon: Truck,
    title: "Delivered Across Kenya",
    description:
      "We deliver from Muhoroni, Kenya to Mombasa, Kisumu, Nakuru, and all major towns across Kenya — reliably and on time.",
  },
  {
    icon: Palette,
    title: "Free Design Support",
    description:
      "Our in-house design team will set up your artwork for free. Send us your content and logo — we handle the rest.",
  },
  {
    icon: ShieldCheck,
    title: "High-Quality Card Stock",
    description:
      "We print on premium 350–400gsm card stock that feels substantial and professional in the hand.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Thousands of professionals, entrepreneurs, and businesses across Kenya trust Ramirez Ventures for their print needs.",
  },
];

const PHONE = "+254 700 000 000";
const WHATSAPP = "254706207037";

export default function BusinessCardsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 480, "Business+Cards+Printing+Kenya")}
          alt="Business cards printing hero"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="hover:text-primary-foreground transition-colors">Products</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary-foreground font-medium">Business Cards</span>
          </nav>

          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Business Cards & Stationery
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Business Cards Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Premium business cards, postcards, bookmarks, and gift vouchers — printed on
              high-quality card stock with stunning finishes. Make a lasting first impression.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">View Products</a>
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
                  const isActive = cat.href === "/products/business-cards";
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
                <p className="text-xs text-muted-foreground">Need a custom order?</p>
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
                    cat.href === "/products/business-cards"
                      ? "bg-primary text-primary-foreground border-primary font-semibold"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* ── Products grid ── */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click any product to view full details and pricing
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {businessCardProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                {businessCardProducts.map((product) => (
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

            {/* ── Why Choose Ramirez Ventures ── */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why Choose Ramirez Ventures for Your Business Cards?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Your business card is often the first impression you make. We make sure it&apos;s
                  one that counts.
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
                      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
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
                  Let&apos;s Print Your Business Cards Today
                </h2>
                <p className="text-primary-foreground/80 max-w-lg">
                  Fast turnaround. Premium quality. Delivered across Kenya. Call or WhatsApp us
                  now and we&apos;ll send you a quote within minutes.
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
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like a quote for business cards printing.")}`}
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
