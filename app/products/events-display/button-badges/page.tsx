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
  { label: '25 mm (Lapel Pin)',       dimensions: "25 mm diameter",  price: 1500 },
  { label: '32 mm (Standard)',        dimensions: "32 mm diameter",  price: 1800 },
  { label: '44 mm (Medium)',          dimensions: "44 mm diameter",  price: 2200 },
  { label: '58 mm (Large)',           dimensions: "58 mm diameter",  price: 2800 },
  { label: '75 mm (Promotional)',     dimensions: "75 mm diameter",  price: 3500 },
];

const materialNote =
  "Printed on high-gloss paper under a scratch-resistant mylar film, pinned to a sturdy steel back. Minimum 50 badges per order. Custom shapes (square, star, heart) available on request.";

const faqs = [
  {
    q: "What is the minimum order quantity for button badges?",
    a: "Our minimum order is 50 badges per size. Volume pricing kicks in at 100, 250, and 500+ — contact us for a bulk quote.",
  },
  {
    q: "Can I mix different designs in one order?",
    a: "Yes. You can mix designs within the same size, though a small setup fee applies per unique design. For multi-design orders, just send all your artwork files together.",
  },
  {
    q: "What file format should I send for the badge artwork?",
    a: "High-resolution PNG or PDF files at 300 dpi work best. If you only have a logo in low resolution, our design team can recreate it. Send files via WhatsApp or email.",
  },
  {
    q: "Are the badges suitable for outdoor events?",
    a: "Yes. The mylar film over the print is waterproof and scratch-resistant, making our badges suitable for outdoor activations, field campaigns, and prolonged outdoor wear.",
  },
  {
    q: "Can you print name badges for delegates?",
    a: "Yes. We can print personalised name badges for conferences and corporate events. Individual names can be printed on each badge — ideal for delegate packs. Contact us with your delegate list.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Kitenge Notebooks",
    href: "/products/events-display/kitenge-notebooks",
    image: ph(400, 300, "Kitenge+Notebooks"),
  },
  {
    name: "Table Cloth Printing",
    href: "/products/events-display/table-cloth",
    image: ph(400, 300, "Table+Cloth"),
  },
  {
    name: "Adjustable Backdrop Banner",
    href: "/products/events-display/backdrop-banner",
    image: ph(400, 300, "Backdrop+Banner"),
  },
];

export default function EventsButtonBadgesPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Button Badges (Events Display) — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/events-display" className="hover:text-foreground transition-colors">Events Display</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Button Badges Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Button Badges Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Full-colour custom button badges for corporate events, expos, conferences, and branded
            activations — sizes from 25 mm lapel pins to 75 mm promotional badges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Button+Badges+Printing")}
                alt="Button Badges Printing"
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
                  Button badges are a timeless event branding tool — versatile, affordable, and
                  a guaranteed conversation starter. At Ramirez Ventures we press full-colour
                  custom badges in five standard sizes, from the discreet 25 mm lapel pin to the
                  bold 75 mm promotional badge. Each badge is printed under a scratch-resistant
                  mylar film laminate on a sturdy steel back with a standard pin closure.
                </p>
                <p>
                  Ideal for corporate events, trade shows, product launches, fundraisers, school
                  functions, and branded giveaways. We can print a single design across an entire
                  batch or personalise individual badges with delegate names — perfect for
                  conference packs and employee ID purposes.
                </p>
                <p>
                  The mylar coating is waterproof and UV-resistant, keeping colours vivid even
                  after extended outdoor use. Custom shapes including square, star, and heart
                  are available on request.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>5 sizes: 25 mm, 32 mm, 44 mm, 58 mm, 75 mm</li>
                  <li>Full-colour print under scratch-resistant mylar</li>
                  <li>Sturdy steel back with standard pin closure</li>
                  <li>Personalised delegate name badges available</li>
                  <li>Custom shapes on request</li>
                  <li>Minimum 50 badges per order</li>
                  <li>Volume discounts at 100, 250, 500+</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Diameter</th>
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
                      name: `Button Badges – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Button+Badges"),
                      href: "/products/events-display/button-badges",
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
                  <span>5 standard sizes — from lapel pin to promo badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Scratch-resistant, waterproof mylar coating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Personalised delegate names available per badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Volume discounts at 100, 250, and 500+</span>
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
