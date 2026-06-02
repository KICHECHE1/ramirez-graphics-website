"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  CheckCircle2,
  Clock,
  Droplets,
  Flame,
  Layers,
  PackageCheck,
  Recycle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

const THIS_HREF = "/products/screen-printing";

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
  { label: "Screen Printing", href: THIS_HREF },
  { label: "Promotional Items", href: "/products/promotional-items" },
  { label: "Signages", href: "/products/signages" },
  { label: "Stationary", href: "/products/stationary" },
  { label: "Stickers", href: "/products/stickers" },
  { label: "T-shirts", href: "/products/t-shirts" },
];

const products = [
  { id: "1", name: "Screen Printing", image: ph(400, 320, "Screen+Printing") },
  { id: "2", name: "Pre-burn Screens", image: ph(400, 320, "Pre-burn+Screens") },
  { id: "3", name: "Screen Reclamation", image: ph(400, 320, "Screen+Reclamation") },
  { id: "4", name: "Exposure Artwork", image: ph(400, 320, "Exposure+Artwork") },
  { id: "5", name: "Start Up Kits", image: ph(400, 320, "Start+Up+Kit") },
  { id: "6", name: "Screen Printing Inks", image: ph(400, 320, "Printing+Inks") },
  { id: "7", name: "Screen Printing Transfers", image: ph(400, 320, "Screen+Transfers") },
  { id: "8", name: "Heat Transfer Vinyls", image: ph(400, 320, "Heat+Transfer+Vinyls") },
  { id: "9", name: "DTF Transfers", image: ph(400, 320, "DTF+Transfers") },
];

const productDescriptions = [
  {
    name: "Screen Printing",
    description:
      "Durable spot-colour printing for T-shirts, uniforms, aprons, bags, posters, stickers, and branded merchandise. Best for bold artwork, repeat jobs, and bulk orders that need consistent colour.",
  },
  {
    name: "Pre-burn Screens",
    description:
      "Ready-to-print screens coated, exposed, and washed out for your artwork. Bring your design and we prepare a clean stencil so you can go straight into production.",
  },
  {
    name: "Screen Reclamation",
    description:
      "Used screens cleaned, stripped, degreased, and prepared for fresh coating. Reclamation helps you reuse frames, reduce waste, and keep mesh open for sharp future prints.",
  },
  {
    name: "Exposure Artwork",
    description:
      "High-contrast artwork preparation for exposure, including black positives, sizing, separation guidance, and layout checks for clean edges and accurate registration.",
  },
  {
    name: "Start Up Kits",
    description:
      "Practical starter packages for new printers, with essentials such as screens, squeegees, ink, emulsion, coating tools, cleaning supplies, and basic production guidance.",
  },
  {
    name: "Screen Printing Inks",
    description:
      "Quality inks for garment and general screen-printing work, supplied for solid colours, specialty effects, and production use. We help match ink choice to fabric and artwork.",
  },
  {
    name: "Screen Printing Transfers",
    description:
      "Transfer-ready prints for applying screen-printed artwork with heat. A useful option when you need repeat designs, event merchandise, or off-site application.",
  },
  {
    name: "Heat Transfer Vinyls",
    description:
      "Cuttable heat-transfer vinyls for names, numbers, logos, and simple designs on apparel. Available for sports kits, uniforms, staff wear, and personalised garments.",
  },
  {
    name: "DTF Transfers",
    description:
      "Full-colour direct-to-film transfers for detailed graphics, gradients, and short runs. Press them onto T-shirts, hoodies, tote bags, and other compatible fabrics.",
  },
];

const features = [
  {
    icon: Layers,
    title: "Complete Screen Setup",
    description:
      "Artwork checks, coating, exposure, washout, registration support, and production advice are available in one place.",
  },
  {
    icon: Flame,
    title: "Transfer Options",
    description:
      "Choose screen transfers, heat-transfer vinyl, or DTF transfers depending on detail, quantity, fabric, and turnaround.",
  },
  {
    icon: Droplets,
    title: "Ink and Material Advice",
    description:
      "We help you choose inks, mesh, films, and transfer materials that suit your garment, artwork, and budget.",
  },
  {
    icon: Recycle,
    title: "Screen Reuse",
    description:
      "Reclamation services keep your frames productive by removing old stencils and preparing mesh for new work.",
  },
  {
    icon: PackageCheck,
    title: "Beginner Friendly Kits",
    description:
      "Start up kits give new screen printers the basic tools and consumables needed to begin printing with confidence.",
  },
  {
    icon: Clock,
    title: "Fast Local Support",
    description:
      "Send your artwork and requirements for a quick quote, lead time, and practical advice before production starts.",
  },
];

