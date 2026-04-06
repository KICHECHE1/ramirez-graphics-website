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
  { label: "Small (S)",       dimensions: "Chest 34–36 in", price: 1200 },
  { label: "Medium (M)",      dimensions: "Chest 38–40 in", price: 1200 },
  { label: "Large (L)",       dimensions: "Chest 40–42 in", price: 1200 },
  { label: "X-Large (XL)",    dimensions: "Chest 42–44 in", price: 1200 },
  { label: "XX-Large (XXL)",  dimensions: "Chest 44–46 in", price: 1400 },
];

const materialNote =
  "Printed on 180 gsm 100% combed ringspun cotton or 65/35 polyester-cotton blend. Fabric colour options include white, black, navy, grey, red, royal blue, and more. Printing via high-quality screen-print or direct-to-garment (DTG). Minimum order: 5 pieces.";

const faqs = [
  {
    q: "What print method do you use on T-shirts?",
    a: "We use screen-printing for orders of 10+ pieces (ideal for solid logos and text on a single fabric colour), and direct-to-garment (DTG) for smaller runs or designs with many colours and gradients.",
  },
  {
    q: "Can I print on the front, back, and sleeves?",
    a: "Yes. Standard orders include one placement (front chest or full front). Additional placements such as the full back, left sleeve, or right sleeve can be added at an extra cost per placement.",
  },
  {
    q: "How do I submit my artwork?",
    a: "Vector files (AI, EPS, or PDF) produce the sharpest results. High-resolution PNG with a transparent background (minimum 300 dpi at print size) is also accepted. We provide a free digital mockup before production.",
  },
  {
    q: "Do you supply the T-shirts or can I provide my own?",
    a: "We supply quality blank T-shirts as part of the order. If you already have garments you want printed, contact us first — we can print on customer-supplied garments in most cases.",
  },
  {
    q: "How long does production take?",
    a: "Orders of 5–30 pieces are typically ready within 3–5 business days. Larger orders may take 5–7 days. Rush orders can be arranged — WhatsApp us to confirm availability.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Branded Hoodies",            href: "/products/branded-apparel/hoodies",            image: ph(400, 300, "Branded+Hoodies") },
  { name: "Branded Aprons",             href: "/products/branded-apparel/aprons",              image: ph(400, 300, "Branded+Aprons") },
  { name: "Branded Jerseys for Clubs",  href: "/products/branded-apparel/jerseys",             image: ph(400, 300, "Branded+Jerseys") },
];

export default function TshirtsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Branded T-Shirts — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/branded-apparel" className="hover:text-foreground transition-colors">Branded Apparel</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Branded T-Shirts</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Branded T-Shirts
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            High-quality custom-printed T-shirts for corporate teams, events, schools, clubs, and
            promotions — your brand, worn everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Branded+T-Shirts")}
                alt="Branded T-Shirts"
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
                  Branded T-shirts are the most versatile and widely used form of branded apparel.
                  Whether you need staff uniforms, event giveaways, club T-shirts, school tour
                  tops, or promotional merchandise, Ramirez Ventures delivers a finished product
                  your team will be proud to wear.
                </p>
                <p>
                  We print on premium 180 gsm combed ringspun cotton T-shirts — softer and more
                  durable than standard garments — in a wide range of fabric colours. Our
                  screen-printing process uses plastisol inks that bond permanently to the fabric,
                  producing bold, wash-resistant prints that stay bright after hundreds of washes.
                  For complex multi-colour or photographic designs, we offer direct-to-garment
                  (DTG) printing.
                </p>
                <p>
                  Standard placements include the full front, full back, or left-chest logo. Sleeve
                  prints and all-over designs can be arranged on request.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>180 gsm combed ringspun cotton — premium soft feel</li>
                  <li>Screen-print or DTG print methods available</li>
                  <li>Wide range of fabric colours in stock</li>
                  <li>Front, back, sleeve, and all-over print options</li>
                  <li>Free design mockup before production</li>
                  <li>Minimum order: 5 pieces</li>
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

          {/* RIGHT: Sizes + Order */}
          <div className="flex flex-col gap-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Chest</th>
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
                      name: `Branded T-Shirt – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Branded+T-Shirt"),
                      href: "/products/branded-apparel/t-shirts",
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
                Orders confirmed within 1 hour · 3–5 day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design mockup supplied before we go to print</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Wash-resistant prints — colours stay bold after hundreds of washes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Wide range of fabric colours available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk pricing — the more you order, the less per piece</span>
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
