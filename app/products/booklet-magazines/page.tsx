"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, MessageCircle, BookOpen, Printer, Clock, ShieldCheck, Star, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

/* ─── Products ─── */
const bookletProducts = [
  {
    id: "bm-1",
    name: "Funeral Programs Printing",
    image: ph(500, 380, "Funeral+Programs"),
    href: "/products/booklet-magazines/funeral-programs",
    badge: "Popular",
    description:
      "Dignified, professionally printed funeral programs and order of service booklets. Full-colour printing on premium paper with same-day turnaround available.",
  },
  {
    id: "bm-2",
    name: "Booklet & Magazine Printing",
    image: ph(500, 380, "Booklet+Magazines"),
    href: "/products/booklet-magazines/booklets",
    badge: "Best Seller",
    description:
      "Custom booklets, company profiles, catalogues, and magazines printed in full colour. Saddle-stitched or perfect-bound — any size, any quantity.",
  },
];

const PHONE = "+254 700 000 000";
const WHATSAPP = "254700000000";

export default function BookletMagazinesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80">
        <Image
          src={ph(1400, 480, "Booklet+%26+Magazine+Printing+Kenya")}
          alt="Booklet and magazine printing"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/products" className="hover:text-primary-foreground transition-colors">Products</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-primary-foreground font-medium">Booklet Magazines</span>
          </nav>

          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
              Booklet & Magazine Printing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight mb-4">
              Booklet & Magazine Printing in Kenya
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Professional full-colour booklets, company profiles, magazines, and funeral programs
              — printed and delivered across Kenya with fast turnaround.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg" asChild>
                <a href="#products">View Products</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-primary-foreground hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
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
                  const isActive = cat.href === "/products/booklet-magazines";
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

              <div className="px-2 flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">Need a custom quote?</p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
          </aside>

          {/* ── Body ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-14">

            {/* Mobile category pills */}
            <div className="flex gap-2 flex-wrap lg:hidden">
              {productCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    cat.href === "/products/booklet-magazines"
                      ? "bg-primary text-primary-foreground border-primary font-semibold"
                      : "border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* ── Introduction ── */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">About This Category</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-snug">
                Kenya&apos;s Go-To Booklet & Magazine Printing Company
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
                <p>
                  At Ramirez Ventures, we specialise in producing high-quality booklets, magazines,
                  company profiles, catalogues, and funeral programs for clients across Kenya. Whether
                  you need a sleek corporate brochure for a board meeting, a full-colour magazine for
                  your organisation, or a dignified order-of-service booklet for a memorial service,
                  our team is ready to bring your vision to print.
                </p>
                <p>
                  We use premium paper stocks and professional binding — saddle-stitched for shorter
                  runs and perfect-bound for thicker publications — ensuring your printed material
                  looks and feels exceptional. Bulk orders are welcome, and our in-house design team
                  can assist with layout and artwork at no extra charge.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Printer, label: "Full-Colour Printing" },
                  { icon: BookOpen, label: "Saddle & Perfect Bound" },
                  { icon: Clock, label: "Fast Turnaround" },
                  { icon: ShieldCheck, label: "Premium Paper Stocks" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 py-5 px-3 text-center"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Products grid ── */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Our Products</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Click a product to view full details and pricing
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {bookletProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {bookletProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={product.href}
                    className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
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
                    </div>

                    {/* Info */}
                    <div className="p-5 flex flex-col gap-2">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {product.name}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View Details <ChevronRight className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── Why Choose Ramirez Ventures ── */}
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="text-center mb-10">
                <Badge variant="secondary" className="mb-3">Why Choose Us</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Why Choose Ramirez Ventures for Your Booklet & Magazine Printing?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  We combine cutting-edge printing technology with unmatched customer service to
                  deliver publications that represent your brand with pride.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Star,
                    title: "Vibrant Full-Colour Printing",
                    description:
                      "Our high-resolution presses reproduce photos and graphics with stunning clarity, making every page look professionally designed.",
                  },
                  {
                    icon: Clock,
                    title: "Fast Turnaround",
                    description:
                      "Most orders are ready within 24–48 hours. Urgent same-day printing is available for standard runs — just let us know your deadline.",
                  },
                  {
                    icon: BookOpen,
                    title: "Multiple Binding Options",
                    description:
                      "Choose from saddle-stitching for thinner booklets or perfect binding for bulkier publications — we handle both with ease.",
                  },
                  {
                    icon: Palette,
                    title: "Free Design Assistance",
                    description:
                      "Our in-house design team will lay out your content and artwork at no extra cost — just send us your text, images, and logo.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Premium Paper & Finish",
                    description:
                      "We stock a wide range of paper weights and finishes — gloss, matte, silk — so your booklet feels as good as it looks.",
                  },
                  {
                    icon: Printer,
                    title: "Trusted by 5,000+ Clients",
                    description:
                      "From churches and schools to corporates and government agencies, thousands of Kenyan organisations trust Ramirez Ventures to print for them.",
                  },
                ].map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-xl bg-muted/40 p-5 border border-border/60"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CTA section ── */}
            <section className="rounded-2xl overflow-hidden border border-border bg-primary">
              <div className="p-8 sm:p-10 text-primary-foreground text-center flex flex-col items-center gap-5">
                <Badge className="bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
                  Ready to Print?
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug max-w-xl">
                  Let&apos;s Print Your Booklets & Magazines
                </h2>
                <p className="text-primary-foreground/80 max-w-lg">
                  Fast turnaround. Bulk discounts. Delivered across Kenya. Call or WhatsApp us now
                  and we&apos;ll send you a quote within minutes.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-2">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg font-semibold"
                    asChild
                  >
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                      <Phone className="size-4" />
                      {PHONE}
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-primary-foreground hover:bg-white/15 gap-2"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like a quote for booklet or magazine printing.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-primary-foreground hover:bg-white/15"
                    asChild
                  >
                    <Link href="/contact">Get a Quote Online</Link>
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
