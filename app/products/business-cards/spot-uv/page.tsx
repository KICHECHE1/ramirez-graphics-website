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
  { label: "Spot UV Gloss — 50 cards",  dimensions: "90 × 55 mm, 50 pcs",  price: 1800 },
  { label: "Spot UV Gloss — 100 cards", dimensions: "90 × 55 mm, 100 pcs", price: 2800 },
  { label: "Spot UV Gloss — 250 cards", dimensions: "90 × 55 mm, 250 pcs", price: 5500 },
  { label: "Spot UV Matte — 100 cards", dimensions: "90 × 55 mm, 100 pcs", price: 3200 },
  { label: "Spot UV Matte — 250 cards", dimensions: "90 × 55 mm, 250 pcs", price: 6200 },
];

const materialNote =
  "Printed on 400 gsm premium art board with full-colour double-sided printing. Spot UV varnish is applied selectively over chosen design elements — logo, text, or patterns — creating a striking gloss-on-matte or gloss-on-gloss contrast effect.";

const faqs = [
  {
    q: "What is Spot UV printing?",
    a: "Spot UV (ultraviolet) varnish is a clear, high-gloss coating applied to specific areas of the card — such as your logo or name — while the rest of the card retains a matte or gloss finish. The contrast between the two textures creates a premium, tactile effect that immediately stands out.",
  },
  {
    q: "How do I specify which areas get the Spot UV treatment?",
    a: "Provide a separate 'spot channel' layer (or a black-and-white mask file) indicating exactly which elements should receive the UV coating. If you need help, our designers will create the mask from your artwork.",
  },
  {
    q: "What base finish pairs best with Spot UV?",
    a: "Spot UV on a matte laminate base gives the most dramatic contrast — the coated areas appear to glow against the flat matte background. Spot UV on gloss is subtler but still creates a luxury feel.",
  },
  {
    q: "Are these thicker than standard business cards?",
    a: "Yes. Spot UV cards are printed on 400 gsm board — slightly thicker than our standard 350 gsm cards — giving them a noticeably weighty, premium feel.",
  },
  {
    q: "How quickly can I get my order?",
    a: "Spot UV cards take 48–72 hours due to the additional coating and curing process. Rush orders can be discussed — contact us on WhatsApp to confirm availability.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Business Cards Printing",  href: "/products/business-cards/standard",     image: ph(400, 300, "Business+Cards") },
  { name: "Postcards Printing",       href: "/products/business-cards/postcards",    image: ph(400, 300, "Postcards") },
  { name: "Gift Voucher Printing",    href: "/products/business-cards/gift-vouchers", image: ph(400, 300, "Gift+Vouchers") },
];

export default function SpotUVPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Spot UV Business Cards — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Spot UV Business Cards</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Spot UV Business Cards
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Premium 400 gsm business cards with selective gloss UV varnish on your logo or key
            design elements — for a tactile, luxury first impression.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image src={ph(700, 525, "Spot+UV+Business+Cards")} alt="Spot UV Business Cards" fill className="object-cover" unoptimized priority />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Spot UV business cards take your brand identity to the next level. By applying a
                  clear, high-gloss ultraviolet varnish selectively over chosen elements — your logo,
                  company name, a pattern, or a die-cut shape — we create a striking contrast that
                  makes the card demand attention the moment it is picked up.
                </p>
                <p>
                  We print Spot UV cards on heavyweight 400 gsm art board for a premium, substantial
                  feel. The base finish can be matte laminate (for maximum contrast — the UV elements
                  appear to glow against the flat background) or gloss laminate (for a subtler
                  luxury effect). Both options produce a card that signals quality and
                  professionalism at first touch.
                </p>
                <p>
                  Commonly used by lawyers, architects, consultants, executives, and anyone whose
                  brand demands a premium presentation. Perfect for networking events, client
                  meetings, and anywhere a standard card simply isn&aquot;t enough.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>400 gsm premium art board — heavier than standard cards</li>
                  <li>Selective Spot UV gloss coating on chosen design elements</li>
                  <li>Matte laminate or gloss laminate base finish</li>
                  <li>Full-colour double-sided printing included</li>
                  <li>In-house Spot UV mask creation available</li>
                  <li>48–72 hr turnaround; rush orders available</li>
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

          {/* RIGHT */}
          <div className="flex flex-col gap-8">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Options</h2>
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
                  onClick={() => addToCart({ name: `Spot UV Business Cards – ${selectedSize.label}`, price: selectedSize.price, image: ph(400, 300, "Spot+UV+Cards"), href: "/products/business-cards/spot-uv" })}>
                  <ShoppingCart className="size-5" />Add to Cart
                </Button>
                <Button className="w-full h-12 text-base gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white" asChild>
                  <a href={`https://wa.me/${WHATSAPP}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />Order via WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Orders confirmed within 1 hour · 48–72 hr turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  "400 gsm board — noticeably heavier and more premium than standard cards",
                  "Tactile Spot UV gloss contrasts beautifully against matte base",
                  "Spot UV mask created in-house — no specialist files needed",
                  "Perfect for executives, creatives, and premium brands",
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
