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

const THIS_HREF = "/products/packaging";

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
  { id: "1", name: "Custom Print Boxes", image: ph(400, 320, "Custom+Boxes") },
  { id: "2", name: "Branded Paper Bags", image: ph(400, 320, "Paper+Bags") },
  { id: "3", name: "Poly Bags & Poly Mailers", image: ph(400, 320, "Poly+Bags") },
  { id: "4", name: "Gift Boxes", image: ph(400, 320, "Gift+Boxes") },
  { id: "5", name: "Pillow Boxes", image: ph(400, 320, "Pillow+Boxes") },
  { id: "6", name: "Product Labels & Seals", image: ph(400, 320, "Product+Labels") },
];

const productDescriptions = [
  {
    name: "Custom Print Boxes",
    description:
      "Full-colour printed rigid and carton boxes for retail products, subscription kits, electronics, food, and cosmetics. Custom sizes, die-cuts, windows, and matte or gloss lamination coating available.",
  },
  {
    name: "Branded Paper Bags",
    description:
      "Portrait and landscape kraft or coated paper bags with twisted or ribbon handles, printed with your brand in full colour. Perfect for boutique retail, restaurants, bakeries, and trade show giveaways.",
  },
  {
    name: "Poly Bags & Poly Mailers",
    description:
      "Durable printed polyethylene bags and mailers for fashion, e-commerce, and retail packaging. Custom sizes, re-sealable closures, and tamper-evident options available on request.",
  },
  {
    name: "Gift Boxes",
    description:
      "Premium rigid gift boxes with magnetic closures, UV spot coating, foil stamping, and custom inserts. The perfect unboxing experience for luxury products, corporate gifts, and brand launches.",
  },
  {
    name: "Pillow Boxes",
    description:
      "Curved pillow-shaped retail boxes ideal for jewellery, accessories, and small gifts. Printed full-colour on 300–400 gsm art board, scored and pre-creased for easy assembly.",
  },
  {
    name: "Product Labels & Seals",
    description:
      "Adhesive labels for bottles, jars, tubes, and boxes — printed in full colour with QR codes, barcodes, and regulatory panels. Roll labels, sheet labels, tamper-evident seals, and peel-and-reveal formats.",
  },
];

const features = [
  {
    icon: Star,
    title: "Premium Print Finish",
    description:
      "Gloss lamination, matte lamination, soft-touch, foil stamping, and UV spot coating — we offer the premium finishing options your packaging deserves.",
  },
  {
    icon: Clock,
    title: "Fast Production",
    description:
      "Standard packaging orders are produced in 5–7 working days. Rush production available for urgent retail and event deadlines.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver packaging orders across Kenya. Free local delivery in Muhoroni. Bulk pallets delivered upcountry via our trusted courier network.",
  },
  {
    icon: Palette,
    title: "Free Design & Dieline Support",
    description:
      "Our packaging designers will create your box dieline and artwork layout at no extra charge — ready for structural production.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Every order is colour-proofed and structurally checked before dispatch to ensure your packaging dimensions, prints, and finishes are perfect.",
  },
  {
    icon: CheckCircle2,
    title: "Any Quantity",
    description:
      "We handle short-run custom packaging for startups and small businesses, as well as large-volume production runs for established brands and retailers.",
  },
];

export default function PackagingPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "Custom+Packaging+Kenya")}
          alt="Custom packaging solutions"
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
            <span className="text-primary-foreground font-medium">Packaging</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Custom Packaging
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Custom Packaging Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Branded boxes, bags, and labels that make your products stand out on shelves
              and create memorable unboxing experiences for your customers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">Browse Packaging</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-primary-foreground hover:bg-white/10" asChild>
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
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">About Packaging</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Premium Custom Packaging That Sells Your Product
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  In today&apos;s competitive retail landscape, packaging is not just a container —
                  it is the first touchpoint between your brand and your customer. Great packaging
                  communicates your quality, builds brand recognition, and creates the memorable
                  unboxing experience that drives word-of-mouth and repeat purchases. At Ramirez
                  Ventures we design and produce full-colour custom packaging for retailers,
                  e-commerce brands, food producers, cosmetics companies, and gift shops across Kenya.
                </p>
                <p>
                  From short-run boutique packaging orders to high-volume commercial runs for mass
                  retail, we accommodate every quantity and complexity. Our team handles design,
                  pre-press, and production under one roof, so your packaging goes from concept to
                  finished product without delays or quality compromises. Whether you are launching
                  a new product or refreshing your existing packaging, we make the process simple
                  and the results impressive.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Packaging Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our range of custom packaging solutions
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
                Our Packaging Products in Detail
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
                  Why Choose Ramirez Ventures for Your Packaging?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  From concept to carton — we handle design, production, and delivery under one
                  roof so your packaging is always on time and on brand.
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
                  <p className="font-semibold text-foreground">Ready to order?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a free packaging quote and dieline today.
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
