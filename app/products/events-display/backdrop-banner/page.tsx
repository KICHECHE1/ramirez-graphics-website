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

{/* Images */}
import BackdropBanner from "@/app/assets/back drop banner.jpg";
import TableCloth from "@/app/assets/Tablecloth.jpg";
import TableRollup from "@/app/assets/table roll up _Banner_Mockup_2.jpg";
import Kitenge from "@/app/assets/kitenge notebooks.jpg";

const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

const WHATSAPP = "254706207037";

const sizes = [
  { label: "1.5 x 2 m",  dimensions: "150 x 200 cm, small backdrop",   price: 8500 },
  { label: "2 x 2 m",    dimensions: "200 x 200 cm, standard backdrop", price: 10500 },
  { label: "2 x 3 m",    dimensions: "200 x 300 cm, wide backdrop",     price: 14500 },
  { label: "3 x 3 m",    dimensions: "300 x 300 cm, stage backdrop",    price: 18500 },
  { label: "4 x 2 m",    dimensions: "400 x 200 cm, panoramic backdrop", price: 22000 },
];

const materialNote =
  "Printed on wrinkle-resistant 260 gsm fabric (standard) or 440 gsm vinyl (heavy-duty outdoor). Includes adjustable aluminium frame and carry bag. Frame extends to fit multiple print sizes.";

const faqs = [
  {
    q: "What is the difference between fabric and vinyl backdrop prints?",
    a: "Fabric backdrops are completely wrinkle-free when hung, ideal for photo booths, media walls, and indoor press conferences where a pristine look is important. Vinyl is heavier and more robust, making it better suited for outdoor events and situations where the banner may be exposed to stronger conditions.",
  },
  {
    q: "Can I use the same frame for different print sizes?",
    a: "Yes. Our adjustable aluminium frames can be extended or contracted to suit multiple print sizes. If you order a new print to fit your existing frame, just let us know your current frame dimensions.",
  },
  {
    q: "What layout options are available for backdrop banners?",
    a: "The most popular layouts are step-and-repeat (a repeating logo pattern), branded solid-colour backdrops, and custom event designs with imagery and text. We can produce any layout, just share your design brief and we will handle the rest.",
  },
  {
    q: "How do I set up the backdrop at my event?",
    a: "The aluminium frame clicks together in sections with no tools required. The print attaches via hook-and-loop (Velcro-style) tabs or pole pockets depending on the format. Most setups take 10 to 15 minutes for a two-person team.",
  },
  {
    q: "How quickly are backdrop banners ready?",
    a: "Standard orders are ready within 3 to 5 working days. Express 48-hour turnaround is available for an additional charge, contact us to confirm availability before placing your order.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Table Rollup Printing",
    href: "/products/events-display/table-rollup",
    image: TableRollup.src,
  },
  {
    name: "Table Cloth Printing",
    href: "/products/events-display/table-cloth",
    image: TableCloth.src,
  },
  {
    name: "Kitenge Notebooks",
    href: "/products/events-display/kitenge-notebooks",
    image: Kitenge.src,
  },
];

export default function EventsBackdropBannerPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order an Adjustable Backdrop Banner (Events Display), ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Adjustable Backdrop Banner</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Adjustable Backdrop Banner
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Professional branded backdrops for press conferences, photo booths, award ceremonies,
            and corporate events, fabric or vinyl, step-and-repeat or custom design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={BackdropBanner.src}
                alt="Adjustable Backdrop Banner"
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
                  A backdrop banner is the centrepiece of any professional event setup. Whether
                  you are hosting a press conference, running a photo booth, staging an award
                  ceremony, or branding a corporate activation, an adjustable backdrop transforms
                  your space into an immersive branded environment.
                </p>
                <p>
                  At Ramirez Ventures we offer backdrop banners on both wrinkle-resistant fabric
                  and heavy-duty vinyl. Fabric is the premium indoor choice, it looks completely
                  smooth when hung and photographs beautifully without glare. Vinyl is more robust
                  for outdoor events and long-term use.
                </p>
                <p>
                  The included adjustable aluminium frame requires no tools to assemble and fits
                  multiple print sizes, so your frame investment grows with your event needs.
                  Popular design formats include step-and-repeat logo patterns, solid branded
                  colour backdrops, and fully custom event artwork.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Wrinkle-resistant fabric or 440 gsm vinyl options</li>
                  <li>5 standard sizes from 1.5 x 2 m to 4 x 2 m panoramic</li>
                  <li>Adjustable aluminium frame, no tools required</li>
                  <li>Step-and-repeat, solid, or custom design layouts</li>
                  <li>Carry bag included for easy transport</li>
                  <li>Free design from your logo and event details</li>
                  <li>Replacement prints available for existing frames</li>
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
                Selected: <span className="font-medium text-foreground">{selectedSize.label}, {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Backdrop Banner  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Backdrop+Banner"),
                      href: "/products/events-display/backdrop-banner",
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
                  <span>Wrinkle-free fabric, perfect for photo booths and media walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Adjustable aluminium frame, no tools, multi-size compatible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design, step-and-repeat, solid, or fully custom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Replacement prints available, protect your frame investment</span>
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
