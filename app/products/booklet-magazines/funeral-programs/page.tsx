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

const WHATSAPP = "254700000000";

/* ─── Size / format options ─── */
const sizes = [
  { label: "A5 · 4-page folded card", dimensions: "148 × 210 mm, 4 pp", price: 3500 },
  { label: "A5 · 8-page booklet",     dimensions: "148 × 210 mm, 8 pp", price: 5500 },
  { label: "A5 · 12-page booklet",    dimensions: "148 × 210 mm, 12 pp", price: 7500 },
  { label: "A4 · 8-page booklet",     dimensions: "210 × 297 mm, 8 pp", price: 8500 },
  { label: "A4 · 16-page booklet",    dimensions: "210 × 297 mm, 16 pp", price: 13500 },
];

const materialNote =
  "Printed full-colour on 130 gsm or 170 gsm gloss/matte coated paper. Saddle-stitched (staple-bound) for a clean, professional finish. Cover upgrades to 250 gsm art board available on request. Minimum order: 25 copies.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "Can you do same-day turnaround for urgent orders?",
    a: "Yes. For orders placed before 10 AM with artwork ready, we offer same-day production. Contact us on WhatsApp first to confirm capacity, especially during peak periods.",
  },
  {
    q: "What file format should I submit?",
    a: "PDF (print-ready, with bleed and crop marks) is strongly preferred. We also accept AI, PSD, or high-resolution JPG/PNG. If you only have photos and text, our design team can set the program layout for you at a small artwork fee.",
  },
  {
    q: "Can content changes be made last minute?",
    a: "Small text edits (names, dates, photo swaps) can usually be accommodated up to 2 hours before print. For larger changes, contact us immediately so we can advise on feasibility.",
  },
  {
    q: "What finish options are available?",
    a: "We offer gloss laminate, matte laminate, and uncoated finishes on the cover. The inside pages are typically unlaminated for easy writing and a respectful, sombre feel.",
  },
  {
    q: "Do you offer delivery outside Muhoroni?",
    a: "Yes, we deliver nationwide. Muhoroni orders qualify for free local delivery. Courier charges apply for upcountry and out-of-town deliveries.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum is 25 copies per order. We can produce higher quantities at significantly reduced unit costs — contact us for a bulk quote.",
  },
];

/* ─── Related products ─── */
const relatedProducts = [
  {
    name: "Booklet & Magazine Printing",
    href: "/products/booklet-magazines/booklets",
    image: ph(400, 300, "Booklet+Printing"),
  },
  {
    name: "Flyers Printing",
    href: "/products/flyers",
    image: ph(400, 300, "Flyers"),
  },
  {
    name: "Business Cards Printing",
    href: "/products/business-cards",
    image: ph(400, 300, "Business+Cards"),
  },
];

export default function FuneralProgramsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Funeral Programs — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ── Breadcrumb ── */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/booklet-magazines" className="hover:text-foreground transition-colors">Booklet Magazines</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Funeral Programs Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Funeral Programs Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Dignified, professionally printed order-of-service booklets and memorial programs —
            designed with care and delivered same day when needed.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN: Image + Overview + FAQ ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Funeral+Programs+Printing")}
                alt="Funeral Programs Printing"
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
                  A funeral program is a lasting tribute — the printed keepsake that mourners take
                  home long after the service. At Ramirez Ventures we understand the weight of this
                  moment, which is why we treat every funeral program order with the same precision
                  and care we apply to our highest-end corporate work.
                </p>
                <p>
                  We print full-colour order-of-service booklets and memorial programs on premium
                  coated paper, saddle-stitched for a clean, professional finish. Our in-house
                  design team can lay out the program from your supplied photos and text — or we can
                  print from a ready file you provide. We work quickly and discreetly to meet your
                  timeline.
                </p>
                <p>
                  Common formats include A5 folded cards (4-page), compact 8- or 12-page booklets,
                  and larger A4 booklets for services with detailed order of worship, tributes, and
                  photo memories.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour printing on 130 gsm or 170 gsm coated paper</li>
                  <li>Saddle-stitched (staple-bound) for a neat, professional look</li>
                  <li>Cover upgrade to 250 gsm art board available</li>
                  <li>Gloss, matte, or uncoated finish options</li>
                  <li>In-house design and layout service available</li>
                  <li>Same-day production for urgent orders (artwork by 10 AM)</li>
                  <li>Minimum 25 copies — bulk rates for larger quantities</li>
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

          {/* ════ RIGHT COLUMN: Formats + Order ════ */}
          <div className="flex flex-col gap-8">
            {/* Available Formats */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Formats</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Format</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
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
                      name: `Funeral Programs – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Funeral+Programs"),
                      href: "/products/booklet-magazines/funeral-programs",
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
                Orders confirmed within 1 hour · Same-day available · Free local Muhoroni delivery
              </p>
            </div>

            {/* Trust badges */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Handled with care and sensitivity throughout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Same-day turnaround for urgent funeral orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>In-house design layout from photos and text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design proof before printing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-14" />

        {/* ── Related products ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </p>
                  <p className="mt-1 text-xs text-primary font-medium">View product →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
