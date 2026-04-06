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
  { label: "Standard", dimensions: "60cm × 160cm", price: 2800 },
  { label: "Wide", dimensions: "80cm × 160cm", price: 3500 },
  { label: "Extra Wide", dimensions: "85cm × 200cm", price: 4200 },
];

const materialNote =
  "Printed on premium 500-micron PVC vinyl with UV-resistant inks. The S-shaped curved aluminium stand allows double-sided printing for maximum visibility from all angles. Includes a carry bag.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "What makes an S-Banner different from a regular rollup?",
    a: "The S-Banner features an S-shaped curved aluminium frame that holds two panels — one facing forward and one facing back — giving you double-sided visibility. It stands out in crowds and hallways where you need to attract attention from multiple directions.",
  },
  {
    q: "Is double-sided printing included in the price?",
    a: "Yes. S-Banners are designed for double-sided use and both sides are printed as standard. You can display the same artwork on both sides or different designs on each.",
  },
  {
    q: "How stable is the S-Banner stand?",
    a: "The curved aluminium frame distributes weight evenly, making it more stable than a standard rollup on flat surfaces. For outdoor placement in windy conditions, we recommend using sandbag weights or securing with guide ropes.",
  },
  {
    q: "What file format should I provide for artwork?",
    a: "We accept PDF, AI, EPS, PSD, or high-resolution JPG/PNG at a minimum of 150 dpi at full print size. Our in-house design team can also create the artwork from your logo and content.",
  },
  {
    q: "How long does production take?",
    a: "Standard orders are ready within 24–48 hours. Same-day turnaround is available for orders placed before 10 AM subject to production availability.",
  },
  {
    q: "Do you offer delivery outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free delivery. Upcountry delivery charges depend on destination.",
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
    name: "Adjustable Backdrop Banner",
    href: "/products/banners/backdrop-banner",
    image: ph(400, 300, "Backdrop+Banner"),
  },
  {
    name: "Table Cloth Printing",
    href: "/products/banners/table-cloth",
    image: ph(400, 300, "Table+Cloth"),
  },
];

export default function SBannerPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order an S-Banner — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">S-Banner Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <Badge className="mb-3">New</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            S-Banner Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Double-sided S-shaped display banners for trade shows, shopping malls, aisle displays,
            and outdoor activations — grab attention from every direction.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "S-Banner+Display")}
                alt="S-Banner Display"
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
                  The S-Banner — also called a double-sided retractable banner or serpentine banner —
                  uses a uniquely shaped S-curve aluminium frame to hold two printed panels back to
                  back. This means your brand message is visible to people approaching from either
                  direction, making it ideal for busy walkways, exhibition aisles, shopping centre
                  activations, and outdoor markets.
                </p>
                <p>
                  At Ramirez Ventures, S-Banners are printed on premium 500-micron PVC vinyl using
                  high-resolution UV-resistant inks. Colours stay bold and vivid even with prolonged
                  use, and the PVC surface is easy to wipe clean. The sturdy curved frame sets up in
                  minutes and packs down into a convenient carry bag.
                </p>
                <p>
                  Choose from three width and height combinations to match your display requirements.
                  Both sides are printed as standard — you can use the same artwork on each side or
                  two entirely different designs to maximise the impact of a single stand.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Double-sided print — visible from front and back</li>
                  <li>S-curve aluminium frame for enhanced stability</li>
                  <li>UV-resistant inks on 500-micron PVC vinyl</li>
                  <li>Three size options to suit any space</li>
                  <li>Sets up in under 3 minutes with no tools</li>
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
                      name: `S-Banner – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "S-Banner"),
                      href: "/products/banners/s-banner",
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
                Orders confirmed within 1 hour · 24–48 hr turnaround · Free local Muhoroni delivery
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
                <div className="relative aspect-4/3 bg-muted overflow-hidden">
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
