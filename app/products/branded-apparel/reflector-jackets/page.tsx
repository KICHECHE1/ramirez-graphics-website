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
  { label: "Small (S)",        dimensions: "Chest 36 to 38 in",  price: 2800 },
  { label: "Medium (M)",       dimensions: "Chest 38 to 40 in",  price: 2800 },
  { label: "Large (L)",        dimensions: "Chest 40 to 42 in",  price: 2800 },
  { label: "X-Large (XL)",     dimensions: "Chest 42 to 44 in",  price: 2800 },
  { label: "XX-Large (XXL)",   dimensions: "Chest 44 to 46 in",  price: 3200 },
];

const materialNote =
  "High-visibility polyester shell with 360° reflective tape strips. Available in yellow, orange, or custom colours. Logo and text printed via screen-print or heat-transfer. Minimum order: 5 pieces.";

const faqs = [
  {
    q: "Do the jackets meet safety standards?",
    a: "Yes. Our reflector jackets use EN ISO 20471 Class 2 compliant reflective tape and high-visibility fabric, suitable for construction sites, traffic marshalling, and night-time operations.",
  },
  {
    q: "Can I print on both the front and back?",
    a: "Absolutely. Most orders include a logo or name on the front left chest and a larger print on the full back panel. Additional placements such as sleeves are also available.",
  },
  {
    q: "What print method is used?",
    a: "We use heat-transfer vinyl or screen-printing depending on design complexity and order quantity. Both methods produce sharp, durable results that withstand outdoor wear.",
  },
  {
    q: "What if I need custom sizing for my team?",
    a: "We accommodate custom size charts. Just supply your team's measurements and we will confirm which sizes to prepare before production.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders of 5 to 20 pieces are ready within 3 to 5 business days. Larger bulk orders may take 5 to 7 days. Rush production is available, contact us on WhatsApp.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Branded Aprons",           href: "/products/branded-apparel/aprons",    image: ph(400, 300, "Branded+Aprons") },
  { name: "Branded T-Shirts",         href: "/products/branded-apparel/t-shirts",  image: ph(400, 300, "Branded+T-Shirts") },
  { name: "Branded Hoodies",          href: "/products/branded-apparel/hoodies",   image: ph(400, 300, "Branded+Hoodies") },
];

export default function ReflectorJacketsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Reflector Jackets, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Reflector Jackets Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Reflector Jackets Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            High-visibility reflector jackets custom-printed with your logo, name, or company
            branding, for construction crews, security teams, event marshals, and NGO field staff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Reflector+Jackets+Printing")}
                alt="Reflector Jackets Printing"
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
                  Reflector jackets are an essential safety garment across many industries, and at
                  Ramirez Ventures we turn them into powerful branding tools. Every jacket we
                  produce combines mandatory high-visibility fabric and EN ISO 20471 compliant
                  reflective tape with crisp, full-colour custom printing of your logo, name,
                  or organisation.
                </p>
                <p>
                  Our jackets are made from durable 100% polyester fabric in safety yellow or
                  safety orange and come with 360° reflective tape for maximum visibility at night
                  or in low-light conditions. We offer both sleeveless waistcoat-style and
                  full-sleeve jacket options depending on your requirements.
                </p>
                <p>
                  Commonly used by construction companies, road crews, security companies, mining
                  operations, NGOs, school crossing guards, and event marshals. Custom sizes from
                  S to XXL, with bulk-order pricing for teams of 10 or more.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>High-visibility polyester shell in yellow or orange</li>
                  <li>EN ISO 20471 compliant 360° reflective tape strips</li>
                  <li>Front chest logo + full back-panel print as standard</li>
                  <li>Heat-transfer vinyl or screen-print methods available</li>
                  <li>Sizes S to XXL, custom sizing available for teams</li>
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
                      name: `Reflector Jacket  to  ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Reflector+Jacket"),
                      href: "/products/branded-apparel/reflector-jackets",
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
                  <span>EN ISO 20471 compliant reflective tape, meets site safety requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design mockup before production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk pricing available for teams of 10+</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Custom sizing charts accommodated for uniformed teams</span>
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
