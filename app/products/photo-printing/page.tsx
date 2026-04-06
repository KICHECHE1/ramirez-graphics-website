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

const THIS_HREF = "/products/photo-printing";

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
  { id: "1", name: "Standard Photo Prints", image: ph(400, 320, "Standard+Photo+Prints") },
  { id: "2", name: "Large Format Photo Prints", image: ph(400, 320, "Large+Format+Photos") },
  { id: "3", name: "Canvas Photo Prints", image: ph(400, 320, "Canvas+Prints") },
  { id: "4", name: "Passport & ID Photos", image: ph(400, 320, "Passport+Photos") },
  { id: "5", name: "Photo Books", image: ph(400, 320, "Photo+Books") },
  { id: "6", name: "Framed Photo Prints", image: ph(400, 320, "Framed+Prints") },
  { id: "7", name: "Panoramic Prints", image: ph(400, 320, "Panoramic+Prints") },
  { id: "8", name: "Mounted Photo Prints", image: ph(400, 320, "Mounted+Prints") },
];

const productDescriptions = [
  {
    name: "Standard Photo Prints",
    description:
      "Classic photo prints in wallet, 4×6, 5×7, 6×8, 8×10, and A4 sizes — printed on professional photo paper in gloss or matte finish. Sharp, true-to-life colours for personal and commercial use.",
  },
  {
    name: "Large Format Photo Prints",
    description:
      "Stunning large-scale photo prints from A3 up to 1.5 m wide — ideal for exhibition displays, studio backdrops, gallery walls, office interiors, and retail visual merchandising.",
  },
  {
    name: "Canvas Photo Prints",
    description:
      "Your favourite photos transferred onto artist canvas and stretched over a sturdy wooden frame. Ready to hang straight out of the box — a timeless, premium wall art option for homes and offices.",
  },
  {
    name: "Passport & ID Photos",
    description:
      "Regulation-sized passport and ID photos printed to Kenyan and international passport standards. Taken and printed on-site — ready in minutes. We cater for all government, visa, and employment formats.",
  },
  {
    name: "Photo Books",
    description:
      "Professionally printed and bound photo books in hardcover or softcover — ideal for wedding albums, family portraits, corporate reports, and event memories. Fully customisable layouts.",
  },
  {
    name: "Framed Photo Prints",
    description:
      "Photo prints pre-mounted in black, white, or natural wood frames — ready to hang or stand on a shelf. Available in a range of standard sizes with glass or acrylic glazing options.",
  },
  {
    name: "Panoramic Prints",
    description:
      "Wide-format panoramic prints in ratios such as 1:3, 1:4, and custom — perfect for landscape photography, cityscapes, wedding group shots, and dramatic wall displays.",
  },
  {
    name: "Mounted Photo Prints",
    description:
      "Photos mounted on 3 mm or 5 mm Forex board or foam board for a clean, frameless display. Lightweight, rigid, and ready to hang — popular for exhibitions, offices, and retail spaces.",
  },
];

const features = [
  {
    icon: Star,
    title: "True-to-Life Colour Accuracy",
    description:
      "We use calibrated professional photo printers and premium photo paper to ensure your prints match what you see on screen — vivid, accurate, and long-lasting.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Standard photo prints are ready within the hour. Larger format and canvas prints are typically ready next day. Urgent orders can be arranged.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "We deliver across Kenya — from Muhoroni to Nairobi, Mombasa, Kisumu, Nakuru, and beyond. Free local delivery for orders within Muhoroni.",
  },
  {
    icon: Palette,
    title: "Multiple Finishes",
    description:
      "Choose from gloss, matte, or satin photo paper; stretched canvas; Forex board mounting; and framing options — we match the finish to your intended use.",
  },
  {
    icon: ShieldCheck,
    title: "Archival Quality",
    description:
      "Our inks and papers are rated for 50–100 years of display life under normal conditions — your prints will stay vibrant for generations.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by 5,000+ Clients",
    description:
      "Photographers, event planners, interior designers, schools, and families across Kenya trust Ramirez Ventures to handle their most important prints with care.",
  },
];

export default function PhotoPrintingPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 400, "Photo+Printing+and+Framing")}
          alt="Photo printing and framing"
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
            <span className="text-primary-foreground font-medium">Photo Printing and Framing</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Photography &amp; Framing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Photo Printing &amp; Framing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Professional photo prints, canvas art, frames, and photo books — true-to-life colours,
              archival quality paper, and fast turnaround across Kenya.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">See Our Services</a>
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
              <Badge variant="secondary" className="mb-4">About Photo Printing</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Professional Photo Printing and Framing in Kenya
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  At Ramirez Ventures, we provide a complete range of professional photo printing
                  and framing services — from pocket-sized wallet prints and regulation passport photos
                  to large-scale canvas art and fully framed wall pieces. Whether you are a
                  professional photographer, event planner, interior designer, or simply want to
                  print a cherished family memory, we deliver accurate, vivid, archival-quality results
                  every time.
                </p>
                <p>
                  We print on professional-grade photo paper from leading manufacturers, calibrated
                  to produce true-to-life colour reproduction across a wide range of paper types and
                  surface finishes. Our large-format capability means we can print anything from a
                  standard 10×15 cm snapshot to a 1.5-metre gallery print — all under one roof in
                  Muhoroni, delivered nationwide.
                </p>
                <p>
                  Every order receives careful pre-press inspection. We check colour profiles,
                  resolution, and crop before pressing print — so what arrives at your door is exactly
                  what you expected. Contact us today for a free sample or quote.
                </p>
              </div>
            </section>

            {/* Products grid */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Photo Printing Services</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Explore the full range of photo printing and framing options we offer
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
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">What We Offer</Badge>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Photo Printing Services in Detail
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
                  Why Choose Ramirez Ventures for Photo Printing?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We combine professional-grade equipment, premium materials, and a passion for
                  accuracy to deliver prints that do justice to your best moments and images.
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
                  <p className="font-semibold text-foreground">Ready to print your memories?</p>
                  <p className="text-sm text-muted-foreground">
                    Contact us for a free consultation and quote today.
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
