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
  { label: "Bib Apron — One Size",       dimensions: "70 × 90 cm",          price: 1800 },
  { label: "Half Apron — One Size",       dimensions: "70 × 55 cm",          price: 1400 },
  { label: "Full-Length Apron — S/M",     dimensions: "70 × 100 cm (S/M)",   price: 2000 },
  { label: "Full-Length Apron — L/XL",   dimensions: "70 × 105 cm (L/XL)",  price: 2000 },
];

const materialNote =
  "Aprons are made from 200 gsm polyester/cotton blend fabric — durable, easy to clean, and comfortable for all-day wear. Custom colours available. Logo and text printed via high-resolution dye-sublimation or screen-print. Minimum order: 5 pieces.";

const faqs = [
  {
    q: "What industries are branded aprons suitable for?",
    a: "Branded aprons are widely used in restaurants, cafes, bakeries, salons, spas, medical clinics, craft studios, schools, market stalls, and corporate events. If your staff interacts with the public, a branded apron is a professional touch.",
  },
  {
    q: "Can I print a logo on both the front and the pocket?",
    a: "Yes. We can print on the chest pocket panel, the main bib area, and the lower skirt. Multiple print placements can be discussed based on your design.",
  },
  {
    q: "Are the aprons machine washable?",
    a: "Yes. All our aprons are printed using dye-sublimation or screen-print techniques that are colour-fast and machine washable at 40°C without fading or cracking.",
  },
  {
    q: "Do you offer custom colours?",
    a: "Absolutely. While we stock standard black, white, navy, and red aprons, we can source custom fabric colours for larger orders. Contact us to confirm availability.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders of 5–20 pieces are typically ready within 3–5 business days. Larger quantities may take up to 7 days. Rush orders can be discussed on WhatsApp.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Branded T-Shirts",           href: "/products/branded-apparel/t-shirts",           image: ph(400, 300, "Branded+T-Shirts") },
  { name: "Reflector Jackets Printing", href: "/products/branded-apparel/reflector-jackets",  image: ph(400, 300, "Reflector+Jackets") },
  { name: "Branded Hoodies",            href: "/products/branded-apparel/hoodies",             image: ph(400, 300, "Branded+Hoodies") },
];

export default function ApronsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Branded Aprons — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Branded Aprons</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Branded Aprons
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Custom-printed aprons for restaurants, salons, events, and more — sharp branding that
            your team wears proudly every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Branded+Aprons")}
                alt="Branded Aprons"
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
                  A branded apron is one of the most visible and practical uniforms a customer-facing
                  business can invest in. Every time your staff serves a customer, walks through the
                  room, or appears in a photo, your logo is front and centre. At Ramirez Ventures we
                  print aprons that look professional, hold up under daily use, and represent your
                  brand exactly as intended.
                </p>
                <p>
                  We offer bib aprons, half aprons, and full-length aprons in a range of fabric
                  colours. Printing is done via high-resolution dye-sublimation or screen-print
                  depending on design complexity — both produce sharp, colour-fast results that will
                  not crack or fade after washing. Custom fabric colours are available for larger
                  orders.
                </p>
                <p>
                  Ideal for restaurants, café chains, bakeries, hair salons, beauty spas, medical
                  facilities, schools, craft events, market vendors, and corporate hospitality staff.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>200 gsm polyester/cotton blend — durable and comfortable</li>
                  <li>Bib, half, and full-length styles available</li>
                  <li>High-resolution dye-sublimation or screen-print</li>
                  <li>Machine washable at 40°C — colour-fast print</li>
                  <li>Multiple print placement options (bib, pocket, lower panel)</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Styles &amp; Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Style</th>
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
                      name: `Branded Apron – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Branded+Apron"),
                      href: "/products/branded-apparel/aprons",
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
                  <span>Free design mockup before production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Machine washable — colour-fast print that does not fade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Multiple placement options — bib, pocket, lower panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk pricing available for 10+ pieces</span>
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
