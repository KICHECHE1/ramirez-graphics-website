"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/lib/cart-context";

/* ─── placeholder helper ─── */
const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

const WHATSAPP = "254706207037";

/* ─── Size options ─── */
const sizes = [
  { label: "Standard", dimensions: "60cm × 160cm", price: 3500 },
  { label: "Wide", dimensions: "80cm × 200cm", price: 4500 },
  { label: "Extra Wide", dimensions: "85cm × 200cm", price: 5500 },
];

const materialNote =
  "Printed on premium 500-micron PVC vinyl with UV-resistant inks. Includes a lightweight retractable aluminium stand and a zip carry bag.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "How long does printing take?",
    a: "Standard orders are ready within 24 hours. Same-day printing is available for orders placed before 10 AM, subject to availability.",
  },
  {
    q: "Does the price include the stand and carry bag?",
    a: "Yes — every table rollup comes with the retractable aluminium stand, a cassette base, and a zip carry bag at no extra cost.",
  },
  {
    q: "What file format should I send for my artwork?",
    a: "We accept PDF, AI, EPS, PSD, or high-resolution JPG/PNG at a minimum of 150 dpi at full print size. Our design team can also create artwork for you.",
  },
  {
    q: "Can I order just a replacement print without a new stand?",
    a: "Absolutely. If you already own a retractable stand, we can print and supply a replacement graphic cassette at a discounted rate.",
  },
  {
    q: "Is the table rollup suitable for outdoor use?",
    a: "Table rollup banners are primarily designed for indoor use. For outdoor environments, we recommend our Adjustable Backdrop Banner, which handles wind better.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide via courier. Muhoroni orders qualify for free delivery. Upcountry delivery rates vary by destination.",
  },
];

/* ─── Related products ─── */
const relatedProducts = [
  {
    name: "Adjustable Backdrop Banner",
    href: "/products/banners/backdrop-banner",
    image: ph(400, 300, "Backdrop+Banner"),
  },
  {
    name: "Table Cloth Printing",
    href: "/products/banners/table-cloth",
    image: ph(400, 300, "Table+Cloth"),
  },
  {
    name: "S-Banner Printing",
    href: "/products/banners/s-banner",
    image: ph(400, 300, "S-Banner"),
  },
];

export default function TableRollupPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order a Table Rollup Banner — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ── Breadcrumb ── */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/banners" className="hover:text-foreground transition-colors">Banners</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Table Rollup Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Table Rollup Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Compact, retractable display banners for trade shows, conferences, retail counters, and
            corporate events — printed and delivered across Kenya.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Table+Rollup+Banner")}
                alt="Table Rollup Banner"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>

            {/* Product Overview */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Table rollup banners — also known as tabletop retractable banners — are one of the
                  most portable and effective display tools for any business or event. Designed to
                  sit neatly on a table or counter, they deliver a full-height branded visual in a
                  fraction of the space required by a floor-standing banner.
                </p>
                <p>
                  At Ramirez Ventures, we print table rollup banners using wide-format UV-resistant
                  inks on premium 500-micron PVC vinyl, ensuring sharp, vivid colours that won&apos;t
                  fade over time. Each banner is mounted on a quality retractable aluminium stand
                  that retracts smoothly and packs flat into the included carry bag for easy transport
                  and storage.
                </p>
                <p>
                  Ideal for product launches, trade exhibitions, hotel reception areas, corporate
                  offices, pharmacies, clinics, training rooms, and church events. With three size
                  options available, there is a table rollup that fits every space and budget.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>High-resolution UV-resistant print</li>
                  <li>Lightweight aluminium retractable stand included</li>
                  <li>Zip carry bag for easy portability</li>
                  <li>Suitable for repeated indoor use</li>
                  <li>Quick setup — no tools required</li>
                  <li>Free artwork set-up with every order</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground py-3">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-3 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* ════ RIGHT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Available Sizes */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Dimensions</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size) => (
                      <tr
                        key={size.label}
                        onClick={() => setSelectedSize(size)}
                        className={`border-b border-border last:border-0 cursor-pointer transition-colors ${
                          selectedSize.label === size.label
                            ? "bg-primary/10"
                            : "hover:bg-muted/40"
                        }`}
                      >
                        <td className="px-4 py-3 font-medium text-foreground">{size.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{size.dimensions}</td>
                        <td className="px-4 py-3 text-right">
                          <div
                            className={`inline-flex size-4 rounded-full border-2 transition-colors ${
                              selectedSize.label === size.label
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground bg-muted/40 rounded-lg p-3 leading-relaxed">
                {materialNote}
              </p>
            </div>

            {/* Order Methods */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-1">Order Now</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Selected:{" "}
                <span className="font-medium text-foreground">
                  {selectedSize.label} — {selectedSize.dimensions}
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Table Rollup Banner – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Table+Rollup"),
                      href: "/products/banners/table-rollup",
                    })
                  }
                >
                  <ShoppingCart className="size-5" />
                  Add to Cart
                </Button>
                <Button
                  className="w-full h-12 text-base gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white"
                  asChild
                >
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Orders confirmed within 1 hour · 24 hr turnaround · Free local Muhoroni delivery
              </p>
            </div>
          </div>
        </div>

        {/* ── Related Products — full width ── */}
        <section className="mt-16">
          <Separator className="mb-10" />
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {item.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
