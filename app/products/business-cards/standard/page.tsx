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

const WHATSAPP = "254700000000";

const sizes = [
  { label: "Standard — 50 cards",  dimensions: "90 × 55 mm, 50 pcs",  price: 800 },
  { label: "Standard — 100 cards", dimensions: "90 × 55 mm, 100 pcs", price: 1200 },
  { label: "Standard — 250 cards", dimensions: "90 × 55 mm, 250 pcs", price: 2200 },
  { label: "Standard — 500 cards", dimensions: "90 × 55 mm, 500 pcs", price: 3500 },
  { label: "Slim — 100 cards",     dimensions: "85 × 55 mm, 100 pcs", price: 1400 },
];

const materialNote =
  "Printed full-colour on 350 gsm premium art board. Options: gloss laminate, matte laminate, or uncoated. Double-sided printing available at no extra charge. Rounded corners optional.";

const faqs = [
  {
    q: "What file format should I submit?",
    a: "Print-ready PDF with 3 mm bleed is preferred. We also accept AI, PSD, or high-resolution JPG/PNG. If you don't have a design, our team can create one from your logo and contact details.",
  },
  {
    q: "Is double-sided printing included?",
    a: "Yes. Full-colour double-sided printing is included at no extra charge for all business card orders.",
  },
  {
    q: "What finishes are available?",
    a: "We offer gloss laminate, matte laminate, and uncoated (plain) finishes. Rounded corners are available on request.",
  },
  {
    q: "How quickly can I get my cards?",
    a: "Standard orders are ready within 24–48 hours once artwork is approved. Same-day printing is available for orders placed before 10 AM.",
  },
  {
    q: "Can I order different designs in the same batch?",
    a: "Yes. Multiple designs can be printed in the same batch provided they share the same size and finish. Contact us to confirm pricing for split-run orders.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Spot UV Business Cards", href: "/products/business-cards/spot-uv", image: ph(400, 300, "Spot+UV+Cards") },
  { name: "Postcards Printing",     href: "/products/business-cards/postcards", image: ph(400, 300, "Postcards") },
  { name: "Bookmarks Printing",     href: "/products/business-cards/bookmarks", image: ph(400, 300, "Bookmarks") },
];

export default function StandardBusinessCardsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Business Cards — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/business-cards" className="hover:text-foreground transition-colors">Business Cards</Link>
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
            Full-colour, double-sided business cards on premium 350 gsm art board — available in
            gloss, matte, or uncoated finish. Fast turnaround from Muhoroni, Kisumu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image src={ph(700, 525, "Business+Cards+Printing")} alt="Business Cards Printing" fill className="object-cover" unoptimized priority />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Your business card is often the first physical impression a potential client, partner,
                  or employer has of you. At Ramirez Ventures we print full-colour business cards on
                  heavyweight 350 gsm premium art board — thick, crisp, and professional — so your
                  first impression always counts.
                </p>
                <p>
                  We offer the standard 90 × 55 mm size as well as a slimmer 85 × 55 mm format. Both
                  sides are printed in vibrant full colour at no extra charge. Choose from gloss
                  laminate for a high-sheen finish, matte laminate for an understated premium feel, or
                  plain uncoated for a natural look that writes easily.
                </p>
                <p>
                  Our in-house design team can create your card from scratch using your logo, brand
                  colours, and contact details. If you already have a design, simply send us the file
                  and we will go straight to print after a quick proof check.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>350 gsm premium art board — thick and substantial</li>
                  <li>Full-colour double-sided printing included</li>
                  <li>Gloss laminate, matte laminate, or uncoated finish</li>
                  <li>Rounded corners available on request</li>
                  <li>In-house design service available</li>
                  <li>24–48 hr turnaround; same-day for urgent orders</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground py-3">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-3 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* RIGHT: Sizes + Order */}
          <div className="flex flex-col gap-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Quantities</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Option</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Spec</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size) => (
                      <tr key={size.label} onClick={() => setSelectedSize(size)}
                        className={`border-b border-border last:border-0 cursor-pointer transition-colors ${selectedSize.label === size.label ? "bg-primary/10" : "hover:bg-muted/40"}`}>
                        <td className="px-4 py-3 font-medium text-foreground">{size.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{size.dimensions}</td>
                        <td className="px-4 py-3 text-right">
                          <div className={`inline-flex size-4 rounded-full border-2 transition-colors ${selectedSize.label === size.label ? "border-primary bg-primary" : "border-muted-foreground"}`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground bg-muted/40 rounded-lg p-3 leading-relaxed">{materialNote}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-1">Order Now</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Selected: <span className="font-medium text-foreground">{selectedSize.label} — {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button className="w-full h-12 text-base gap-2"
                  onClick={() => addToCart({ name: `Business Cards – ${selectedSize.label}`, price: selectedSize.price, image: ph(400, 300, "Business+Cards"), href: "/products/business-cards/standard" })}>
                  <ShoppingCart className="size-5" />Add to Cart
                </Button>
                <Button className="w-full h-12 text-base gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white" asChild>
                  <a href={`https://wa.me/${WHATSAPP}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />Order via WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Orders confirmed within 1 hour · 24–48 hr turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  "350 gsm art board — thick, premium, professional",
                  "Double-sided full-colour printing at no extra charge",
                  "Design service available — send us your logo and we handle the rest",
                  "Same-day printing for orders placed before 10 AM",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-14" />

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.href} href={product.href}
                className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-4/3 bg-muted overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
