"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ChevronRight,
  Star,
  Clock,
  Truck,
  ShieldCheck,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Banner from "@/app/assets/banner.jpg";
import TableRollup from "@/app/assets/table roll up _Banner_Mockup_2.jpg";
import BackdropBanner from "@/app/assets/back drop banner.jpg";
import TableCloth from "@/app/assets/Tablecloth.jpg";
import SBanner from "@/app/assets/Street-Billboard-Mockup.jpg";
import PVCWheelCover from "@/app/assets/wheelcovers.jpg";

/* ─── placeholder helper ─── */
const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

/* ─── Sidebar: all 8 product categories from the navbar ─── */
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

/* ─── Banner products ─── */
interface BannerProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  href: string;
  badge?: string;
}

const bannerProducts: BannerProduct[] = [
  {
    id: "banner-1",
    name: "Table Rollup Printing",
    category: "table-rollup",
    price: 3500,
    image: TableRollup.src,
    href: "/products/banners/table-rollup",
    badge: "Best Seller",
  },
  {
    id: "banner-2",
    name: "Adjustable Backdrop Banner",
    category: "backdrop-banner",
    price: 8500,
    image: BackdropBanner.src,
    href: "/products/banners/backdrop-banner",
    badge: "Popular",
  },
  {
    id: "banner-3",
    name: "Table Cloth Printing",
    category: "table-cloth",
    price: 4200,
    image: TableCloth.src,
    href: "/products/banners/table-cloth",
  },
  {
    id: "banner-4",
    name: "S-Banner Printing",
    category: "s-banner",
    price: 2800,
    image: SBanner.src,
    href: "/products/banners/s-banner",
    badge: "New",
  },
  {
    id: "banner-5",
    name: "PVC Wheel Cover",
    category: "pvc-wheel-cover",
    price: 1800,
    image: PVCWheelCover.src,
    href: "/products/banners/pvc-wheel-cover",
  },
];

/* ─── Why choose us features ─── */
const features = [
  {
    icon: Star,
    title: "Premium Print Quality",
    description:
      "We use high-resolution wide-format printers with UV-resistant inks that deliver sharp, vivid colour — rain or shine.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most orders are ready within 24–48 hours. Need it urgent? Same-day printing is available for standard sizes.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver across Kenya — from Muhoroni to Mombasa, Kisumu, Nakuru, and beyond. Free local delivery for orders in Muhoroni.",
  },
  {
    icon: Palette,
    title: "Free Design Support",
    description:
      "Our in-house design team will set up your artwork at no extra cost — just send us your logo and content.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Materials",
    description:
      "Every banner is printed on high-quality PVC, fabric, or vinyl chosen for the intended environment — indoor or outdoor.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "From startups and NGOs to government agencies and Fortune 500 companies, businesses across Kenya trust Ramirez Ventures.",
  },
];

export default function BannersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
  <section className="relative isolate overflow-hidden">
  {/* Background Image */}
  <Image
    src={Banner.src}
    alt="Banner printing Kenya"
    fill
    priority
    unoptimized
    className="object-cover object-center"
  />

      {/* Dark translucent overlay */}
<div className="absolute inset-0 bg-black/45 z-0" />

<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
  {/* Breadcrumb */}
  <nav className="mb-6 flex items-center gap-1.5 text-sm text-white/80 flex-wrap">
    <Link href="/" className="hover:text-white transition-colors">
      Home
    </Link>

    <ChevronRight className="size-3.5" />

    <Link href="/products" className="hover:text-white transition-colors">
      Products
    </Link>

    <ChevronRight className="size-3.5" />

    <span className="text-white font-medium">Banners</span>
  </nav>

  <div className="max-w-2xl">
    <Badge className="mb-4 bg-white/20 text-white border-0 backdrop-blur-sm">
      Large-Format Printing
    </Badge>

    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4">
      Banner Printing in Kenya
    </h1>

    <p className="text-lg text-white/90 leading-relaxed mb-8">
      High-impact, professional banners for businesses, events, churches, schools, and
      government institutions — printed and delivered across Kenya.
    </p>

    <div className="flex flex-wrap gap-3">
      <Button
        size="lg"
        className="bg-white text-black hover:bg-white/90 shadow-lg"
        asChild
      >
        <a href="#products">Shop Banners</a>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="border-white text-black bg-white/90 hover:bg-white"
        asChild
      >
        <Link href="/contact">Get a Quote</Link>
      </Button>
    </div>
  </div>
</div>
</section>

      {/* ── Main content: sidebar + body ── */}
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
                  const isActive = cat.href === "/products/banners";
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
            {/* ── Mobile category pills ── */}
            <div className="flex gap-2 flex-wrap lg:hidden">
              {productCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    cat.href === "/products/banners"
                      ? "bg-primary text-primary-foreground border-primary font-semibold"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* ── About / intro section ── */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">
                About Our Banner Printing
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Kenya&apos;s Most Trusted Large-Format Banner Printing Company
              </h2>
              <div className="prose prose-sm sm:prose-base text-muted-foreground max-w-none space-y-4">
                <p>
                  Looking for professional banner printing in Kenya? You have come to the right
                  place. At Ramirez Ventures, we are Muhoroni, Kenya&apos;s most trusted large-format
                  printing company, offering a complete range of indoor and outdoor branding
                  solutions for businesses, events, churches, schools, and government institutions
                  across Kenya. Whether you need a single promotional display or a full event
                  branding package, we have the right banner for every purpose and budget.
                </p>
                <p>
                  Banner printing remains one of the most cost-effective and high-impact marketing
                  tools available in Kenya. A well-printed, correctly positioned banner can generate
                  thousands of impressions daily — far more than digital advertising at a fraction
                  of the recurring cost. From roadside vinyl banners in Muhoroni, Kenya to elegant
                  fabric media walls at KICC press conferences, Ramirez Ventures delivers the right
                  display format to make all the difference for your brand.
                </p>
              </div>
            </section>

            {/* ── Products grid ── */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Banner Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click any product to view full details and ordering options
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {bannerProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {bannerProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <Link href={product.href} className="relative block overflow-hidden aspect-[4/3] bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge className="text-xs shadow">{product.badge}</Badge>
                        </div>
                      )}
                    </Link>

                    {/* Info */}
                      <div>
                        <Link
                          href={product.href}
                          className="font-semibold text-foreground hover:text-primary transition-colors leading-snug"
                        >
                          {product.name}
                        </Link>
                      </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Why choose Ramirez Ventures ── */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">
                  Why Choose Us
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why Choose Ramirez Ventures for Your Banner Printing?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We combine cutting-edge printing technology with unmatched customer service to
                  deliver banners that make your brand impossible to ignore.
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
                        <h3 className="font-semibold text-foreground text-sm mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-foreground">Ready to get started?</p>
                  <p className="text-sm text-muted-foreground">
                    Get a free quote within minutes — no obligation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="#products">Browse Products</a>
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
