"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  { label: '13"', dimensions: "Fits 13-inch spare tyre", price: 1800 },
  { label: '14"', dimensions: "Fits 14-inch spare tyre", price: 2000 },
  { label: '15"', dimensions: "Fits 15-inch spare tyre", price: 2200 },
  { label: '16"', dimensions: "Fits 16-inch spare tyre", price: 2500 },
  { label: '17"', dimensions: "Fits 17-inch spare tyre", price: 2800 },
];

const materialNote =
  "Printed on heavyweight 440gsm PVC flex with UV-resistant inks. Features reinforced eyelets and an elastic drawstring for a secure, weather-resistant fit over any standard spare wheel cover mounting. Custom shapes and non-standard sizes available on request.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "What tyre sizes are available?",
    a: "We standard-stock covers for 13\", 14\", 15\", 16\", and 17-inch tyres. If your spare is a non-standard size, send us the tyre measurements (width, aspect ratio, and rim diameter) and we will create a custom-fit cover.",
  },
  {
    q: "Is the cover waterproof?",
    a: "Yes. PVC wheel covers are fully waterproof and UV-resistant, making them suitable for permanent outdoor fitment. The heavy-duty 440gsm PVC material resists fading, cracking, and peeling even under direct African sun.",
  },
  {
    q: "How is the cover attached to the spare wheel?",
    a: "Each cover comes with reinforced eyelets and an elastic drawstring that pulls tight to secure the cover firmly around the rim. Installation takes less than a minute and requires no tools.",
  },
  {
    q: "Can I put my business name and logo on it?",
    a: "Absolutely — that is exactly what PVC wheel covers are for. Send us your logo and any text you want printed and our design team will lay it out across the circular panel at no extra charge.",
  },
  {
    q: "What artwork format should I provide?",
    a: "Vector files (AI, EPS, or PDF) are preferred for sharp results. High-resolution PNG or JPG files (at least 150 dpi at print size) are also accepted.",
  },
  {
    q: "How long does production take?",
    a: "Most PVC wheel cover orders are ready within 48–72 hours. Rush orders can be discussed — contact us on WhatsApp to confirm availability.",
  },
];

/* ─── Related products ─── */
const relatedProducts = [
  {
    name: "S-Banner Printing",
    href: "/products/banners/s-banner",
    image: ph(400, 300, "S-Banner"),
  },
  {
    name: "Table Cloth Printing",
    href: "/products/banners/table-cloth",
    image: ph(400, 300, "Table+Cloth"),
  },
  {
    name: "Adjustable Backdrop Banner",
    href: "/products/banners/backdrop-banner",
    image: ph(400, 300, "Backdrop+Banner"),
  },
];

export default function PVCWheelCoverPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[1]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order a PVC Wheel Cover — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">PVC Wheel Cover</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            PVC Wheel Cover
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Custom-printed spare tyre covers for vehicles, vans, and SUVs — turn your spare wheel
            into a moving billboard for your brand wherever you go.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "PVC+Wheel+Cover")}
                alt="PVC Wheel Cover"
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
                  Every vehicle with an external spare tyre is a mobile advertising surface waiting
                  to be activated. A custom PVC wheel cover turns a plain black spare tyre into a
                  bold, professionally branded display that travels with your vehicle wherever it
                  goes — city streets, highways, car parks, and beyond.
                </p>
                <p>
                  At Ramirez Ventures, PVC wheel covers are printed on heavyweight 440gsm PVC flex
                  using UV-resistant, weatherproof inks. The material is built to survive Kenya&apos;s
                  harsh sun, dust, and occasional rain without fading, cracking, or peeling — a
                  long-lasting investment in mobile brand visibility.
                </p>
                <p>
                  Available for standard rim sizes from 13 to 17 inches. Each cover features
                  reinforced eyelets and a heavy-duty elastic drawstring for a secure, vibration-free
                  fit. Custom sizes for non-standard wheels, 4WD vehicles, and matatu spare tyres
                  are available on request.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>440gsm heavyweight PVC flex — built for outdoor durability</li>
                  <li>UV-resistant and waterproof print</li>
                  <li>Reinforced eyelets and elastic drawstring for secure fit</li>
                  <li>Available in 13&quot;, 14&quot;, 15&quot;, 16&quot;, and 17&quot; sizes</li>
                  <li>Custom non-standard sizes available on request</li>
                  <li>Full-colour print — logo, text, and graphics</li>
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
            {/* Tyre Sizes */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Tyre Sizes</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Rim Size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Fits</th>
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
                      name: `PVC Wheel Cover – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "PVC+Wheel+Cover"),
                      href: "/products/banners/pvc-wheel-cover",
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
                Orders confirmed within 1 hour · 48–72 hr turnaround · Free local Muhoroni delivery
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
