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

const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

const WHATSAPP = "254706207037";

const sizes = [
  { label: "A5 · Bi-fold",          dimensions: "A4 sheet folded to A5 (4 panels)",  price: 6500 },
  { label: "A5 · Tri-fold (DL)",    dimensions: "A4 sheet folded to DL (6 panels)",  price: 7500 },
  { label: "A4 · Bi-fold",          dimensions: "A3 sheet folded to A4 (4 panels)",  price: 9500 },
  { label: "A4 · Tri-fold",         dimensions: "A3 sheet folded to DL/A4 (6 panels)", price: 11000 },
  { label: "A4 · Z-fold",           dimensions: "A3 sheet folded Z-style (6 panels)", price: 12000 },
];

const materialNote =
  "Printed full-colour on 170 gsm gloss or matte art paper. Professionally scored and folded for a crisp, clean finish. Volume discounts apply at 500, 1,000, and 2,500+. Heavier 200 gsm stocks available on request.";

const faqs = [
  {
    q: "What is the difference between a bi-fold and tri-fold brochure?",
    a: "A bi-fold brochure is an A4 or A3 sheet folded once in the middle, giving you 4 panels to work with — perfect for corporate profiles, menus, and event programmes. A tri-fold divides the sheet into three panels (6 sides) and is the most popular brochure format — ideal for product catalogues, service menus, and trade show handouts. Z-fold (also 6 panels) opens like a zigzag rather than a leaflet.",
  },
  {
    q: "What paper weight do you recommend for brochures?",
    a: "We recommend 170 gsm as the standard for brochures — it is heavy enough to feel premium but folds cleanly without cracking. For luxury corporate profiles and upmarket brands we offer 200 gsm and above.",
  },
  {
    q: "Should I use gloss or matte paper for my brochure?",
    a: "Gloss paper gives vibrant, high-impact colour reproduction — great for product imagery, photography, and designs with strong colour. Matte paper has a softer, more sophisticated look and is easier to read under bright lighting — preferred for text-heavy corporate profiles and services brochures.",
  },
  {
    q: "Can you design my brochure?",
    a: "Yes. Our in-house design team can create your brochure from scratch using your logo, brand colours, and content. For a bi-fold or tri-fold, just send your text, images, and brand assets and we will produce a layout for your approval before going to print.",
  },
  {
    q: "What file setup do I need to provide?",
    a: "A print-ready PDF with crop marks and 3 mm bleed on all sides is required for brochures due to the folding and cutting tolerance. If you are providing your own artwork, we will review it before printing to flag any setup issues.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "Our minimum for brochures is 250 copies. Volume discounts apply at 500, 1,000, and 2,500+ — contact us for a bulk pricing quote.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Flyers Printing",
    href: "/products/flyers/flyers",
    image: ph(400, 300, "Flyers+Printing"),
  },
  {
    name: "Booklet Magazines Printing",
    href: "/products/booklet-magazines/booklets",
    image: ph(400, 300, "Booklets"),
  },
  {
    name: "Document Printing",
    href: "/products/digital-printing/documents",
    image: ph(400, 300, "Document+Printing"),
  },
];

export default function BrochuresPrintingPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Brochures — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/flyers" className="hover:text-foreground transition-colors">Flyers</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Brochures Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Brochures Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Professional bi-fold, tri-fold, and Z-fold brochures on 170 gsm premium paper —
            sharp full-colour, scored and folded, free design, delivered across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Brochures+Printing")}
                alt="Brochures Printing"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A well-designed brochure remains one of the most effective tools for
                  communicating your brand story, products, and services in a compact and
                  professional format. Unlike a single-page flyer, a brochure gives you multiple
                  panels to guide your reader through your offering — and it stays on desks and
                  in bags far longer than a flyer does.
                </p>
                <p>
                  At Ramirez Ventures we print bi-fold, tri-fold, and Z-fold brochures in A5
                  and A4 finished sizes on 170 gsm premium art paper in gloss or matte finishes.
                  Every brochure is professionally scored before folding to ensure crisp, clean
                  fold lines that do not crack or whiten on dark-coloured backgrounds.
                </p>
                <p>
                  Popular uses include corporate company profiles, product catalogues, services
                  menus for hotels and restaurants, trade show handouts, real estate property
                  listings, school and university prospectuses, and NGO programme documents. Our
                  design team can create your layout from scratch or adapt your existing artwork
                  — just send your content and we handle the rest.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Bi-fold (4 panels), tri-fold (6 panels), and Z-fold options</li>
                  <li>A5 and A4 finished sizes</li>
                  <li>170 gsm gloss or matte art paper</li>
                  <li>Professionally scored for crisp, crack-free fold lines</li>
                  <li>Full-colour CMYK printing on both sides</li>
                  <li>Free design from your logo, copy, and brand assets</li>
                  <li>Minimum 250 copies per order</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
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

          {/* RIGHT */}
          <div className="flex flex-col gap-8">
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
                          selectedSize.label === size.label ? "bg-primary/10" : "hover:bg-muted/40"
                        }`}
                      >
                        <td className="px-4 py-3 font-medium text-foreground">{size.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{size.dimensions}</td>
                        <td className="px-4 py-3 text-right">
                          <div className={`inline-flex size-4 rounded-full border-2 transition-colors ${
                            selectedSize.label === size.label ? "border-primary bg-primary" : "border-muted-foreground"
                          }`} />
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

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-1">Order Now</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Selected: <span className="font-medium text-foreground">{selectedSize.label} — {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Brochures – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Brochures+Printing"),
                      href: "/products/flyers/brochures",
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
                  <a href={`https://wa.me/${WHATSAPP}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Orders confirmed within 1 hour · 2–3 day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Professionally scored — crisp, crack-free fold lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>170 gsm premium paper — feels substantial and professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design from your logo, copy, and brand assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Volume discounts at 500, 1,000, and 2,500+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-14" />

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
