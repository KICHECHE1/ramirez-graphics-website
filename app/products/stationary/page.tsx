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

const THIS_HREF = "/products/stationary";

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
  { id: "1", name: "Branded Letterheads", image: ph(400, 320, "Branded+Letterheads") },
  { id: "2", name: "Branded Envelopes", image: ph(400, 320, "Branded+Envelopes") },
  { id: "3", name: "Branded Notepads", image: ph(400, 320, "Branded+Notepads") },
  { id: "4", name: "Invoice & Receipt Books", image: ph(400, 320, "Invoice+Receipt+Books") },
  { id: "5", name: "Compliment Slips", image: ph(400, 320, "Compliment+Slips") },
  { id: "6", name: "Presentation Folders", image: ph(400, 320, "Presentation+Folders") },
  { id: "7", name: "Branded Notebooks", image: ph(400, 320, "Branded+Notebooks") },
  { id: "8", name: "Certificates & Awards", image: ph(400, 320, "Certificates+Awards") },
];

const productDescriptions = [
  {
    name: "Branded Letterheads",
    description:
      "Professional A4 letterheads featuring your logo, company details, and brand colours, printed on 100 gsm premium bond paper. A branded letterhead signals credibility and attention to detail in every piece of correspondence.",
  },
  {
    name: "Branded Envelopes",
    description:
      "DL, C5, and C4 envelopes printed with your return address, logo, and brand style, matched to your letterheads for a fully coordinated mailing suite that builds brand recognition with every delivery.",
  },
  {
    name: "Branded Notepads",
    description:
      "A5 and A4 notepads with your logo and corporate headings on every sheet, glued and backed for a professional feel, ideal for client meetings, training programmes, and desk use throughout your office.",
  },
  {
    name: "Invoice & Receipt Books",
    description:
      "Custom NCR (carbonless) invoice and receipt booklets in duplicate or triplicate, pre-numbered and branded with your company details. Available in A4 or A5 format with soft or hard covers.",
  },
  {
    name: "Compliment Slips",
    description:
      "One-third A4 compliment slips branded to match your letterheads, the perfect accompaniment to gifts, samples, product deliveries, and client correspondence. A small touch that leaves a lasting impression.",
  },
  {
    name: "Presentation Folders",
    description:
      "Printed A4 presentation folders with business card slots, document pockets, and branded covers, ideal for client proposals, boardroom meetings, trade show handouts, and academic submissions.",
  },
  {
    name: "Branded Notebooks",
    description:
      "Softcover and hardcover branded notebooks with your logo on the cover and branded pages, popular as corporate gifts, training materials, conference packs, and employee onboarding kits.",
  },
  {
    name: "Certificates & Awards",
    description:
      "Full-colour custom certificates for training programmes, academic awards, employee recognition, sports events, and church milestones, on 200 gsm premium stock with optional gold or silver foil borders.",
  },
];

const features = [
  {
    icon: Star,
    title: "Consistent Brand Identity",
    description:
      "Every stationery item is designed and printed to the same brand standard, ensuring your letterheads, envelopes, and notepads all present a cohesive, professional identity.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most stationery orders are ready within 2 to 3 business days. Rush orders are available for urgent requirements, contact us to confirm lead times.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver stationery orders across Kenya, from Muhoroni, Kenya to Mombasa, Kisumu, and beyond. Free local delivery for orders within Muhoroni.",
  },
  {
    icon: Palette,
    title: "Free Design Service",
    description:
      "Our in-house team designs your full stationery suite from your logo and brand guidelines, print-ready files supplied for every item, matched for consistency across the range.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Paper Stocks",
    description:
      "We use quality 100 to 200 gsm paper and board stocks that feel as good as they look, from smooth coated art to textured uncoated finishes for a premium physical experience.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Law firms, NGOs, schools, corporates, and government offices across Kenya trust Ramirez Ventures to deliver stationery that represents their brand at the highest standard.",
  },
];

export default function StationaryPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-surface">
        <Image
          src={ph(1400, 400, "Branded+Stationery+Kenya")}
          alt="Branded stationery Kenya"
          fill
          className="object-cover opacity-70"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-primary/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-primary-foreground/70 flex-wrap">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="hover:text-primary-foreground transition-colors">Products</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary-foreground font-medium">Stationary</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Corporate Stationery
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Branded Stationery Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Letterheads, envelopes, notepads, invoice books, presentation folders, and more,
              branded to your identity, printed on premium stock, delivered across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rv-hero-button-primary" asChild>
                <a href="#products">Shop Stationery</a>
              </Button>
              <Button size="lg" variant="outline" className="rv-hero-button-secondary" asChild>
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
            <section className="rv-card rounded-lg p-6 sm:p-8">
              <Badge variant="secondary" className="mb-4">About Stationery</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Professional Branded Stationery for Every Business
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Branded stationery is the foundation of a professional business identity.
                  Every letter you send, every invoice you issue, and every notepad left on a
                  meeting table communicates something about your brand, and at Ramirez Ventures
                  we ensure that message is always polished, consistent, and impressive.
                </p>
                <p>
                  We design and print a comprehensive range of corporate stationery, from
                  A4 letterheads and DL envelopes through to presentation folders, NCR invoice
                  books, branded notepads, and award certificates. Each item is designed to
                  match your brand identity exactly, using your correct logo, colours,
                  typography, and tone, so that your stationery suite feels like a cohesive
                  brand system, not a collection of individual print jobs.
                </p>
                <p>
                  Whether you are a sole trader setting up your first branded materials or a
                  corporation refreshing 50 offices worth of stationery, we scale our service
                  to match your needs. Contact us today for a free design consultation and quote.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Stationery Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our full branded stationery range, contact us to order
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
            <section className="rv-card rounded-lg p-6 sm:p-8">
              <Badge variant="secondary" className="mb-4">What We Offer</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Stationery Products in Detail
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
            <section className="rv-card rounded-lg p-6 sm:p-8">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why Choose Ramirez Ventures for Stationery?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We ensure your stationery looks as good as your brand deserves, consistent,
                  professional, and matched across every item in your range.
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
              <div className="rv-soft-cta mt-10 flex flex-col items-center justify-center gap-4 rounded-lg sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-foreground">Ready to brand your stationery?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a free design consultation and quote today.
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
