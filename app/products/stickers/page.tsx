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

const THIS_HREF = "/products/stickers";

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
  { id: "1", name: "Custom Cut Stickers", image: ph(400, 320, "Custom+Cut+Stickers") },
  { id: "2", name: "Roll Stickers & Labels", image: ph(400, 320, "Roll+Stickers") },
  { id: "3", name: "Clear UV Stickers", image: ph(400, 320, "Clear+Stickers") },
  { id: "4", name: "Bumper Stickers", image: ph(400, 320, "Bumper+Stickers") },
  { id: "5", name: "Security & Warning Stickers", image: ph(400, 320, "Security+Stickers") },
  { id: "6", name: " Phone Stickers", image: ph(400, 320, "QR+Code+Stickers") },
  { id: "7", name: "Product Labels", image: ph(400, 320, "Product+Labels") },
  { id: "8", name: "Die-Cut Stickers", image: ph(400, 320, "Die-Cut+Stickers") },
];

const productDescriptions = [
  {
    name: "Custom Cut Stickers",
    description:
      "Stickers cut to any custom shape — round, square, rectangle, or die-cut to your exact artwork outline. Printed on gloss or matte vinyl with a permanent or removable adhesive, ideal for branding products, laptops, gear, and giveaways.",
  },
  {
    name: "Roll Stickers & Labels",
    description:
      "High-volume stickers and labels supplied on rolls for fast automated or manual application — used for product labelling, price tags, barcodes, promotional seals, and packaging labels across retail and manufacturing operations.",
  },
  {
    name: "Clear Transparent Stickers",
    description:
      "Printed on crystal-clear vinyl with a no-label look — your design appears to float on the surface. Popular for glass bottles, packaging, laptop lids, windows, and anywhere a clean, minimal application is desired.",
  },
  {
    name: "Bumper Stickers",
    description:
      "Durable, weatherproof bumper stickers on thick, UV-resistant vinyl — for vehicle branding, political campaigns, NGO awareness, and promotional giveaways. Long-lasting adhesive that stays put in the Kenyan sun and rain.",
  },
  {
    name: "Security & Void Stickers",
    description:
      "Tamper-evident stickers that leave a VOID pattern when removed — used for sealing product packaging, labelling assets, certifying documents, and preventing unauthorised product opening or warranty tampering.",
  },
  {
    name: "QR Code Stickers",
    description:
      "Custom QR code stickers linking to your website, menu, payment page, social media, or any digital destination. Printed in black-and-white or full colour, cut to any size, in sheets or rolls.",
  },
  {
    name: "Product Labels",
    description:
      "Full-colour product labels for food and beverage packaging, cosmetics, cleaning products, handmade goods, and gift items. Supplied on roll or sheet, with gloss, matte, or textured finishes to match your packaging style.",
  },
  {
    name: "Die-Cut Stickers",
    description:
      "Precisely cut to follow the exact contour of your artwork, die-cut stickers create a professional, finished look without a visible background border. Used for brand stickers, logo stickers, and high-end product labelling.",
  },
];

const features = [
  {
    icon: Star,
    title: "Sharp Full-Colour Printing",
    description:
      "We print stickers at up to 1440 dpi on premium vinyl — delivering vivid, sharp results whether your design is a simple logo or a complex full-colour illustration.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most sticker orders are printed and ready within 1–3 business days. Rush same-day printing is available for simple designs and small quantities.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver sticker and label orders across Kenya — from Muhoroni, Kenya to Mombasa, Kisumu, and beyond. Free local delivery for orders within Muhoroni.",
  },
  {
    icon: Palette,
    title: "Any Shape, Any Size",
    description:
      "Round, square, rectangular, oval, or die-cut to your custom shape — we can produce stickers in virtually any shape and size, from tiny 20 mm labels to large 300 mm promotional stickers.",
  },
  {
    icon: ShieldCheck,
    title: "Weatherproof & Durable",
    description:
      "Our stickers are printed on UV-resistant, waterproof vinyl with permanent or removable adhesives — built to last outdoors on vehicles, equipment, and product packaging.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Brands, retailers, event organisers, political campaigns, and entrepreneurs across Kenya trust Ramirez Ventures for stickers and labels that represent their products and campaigns.",
  },
];

export default function StickersPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "Sticker+Printing+Kenya")}
          alt="Sticker printing Kenya"
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
            <span className="text-primary-foreground font-medium">Stickers</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Vinyl Stickers &amp; Labels
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Custom Sticker Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Die-cut, roll, clear, bumper, security, and QR code stickers — any shape,
              any size, full colour, weatherproof, delivered across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">Shop Stickers</a>
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
              <Badge variant="secondary" className="mb-4">About Stickers</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Custom Sticker &amp; Label Printing for Every Need
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Stickers are one of the most versatile and cost-effective branding and
                  labelling tools available to any business — and at Ramirez Ventures we produce
                  them in virtually every format, shape, size, and material. From tiny barcode
                  labels on roll to large full-colour promotional stickers for an election
                  campaign, we deliver sharp, durable, professional results every time.
                </p>
                <p>
                  Our stickers are printed on premium self-adhesive vinyl using UV-resistant,
                  waterproof inks — making them suitable for vehicles, outdoor equipment,
                  product packaging, glass, and any other demanding application. We offer gloss,
                  matte, and clear (transparent) finishes, with permanent, removable, or
                  tamper-evident adhesive options depending on your intended use.
                </p>
                <p>
                  Whether you need 100 branded logo stickers for a product launch, 10,000
                  product labels on roll for a manufacturing line, or 5,000 bumper stickers
                  for a political campaign, we have the capacity to deliver on time and to
                  specification. Contact us for a fast quote.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Sticker Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our full range of custom stickers and labels
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
                Our Sticker Products in Detail
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
                  Why Choose Ramirez Ventures for Stickers?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Sharp printing, durable materials, fast turnaround, and any shape or size —
                  we make sticker ordering simple and the results impressive.
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
                  <p className="font-semibold text-foreground">Ready to order your stickers?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a fast quote — we respond within the hour.
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
