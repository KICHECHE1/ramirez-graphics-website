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
  { label: "Standard · Single-sided",  dimensions: "85 x 55 mm, 1 side",  price: 1200 },
  { label: "Standard · Double-sided",  dimensions: "85 x 55 mm, 2 sides", price: 1600 },
  { label: "Folded · Double-sided",    dimensions: "170 x 55 mm folded",   price: 2400 },
  { label: "Square",                   dimensions: "55 x 55 mm",           price: 1800 },
];

const materialNote =
  "Digitally printed on 350 gsm gloss or matte art board. Minimum 50 cards per order. Lamination (gloss or matte) available. Same-day turnaround for standard designs.";

const faqs = [
  {
    q: "What is the difference between digital and offset business card printing?",
    a: "Digital printing is ideal for short runs (50 to 500 cards) and offers fast turnaround with no plate setup costs. Offset printing suits very large quantities (1,000+) with lower unit costs. For most business card orders, digital gives the best value and speed.",
  },
  {
    q: "Do you offer design services?",
    a: "Yes. If you do not have a ready design, our in-house team can create a professional business card layout from your logo, contact details, and brand colours at no extra charge.",
  },
  {
    q: "What finish options are available?",
    a: "We offer gloss laminate, matte laminate, and uncoated finishes. Gloss gives a vivid, shiny look while matte is more understated and allows writing on the back. Spot UV is also available, see our Spot UV Business Cards page.",
  },
  {
    q: "How soon will my cards be ready?",
    a: "Standard single-sided designs are printed and cut same day for orders placed before 2 PM. Double-sided and folded cards are typically ready within 24 hours.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Spot UV Business Cards",
    href: "/products/business-cards/spot-uv",
    image: ph(400, 300, "Spot+UV+Cards"),
  },
  {
    name: "Standard Business Cards",
    href: "/products/business-cards/standard",
    image: ph(400, 300, "Standard+Business+Cards"),
  },
  {
    name: "Document Printing",
    href: "/products/digital-printing/documents",
    image: ph(400, 300, "Document+Printing"),
  },
];

export default function DigitalBusinessCardsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Business Cards (Digital Printing), ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/digital-printing" className="hover:text-foreground transition-colors">Digital Printing</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Business Cards Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Business Cards Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Professionally printed full-colour business cards on premium 350 gsm card stock,
            same-day turnaround, free design, delivered across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Business+Cards+Printing")}
                alt="Business Cards Printing"
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
                  A business card is often the first tangible impression you make on a potential
                  client or partner. At Ramirez Ventures we print sharp, full-colour business cards
                  on 350 gsm premium art board, finished with your choice of gloss or matte
                  laminate for a look and feel that commands attention.
                </p>
                <p>
                  Using digital printing technology we can produce your cards quickly without
                  plate setup costs, making it the ideal choice for quantities from 50 to 500
                  cards. Standard single-sided designs are ready same day for orders placed before
                  2 PM. If your design is not ready, our in-house designers will build the layout
                  from your logo and details at no extra cost.
                </p>
                <p>
                  We offer standard landscape cards, square cards, and folded cards, all printed
                  full-colour front and back. For a premium tactile finish, see our Spot UV
                  Business Cards option.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour printing on 350 gsm premium art board</li>
                  <li>Gloss or matte laminate finish</li>
                  <li>Single-sided, double-sided, folded, and square options</li>
                  <li>Free in-house design from your logo and details</li>
                  <li>Same-day turnaround for standard designs</li>
                  <li>Minimum 50 cards per order</li>
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

          {/* RIGHT: Options + Order */}
          <div className="flex flex-col gap-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Options</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Type</th>
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
                Selected: <span className="font-medium text-foreground">{selectedSize.label}, {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Business Cards  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Business+Cards"),
                      href: "/products/digital-printing/business-cards",
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
                Orders confirmed within 1 hour · Same-day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free in-house design from your logo and details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Same-day printing for standard designs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>350 gsm premium card, feels substantial in hand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Minimum 50 cards, no over-ordering required</span>
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
