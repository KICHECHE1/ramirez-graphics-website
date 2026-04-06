"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
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

const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

const THIS_HREF = "/products/posters";

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

const products = [
  { id: "1", name: "A4 Poster Printing", image: ph(400, 320, "A4+Poster") },
  { id: "2", name: "A3 Poster Printing", image: ph(400, 320, "A3+Poster") },
  { id: "3", name: "A2 Poster Printing", image: ph(400, 320, "A2+Poster") },
  { id: "4", name: "A1 Poster Printing", image: ph(400, 320, "A1+Poster") },
  { id: "5", name: "A0 Poster Printing", image: ph(400, 320, "A0+Poster") },
  { id: "6", name: "Event Posters", image: ph(400, 320, "Event+Posters") },
  { id: "7", name: "Outdoor Vinyl Posters", image: ph(400, 320, "Outdoor+Vinyl+Poster") },
  { id: "8", name: "Church & School Posters", image: ph(400, 320, "Church+School+Poster") },
];

const productDescriptions = [
  {
    name: "A4 Poster Printing",
    description:
      "The most affordable poster size — ideal for indoor noticeboards, counter displays, waiting rooms, and classroom walls. Printed on gloss or matte coated stock at 297 × 210 mm.",
  },
  {
    name: "A3 Poster Printing",
    description:
      "A step up in impact — A3 posters (420 × 297 mm) are perfect for shop windows, event programmes, sale announcements, and estate agents. Highly legible from across a room.",
  },
  {
    name: "A2 Poster Printing",
    description:
      "A2 (594 × 420 mm) is a popular choice for large indoor displays — cinema-style movie posters, exhibition graphics, product announcements, and retail promotional collateral.",
  },
  {
    name: "A1 Poster Printing",
    description:
      "A1 posters (841 × 594 mm) demand attention. Commonly used for event promotions, fundraising campaigns, political rallies, and window displays in high-footfall locations.",
  },
  {
    name: "A0 Poster Printing",
    description:
      "Our largest standard poster format at 1189 × 841 mm — ideal for exhibition stands, trade show displays, wayfinding graphics, and large outdoor advertising frames.",
  },
  {
    name: "Event Posters",
    description:
      "Purpose-designed event posters for concerts, fundraisers, galas, church programs, conferences, and school events. We handle the design, print, and delivery — all under one roof.",
  },
  {
    name: "Outdoor Vinyl Posters",
    description:
      "UV-resistant, weatherproof vinyl posters for outdoor use — fences, hoardings, construction sites, market stalls, roadside advertising frames, and community notice boards.",
  },
  {
    name: "Church & School Posters",
    description:
      "Affordable, high-quantity poster printing for churches, schools, and NGOs — announcements, motivational displays, calendar events, youth programs, and service schedules.",
  },
];

const features = [
  {
    icon: Star,
    title: "Vibrant, High-Resolution Output",
    description:
      "Our wide-format printers deliver sharp, vivid posters at up to 1440 dpi — colours that pop from across the room and text that is crisp and readable at every size.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most poster orders are printed and ready for collection same-day for A4–A2 sizes, and next-day for A1 and A0. Express service available at request.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver across Kenya — from Muhoroni to Nairobi, Mombasa, Kisumu, Nakuru, and beyond. Free local delivery for orders within Muhoroni.",
  },
  {
    icon: Palette,
    title: "Free In-House Design",
    description:
      "No artwork? No problem. Our designers will create your poster from your logo and copy — print-ready and optimised for maximum impact at the size you need.",
  },
  {
    icon: ShieldCheck,
    title: "Multiple Paper Options",
    description:
      "Choose from 130 gsm coated gloss, 170 gsm premium matte, or weatherproof outdoor vinyl — we match the substrate to your installation environment.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Businesses, event organisers, schools, churches, NGOs, and government institutions across Kenya trust Ramirez Ventures for all their poster printing needs.",
  },
];

export default function PostersPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "Poster+Printing+Kenya")}
          alt="Poster printing Kenya"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-primary-foreground/70 flex-wrap">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="hover:text-primary-foreground transition-colors">Products</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary-foreground font-medium">Posters</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Large-Format Print
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Poster Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Vibrant, full-colour posters in A4 to A0 — for events, businesses, churches,
              schools, and elections. Same-day available, free design, delivered across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">Shop Posters</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-primary-foreground hover:bg-white/10" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 lg:items-start">

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0 sticky top-24">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 px-2">
                Product Categories
              </h2>
              <nav className="flex flex-col gap-0.5">
                {productCategories.map((cat) => (
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
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 px-2">
                More Categories
              </h2>
              <nav className="flex flex-col gap-0.5">
                {moreCategories.map((cat) => {
                  const isActive = cat.href === THIS_HREF;
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
              <div className="px-2">
                <p className="text-xs text-muted-foreground mb-3">Need help choosing?</p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* Body */}
          <div className="flex-1 min-w-0 flex flex-col gap-16">

            {/* Mobile pills */}
            <div className="flex gap-2 flex-wrap lg:hidden">
              {allCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    cat.href === THIS_HREF
                      ? "bg-primary text-primary-foreground border-primary font-semibold"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* Overview */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">About Poster Printing</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Professional Poster Printing for Every Purpose
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Posters remain one of the most powerful, cost-effective tools for capturing
                  attention and communicating your message in public spaces. At Ramirez Ventures
                  we print professional full-colour posters from compact A4 right through to
                  room-commanding A0 format — for businesses, events, elections, schools, churches,
                  NGOs, and government institutions across Kenya.
                </p>
                <p>
                  Whether you need a striking event announcement, a retail promotional display,
                  a motivational school corridor piece, or a high-volume outdoor campaign run,
                  we deliver sharp, accurate, lasting results. Our wide-format printers produce
                  output up to 1440 dpi on 130 gsm coated gloss, 170 gsm premium matte, or
                  weather-resistant outdoor vinyl substrate — we match the material to your
                  environment and budget.
                </p>
                <p>
                  No design file? No problem. Our in-house creative team will design your poster
                  from your logo, copy, and brand assets at no extra charge. Send us your
                  requirements via WhatsApp and we will have a proof ready for your approval
                  within hours.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Poster Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click any product to enquire — we will confirm pricing and availability
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {products.length} Products
                </Badge>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-foreground text-sm leading-snug">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Product descriptions */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">What We Offer</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Poster Products in Detail
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {productDescriptions.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-3 rounded-xl bg-muted/40 p-4 border border-border/60"
                  >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                      <CheckCircle2 className="size-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Ramirez */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why Choose Ramirez Ventures for Poster Printing?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Speed, quality, and value — we deliver posters that make your message impossible
                  to ignore, every single time.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex gap-4 rounded-xl bg-muted/40 p-5 border border-border/60"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-foreground">Ready to order your posters?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a free quote — we respond within the hour.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button asChild size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
                  <Button asChild size="lg" variant="outline"><a href="#products">Browse Products</a></Button>
                </div>
              </div>
            </section>

            {/* Browse Other Categories */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Browse Other Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {allCategories
                  .filter((c) => c.href !== THIS_HREF)
                  .map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors shadow-sm"
                    >
                      <span>{cat.label}</span>
                      <ChevronRight className="size-4 shrink-0 opacity-50" />
                    </Link>
                  ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
