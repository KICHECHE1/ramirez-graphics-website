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
  { label: "A6 — 50 postcards",   dimensions: "148 × 105 mm, 50 pcs",  price: 1000 },
  { label: "A6 — 100 postcards",  dimensions: "148 × 105 mm, 100 pcs", price: 1600 },
  { label: "A6 — 250 postcards",  dimensions: "148 × 105 mm, 250 pcs", price: 3000 },
  { label: "A5 — 50 postcards",   dimensions: "148 × 210 mm, 50 pcs",  price: 1600 },
  { label: "A5 — 100 postcards",  dimensions: "148 × 210 mm, 100 pcs", price: 2500 },
  { label: "A5 — 250 postcards",  dimensions: "148 × 210 mm, 250 pcs", price: 4500 },
];

const materialNote =
  "Printed full-colour on 300 gsm premium art board. Gloss laminate or matte laminate finish. Single-sided or double-sided printing available. Writing space can be included on the reverse for use as mailed or hand-delivered cards.";

const faqs = [
  {
    q: "What are postcards commonly used for?",
    a: "Postcards are used as promotional mailers, loyalty cards, event invitations, thank-you cards, product launch announcements, coupon inserts, and greeting cards — any situation where you need a compact, high-impact printed piece.",
  },
  {
    q: "Can I have a writing area on the back?",
    a: "Yes. We can include a lined writing space, a message area, and an address block on the reverse side — making your postcards suitable for actual mailing.",
  },
  {
    q: "What finish should I choose?",
    a: "Gloss laminate gives bold, vivid colour reproduction — ideal for photos and bright designs. Matte laminate gives a softer, premium finish that is easy to write on and reduces glare.",
  },
  {
    q: "Can I order different designs in the same batch?",
    a: "Yes. Multiple designs can be combined in a single order as long as they share the same size and finish. Contact us for split-run pricing.",
  },
  {
    q: "How quickly can I get my postcards?",
    a: "Standard postcard orders are ready within 24–48 hours. Same-day printing is available for orders placed before 10 AM.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  { name: "Business Cards Printing",  href: "/products/business-cards/standard",     image: ph(400, 300, "Business+Cards") },
  { name: "Bookmarks Printing",       href: "/products/business-cards/bookmarks",    image: ph(400, 300, "Bookmarks") },
  { name: "Flyers Printing",          href: "/products/flyers",                      image: ph(400, 300, "Flyers") },
];

export default function PostcardsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Postcards — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/products/business-cards" className="hover:text-foreground transition-colors">Business Cards</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="text-foreground font-medium">Postcards Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Postcards Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Full-colour A6 and A5 postcards on 300 gsm art board — perfect for promotions,
            mailers, event invitations, and branded inserts. Gloss or matte finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image src={ph(700, 525, "Postcards+Printing")} alt="Postcards Printing" fill className="object-cover" unoptimized priority />
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Product Overview</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Postcards punch well above their weight as a marketing tool. They are compact
                  enough to hand out in bulk, sturdy enough to mail, and visually impactful enough
                  to stand out in any pile of post. At Ramirez Ventures we print postcards in
                  vivid full colour on 300 gsm premium art board — thick, professional, and built
                  to make an impression.
                </p>
                <p>
                  We offer two standard sizes: A6 (148 × 105 mm) for a compact, easy-to-carry
                  format, and A5 (148 × 210 mm) for more visual space — ideal for product
                  showcases, detailed event information, or premium brand campaigns. Both sizes
                  can be produced single-sided or double-sided.
                </p>
                <p>
                  If you want your postcards to function as mailers, we can include a writing area,
                  address lines, and a stamp box on the reverse. Gloss laminate delivers bold,
                  punchy colour; matte laminate gives a refined, tactile finish that writes easily.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour print on 300 gsm premium art board</li>
                  <li>A6 and A5 standard sizes; custom sizes available</li>
                  <li>Gloss or matte laminate finish</li>
                  <li>Single-sided or double-sided printing</li>
                  <li>Writing area and address block on reverse available</li>
                  <li>Multiple designs combinable in one batch</li>
                  <li>24–48 hr turnaround; same-day available</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm font-medium text-foreground py-3">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-3 leading-relaxed">{faq.a}</AccordionContent>
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
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Option</th>
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Spec</th>
                      <th className="px-4 py-3" />
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size) => (
                      <tr key={size.label} onClick={() => setSelectedSize(size)}
                        className={`border-b border-border last:border-0 cursor-pointer transition-colors ${selectedSize.label === size.label ? "bg-primary/10" : "hover:bg-muted/40"}`}>
                        <td className="px-4 py-3 font-medium text-foreground">{size.label}</td>
                        <td className="px-4 py-3 text-muted-foreground">{size.dimensions}</td>
                        <td className="px-4 py-3 text-right">
                          <div className={`inline-flex size-4 rounded-full border-2 transition-colors ${selectedSize.label === size.label ? "border-primary bg-primary" : "border-muted-foreground"}`} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-muted-foreground bg-muted/40 rounded-lg p-3 leading-relaxed">{materialNote}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-1">Order Now</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Selected: <span className="font-medium text-foreground">{selectedSize.label} — {selectedSize.dimensions}</span>
              </p>
              <div className="flex flex-col gap-3">
                <Button className="w-full h-12 text-base gap-2"
                  onClick={() => addToCart({ name: `Postcards – ${selectedSize.label}`, price: selectedSize.price, image: ph(400, 300, "Postcards"), href: "/products/business-cards/postcards" })}>
                  <ShoppingCart className="size-5" />Add to Cart
                </Button>
                <Button className="w-full h-12 text-base gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white" asChild>
                  <a href={`https://wa.me/${WHATSAPP}?text=${waMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-5" />Order via WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Orders confirmed within 1 hour · 24–48 hr turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  "300 gsm art board — thick, professional, and mail-ready",
                  "Writing area and address block available on reverse",
                  "Mix multiple designs in one order at the same price",
                  "Same-day printing for urgent campaigns or events",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-14" />

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.href} href={product.href}
                className="group rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-4/3 bg-muted overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
