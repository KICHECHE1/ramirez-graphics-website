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

const THIS_HREF = "/products/t-shirts";

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
  { id: "1", name: "Branded Round Neck T-shirts", image: ph(400, 320, "Round+Neck+T-shirt") },
  { id: "2", name: "Branded Polo T-shirts", image: ph(400, 320, "Polo+T-shirt") },
  { id: "3", name: "Sublimation T-shirts", image: ph(400, 320, "Sublimation+T-shirt") },
  { id: "4", name: "Long Sleeve Branded Shirts", image: ph(400, 320, "Long+Sleeve+Shirt") },
  { id: "5", name: "Sports & Performance Jerseys", image: ph(400, 320, "Sports+Jerseys") },
  { id: "6", name: "V-Neck T-shirts", image: ph(400, 320, "V-Neck+T-shirt") },
  { id: "7", name: "Screen Print T-shirts", image: ph(400, 320, "Screen+Print+T-shirt") },
  { id: "8", name: "Embroidered Polo Shirts", image: ph(400, 320, "Embroidered+Polo") },
];

const productDescriptions = [
  {
    name: "Branded Round Neck T-shirts",
    description:
      "Classic crew-neck cotton T-shirts in a wide range of colours and sizes (XS–4XL), branded with your logo via heat transfer vinyl, screen printing, or direct-to-garment (DTG) printing. The most popular choice for events, staff uniforms, and promotions.",
  },
  {
    name: "Branded Polo T-shirts",
    description:
      "Smart piqué cotton polo shirts embroidered or heat-pressed with your logo — the go-to choice for corporate uniforms, schools, sports clubs, and customer-facing staff. Available in a broad colour range and all sizes.",
  },
  {
    name: "Sublimation T-shirts",
    description:
      "All-over full-colour sublimation printing on 100% polyester T-shirts — edge-to-edge designs with vivid, wash-fast colour that will never peel or crack. Perfect for sports teams, entertainment brands, and bold promotional campaigns.",
  },
  {
    name: "Long Sleeve Branded Shirts",
    description:
      "Long sleeve cotton or polyester shirts branded with your logo — suitable for staff uniforms in cooler environments, church groups, community programmes, and branded merchandise for colder seasons.",
  },
  {
    name: "Sports & Performance Jerseys",
    description:
      "Moisture-wicking sublimation basketball, football, volleyball, and athletics jerseys with fully custom player names, numbers, and team branding — produced in small MOQs from single player kits to full-squad sets.",
  },
  {
    name: "V-Neck T-shirts",
    description:
      "V-neck cotton T-shirts with a modern, slightly dressier silhouette — popular for spa and salon uniforms, hospitality staff, and branded apparel that needs a clean, professional edge beyond the standard crew neck.",
  },
  {
    name: "Screen Print T-shirts",
    description:
      "High-volume screen-printed T-shirts for large campaigns, events, and bulk uniform orders — delivering consistent, durable, cost-effective results at quantity. Ideal for runs of 50 pieces and above.",
  },
  {
    name: "Embroidered Polo Shirts",
    description:
      "Precision embroidered logos on premium polo shirts — a premium finish that elevates corporate uniforms, school wear, and branded hospitality apparel. Raised, textured, and built to last hundreds of washes.",
  },
];

const features = [
  {
    icon: Star,
    title: "Premium Garment Quality",
    description:
      "We source high-quality cotton, polyester, and blended fabrics that look great, feel comfortable, and hold their shape wash after wash — because the shirt is a reflection of your brand too.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most T-shirt orders for standard logos are ready within 3–5 business days. Large bulk orders and sublimation runs are quoted with lead times upfront. Rush service available.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver T-shirt and apparel orders across Kenya — from Muhoroni, Kenya to Mombasa, Kisumu, and beyond. Free local delivery for orders within Muhoroni.",
  },
  {
    icon: Palette,
    title: "Multiple Branding Techniques",
    description:
      "We offer heat transfer vinyl, screen printing, DTG (direct-to-garment), full-colour sublimation, and embroidery — so we match the branding method to your design and garment for the best possible result.",
  },
  {
    icon: ShieldCheck,
    title: "Wash-Fast, Long-Lasting Prints",
    description:
      "Our printing and embroidery techniques are optimised for durability — prints that do not crack, peel, or fade after washing, and embroidery that looks as sharp after 100 washes as it did on day one.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Schools, companies, sports clubs, NGOs, churches, and event organisers across Kenya trust Ramirez Ventures to deliver T-shirts and apparel that look great and last long.",
  },
];

export default function TshirtsPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "T-shirt+Printing+Kenya")}
          alt="T-shirt printing Kenya"
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
            <span className="text-primary-foreground font-medium">T-shirts</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Branded Apparel
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Custom T-shirt Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Round neck, polo, sublimation, screen print, and embroidered T-shirts — branded
              with your logo, cut to your size, delivered across Kenya from Muhoroni.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">Shop T-shirts</a>
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
              <Badge variant="secondary" className="mb-4">About T-shirt Printing</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Custom T-shirt Printing for Every Occasion and Organisation
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  A well-printed T-shirt does more than cover skin — it tells a story, builds
                  team identity, and carries your brand into every room, event, and street it
                  enters. At Ramirez Ventures we produce custom branded T-shirts for businesses,
                  schools, churches, sports clubs, NGOs, political campaigns, and events across
                  Kenya — in any style, any colour, and any size from XS right through to 4XL.
                </p>
                <p>
                  We offer multiple branding techniques depending on your design and garment
                  type: heat transfer vinyl for small orders and simple logos, screen printing
                  for high-volume runs, full-colour sublimation for edge-to-edge photographic
                  designs on polyester, and embroidery for corporate polos and premium apparel.
                  We match the technique to your artwork and garment to ensure the best quality
                  and most cost-effective result for your specific order.
                </p>
                <p>
                  Not sure which style or method is right for your order? Our team will gladly
                  advise you. Send us your logo and requirements via WhatsApp and we will provide
                  a fast, accurate quote — usually within the hour.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our T-shirt Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our range — contact us to place your order
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
                Our T-shirt Products in Detail
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
                  Why Choose Ramirez Ventures for T-shirt Printing?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Quality garments, multiple branding methods, competitive pricing, and fast
                  turnaround — everything you need for a successful T-shirt order.
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
                  <p className="font-semibold text-foreground">Ready to order your T-shirts?</p>
                  <p className="text-sm text-muted-foreground">
                    Send us your logo and we will quote within the hour.
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
