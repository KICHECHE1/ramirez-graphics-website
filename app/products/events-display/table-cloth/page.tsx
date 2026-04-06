"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const WHATSAPP = "254700000000";

const sizes = [
  { label: "4 ft · Draped",   dimensions: "122 × 183 cm — 4 ft table, draped",  price: 4500 },
  { label: "6 ft · Draped",   dimensions: "183 × 183 cm — 6 ft table, draped",  price: 5500 },
  { label: "8 ft · Draped",   dimensions: "244 × 183 cm — 8 ft table, draped",  price: 6500 },
  { label: "6 ft · Fitted",   dimensions: "183 cm — 6 ft table, fitted stretch", price: 7000 },
  { label: "8 ft · Fitted",   dimensions: "244 cm — 8 ft table, fitted stretch", price: 8500 },
];

const materialNote =
  "Made from durable 200 gsm polyester fabric — machine washable and crease-resistant. Full-colour dye-sublimation printing ensures vivid, fade-resistant branding. Available in draped and fitted (stretch) styles.";

const faqs = [
  {
    q: "What is the difference between a draped and fitted table cloth?",
    a: "A draped table cloth hangs loosely over the table and falls to the ground on all sides like a traditional tablecloth. A fitted (stretch) table cloth has sewn edges that hug the table tightly for a sleek, professional display look — popular at trade shows and exhibitions.",
  },
  {
    q: "Can I print my logo and brand colours on the table cloth?",
    a: "Yes. All our table cloths are printed full-colour using dye-sublimation, which means your logo, brand colours, text, and imagery can appear anywhere on the cloth with no colour limitations.",
  },
  {
    q: "Can the table cloth be washed?",
    a: "Yes. Our table cloths are made from machine-washable polyester fabric. We recommend cold or warm machine wash and line drying. The dye-sublimation print is colour-fast and will not fade with normal laundering.",
  },
  {
    q: "Do you print on the back of the cloth?",
    a: "The standard option is front and sides only. Full-wrap printing covering all four sides including the back is available on request at an additional cost.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders are ready within 3–5 working days. Express 48-hour turnaround is available for an additional charge — contact us to confirm before placing your order.",
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
    name: "Table Rollup Printing",
    href: "/products/events-display/table-rollup",
    image: ph(400, 300, "Table+Rollup"),
  },
  {
    name: "Button Badges Printing",
    href: "/products/events-display/button-badges",
    image: ph(400, 300, "Button+Badges"),
  },
];

export default function EventsTableClothPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order a Table Cloth (Events Display) — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Table Cloth Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Table Cloth Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Custom branded table covers on durable 200 gsm polyester — draped and stretch-fitted
            styles, full dye-sublimation print, machine washable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Table+Cloth+Printing")}
                alt="Table Cloth Printing"
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
                  A branded table cloth is one of the most cost-effective ways to elevate your
                  presence at any event. Whether you are exhibiting at a trade show, hosting a
                  product launch, running a buffet station, or displaying goods at a market, a
                  custom-printed table cover signals professionalism from across the room.
                </p>
                <p>
                  At Ramirez Ventures we print table cloths using dye-sublimation technology on
                  200 gsm polyester fabric — meaning your logo, colours, and artwork are
                  permanently bonded into the fabric for fade-resistant, wash-safe results.
                  Draped covers hang elegantly to the floor on all sides, while fitted stretch
                  covers snap snugly to the table contours for a polished trade-show look.
                </p>
                <p>
                  All cloths are crease-resistant, machine washable, and built to withstand
                  repeated event use without losing their colour or shape.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>200 gsm durable polyester — crease-resistant and machine washable</li>
                  <li>Full dye-sublimation print — unlimited colours, no fading</li>
                  <li>Draped and fitted (stretch) styles available</li>
                  <li>Fits 4 ft, 6 ft, and 8 ft standard event tables</li>
                  <li>Full-wrap printing (all four sides) available on request</li>
                  <li>Free design from your logo and brand colours</li>
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
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Style</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Fits</th>
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
                      name: `Branded Table Cloth – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Table+Cloth"),
                      href: "/products/events-display/table-cloth",
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
                  <span>Machine washable — reuse at every event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Dye-sublimation print — colours survive washing without fading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Draped and fitted (stretch) styles available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design from your logo and brand colours</span>
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
