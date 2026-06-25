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
  { label: "Small (S)",       dimensions: "Chest 34 to 36 in", price: 2200 },
  { label: "Medium (M)",      dimensions: "Chest 38 to 40 in", price: 2200 },
  { label: "Large (L)",       dimensions: "Chest 40 to 42 in", price: 2200 },
  { label: "X-Large (XL)",    dimensions: "Chest 42 to 44 in", price: 2200 },
  { label: "XX-Large (XXL)",  dimensions: "Chest 44 to 46 in", price: 2600 },
];

const materialNote =
  "280 gsm 80/20 cotton-polyester fleece blend, warm, soft, and durable. Available in a range of solid colours including black, navy, grey, and custom colours for bulk orders. Printing via high-quality screen-print or embroidery. Minimum order: 5 pieces.";

const faqs = [
  {
    q: "Can I choose between print and embroidery on hoodies?",
    a: "Yes. Screen-printing works well for bold logos and text with up to 3 colours on a placement. Embroidery gives a premium, textured finish ideal for chest logos, and is especially popular for corporate gifting and team wear.",
  },
  {
    q: "What placements are available?",
    a: "Standard placements include the left-chest logo, full-front print, full-back print, and hood lining print. Sleeve prints and inside-collar labels can be added on request.",
  },
  {
    q: "Are the hoodies pullover or zip-up style?",
    a: "We offer both pullover and full-zip styles. The style can be specified when placing your order. Both are available in the same fabric weights and size range.",
  },
  {
    q: "How do I care for printed hoodies?",
    a: "Machine wash inside-out at 30°C. Avoid tumble drying on high heat. Do not iron directly over the print. Following these care instructions will keep the print sharp and the fabric soft.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders of 5 to 20 pieces are ready within 3 to 5 business days. Larger batches may take up to 7 days. Rush orders available, contact us on WhatsApp.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Branded T-Shirts",           href: "/products/branded-apparel/t-shirts",           image: ph(400, 300, "Branded+T-Shirts") },
  { name: "Branded Jerseys for Clubs",  href: "/products/branded-apparel/jerseys",             image: ph(400, 300, "Branded+Jerseys") },
  { name: "Reflector Jackets Printing", href: "/products/branded-apparel/reflector-jackets",  image: ph(400, 300, "Reflector+Jackets") },
];

export default function HoodiesPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Branded Hoodies, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Branded Hoodies</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Branded Hoodies
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Premium custom-printed or embroidered hoodies for corporate teams, schools, clubs, and
            events, warm, durable, and unmistakably on-brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Branded+Hoodies")}
                alt="Branded Hoodies"
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
                  A well-made branded hoodie doubles as both a warm garment and a walking
                  advertisement for your organisation. At Ramirez Ventures we print and embroider
                  hoodies that people actually want to wear, comfortable enough for everyday use,
                  and sharp enough to represent your brand with confidence.
                </p>
                <p>
                  Our hoodies are made from 280 gsm 80/20 cotton-polyester fleece, warm and soft
                  on the inside, with a smooth exterior that holds print and embroidery beautifully.
                  We offer pullover and full-zip styles, available in a wide range of solid colours.
                  Screen-printing is used for bold multi-colour designs; embroidery is offered as a
                  premium option for chest logos and name placements.
                </p>
                <p>
                  Popular for corporate staff wear, university and school societies, sports club
                  casual wear, event volunteer kits, and branded gifting campaigns.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>280 gsm 80/20 cotton-polyester fleece blend</li>
                  <li>Pullover and full-zip styles available</li>
                  <li>Screen-print or embroidery finish options</li>
                  <li>Left-chest logo, full-front, and full-back placements</li>
                  <li>Free design mockup before production</li>
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
                      name: `Branded Hoodie  to  ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Branded+Hoodie"),
                      href: "/products/branded-apparel/hoodies",
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
                Orders confirmed within 1 hour · 3 to 5 day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Screen-print or premium embroidery finish, your choice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design mockup before any production begins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Pullover and zip-up styles available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Competitive bulk pricing for teams and organisations</span>
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
