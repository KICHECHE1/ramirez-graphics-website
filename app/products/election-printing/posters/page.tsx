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
  { label: "A3 Poster",    dimensions: "297 × 420 mm",  price: 4500 },
  { label: "A2 Poster",    dimensions: "420 × 594 mm",  price: 8000 },
  { label: "A1 Poster",    dimensions: "594 × 841 mm",  price: 14000 },
  { label: "A0 Poster",    dimensions: "841 × 1189 mm", price: 22000 },
  { label: "Custom Size",  dimensions: "Any dimension — contact us", price: 0 },
];

const materialNote =
  "Prices shown are per 100 posters (MOQ 50). Printed on 150 gsm gloss art paper as standard; 200 gsm premium available on request. Full-colour, double-sided printing available. Outdoor waterproof vinyl printing also available for large-format banners.";

const faqs = [
  {
    q: "What paper weight do you use for campaign posters?",
    a: "Standard campaign posters are printed on 150 gsm gloss art paper — vivid colours with a professional sheen. For premium feel, 200 gsm is available. For outdoor use we recommend our vinyl banner option which is fully weatherproof.",
  },
  {
    q: "Can I get posters printed double-sided?",
    a: "Yes. Double-sided printing is available for A3 and A2 posters — ideal for poster boards and hanging displays where both sides are visible.",
  },
  {
    q: "Do you offer design services for campaign posters?",
    a: "Yes. Our in-house designers can create a compelling campaign poster layout from your photo, name, position, party colours, and slogan at no extra charge. Just share your details via WhatsApp.",
  },
  {
    q: "How fast can you print large quantities?",
    a: "We can produce 500 A3 posters within 24 hours and 500 A2 posters within 48 hours. For larger volumes or rush orders, contact us to confirm our current capacity.",
  },
  {
    q: "Can posters be laminated for durability?",
    a: "Yes. Gloss or matte laminate is available for all poster sizes and adds significant tear and moisture resistance — highly recommended for high-traffic outdoor display.",
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
    name: "Selfie Frames",
    href: "/products/election-printing/selfie-frames",
    image: ph(400, 300, "Selfie+Frames"),
  },
  {
    name: "Branded Aprons",
    href: "/products/election-printing/aprons",
    image: ph(400, 300, "Branded+Aprons"),
  },
];

export default function PostersPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Campaign Posters — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Posters Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Campaign Posters Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Bold, vibrant campaign posters from A3 to A0 — fast bulk printing, free design,
            and rapid delivery across Kenya for election season and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Campaign+Posters+Printing")}
                alt="Campaign Posters Printing"
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
                  In any election campaign, posters are your most visible ground-level media
                  presence. At Ramirez Ventures we print striking full-colour campaign posters on
                  150 gsm gloss art paper that hold vivid colours under the Kenyan sun. From A3
                  hand-held posters to large A0 statement pieces, we handle any size and any
                  quantity — with fast bulk turnaround.
                </p>
                <p>
                  Our in-house designers can build a professional campaign poster layout from your
                  photo, party colours, name, and slogan — delivered back to you for approval
                  before printing. We offer single-sided and double-sided options, as well as
                  gloss and matte lamination for extra durability.
                </p>
                <p>
                  Campaign posters are also widely used for events, product launches, school
                  notices, community announcements, and business promotions. Whatever your
                  message — we&apos;ll print it boldly.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour print on 150 gsm gloss art paper</li>
                  <li>Sizes: A3, A2, A1, A0, and custom dimensions</li>
                  <li>Single-sided and double-sided printing</li>
                  <li>Gloss or matte lamination available</li>
                  <li>Free campaign poster design from your photo and details</li>
                  <li>Minimum 50 posters per order</li>
                  <li>Bulk orders of 500+ ready within 24–48 hours</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
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
                      name: `Campaign Posters – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Campaign+Posters"),
                      href: "/products/election-printing/posters",
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
                Orders confirmed within 1 hour · Bulk 500+ in 24–48 hrs · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free campaign poster design from your photo and slogan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk 500+ A3 posters ready within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Lamination option for extended outdoor durability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Nationwide delivery — every constituency served</span>
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
