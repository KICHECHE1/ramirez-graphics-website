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
  { label: "DL · Single-sided",   dimensions: "99 x 210 mm, 1 side",  price: 1500 },
  { label: "DL · Double-sided",   dimensions: "99 x 210 mm, 2 sides", price: 2000 },
  { label: "A6 · Single-sided",   dimensions: "148 x 105 mm, 1 side", price: 1800 },
  { label: "A6 · Double-sided",   dimensions: "148 x 105 mm, 2 sides", price: 2400 },
  { label: "Business Card Size",  dimensions: "85 x 55 mm, 2 sides",  price: 1200 },
];

const materialNote =
  "Printed full-colour on 350 gsm gloss or matte art board. Optional scratch-off panels, sequential numbering, and barcodes available. Minimum 50 vouchers per order.";

const faqs = [
  {
    q: "Can you add a scratch-off panel to hide the voucher code?",
    a: "Yes. Scratch-off panels are a popular addition for vouchers and loyalty cards, they add a sense of reveal and prevent the code being copied before redemption. Just request it when ordering.",
  },
  {
    q: "Can each voucher have a unique serial number or barcode?",
    a: "Yes. We offer sequential numbering and unique barcodes or QR codes on each voucher. This is ideal for tracking redemptions and preventing fraud.",
  },
  {
    q: "What value amounts should be printed on the vouchers?",
    a: "That is entirely up to you. You can specify a fixed value (e.g. KES 500), a percentage discount, or leave the value blank for staff to fill in at the time of sale.",
  },
  {
    q: "Do you offer envelope inserts or presentation packaging?",
    a: "Yes, we can supply matching envelopes or small poly bags for your vouchers at an additional cost. Contact us to discuss packaging options.",
  },
  {
    q: "How long does production take?",
    a: "Standard gift vouchers without variable data are ready within 24 hours. Orders requiring unique serial numbers or barcodes take 2 to 3 working days.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Gift Voucher Printing (Business Cards range)",
    href: "/products/business-cards/gift-vouchers",
    image: ph(400, 300, "Gift+Vouchers"),
  },
  {
    name: "Business Cards Printing",
    href: "/products/digital-printing/business-cards",
    image: ph(400, 300, "Business+Cards"),
  },
  {
    name: "Document Printing",
    href: "/products/digital-printing/documents",
    image: ph(400, 300, "Document+Printing"),
  },
];

export default function DigitalGiftVouchersPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Gift Vouchers (Digital Printing), ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            Premium full-colour gift vouchers with optional scratch-off panels, unique serial
            numbers, and QR codes, printed fast from Muhoroni, Kisumu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Gift+Voucher+Printing")}
                alt="Gift Voucher Printing"
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
                  Gift vouchers are a powerful sales and loyalty tool for restaurants, salons,
                  spas, retail shops, hotels, and any service business. A beautifully printed
                  voucher feels like a real gift, and drives repeat customers back through your
                  door. At Ramirez Ventures we print full-colour gift vouchers on heavy 350 gsm
                  card stock in DL, A6, or business-card sizes.
                </p>
                <p>
                  We offer optional scratch-off panels to hide redemption codes, unique sequential
                  serial numbers, and barcodes or QR codes for easy scanning at point of sale.
                  All vouchers include free design from your logo and brand colours, no artwork
                  experience needed on your end.
                </p>
                <p>
                  Popular use cases include promotional discount vouchers, birthday gift cards,
                  referral rewards, and loyalty bonuses. We can print a single value per batch or
                  mix multiple values in one order, just specify when ordering.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour print on 350 gsm gloss or matte art board</li>
                  <li>DL, A6, or business-card format options</li>
                  <li>Scratch-off panels available on request</li>
                  <li>Sequential numbering and unique barcodes/QR codes</li>
                  <li>Free design from your logo and brand colours</li>
                  <li>Minimum 50 vouchers per order</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Formats</h2>
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
                Selected: <span className="font-medium text-foreground">{selectedSize.label}, {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Gift Vouchers  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Gift+Vouchers"),
                      href: "/products/digital-printing/gift-vouchers",
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
                  <span>Scratch-off panels available, protect codes until redemption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Unique serial numbers and QR codes available per voucher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design from your brand, no artwork needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>350 gsm heavy card, a gift that feels premium</span>
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
