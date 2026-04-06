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
  { label: "Credit-Card Size — 50 vouchers",  dimensions: "85 × 55 mm, 50 pcs",  price: 2000 },
  { label: "Credit-Card Size — 100 vouchers", dimensions: "85 × 55 mm, 100 pcs", price: 3200 },
  { label: "Credit-Card Size — 250 vouchers", dimensions: "85 × 55 mm, 250 pcs", price: 6000 },
  { label: "DL Voucher — 50 vouchers",        dimensions: "210 × 99 mm, 50 pcs",  price: 2800 },
  { label: "DL Voucher — 100 vouchers",       dimensions: "210 × 99 mm, 100 pcs", price: 4500 },
];

const materialNote =
  "Printed full-colour on 350 gsm premium art board with gloss or matte laminate. Sequential numbering and unique codes available. Perforated stub options available for redemption tracking.";

const faqs = [
  {
    q: "Can you add unique codes or sequential numbering to each voucher?",
    a: "Yes. We can add sequential serial numbers or unique alphanumeric codes to each voucher during printing. This is essential for tracking redemptions and preventing fraud. Provide your preferred numbering format when ordering.",
  },
  {
    q: "Can vouchers have a perforated tear-off section?",
    a: "Yes. A perforated stub can be added so the recipient tears off and keeps a portion while the retailer or business retains the other section for record-keeping.",
  },
  {
    q: "What information should be included on a gift voucher?",
    a: "Typically: your business name and logo, voucher value or description, unique code or number, expiry date, and terms of use. Our designers can help you lay this out clearly and professionally.",
  },
  {
    q: "What finish looks best for gift vouchers?",
    a: "Gloss laminate is the most popular choice — it makes colours pop and gives the voucher a premium, gift-worthy feel. Matte laminate is a good alternative if your brand uses muted or neutral tones.",
  },
  {
    q: "How quickly can I get my vouchers?",
    a: "Standard gift voucher orders are ready within 24–48 hours. Orders with sequential numbering or unique codes may take an additional 24 hours.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Business Cards Printing", href: "/products/business-cards/standard",  image: ph(400, 300, "Business+Cards") },
  { name: "Postcards Printing",      href: "/products/business-cards/postcards", image: ph(400, 300, "Postcards") },
  { name: "Spot UV Business Cards",  href: "/products/business-cards/spot-uv",   image: ph(400, 300, "Spot+UV+Cards") },
];

export default function GiftVouchersPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Gift Vouchers — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Gift Voucher Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Gift Voucher Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Full-colour gift vouchers on 350 gsm premium art board — with optional sequential
            numbering, unique codes, and perforated stubs. Credit-card and DL sizes available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image src={ph(700, 525, "Gift+Voucher+Printing")} alt="Gift Voucher Printing" fill className="object-cover" unoptimized priority />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A professionally printed gift voucher elevates your brand and makes gifting easy
                  for your customers. Whether you run a salon, restaurant, boutique, school, or
                  service business, branded gift vouchers are one of the simplest and most effective
                  ways to drive new customers and reward loyal ones.
                </p>
                <p>
                  At Ramirez Ventures we print gift vouchers on heavyweight 350 gsm premium art
                  board in full colour — the same quality as our premium business cards. We offer
                  two standard formats: the credit-card size (85 × 55 mm) for a wallet-friendly
                  keepsake, and the DL format (210 × 99 mm) for a more spacious layout that can
                  include detailed terms, offer descriptions, or a map.
                </p>
                <p>
                  For businesses that need redemption tracking and fraud protection, we can
                  add sequential serial numbers or unique alphanumeric codes to each voucher during
                  printing. A perforated tear-off stub is also available so both the business and
                  the customer retain a portion of the transaction record.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>350 gsm premium art board — thick, premium, gift-ready</li>
                  <li>Full-colour double-sided printing included</li>
                  <li>Gloss or matte laminate finish</li>
                  <li>Sequential numbering or unique codes available</li>
                  <li>Perforated tear-off stub option</li>
                  <li>Credit-card size (85 × 55 mm) and DL size (210 × 99 mm)</li>
                  <li>In-house design service available</li>
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
                  onClick={() => addToCart({ name: `Gift Vouchers – ${selectedSize.label}`, price: selectedSize.price, image: ph(400, 300, "Gift+Vouchers"), href: "/products/business-cards/gift-vouchers" })}>
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
                  "Sequential numbering and unique codes for fraud-proof redemption",
                  "Perforated stub option — both parties keep a record",
                  "350 gsm art board — gift-worthy thickness and feel",
                  "Design service available — we lay out your voucher professionally",
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
