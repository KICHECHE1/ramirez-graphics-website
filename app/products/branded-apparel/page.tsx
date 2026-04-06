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
const apparelProducts = [
  {
    id: "ba-1",
    name: "Reflector Jackets Printing",
    image: ph(400, 320, "Reflector+Jackets"),
    href: "/products/branded-apparel/reflector-jackets",
    badge: "Best Seller",
  },
  {
    id: "ba-2",
    name: "Branded Aprons",
    image: ph(400, 320, "Branded+Aprons"),
    href: "/products/branded-apparel/aprons",
    badge: "Popular",
  },
  {
    id: "ba-3",
    name: "Branded T-Shirts",
    image: ph(400, 320, "Branded+T-Shirts"),
    href: "/products/branded-apparel/t-shirts",
    badge: "Popular",
  },
  {
    id: "ba-4",
    name: "Branded Hoodies",
    image: ph(400, 320, "Branded+Hoodies"),
    href: "/products/branded-apparel/hoodies",
  },
  {
    id: "ba-5",
    name: "Branded Jerseys for Clubs",
    image: ph(400, 320, "Branded+Jerseys"),
    href: "/products/branded-apparel/jerseys",
    badge: "New",
  },
];

/* ─── Why choose us ─── */
const features = [
  {
    icon: Star,
    title: "Premium Print Quality",
    description:
      "We use high-quality inks and embroidery threads that stay vibrant wash after wash — your branding never fades.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most orders are completed within 2–4 business days. Rush orders available — just get in touch with your deadline.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver branded apparel across Kenya — from Muhoroni, Kenya to Mombasa, Kisumu, Nakuru, and beyond.",
  },
  {
    icon: Palette,
    title: "Free Design Support",
    description:
      "Our in-house designers will prepare your artwork and placement mockup at no extra cost before we go to print.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Fabrics",
    description:
      "We source durable, comfortable fabrics that hold up under daily wear — perfect for teams, uniforms, and events.",
  },
  {
    icon: CheckCircle2,
    title: "Bulk Order Discounts",
    description:
      "The more you order, the more you save. We offer competitive bulk pricing for schools, corporates, and NGOs.",
  },
];

const PHONE = "+254 700 000 000";
const WHATSAPP = "254706207037";

export default function BrandedApparelPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 480, "Branded+Apparel+Printing+Kenya")}
          alt="Branded apparel printing hero"
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
            <span className="text-primary-foreground font-medium">Branded Apparel</span>
          </nav>

          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Custom Clothing & Uniforms
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Branded Apparel Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Custom-branded t-shirts, hoodies, jerseys, aprons, and reflector jackets for
              businesses, schools, clubs, and events — printed and delivered across Kenya.
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
                  const isActive = cat.href === "/products/branded-apparel";
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
                    cat.href === "/products/branded-apparel"
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
                  <h2 className="text-2xl font-bold text-foreground">Our Branded Apparel</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click any product to view full details and pricing
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {apparelProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                {apparelProducts.map((product) => (
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
                  Why Choose Ramirez Ventures for Your Branded Apparel?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We combine quality materials, precision printing, and fast service to make your
                  team look its best — whether it&apos;s one piece or a thousand.
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
                  Ready to Order?
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug max-w-xl">
                  Let&apos;s Get Your Branded Apparel Printed
                </h2>
                <p className="text-primary-foreground/80 max-w-lg">
                  Fast turnaround. Bulk discounts. Delivered across Kenya. Call or WhatsApp us now
                  and we&apos;ll send you a quote within minutes.
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
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like a quote for branded apparel printing.")}`}
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
