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

const THIS_HREF = "/products/graphic-design";

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
  { id: "1", name: "Logo Design", image: ph(400, 320, "Logo+Design") },
  { id: "2", name: "Flyer Design", image: ph(400, 320, "Flyer+Design") },
  { id: "3", name: "Brochure Design", image: ph(400, 320, "Brochure+Design") },
  { id: "4", name: "Business Card Design", image: ph(400, 320, "Business+Card+Design") },
  { id: "5", name: "Social Media Graphics", image: ph(400, 320, "Social+Media+Graphics") },
  { id: "6", name: "Brand Identity Package", image: ph(400, 320, "Brand+Identity") },
  { id: "7", name: "Poster Design", image: ph(400, 320, "Poster+Design") },
  { id: "8", name: "Exhibition Backdrop Design", image: ph(400, 320, "Backdrop+Design") },
];

const productDescriptions = [
  {
    name: "Logo Design",
    description:
      "A professional logo is the cornerstone of your brand. We design unique, scalable vector logos delivered as AI, EPS, SVG, PNG, and PDF, ready for both print and digital use across all sizes.",
  },
  {
    name: "Flyer Design",
    description:
      "Whether you need a simple A5 flyer or a detailed A4 event programme, our designers create print-ready layouts that grab attention, communicate clearly, and are optimised for our presses.",
  },
  {
    name: "Brochure Design",
    description:
      "We design bi-fold, tri-fold, and custom-format brochures for company profiles, product catalogues, and service menus, any size, any industry, ready to send straight to print.",
  },
  {
    name: "Business Card Design",
    description:
      "Stand out with a well-designed business card. We create classic, minimalist, and bold layouts, print-ready at 90x55 mm with crop marks and bleed, matched to your brand style.",
  },
  {
    name: "Social Media Graphics",
    description:
      "Consistent, on-brand graphics for Facebook, Instagram, LinkedIn, and X, posts, cover photos, story templates, and ad creatives, supplied in all required platform dimensions.",
  },
  {
    name: "Brand Identity Package",
    description:
      "A complete brand starter pack: primary and secondary logos, colour palette, typography guide, letterhead, business card, and brand usage guidelines, delivered as a single comprehensive file.",
  },
  {
    name: "Poster Design",
    description:
      "A3, A2, and A1 poster layouts designed for maximum visual impact, event announcements, product promotions, church programmes, political campaigns, and motivational wall displays.",
  },
  {
    name: "Exhibition Backdrop Design",
    description:
      "Large-format backdrop and media wall designs for trade shows, press conferences, product launches, award ceremonies, and church events, sized precisely to your banner hardware.",
  },
];

const features = [
  {
    icon: Star,
    title: "Professional Creative Team",
    description:
      "Our in-house designers bring years of experience across brand identity, print, and digital, delivering polished, market-ready work every time.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most designs are ready for review within 24 hours. Revisions are turned around same-day so you never miss a print deadline.",
  },
  {
    icon: Truck,
    title: "Design-to-Print Under One Roof",
    description:
      "Because we design and print in-house, your files are already production-optimised, no rework, no delays, no extra cost.",
  },
  {
    icon: Palette,
    title: "Unlimited Revisions",
    description:
      "We iterate until you are 100% satisfied. Your approval matters more to us than a quick sign-off, your brand deserves to be right.",
  },
  {
    icon: ShieldCheck,
    title: "100% File Ownership",
    description:
      "Every design we create for you belongs entirely to you. We supply all source files and working fonts on request.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Businesses, NGOs, schools, and government institutions across Kenya trust Ramirez Ventures to represent their brands well.",
  },
];

export default function GraphicDesignPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-brand-surface">
        <Image
          src={ph(1400, 400, "Graphic+Design+Services")}
          alt="Graphic design services"
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
            <span className="text-primary-foreground font-medium">Graphic Design</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Creative Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Professional Graphic Design Services
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Beautiful, on-brand designs for print and digital, from logos to full brand
              identity packages, we create work that represents you at your best.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rv-hero-button-primary" asChild>
                <a href="#products">See Our Services</a>
              </Button>
              <Button size="lg" variant="outline" className="rv-hero-button-secondary" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main layout ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 lg:items-start">

          {/* ── Sidebar ── */}
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

          {/* ── Body ── */}
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
              <Badge variant="secondary" className="mb-4">About Graphic Design</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Professional Graphic Design for Print and Digital
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  At Ramirez Ventures, our in-house creative team delivers professional graphic
                  design services tailored to businesses, NGOs, event planners, schools, churches,
                  and government institutions across Kenya. Whether you need a compelling logo that
                  tells your brand story or a complete suite of marketing materials for a product
                  launch, we provide end-to-end creative solutions backed by expert in-house printing.
                </p>
                <p>
                  We believe great design should be accessible to every business, not just large
                  corporations with big budgets. That is why we offer clear pricing, fast turnaround
                  times, and personal design consultations to ensure you get exactly the look and feel
                  your brand deserves. Every design we create is production-ready and optimised for
                  our printing processes, meaning what you approve on screen is what you receive in
                  print, no surprises.
                </p>
                <p>
                  From a single-colour one-colour logo to a fully animated social media brand kit,
                  we scale our services to match your needs and your budget. Contact us today for a
                  free design consultation and quote.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Design Services</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore the range of creative services we offer
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {products.length} Services
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
                Our Design Services in Detail
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
                  Why Choose Ramirez Ventures for Graphic Design?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We combine creative expertise with practical print knowledge to deliver designs
                  that look great and work perfectly in print.
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
                  <p className="font-semibold text-foreground">Ready to get started?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a free design consultation today, no obligation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button asChild size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
                  <Button asChild size="lg" variant="outline"><a href="#products">Browse Services</a></Button>
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
