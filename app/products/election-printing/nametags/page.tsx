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
  { label: "Credit Card · Pin clip",     dimensions: "85 x 55 mm, pin clip",     price: 3000 },
  { label: "Credit Card · Magnetic",     dimensions: "85 x 55 mm, magnet back",  price: 3800 },
  { label: "DL · Pin clip",              dimensions: "99 x 56 mm, pin clip",     price: 3500 },
  { label: "DL · With lanyard slot",     dimensions: "99 x 56 mm + slot, lanyard included", price: 4500 },
  { label: "Custom Size · Lanyard",      dimensions: "Custom size + lanyard",    price: 5500 },
];

const materialNote =
  "Printed full-colour on 350 gsm laminated art board. Minimum 50 nametags per order. Reusable plastic holder with clip or magnet available as an upgrade. Bulk discounts apply for 200+ pieces.";

const faqs = [
  {
    q: "Can each nametag have a different name and role?",
    a: "Yes. Variable data printing lets us personalise every nametag with an individual name, title, party role, or voter registration number, all from a spreadsheet you supply. Each tag is unique at no significant additional cost.",
  },
  {
    q: "Do you supply lanyards as well?",
    a: "Yes. Standard woven polyester lanyards in any colour are available as an add-on. Branded lanyards with your party logo screen-printed on them are also available, contact us for pricing.",
  },
  {
    q: "What attachment options are available?",
    a: "We offer pin clip, magnet back, and lanyard hole (slot) options. The magnet back is the most popular for formal events as it does not damage clothing.",
  },
  {
    q: "Can I laminate the nametags for durability?",
    a: "All nametags are printed on 350 gsm laminated board as standard, giving them good rigidity and light moisture resistance. For multi-day events, a reusable plastic holder is available as an upgrade.",
  },
  {
    q: "How long does production take?",
    a: "Standard nametags without variable data are ready within 24 hours. Personalised (variable data) orders for up to 500 tags take 48 hours. Rush orders are available, contact us.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Button Badges Printing",
    href: "/products/election-printing/button-badges",
    image: ph(400, 300, "Button+Badges"),
  },
  {
    name: "Posters Printing",
    href: "/products/election-printing/posters",
    image: ph(400, 300, "Campaign+Posters"),
  },
  {
    name: "Branded Aprons",
    href: "/products/election-printing/aprons",
    image: ph(400, 300, "Branded+Aprons"),
  },
];

export default function NametagsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Nametags, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/election-printing" className="hover:text-foreground transition-colors">Election Printing</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Nametags</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">Event Essential</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Nametags Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Full-colour personalised nametags for campaign agents, event staff, and delegates,
            pin clip, magnet, or lanyard options with individual name printing for every tag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Nametags+Printing")}
                alt="Nametags Printing"
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
                  Nametags provide instant identification at campaign events, polling day
                  operations, party conventions, corporate functions, and community meetings.
                  At Ramirez Ventures we print sharp, full-colour nametags on 350 gsm laminated
                  art board in credit-card and DL formats, with pin clip, magnet back, or lanyard
                  slot attachment options.
                </p>
                <p>
                  Our variable data printing capability means every tag in the batch can carry a
                  unique name, role, or serial number, all printed in a single run from a
                  spreadsheet you supply. Ideal for campaign agents, polling agents, event
                  volunteers, and conference delegates.
                </p>
                <p>
                  We also supply standard woven lanyards and branded lanyards with your party
                  or organisation logo. Reusable plastic badge holders are available as an
                  upgrade for multi-day events.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour print on 350 gsm laminated art board</li>
                  <li>Credit-card and DL size options</li>
                  <li>Pin clip, magnet back, and lanyard slot choices</li>
                  <li>Variable data, unique name and role per tag</li>
                  <li>Lanyards and plastic holders available as add-ons</li>
                  <li>Minimum 50 nametags per order</li>
                  <li>Ready within 24 to 48 hours</li>
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
                      name: `Nametags  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Nametags"),
                      href: "/products/election-printing/nametags",
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
                Orders confirmed within 1 hour · 24 to 48 hr turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Variable data, unique name and role on every tag</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Lanyards and reusable holders available as add-ons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>350 gsm laminated board, durable for multi-day events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Nationwide delivery across Kenya</span>
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
