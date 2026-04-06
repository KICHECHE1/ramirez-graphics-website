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
  { label: "A6 Notebook · 50 pp",   dimensions: "A6 (105 × 148 mm), 50 ruled pages",  price: 450 },
  { label: "A6 Notebook · 100 pp",  dimensions: "A6 (105 × 148 mm), 100 ruled pages", price: 650 },
  { label: "A5 Notebook · 50 pp",   dimensions: "A5 (148 × 210 mm), 50 ruled pages",  price: 650 },
  { label: "A5 Notebook · 100 pp",  dimensions: "A5 (148 × 210 mm), 100 ruled pages", price: 950 },
  { label: "A5 Notebook · 200 pp",  dimensions: "A5 (148 × 210 mm), 200 ruled pages", price: 1400 },
];

const materialNote =
  "Kitenge fabric cover sourced from authentic East African wax-print fabrics. Interior pages are 80 gsm cream or white ruled paper. Elastic closure strap and bookmark ribbon included. Logo and brand printing on the inside front cover available. Minimum 20 notebooks per order.";

const faqs = [
  {
    q: "What is Kitenge fabric?",
    a: "Kitenge (also known as Ankara or African wax print) is a brightly coloured, 100% cotton fabric woven with vibrant geometric and traditional patterns. It is widely used across East and West Africa for clothing and cultural items. Using it as a notebook cover creates a product that is both functional and deeply rooted in African identity.",
  },
  {
    q: "Can I choose a specific Kitenge pattern?",
    a: "We carry a curated selection of Kitenge patterns — you can specify a preferred colour palette or pattern family when ordering. For large corporate orders (200+) we may be able to source a custom fabric on request.",
  },
  {
    q: "Can my company logo be printed inside the notebook?",
    a: "Yes. Your logo, event name, brand message, or a custom design can be printed on the inside front cover, first page, or back cover. This is a popular option for corporate gifts and event giveaways.",
  },
  {
    q: "Are the notebooks suitable as corporate gifts?",
    a: "Absolutely. Kitenge notebooks are one of our most popular corporate gift items. They are culturally distinctive, high-quality, and practical — delegates actually keep and use them long after an event, making them excellent brand ambassadors.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum order is 20 notebooks. Corporate bulk pricing applies at 50, 100, and 250+ units — contact us for a quote.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Button Badges Printing",
    href: "/products/events-display/button-badges",
    image: ph(400, 300, "Button+Badges"),
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

export default function KitengeNotebooksPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Kitenge Notebooks — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Kitenge Notebooks</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">New</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Kitenge Notebooks
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Authentic African Kitenge fabric-covered notebooks — a memorable corporate gift and
            event giveaway that delegates will actually keep and use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Kitenge+Notebooks")}
                alt="Kitenge Notebooks"
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
                  Kitenge notebooks are where African heritage meets functional corporate branding.
                  The bold, vibrant wax-print Kitenge fabric cover elevates a simple notebook into
                  a culturally rich gift that stands out from the typical pen-and-pad event pack.
                  Delegates remember where they received them — and your brand travels with every
                  page they fill.
                </p>
                <p>
                  At Ramirez Ventures we hand-craft each notebook with an authentic East African
                  Kitenge cotton cover, 80 gsm ruled interior pages in your choice of A6 or A5
                  format, an elastic closure strap, and a ribbon bookmark. Your company logo,
                  event name, or custom message can be printed on the inside cover for a fully
                  personalised corporate gift experience.
                </p>
                <p>
                  Popular uses include conference delegate packs, corporate gifting, NGO and
                  government event branding, school prize-giving, and team retreats. They are
                  particularly loved by organisations that want to reflect African pride in their
                  event collateral.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Authentic Kitenge (African wax-print) fabric cover</li>
                  <li>A6 and A5 sizes — 50, 100, or 200 ruled pages</li>
                  <li>80 gsm cream or white ruled paper</li>
                  <li>Elastic closure strap and bookmark ribbon included</li>
                  <li>Logo or custom print on inside cover available</li>
                  <li>Minimum 20 notebooks per order</li>
                  <li>Volume pricing at 50, 100, and 250+</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Options</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Format</th>
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
                Selected: <span className="font-medium text-foreground">{selectedSize.label} — {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Kitenge Notebook – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Kitenge+Notebooks"),
                      href: "/products/events-display/kitenge-notebooks",
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
                  <span>Authentic Kitenge cover — culturally distinctive, memorable gift</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Logo printing on inside cover available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Elastic strap and bookmark ribbon — premium feel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk pricing from 50 units — ideal for conferences</span>
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
