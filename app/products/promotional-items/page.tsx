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

const THIS_HREF = "/products/promotional-items";

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
  { id: "1", name: "Branded Pens", image: ph(400, 320, "Branded+Pens") },
  { id: "2", name: "Branded Caps & Hats", image: ph(400, 320, "Branded+Caps") },
  { id: "3", name: "Branded Tote Bags", image: ph(400, 320, "Branded+Tote+Bags") },
  { id: "4", name: "Branded Notebooks", image: ph(400, 320, "Branded+Notebooks") },
  { id: "5", name: "Branded USB Drives", image: ph(400, 320, "Branded+USB+Drives") },
  { id: "6", name: "Branded Keychains", image: ph(400, 320, "Branded+Keychains") },
  { id: "7", name: "Branded Water Bottles", image: ph(400, 320, "Branded+Water+Bottles") },
  { id: "8", name: "Branded Umbrellas", image: ph(400, 320, "Branded+Umbrellas") },
];

const productDescriptions = [
  {
    name: "Branded Pens",
    description:
      "One of the most cost-effective giveaways available — a branded pen puts your logo in your client's hand multiple times a day. Available in ballpoint, rollerball, and stylus options in a wide range of colours.",
  },
  {
    name: "Branded Caps & Hats",
    description:
      "Custom embroidered or printed caps — baseball, dad, and bucket hat styles — branded with your logo for staff uniforms, events, sports teams, and corporate giveaways.",
  },
  {
    name: "Branded Tote Bags",
    description:
      "Eco-friendly cotton and non-woven tote bags printed with your logo and design. Popular for conferences, trade shows, retail gift packaging, election campaigns, and NGO outreach programmes.",
  },
  {
    name: "Branded Notebooks",
    description:
      "Softcover and hardcover branded notebooks with your logo on the cover — ideal for corporate gifts, training seminars, school programmes, and event welcome packs.",
  },
  {
    name: "Branded USB Drives",
    description:
      "Custom USB drives pre-loaded with your content and branded with your logo — a practical, premium gift for clients, employees, and delegates at conferences and product launches.",
  },
  {
    name: "Branded Keychains",
    description:
      "Metal, rubber, leather, and acrylic keychains laser-engraved or printed with your logo. A budget-friendly, high-visibility promotional item for every day of the year.",
  },
  {
    name: "Branded Water Bottles",
    description:
      "Stainless steel, aluminium, and BPA-free plastic water bottles printed or laser-engraved with your brand. Perfect for sports teams, corporate wellness programmes, and event giveaways.",
  },
  {
    name: "Branded Umbrellas",
    description:
      "Large-canopy auto-open umbrellas printed with your brand across the panels — maximum visibility in all weather. Ideal for election campaigns, corporate giveaways, and retail promotions.",
  },
];

const features = [
  {
    icon: Star,
    title: "Premium Branding on Every Item",
    description:
      "We use high-quality printing, embroidery, and engraving techniques to ensure your logo looks sharp, professional, and durable on every promotional product.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most branded items are ready within 3–5 business days. Larger orders and custom items are quoted with lead times upfront — no surprises.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver promotional items across Kenya — from Muhoroni to Nairobi, Mombasa, Kisumu, Nakuru, and beyond. Free local delivery for orders within Muhoroni.",
  },
  {
    icon: Palette,
    title: "Full Branding Service",
    description:
      "From concept to finished branded product, our team handles design, sourcing, printing, and packaging — so you receive everything you need in one order.",
  },
  {
    icon: ShieldCheck,
    title: "High MOQ Flexibility",
    description:
      "We cater to small businesses and large corporates alike — with competitive unit costs from low minimum order quantities up to large-volume bulk orders.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Corporates, NGOs, event organisers, political campaigns, and schools across Kenya trust Ramirez Ventures for their branded promotional merchandise.",
  },
];

export default function PromotionalItemsPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "Promotional+Items+Kenya")}
          alt="Promotional items Kenya"
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
            <span className="text-primary-foreground font-medium">Promotional Items</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Branded Merchandise
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Promotional Items &amp; Branded Merchandise
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Put your brand in your customers&apos; hands every day — pens, caps, bags,
              notebooks, USB drives, and more, branded with your logo and delivered across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">Shop Merchandise</a>
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
              <Badge variant="secondary" className="mb-4">About Promotional Items</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Branded Promotional Merchandise That Keeps Working for You
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Promotional merchandise is one of the highest-return marketing investments
                  available. Unlike digital advertising that disappears when the budget runs out,
                  a branded pen, cap, or tote bag continues to put your logo in front of potential
                  customers every single day — often for months or years. At Ramirez Ventures we
                  supply and brand a comprehensive range of promotional items for businesses,
                  event organisers, NGOs, schools, churches, and political campaigns across Kenya.
                </p>
                <p>
                  Whether you need 100 branded pens for a trade show, 500 corporate caps for a
                  staff event, or 2,000 printed tote bags for a product launch, we source
                  quality items, brand them with your logo, and deliver them to your door — all
                  under one roof. Our in-house team handles design, proofing, and production,
                  giving you full control over how your brand is represented on every item.
                </p>
                <p>
                  Not sure which items are right for your campaign or budget? Our team is happy
                  to advise on the most impactful products for your audience and purpose.
                  Contact us today for a tailored quote.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Promotional Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore our range of branded merchandise — contact us to order
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
                Our Promotional Products in Detail
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
                  Why Choose Ramirez Ventures for Promotional Items?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We handle everything from sourcing and design to branding and delivery —
                  so you receive polished, on-brand merchandise without the hassle.
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
                  <p className="font-semibold text-foreground">Ready to brand your merchandise?</p>
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
