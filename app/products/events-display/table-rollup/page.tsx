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
  { label: "60 × 160 cm",  dimensions: "60 × 160 cm — compact table banner",  price: 4500 },
  { label: "80 × 200 cm",  dimensions: "80 × 200 cm — standard table banner",  price: 5500 },
  { label: "100 × 200 cm", dimensions: "100 × 200 cm — wide table banner",     price: 6500 },
];

const materialNote =
  "Printed on 440 gsm premium cast-coated vinyl with UV-resistant inks. Includes retractable aluminium base and carry case. Setup in under a minute — no tools required.";

const faqs = [
  {
    q: "How is a table rollup banner different from a standard rollup?",
    a: "A table rollup is shorter and designed to sit on a table or counter rather than stand on the floor. It provides maximum brand visibility within a compact display footprint — ideal for exhibitions, conferences, and product demos where floor space is limited.",
  },
  {
    q: "How long does the print last?",
    a: "Our table rollup prints use UV-resistant inks on premium cast-coated vinyl. Under normal indoor use the print will remain vibrant for 3–5 years. Avoid prolonged direct sunlight to extend lifespan.",
  },
  {
    q: "Can I get replacement prints for my existing base?",
    a: "Yes. If you already have a table rollup base and just need a fresh print, we can produce a replacement graphic at a lower cost. Just bring in your base or let us know the dimensions.",
  },
  {
    q: "What artwork format should I use?",
    a: "A PDF or high-resolution PNG at 72–150 dpi at full size works well. If you have a vector file (AI, EPS), that is even better. If you do not have artwork we will design it from your logo and brand details at no extra charge.",
  },
  {
    q: "How quickly are table rollup banners ready?",
    a: "Standard orders are ready within 2–3 working days. Express 24-hour turnaround is available for an additional charge — contact us to confirm availability.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Adjustable Backdrop Banner",
    href: "/products/events-display/backdrop-banner",
    image: ph(400, 300, "Backdrop+Banner"),
  },
  {
    name: "Table Cloth Printing",
    href: "/products/events-display/table-cloth",
    image: ph(400, 300, "Table+Cloth"),
  },
  {
    name: "Button Badges Printing",
    href: "/products/events-display/button-badges",
    image: ph(400, 300, "Button+Badges"),
  },
];

export default function EventsTableRollupPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order a Table Rollup Banner (Events Display) — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Table Rollup Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Table Rollup Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Compact, portable table rollup banners on premium 440 gsm vinyl — perfect for
            exhibitions, conferences, and events where floor space is precious.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Table+Rollup+Banner")}
                alt="Table Rollup Banner"
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
                  Table rollup banners are the go-to display solution for any business that
                  exhibits at trade shows, attends conferences, or sets up branded counters at
                  activations and corporate events. Unlike full-height floor-standing rollups,
                  table rollups are designed to sit on a table or counter — keeping your brand
                  visible at eye-level without taking up floor space.
                </p>
                <p>
                  Each banner is printed on 440 gsm premium cast-coated vinyl using UV-resistant
                  inks for vivid, long-lasting colour. The sturdy retractable aluminium base lets
                  you set up and pack down in under a minute, and the included carry case means
                  it travels safely to every event.
                </p>
                <p>
                  Free design is included — send us your logo and event details and our team will
                  produce a polished layout ready for your approval before printing.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>440 gsm premium cast-coated vinyl</li>
                  <li>UV-resistant inks — vivid colour indoors and outdoors</li>
                  <li>Retractable aluminium base — setup in under 1 minute</li>
                  <li>Carry case included</li>
                  <li>3 standard sizes available</li>
                  <li>Free design from your logo and brand details</li>
                  <li>Replacement prints available for existing bases</li>
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
                      name: `Table Rollup Banner – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Table+Rollup"),
                      href: "/products/events-display/table-rollup",
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
                  <span>Sets up in under 1 minute — no tools needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Carry case included — travels safely to every event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design from your logo and brand details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Replacement prints available — reuse your existing base</span>
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
