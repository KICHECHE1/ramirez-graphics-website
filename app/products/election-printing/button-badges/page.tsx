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
  { label: '25 mm, Small',   dimensions: "25 mm diameter, safety-pin back",  price: 3500 },
  { label: '32 mm, Medium',  dimensions: "32 mm diameter, safety-pin back",  price: 4500 },
  { label: '38 mm, Standard',dimensions: "38 mm diameter, safety-pin back",  price: 5500 },
  { label: '44 mm, Large',   dimensions: "44 mm diameter, safety-pin back",  price: 7000 },
  { label: '58 mm, XL',      dimensions: "58 mm diameter, safety-pin back",  price: 9000 },
];

const materialNote =
  "Full-colour print on 0.45 mm tin plate with mylar protective film, Pantone-accurate colours. Safety-pin back as standard; magnet back available on request. Bulk discounts apply for 500+ pieces.";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum is 100 badges per design. If you need multiple designs, each design requires a minimum of 100 pieces. Mixing sizes in one order is welcome, contact us for combined pricing.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders are ready within 24 to 48 hours. Rush same-day production is available for orders placed before 10 AM, contact us to confirm slot availability.",
  },
  {
    q: "Can I submit my own artwork?",
    a: "Yes. We accept PNG, JPEG, PDF, and AI files at 300 dpi or higher. If you need design assistance, our team can create the artwork from your photo, name, and colour preferences at no extra charge.",
  },
  {
    q: "Are the badges waterproof?",
    a: "Yes. The mylar top coat is water-resistant, protecting the print from light rain and handling during campaign activities.",
  },
  {
    q: "Can I get a magnetic back instead of a pin?",
    a: "Yes. Magnet-back badges are available on request, ideal for clothing that you do not want to puncture. Magnet backs carry a small additional cost per badge.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Posters Printing",
    href: "/products/election-printing/posters",
    image: ph(400, 300, "Campaign+Posters"),
  },
  {
    name: "Selfie Frames",
    href: "/products/election-printing/selfie-frames",
    image: ph(400, 300, "Selfie+Frames"),
  },
  {
    name: "Nametags",
    href: "/products/election-printing/nametags",
    image: ph(400, 300, "Nametags"),
  },
];

export default function ButtonBadgesPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Button Badges, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Button Badges Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Button Badges Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Full-colour custom button badges for campaigns, events, schools, and promotions,
            fast 24-hour turnaround, bulk pricing, delivered anywhere in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Button+Badges+Printing")}
                alt="Button Badges Printing"
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
                  Button badges are the most visible, wearable campaign accessory, worn by
                  supporters, volunteers, and agents, they carry your face and message to every
                  corner of the constituency. At Ramirez Ventures we print sharp, vivid
                  full-colour badges on 0.45 mm tin plate with a durable mylar protective film
                  that keeps colours bright even with heavy handling.
                </p>
                <p>
                  Available in five sizes from 25 mm to 58 mm, our badges feature a standard
                  safety-pin back as default, with magnet backs available on request. We handle
                  everything from artwork design to bulk delivery, so you can focus on the
                  campaign trail.
                </p>
                <p>
                  Beyond elections, button badges are popular for school prefects, corporate
                  events, product launches, fundraisers, and team-building activities. Rush
                  same-day production is available, contact us to confirm slot availability.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour print on 0.45 mm tin plate with mylar film</li>
                  <li>Sizes: 25 mm, 32 mm, 38 mm, 44 mm, and 58 mm</li>
                  <li>Safety-pin back (magnet back optional)</li>
                  <li>Water-resistant surface finish</li>
                  <li>Free artwork design from your photo and details</li>
                  <li>Minimum 100 badges per design</li>
                  <li>24 to 48 hour turnaround; same-day available</li>
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
                      name: `Button Badges  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Button+Badges"),
                      href: "/products/election-printing/button-badges",
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
                  <span>Free artwork design from your photo and details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Same-day rush production available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Bulk discounts for 500+ pieces</span>
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
