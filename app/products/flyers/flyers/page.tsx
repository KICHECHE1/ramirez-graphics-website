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
  { label: "A6 · Single-sided",  dimensions: "148 × 105 mm, 1 side, 130 gsm gloss", price: 2500 },
  { label: "A6 · Double-sided",  dimensions: "148 × 105 mm, 2 sides, 130 gsm gloss", price: 3200 },
  { label: "A5 · Single-sided",  dimensions: "210 × 148 mm, 1 side, 130 gsm gloss",  price: 3500 },
  { label: "A5 · Double-sided",  dimensions: "210 × 148 mm, 2 sides, 130 gsm gloss", price: 4500 },
  { label: "A4 · Single-sided",  dimensions: "297 × 210 mm, 1 side, 130 gsm gloss",  price: 5500 },
  { label: "A4 · Double-sided",  dimensions: "297 × 210 mm, 2 sides, 130 gsm gloss", price: 7000 },
];

const materialNote =
  "Printed full-colour on 130 gsm gloss art paper (standard). 100 gsm and 170 gsm options available on request. Matte and silk-coated finishes also available. Volume discounts apply at 1,000, 2,500, and 5,000+.";

const faqs = [
  {
    q: "What size flyer should I choose?",
    a: "A6 (postcard size) is the most cost-effective — great for discount offers, vouchers, and simple announcements. A5 is our most popular size and gives enough room for your logo, headline, key message, and contact details. A4 is ideal when you need to include detailed content, a price list, or a programme.",
  },
  {
    q: "What paper finishes are available?",
    a: "We offer gloss (shiny, vivid colours), matte (understated, readable under all lighting), and silk-coated (a semi-glossy premium feel). Standard is 130 gsm gloss. Heavier 170 gsm stocks are available for a luxury feel.",
  },
  {
    q: "Do you offer same-day flyer printing?",
    a: "Yes. Same-day printing is available for standard A6 and A5 sizes for orders placed before 10 AM with artwork ready to print. Express next-day service is available for all sizes. Contact us to confirm availability before ordering.",
  },
  {
    q: "Can you design my flyer?",
    a: "Yes. Our in-house design team will create your flyer from your logo, brand colours, and copy — included at no extra charge. If you already have a ready design, just send us the print-ready PDF.",
  },
  {
    q: "What file format should I submit?",
    a: "A print-ready PDF with 3 mm bleed on all sides is ideal. We also accept high-resolution JPEG and PNG files. If you are submitting a design for the first time we will walk you through the requirements.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order is 250 flyers. Volume discounts kick in at 500, 1,000, 2,500, and 5,000+ — the more you print, the lower the unit cost.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Brochures Printing",
    href: "/products/flyers/brochures",
    image: ph(400, 300, "Brochures+Printing"),
  },
  {
    name: "Posters Printing",
    href: "/products/election-printing/posters",
    image: ph(400, 300, "Posters"),
  },
  {
    name: "Document Printing",
    href: "/products/digital-printing/documents",
    image: ph(400, 300, "Document+Printing"),
  },
];

export default function FlyersPrintingPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Flyers — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Flyers Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Most Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Flyers Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Vibrant full-colour flyers in A6, A5, and A4 — gloss, matte, or silk finish —
            same-day available, free design, delivered across Kenya from Muhoroni.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Flyers+Printing")}
                alt="Flyers Printing"
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
                  Flyers are one of the most cost-effective and versatile marketing tools available
                  — and a well-printed flyer still cuts through digital noise when placed directly
                  in the hands of your target audience. At Ramirez Ventures we print full-colour
                  flyers in A6, A5, and A4 sizes on premium coated paper stocks, with same-day
                  turnaround available for urgent campaigns.
                </p>
                <p>
                  Whether you are promoting a product launch, announcing an event, sharing a
                  discount offer, running a political campaign, or distributing church programmes,
                  our flyers deliver sharp, vivid results that make your message impossible to
                  ignore. Printed using high-quality CMYK technology on 100–170 gsm paper in
                  gloss, matte, or silk-coated finishes.
                </p>
                <p>
                  No design? No problem. Our in-house team will create your flyer from your logo,
                  copy, and brand colours at no extra charge. Simply send us your details via
                  WhatsApp and we will handle the rest.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>A6, A5, and A4 sizes — single and double-sided</li>
                  <li>100 gsm, 130 gsm, and 170 gsm paper options</li>
                  <li>Gloss, matte, and silk-coated finishes available</li>
                  <li>Same-day printing for A6 and A5 (order by 10 AM)</li>
                  <li>Volume discounts at 500, 1,000, 2,500, 5,000+</li>
                  <li>Free design from your logo, copy, and brand colours</li>
                  <li>Minimum order: 250 flyers</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Sizes &amp; Finishes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
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
                      name: `Flyers – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Flyers+Printing"),
                      href: "/products/flyers/flyers",
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
                Orders confirmed within 1 hour · Same-day available · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Same-day printing — A6 &amp; A5 orders before 10 AM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free in-house design from your logo and copy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Gloss, matte, and silk finishes on quality paper stocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Volume discounts — the more you print, the less you pay</span>
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
