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
  { label: "Small (S)",       dimensions: "Chest 34 to 36 in", price: 1800 },
  { label: "Medium (M)",      dimensions: "Chest 38 to 40 in", price: 1800 },
  { label: "Large (L)",       dimensions: "Chest 40 to 42 in", price: 1800 },
  { label: "X-Large (XL)",    dimensions: "Chest 42 to 44 in", price: 1800 },
  { label: "XX-Large (XXL)",  dimensions: "Chest 44 to 46 in", price: 2000 },
];

const materialNote =
  "Printed using dye-sublimation on 100% polyester performance fabric (150 to 160 gsm). Fully sublimated all-over print, no peel, no crack, no fade. Rounded neck or V-neck available. Numbers and names can be added front and back. Minimum order: 10 pieces per design.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "What is the minimum order for custom jerseys?",
    a: "Our minimum is 10 pieces per design. This allows us to maintain colour consistency across the batch while keeping the unit cost competitive. Contact us for pricing on larger team or league orders of 50+ pieces.",
  },
  {
    q: "Can we have different numbers and names on each jersey?",
    a: "Yes. Player names and squad numbers are included at no extra charge. Simply provide a numbered list with each player's name and shirt number when placing your order.",
  },
  {
    q: "What printing method do you use?",
    a: "We use dye-sublimation printing, which infuses the ink directly into the polyester fibres. The result is a fully all-over, vibrant print that will not peel, crack, or fade, even after repeated washing and play.",
  },
  {
    q: "Can I supply my own design or logo?",
    a: "Absolutely. You can send your own complete design or just a logo and club colours, our in-house design team will build the full jersey layout at no extra charge. We send a digital mock-up for your approval before production.",
  },
  {
    q: "What collar styles are available?",
    a: "We offer round-neck, V-neck, and polo-collar (with button placket) options. Just specify your preference when ordering.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders of 10 to 50 pieces are ready within 5 to 7 working days. Larger orders (50+ pieces) may take 7 to 10 days. Rush production is available for an extra fee, contact us to confirm availability.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

/* ─── Related products ─── */
const relatedProducts = [
  {
    name: "Branded T-Shirts",
    href: "/products/branded-apparel/t-shirts",
    image: ph(400, 300, "Branded+T-Shirts"),
  },
  {
    name: "Branded Hoodies",
    href: "/products/branded-apparel/hoodies",
    image: ph(400, 300, "Branded+Hoodies"),
  },
  {
    name: "Reflector Jackets Printing",
    href: "/products/branded-apparel/reflector-jackets",
    image: ph(400, 300, "Reflector+Jackets"),
  },
];

export default function JerseysPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Branded Jerseys, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ── Breadcrumb ── */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/branded-apparel" className="hover:text-foreground transition-colors">Branded Apparel</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Branded Jerseys for Clubs</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Branded Jerseys for Clubs
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Fully sublimated all-over print jerseys for football, volleyball, netball, basketball,
            and any team sport, custom names, numbers, and logos included.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN: Image + Overview + FAQ ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Branded+Jerseys+for+Clubs")}
                alt="Branded Jerseys for Clubs"
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
                  Give your club, school team, or sports organisation a professional identity with
                  fully customised branded jerseys from Ramirez Ventures. We produce high-quality
                  sublimation-printed jerseys for football, volleyball, netball, basketball,
                  athletics, and any other team sport, with your colours, crest, sponsor logos,
                  player names, and squad numbers all included.
                </p>
                <p>
                  Our jerseys are printed using dye-sublimation technology onto 100% polyester
                  performance fabric. Unlike screen-printed or heat-transfer designs, sublimation
                  infuses the ink into the fibres themselves, so the print is permanent, fully
                  breathable, and will not peel, crack, or fade after repeated washing and
                  hard use on the pitch.
                </p>
                <p>
                  You can supply your own design or brief our team with your club colours and crest
                  and we will build the full kit layout from scratch at no extra charge. A digital
                  mock-up is sent for your approval before a single piece goes into production,
                  so you always know exactly what you are getting.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>All-over dye-sublimation print, no peel, no crack, no fade</li>
                  <li>100% polyester breathable performance fabric (150 to 160 gsm)</li>
                  <li>Player names and squad numbers included at no extra charge</li>
                  <li>Round-neck, V-neck, or polo-collar options</li>
                  <li>Front and back number/name printing available</li>
                  <li>In-house design, send us your logo and we handle the rest</li>
                  <li>Digital mock-up approval before production</li>
                  <li>Minimum 10 pieces per design</li>
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

          {/* ════ RIGHT COLUMN: Sizes + Order ════ */}
          <div className="flex flex-col gap-8">
            {/* Available Sizes */}
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
                  {selectedSize.label}, {selectedSize.dimensions}
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Branded Jersey  to  ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Branded+Jersey"),
                      href: "/products/branded-apparel/jerseys",
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
                Orders confirmed within 1 hour · 5 to 7 day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            {/* Trust badges */}
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Digital mock-up sent for approval before production begins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Names &amp; numbers included, no hidden charges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>All-over sublimation, breathable, durable, wash-proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk discounts available for leagues &amp; tournaments</span>
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
