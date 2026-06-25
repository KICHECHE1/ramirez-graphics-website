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

const THIS_HREF = "/products/signages";

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
  { id: "1", name: "Acrylic Signage", image: ph(400, 320, "Acrylic+Signage") },
  { id: "2", name: "ACP Aluminium Composite Signage", image: ph(400, 320, "ACP+Signage") },
  { id: "3", name: "Door & Office Signs", image: ph(400, 320, "Door+Office+Signs") },
  { id: "4", name: "Directional & Wayfinding Signs", image: ph(400, 320, "Wayfinding+Signs") },
  { id: "5", name: "Window Graphics & Frosting", image: ph(400, 320, "Window+Graphics") },
  { id: "6", name: "Vehicle Branding & Wraps", image: ph(400, 320, "Vehicle+Branding") },
  { id: "7", name: "Wall Graphics & Murals", image: ph(400, 320, "Wall+Graphics") },
  { id: "8", name: "Illuminated LED Signage", image: ph(400, 320, "LED+Signage") },
];

const productDescriptions = [
  {
    name: "Acrylic Signage",
    description:
      "Premium 3 mm and 5 mm clear or coloured acrylic signs with UV-printed or vinyl-applied graphics, ideal for reception areas, conference rooms, retail displays, and brand walls. Clean, modern, and instantly professional.",
  },
  {
    name: "ACP Aluminium Composite Signage",
    description:
      "Durable aluminium composite panels (ACP) are the standard for shopfronts, building fascias, outdoor commercial signage, and market stalls. Rigid, weather-resistant, and fully full-colour printable.",
  },
  {
    name: "Door & Office Signs",
    description:
      "Room name plates, toilet signs, directional plaques, and office door signs in acrylic, aluminium, or PVC. Customised to your brand style and mounted flush to walls or doors for a polished look.",
  },
  {
    name: "Directional & Wayfinding Signs",
    description:
      "Indoor and outdoor directional signage systems for hospitals, schools, malls, office parks, and events, arrow signs, overhead hanging signs, floor graphics, and freestanding display stands.",
  },
  {
    name: "Window Graphics & Frosting",
    description:
      "Vinyl window graphics, frosted privacy film, one-way vision film, and full-colour window displays, used by retailers, restaurants, banks, and offices to brand glass surfaces without permanent alteration.",
  },
  {
    name: "Vehicle Branding & Wraps",
    description:
      "Full and partial vehicle wraps, fleet branding, van livery, and car door panels, turning your company vehicles into moving billboards that deliver thousands of impressions every day across Kenya.",
  },
  {
    name: "Wall Graphics & Murals",
    description:
      "Large-scale printed wall murals, vinyl wall graphics, and branded feature walls for offices, retail spaces, schools, hospitals, and event venues, transforming blank walls into brand statements.",
  },
  {
    name: "Illuminated LED Signage",
    description:
      "Backlit LED signage, lightbox displays, and illuminated channel letters for shopfronts, malls, hotels, and reception areas, maximum visibility day and night with energy-efficient LED technology.",
  },
];

const features = [
  {
    icon: Star,
    title: "Premium Fabrication Quality",
    description:
      "We use commercial-grade materials, acrylic, ACP, vinyl, and LED components, fabricated to precise specifications so your signage looks sharp and lasts for years.",
  },
  {
    icon: Clock,
    title: "Fast Project Timelines",
    description:
      "Most signage projects are completed within 3 to 7 business days. We provide a detailed timeline upfront and keep you updated at every stage from design approval to installation.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery & Installation",
    description:
      "We deliver and install signage across Kenya, from Muhoroni, Kenya to Mombasa, Kisumu, and beyond. Our installation team handles mounting, cabling, and finishing.",
  },
  {
    icon: Palette,
    title: "Full Design & Branding Service",
    description:
      "Our in-house team designs your signage from scratch, matching your brand identity and optimising layouts for maximum readability and visual impact at any size or distance.",
  },
  {
    icon: ShieldCheck,
    title: "Weather-Resistant Outdoor Materials",
    description:
      "Our outdoor signage uses UV-stabilised inks and marine-grade substrates that maintain colour and structural integrity against the harsh Kenyan sun, rain, and dust.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Retail chains, commercial properties, hotels, hospitals, schools, and government institutions across Kenya trust Ramirez Ventures to deliver signage that represents them well.",
  },
];

export default function SignagesPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-surface">
        <Image
          src={ph(1400, 400, "Signage+Kenya")}
          alt="Signage Kenya"
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
            <span className="text-primary-foreground font-medium">Signages</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Commercial Signage
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Professional Signage in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Acrylic signs, ACP fascias, vehicle wraps, window graphics, wall murals, and LED
              displays, high-quality signage fabricated and installed across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="rv-hero-button-primary" asChild>
                <a href="#products">See Our Signage</a>
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
              <Badge variant="secondary" className="mb-4">About Signage</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Commercial Signage That Commands Attention
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Great signage tells your customers who you are before they even walk through
                  the door. At Ramirez Ventures we design, fabricate, and install a comprehensive
                  range of commercial signage for businesses, retail chains, hotels, hospitals,
                  schools, offices, and government institutions across Kenya, from sleek acrylic
                  reception signs to large-scale LED-illuminated shopfront fascias and full
                  vehicle wrap liveries.
                </p>
                <p>
                  Every signage project begins with a design consultation where we understand
                  your brand identity, installation environment, and visibility requirements.
                  Our team then produces a detailed proof for your approval before fabrication
                  begins, so there are no surprises when the sign goes up. We use
                  commercial-grade materials chosen for the specific demands of indoor or
                  outdoor Kenya environments, UV-stable, weather-resistant, and built to last.
                </p>
                <p>
                  Whether you need a single reception nameplate or a complete multi-site
                  signage rollout across a retail chain, we have the capacity and expertise
                  to deliver on time and on budget. Get in touch for a free site survey and quote.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Signage Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our full range of commercial signage solutions
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
                Our Signage Products in Detail
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
                  Why Choose Ramirez Ventures for Signage?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  From concept and design to fabrication and installation, we manage your
                  signage project end-to-end, on time and to specification.
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
                  <p className="font-semibold text-foreground">Ready to upgrade your signage?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a free site survey and quote today.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button asChild size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
                  <Button asChild size="lg" variant="outline"><a href="#products">Browse Signage</a></Button>
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
