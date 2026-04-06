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
  { label: "4 ft Table", dimensions: "120cm × 75cm × 75cm drop", price: 4200 },
  { label: "6 ft Table", dimensions: "150cm × 75cm × 75cm drop", price: 5500 },
  { label: "6 ft Full Cover", dimensions: "180cm × 75cm × 75cm drop", price: 6500 },
  { label: "8 ft Table", dimensions: "240cm × 75cm × 75cm drop", price: 7800 },
];

const materialNote =
  "Printed on premium 220gsm dye-sublimation polyester stretch fabric. Machine washable and wrinkle-resistant. Custom table sizes and 3-sided or 4-sided coverage available on request.";

/* ─── FAQs ─── */
const faqs = [
  {
    q: "What table sizes are covered?",
    a: "We offer standard sizes for 4 ft, 6 ft, and 8 ft folding tables. If you have a non-standard table, simply provide the exact dimensions and we will create a custom-fit cloth.",
  },
  {
    q: "Is the fabric machine washable?",
    a: "Yes. Our table cloths are printed using dye-sublimation on 220gsm polyester, which is fully machine washable at 30°C. The print will not crack, peel, or fade with normal washing.",
  },
  {
    q: "Can I get a 4-sided cover that goes all the way to the floor?",
    a: "Absolutely. We offer both 3-sided (open back) and 4-sided (fully enclosed) table cloths. Just mention your preference when placing your order.",
  },
  {
    q: "What artwork format should I provide?",
    a: "For best results, supply vector files (AI, EPS, or PDF) or high-resolution images at minimum 150 dpi at print size. Our in-house designers can also build the layout from your logo and brand guidelines.",
  },
  {
    q: "How soon will my order be ready?",
    a: "Standard table cloths are ready within 3–5 working days. Rush orders can be accommodated depending on current production schedules — contact us to confirm availability.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we ship nationwide. Muhoroni orders qualify for free delivery. Upcountry and courier delivery charges apply based on destination.",
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
    name: "S-Banner Printing",
    href: "/products/banners/s-banner",
    image: ph(400, 300, "S-Banner"),
  },
];

export default function TableClothPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order a Branded Table Cloth — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Table Cloth Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Page heading ── */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Table Cloth Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Custom branded table covers for exhibitions, trade shows, corporate events, and retail
            displays — printed on premium stretch polyester for a sleek, professional finish.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-8">
            {/* Product Image */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Branded+Table+Cloth")}
                alt="Branded Table Cloth"
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
                  A branded table cloth is one of the simplest and most effective ways to upgrade
                  your presence at any exhibition, trade fair, conference, or retail activation.
                  Instead of a plain white cover, your table becomes a full advertising surface —
                  displaying your logo, brand colours, and key messages at eye level.
                </p>
                <p>
                  At Ramirez Ventures, table cloths are printed using high-definition dye-sublimation
                  technology on 220gsm premium stretch polyester. The fabric clings neatly to the
                  table for a tailored, wrinkle-free appearance, and stands up to repeated use and
                  washing without any loss of colour vibrancy.
                </p>
                <p>
                  Available in 3-sided (open back for easy access) and 4-sided (fully enclosed)
                  configurations. Custom sizes are welcomed — simply provide your table measurements
                  and we will cut and print to fit perfectly.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Dye-sublimation print — full-colour, edge to edge</li>
                  <li>220gsm stretch polyester — tailored fit, no bunching</li>
                  <li>Machine washable at 30°C without colour loss</li>
                  <li>3-sided or 4-sided coverage options</li>
                  <li>Custom sizes available for non-standard tables</li>
                  <li>Lightweight and folds compact for easy transport</li>
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
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Table Size</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Cover Dimensions</th>
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
                      name: `Branded Table Cloth – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Table+Cloth"),
                      href: "/products/banners/table-cloth",
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
                Orders confirmed within 1 hour · 3–5 day turnaround · Free local Muhoroni delivery
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