export default function ScreenPrintingPage() {
  const allCategories = [...productCategories, ...moreCategories];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 420, "Screen+Printing+Supplies+and+Transfers")}
          alt="Screen printing supplies and transfers"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-primary-foreground/70">
            <Link href="/" className="transition-colors hover:text-primary-foreground">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="transition-colors hover:text-primary-foreground">Products</Link>
            <ChevronRight className="size-3.5" />
            <span className="font-medium text-primary-foreground">Screen Printing</span>
          </nav>
          <div className="max-w-2xl">
            <Badge className="mb-4 border-0 bg-white/20 text-primary-foreground backdrop-blur-sm">
              Printing, Supplies &amp; Transfers
            </Badge>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Screen Printing Services in Kenya
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/80">
              Screen printing, pre-burn screens, screen reclamation, exposure artwork,
              start up kits, inks, screen transfers, heat-transfer vinyls, and DTF transfers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary shadow-lg hover:bg-white/90" asChild>
                <a href="#products">View Options</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-primary-foreground hover:bg-white/10" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex gap-10 lg:items-start">
          <aside className="sticky top-24 hidden w-56 shrink-0 lg:block">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <h2 className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Product Categories
              </h2>
              <nav className="flex flex-col gap-0.5">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                  >
                    <span>{cat.label}</span>
                    <ChevronRight className="size-3.5 opacity-50" />
                  </Link>
                ))}
              </nav>
              <Separator className="my-4" />
              <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
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
                          ? "bg-primary font-semibold text-primary-foreground"
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
                <p className="mb-3 text-xs text-muted-foreground">Need help choosing?</p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-16">
            <div className="flex flex-wrap gap-2 lg:hidden">
              {allCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    cat.href === THIS_HREF
                      ? "border-primary bg-primary font-semibold text-primary-foreground"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">About Screen Printing</Badge>
              <h2 className="mb-5 text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                Screen Printing Support From Artwork to Final Transfer
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  Ramirez Ventures supports screen printers, apparel brands, schools, churches,
                  teams, and businesses with practical screen-printing services and supplies. We
                  can print finished garments, prepare screens for your own workshop, reclaim used
                  screens, expose artwork, and supply transfers or materials for heat application.
                </p>
                <p>
                  Screen printing is ideal for bold, durable designs on bulk apparel and branded
                  merchandise. For detailed full-colour designs or short runs, we also offer DTF
                  transfers and heat-transfer vinyl options so you can choose the right method for
                  your artwork, quantity, fabric, and budget.
                </p>
                <p>
                  Send us your logo, artwork size, garment type, quantity, and deadline. We will
                  recommend the best production route and quote the job before work begins.
                </p>
              </div>
            </section>

            <section id="products">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Screen Printing Products &amp; Services</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Everything from prepared screens and inks to finished transfers
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {products.length} Options
                </Badge>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold leading-snug text-foreground">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">What We Offer</Badge>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Screen Printing Options in Detail
              </h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {productDescriptions.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-3 rounded-xl border border-border/60 bg-muted/40 p-4"
                  >
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <CheckCircle2 className="size-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-foreground">{item.name}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-10 text-center">
                <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Built for Printers, Brands, and Bulk Apparel Jobs
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                  Get practical production support, clear advice, and the right materials for
                  screen printing, vinyl, and DTF work.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex gap-4 rounded-xl border border-border/60 bg-muted/40 p-5"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-foreground">{feature.title}</h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-foreground">Ready to start your screen-printing job?</p>
                  <p className="text-sm text-muted-foreground">
                    Send your artwork and requirements for a fast quote.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button asChild size="lg"><Link href="/contact">Get a Free Quote</Link></Button>
                  <Button asChild size="lg" variant="outline"><a href="#products">Browse Options</a></Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Browse Other Categories</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {allCategories
                  .filter((c) => c.href !== THIS_HREF)
                  .map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
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
