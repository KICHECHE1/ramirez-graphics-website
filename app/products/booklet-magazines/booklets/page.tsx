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

/* ─── Format / size options ─── */
const sizes = [
  { label: "A5 · 8-page booklet",    dimensions: "148 × 210 mm, 8 pp",  price: 6500 },
  { label: "A5 · 16-page booklet",   dimensions: "148 × 210 mm, 16 pp", price: 10500 },
  { label: "A5 · 24-page booklet",   dimensions: "148 × 210 mm, 24 pp", price: 14500 },
  { label: "A4 · 8-page booklet",    dimensions: "210 × 297 mm, 8 pp",  price: 9500 },
  { label: "A4 · 16-page booklet",   dimensions: "210 × 297 mm, 16 pp", price: 15500 },
  { label: "A4 · 32-page magazine",  dimensions: "210 × 297 mm, 32 pp", price: 28000 },
];

const materialNote =
  "Printed full-colour on 130 gsm or 170 gsm gloss/matte coated text pages with a 250 gsm art-board cover. Saddle-stitched (staple-bound) up to 64 pages; perfect-bound (spine glue) available for thicker editions. Minimum order: 25 copies.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "What is the difference between saddle-stitching and perfect binding?",
    a: "Saddle-stitching uses two staples through the spine — ideal for booklets up to about 64 pages. Perfect binding glues a flat spine, giving a more magazine-like look and allowing printed spines. We recommend perfect binding for 40+ page publications.",
  },
  {
    q: "What file format should I submit?",
    a: "Print-ready PDF with 3 mm bleed and crop marks is strongly preferred. We also accept Adobe InDesign packages, AI, or high-resolution JPG/PNG. If only text and images are supplied, our design team can build the full layout for you at an artwork fee.",
  },
  {
    q: "Can I mix full-colour pages with black-and-white pages to save cost?",
    a: "Yes. You can specify which spreads are black-and-white to reduce unit costs. Just indicate this clearly when you send your files and we will quote accordingly.",
  },
  {
    q: "Do you offer proofreading or design revisions?",
    a: "We send a digital soft-proof (PDF) for your sign-off before going to print. Up to two rounds of minor revisions are included. Major redesigns or content rewrites may attract an additional artwork fee.",
  },
  {
    q: "What kind of magazines or booklets can you print?",
    a: "School magazines, church bulletins, company newsletters, product catalogues, event programmes, conference proceedings, association journals, and more. If it binds and prints, we can produce it.",
  },
  {
    q: "Do you offer delivery outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

/* ─── Related products ─── */
const relatedProducts = [
  {
    name: "Funeral Programs Printing",
    href: "/products/booklet-magazines/funeral-programs",
    image: ph(400, 300, "Funeral+Programs"),
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

export default function BookletsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order a Booklet / Magazine — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Booklet &amp; Magazine Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Booklet &amp; Magazine Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            High-quality full-colour booklets, catalogues, and magazines — saddle-stitched or
            perfect-bound — printed and delivered across Kenya from Muhoroni, Kisumu.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN: Image + Overview + FAQ ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Booklet+Magazine+Printing")}
                alt="Booklet and Magazine Printing"
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
                  Whether you need a sleek product catalogue, a church bulletin, a school magazine,
                  or a full-colour corporate newsletter, Ramirez Ventures has the equipment and
                  expertise to deliver it. We print booklets and magazines of all sizes and page
                  counts — from compact A5 8-page inserts to A4 32-page editions — using
                  professional wide-format and digital print technology.
                </p>
                <p>
                  Every booklet is printed in vivid full colour on premium coated text paper, with
                  your choice of gloss or matte finish. Covers are printed on 250 gsm art board for
                  rigidity and a polished first impression. Binding options include saddle-stitching
                  (staple-bound spine) for thinner editions and perfect binding (flat glue spine)
                  for thicker publications that benefit from a printed spine.
                </p>
                <p>
                  Our in-house design team can create your layout from scratch or work from supplied
                  files. We provide a digital proof before any sheets go to press so you can
                  approve every detail with confidence.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour printing on 130 gsm or 170 gsm coated text pages</li>
                  <li>250 gsm art-board cover as standard</li>
                  <li>Gloss, matte, or soft-touch laminate cover options</li>
                  <li>Saddle-stitched up to 64 pages; perfect-bound for thicker editions</li>
                  <li>In-house layout and graphic design service available</li>
                  <li>Digital soft-proof supplied before printing</li>
                  <li>Minimum 25 copies — competitive bulk pricing available</li>
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
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Spec</th>
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
                      name: `Booklet / Magazine – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Booklet+Magazine"),
                      href: "/products/booklet-magazines/booklets",
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
                Orders confirmed within 1 hour · 3–5 day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            {/* Trust badges */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Digital proof supplied before printing — approve before we press</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>In-house design and layout from your content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Saddle-stitched or perfect-bound finish available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Competitive bulk pricing — the more you print, the less per copy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-14" />

        {/* ── Related Products ── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-4/3 bg-muted overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {product.name}
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
