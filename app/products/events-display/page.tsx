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
const eventsProducts = [
  {
    id: "ed-1",
    name: "Button Badges Printing",
    image: ph(400, 320, "Button+Badges"),
    href: "/products/events-display/button-badges",
    badge: "Popular",
    description:
      "Custom button badges are a staple at corporate events, expos, and branded activations. We print full-colour badges in a range of sizes — from 25mm lapel pins to 75mm promotional badges — on durable metal backs with scratch-resistant fronts. Ideal for name badges, branding, fundraisers, and giveaways.",
  },
  {
    id: "ed-2",
    name: "Table Rollup Printing",
    image: ph(400, 320, "Table+Rollup"),
    href: "/products/events-display/table-rollup",
    badge: "Best Seller",
    description:
      "Table rollup banners are compact, portable display solutions that sit neatly on tables and counters at exhibitions, conferences, and product launches. Printed on premium vinyl with a retractable base for easy setup and storage, they offer maximum visibility in minimum space.",
  },
  {
    id: "ed-3",
    name: "Adjustable Backdrop Banner",
    image: ph(400, 320, "Backdrop+Banner"),
    href: "/products/events-display/backdrop-banner",
    badge: "Popular",
    description:
      "Our adjustable backdrop banners create a professional branded backdrop for press conferences, photo booths, award ceremonies, and corporate events. Available in step-and-repeat, solid, and custom layouts — printed on wrinkle-free fabric or vinyl with an adjustable aluminium frame.",
  },
  {
    id: "ed-4",
    name: "Table Cloth Printing",
    image: ph(400, 320, "Table+Cloth"),
    href: "/products/events-display/table-cloth",
    description:
      "Branded table cloths transform an ordinary display table into a professional brand experience. Our custom-printed table covers are made from durable polyester fabric, available in fitted, draped, or stretch styles. Perfect for trade shows, exhibitions, buffet tables, and outdoor events.",
  },
  {
    id: "ed-5",
    name: "Kitenge Notebooks",
    image: ph(400, 320, "Kitenge+Notebooks"),
    href: "/products/events-display/kitenge-notebooks",
    badge: "New",
    description:
      "Our Kitenge-covered notebooks blend African heritage with practical event branding. Each notebook features a distinctive Kitenge fabric cover with your logo or custom design — making them a memorable and culturally rich corporate gift or event giveaway that delegates will actually keep and use.",
  },
];

/* ─── Why choose us ─── */
const features = [
  {
    icon: Star,
    title: "Stunning Print Quality",
    description:
      "We use high-resolution wide-format printers to produce vivid, sharp event displays that command attention from across the room.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Event deadlines wait for no one. Most orders are ready within 24–48 hours — same-day printing available for standard sizes.",
  },
  {
    icon: Truck,
    title: "Delivered Across Kenya",
    description:
      "We deliver event display materials from Muhoroni, Kenya to Mombasa, Kisumu, Nakuru, and all major towns. On time, every time.",
  },
  {
    icon: Palette,
    title: "Free Design Support",
    description:
      "Our in-house design team will create or adapt your artwork for each display format at no extra cost — just send your brand assets.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Materials",
    description:
      "Every display is produced with materials chosen for longevity — whether it's a one-day pop-up or a multi-day conference stand.",
  },
  {
    icon: CheckCircle2,
    title: "Full Event Packages",
    description:
      "Need everything for your event? We can bundle backdrops, rollups, table cloths, badges, and notebooks into one seamless order.",
  },
];

const PHONE = "+254 700 000 000";
const WHATSAPP = "254706207037";

export default function EventsDisplayPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 480, "Events+Display+Printing+Kenya")}
          alt="Events display printing hero"
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
            <span className="text-primary-foreground font-medium">Events Display</span>
          </nav>

          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Event Branding & Display
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Events Display Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Professional event branding solutions — backdrops, rollup banners, table cloths,
              button badges, and Kitenge notebooks — printed and delivered across Kenya.
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
                  const isActive = cat.href === "/products/events-display";
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
                <p className="text-xs text-muted-foreground">Planning an event?</p>
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
                    cat.href === "/products/events-display"
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
                    Click any product to view full details and pricing
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {eventsProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                {eventsProducts.map((product) => (
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
                <h2 className="text-2xl font-bold text-foreground">About Our Event Display Products</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Everything you need to know about each product
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {eventsProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="rounded-xl border border-border bg-card p-6 flex gap-5"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      <Link
                        href={product.href}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
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
                  Why Choose Ramirez Ventures for Your Events Display?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  From intimate corporate gatherings to large-scale expos, we have the print
                  solutions to make your event look polished and professional.
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
                  Let&apos;s Make Your Next Event Stand Out
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
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like a quote for events display printing.")}`}
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
