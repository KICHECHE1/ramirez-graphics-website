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

/* ─── placeholder helper ─── */
const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

const WHATSAPP = "254700000000";

/* ─── Size options ─── */
const sizes = [
  { label: "Small", dimensions: "2m × 2m", price: 7500 },
  { label: "Medium", dimensions: "2m × 3m", price: 9500 },
  { label: "Large", dimensions: "3m × 3m", price: 12000 },
  { label: "Extra Large", dimensions: "4m × 3m", price: 16000 },
];

const materialNote =
  "Printed on 330gsm PVC flex or premium knitted fabric. Includes an adjustable aluminium pop-up frame that accommodates multiple width configurations and a carry bag.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "Can the backdrop banner be used outdoors?",
    a: "Yes — adjustable backdrop banners are designed to work in both indoor and outdoor settings. For windy outdoor events we recommend using ground stakes or sandbag weights to secure the frame.",
  },
  {
    q: "How long does installation take?",
    a: "The adjustable aluminium frame assembles in under 5 minutes with no tools required, making it perfect for quick event setups.",
  },
  {
    q: "What resolution should artwork be submitted at?",
    a: "For best results, supply artwork at 72–100 dpi at full print size, or send vector files (AI or EPS). Our design team can also prepare artwork from your logo and content.",
  },
  {
    q: "Can I replace the banner graphic without buying a new stand?",
    a: "Yes. Replacement banner prints are available at a lower cost if you already have an existing frame. Just bring or send in your stand for measurement.",
  },
  {
    q: "Do you offer double-sided printing?",
    a: "Yes, double-sided fabric backdrop banners are available on request — ideal when your display will be viewed from both the front and behind.",
  },
  {
    q: "Is fabric or PVC better for my event?",
    a: "Fabric gives a premium, wrinkle-resistant finish that photographs beautifully and reduces glare under studio lights — perfect for press conferences and photo opportunities. PVC flex is more affordable and is great for promotional events.",
  },
];

/* ─── Related products ─── */
const relatedProducts = [
  {
    name: "Table Rollup Printing",
    href: "/products/banners/table-rollup",
    image: ph(400, 300, "Table+Rollup"),
  },
  {
    name: "Table Cloth Printing",
    href: "/products/banners/table-cloth",
    image: ph(400, 300, "Table+Cloth"),
  },
  {
    name: "PVC Wheel Cover",
    href: "/products/banners/pvc-wheel-cover",
    image: ph(400, 300, "PVC+Wheel+Cover"),
  },
];

export default function BackdropBannerPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order an Adjustable Backdrop Banner — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ── Breadcrumb ── */}
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/banners" className="hover:text-foreground transition-colors">Banners</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Adjustable Backdrop Banner</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Adjustable Backdrop Banner
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Professional branded backdrops for press conferences, product launches, photo
            opportunities, and corporate events — printed on PVC or premium fabric.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Adjustable+Backdrop+Banner")}
                alt="Adjustable Backdrop Banner"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>

            {/* Product Overview */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The Adjustable Backdrop Banner is the professional&apos;s choice for creating a
                  powerful branded backdrop at any event. Whether you are hosting a press
                  conference, product launch, NGO summit, school prize-giving, or corporate
                  photography session, a high-quality backdrop transforms your venue into a
                  fully-branded environment.
                </p>
                <p>
                  Our backdrops are printed on either 330gsm PVC flex or premium knitted display
                  fabric, depending on your preference and budget. The knitted fabric option is
                  virtually wrinkle-free, eliminates camera glare, and produces outstanding results
                  in professional photography and live broadcast settings.
                </p>
                <p>
                  Each backdrop comes with an adjustable pop-up aluminium frame that expands and
                  contracts to fit multiple banner widths, saving you money if you need different
                  configurations in the future. Assembly takes under five minutes with no tools.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Available in PVC flex or premium knitted fabric</li>
                  <li>Adjustable aluminium pop-up frame included</li>
                  <li>Glare-free fabric option for photography and broadcast</li>
                  <li>Four size configurations to suit any venue</li>
                  <li>Double-sided printing available on request</li>
                  <li>Carry bag included for easy transport</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
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

          {/* ════ RIGHT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Available Sizes */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Dimensions (W × H)</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size) => (
                      <tr
                        key={size.label}
                        onClick={() => setSelectedSize(size)}
                        className={`border-b border-border last:border-0 cursor-pointer transition-colors ${
                          selectedSize.label === size.label
                            ? "bg-primary/10"
                            : "hover:bg-muted/40"
                        }`}
                      >
                        <td className="px-4 py-3 font-medium text-foreground">{size.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{size.dimensions}</td>
                        <td className="px-4 py-3 text-right">
                          <div
                            className={`inline-flex size-4 rounded-full border-2 transition-colors ${
                              selectedSize.label === size.label
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            }`}
                          />
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

            {/* Order Methods */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-1">Order Now</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Selected:{" "}
                <span className="font-medium text-foreground">
                  {selectedSize.label} — {selectedSize.dimensions}
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  className="w-full h-12 text-base gap-2"
                  onClick={() =>
                    addToCart({
                      name: `Adjustable Backdrop Banner – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Backdrop+Banner"),
                      href: "/products/banners/backdrop-banner",
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
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    Order via WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Orders confirmed within 1 hour · 48 hr turnaround · Free local Muhoroni delivery
              </p>
            </div>
          </div>
        </div>

        {/* ── Related Products — full width ── */}
        <section className="mt-16">
          <Separator className="mb-10" />
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {item.name}
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
