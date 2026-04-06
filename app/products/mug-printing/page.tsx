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

const THIS_HREF = "/products/mug-printing";

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
  { id: "1", name: "Ceramic Mug Printing", image: ph(400, 320, "Ceramic+Mug") },
  { id: "2", name: "Travel Mug Printing", image: ph(400, 320, "Travel+Mug") },
  { id: "3", name: "Enamel Mug Printing", image: ph(400, 320, "Enamel+Mug") },
  { id: "4", name: "Water Bottle Printing", image: ph(400, 320, "Water+Bottle") },
  { id: "5", name: "Tumbler Printing", image: ph(400, 320, "Tumbler") },
  { id: "6", name: "Corporate Mug Gift Sets", image: ph(400, 320, "Mug+Gift+Set") },
];

const productDescriptions = [
  {
    name: "Ceramic Mug Printing",
    description:
      "Classic 11oz and 15oz white ceramic mugs with full-colour sublimation printing on one or both sides. Dishwasher-safe and food-grade. Ideal for corporate gifts, client giveaways, and café merchandise.",
  },
  {
    name: "Travel Mug Printing",
    description:
      "Double-walled stainless steel travel mugs with leak-proof lids, custom printed with your logo or full-colour design. Keeps drinks hot for 8 hours, cold for 12 — a premium daily-use corporate gift.",
  },
  {
    name: "Enamel Mug Printing",
    description:
      "Durable old-school enamel mugs with custom screen-printed logos and designs. Lightweight, chip-resistant, and perfect for outdoor events, staff kits, camping themes, and rustic branding concepts.",
  },
  {
    name: "Water Bottle Printing",
    description:
      "BPA-free 500ml and 750ml clear or frosted plastic bottles printed with your brand. Great for sports teams, gyms, schools, corporate wellness programmes, and conference bag inserts.",
  },
  {
    name: "Tumbler Printing",
    description:
      "20oz insulated stainless steel tumblers with full-colour wrap printing. A premium and highly functional corporate gift — popular for conferences, VIP client packs, and staff recognition awards.",
  },
  {
    name: "Corporate Mug Gift Sets",
    description:
      "A beautifully boxed set combining a branded mug or tumbler with coasters, a teaspoon, and a personalised message card. Perfect for client appreciation, staff onboarding, and VIP event gifting.",
  },
];

const features = [
  {
    icon: Star,
    title: "Vivid Sublimation Printing",
    description:
      "Our dye-sublimation process delivers photographic-quality, full-wrap colour prints that will not fade or peel with regular washing — guaranteed durable results.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Standard orders are typically ready within 3–5 working days. Express production available for urgent corporate gift deadlines.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver across Kenya. Free local delivery in Muhoroni. Upcountry courier available for bulk corporate orders with secure gift packaging.",
  },
  {
    icon: Palette,
    title: "Free Design Support",
    description:
      "Send us your logo and brand colours and we will mock up your mug design for approval before production — at no extra charge.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every order is inspected before dispatch. If any item arrives with a print defect we will replace it at no cost to you.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "From boutique coffee shops to multinational corporations, Ramirez Ventures has fulfilled branded drinkware orders for clients across Kenya for over a decade.",
  },
];

export default function MugPrintingPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "Mug+Printing+Kenya")}
          alt="Mug printing and branded drinkware"
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
            <span className="text-primary-foreground font-medium">Mug Printing &amp; Branded Drinkware</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Branded Drinkware
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Mug Printing &amp; Branded Drinkware
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Custom branded mugs, tumblers, and bottles for corporate gifts, events,
              and promotions — full-colour sublimation, delivered across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">Browse Drinkware</a>
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
              <Badge variant="secondary" className="mb-4">About Mug Printing</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Premium Branded Drinkware for Every Occasion
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Branded mugs and drinkware are among the most effective and appreciated
                  promotional products available. Unlike a business card or flyer that gets filed
                  away, a well-designed mug stays on a desk, in a kitchen, or at a workstation —
                  delivering your brand impression multiple times a day, every day. At Ramirez
                  Ventures we print on a wide range of drinkware, from classic ceramic mugs to
                  premium insulated tumblers and stainless steel travel mugs.
                </p>
                <p>
                  Whether you need 10 personalised mugs as VIP client gifts or 5,000 promotional
                  water bottles for a product launch, we handle every quantity with the same
                  attention to detail. Our sublimation printing delivers brilliant, photographic-
                  quality results that will not fade or peel with regular washing. We offer gift
                  boxing, personalised messages, and full bulk corporate order handling for events,
                  product launches, and CSR campaigns.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Drinkware Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our range of branded drinkware options
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
                Our Drinkware Products in Detail
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
                  Why Choose Ramirez Ventures for Branded Drinkware?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Quality prints, premium products, and reliable delivery — everything your
                  corporate gifting programme needs in one place.
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
                    Get a free quote and mockup today — no obligation.
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
