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
  { label: "A4 · Black & White",    dimensions: "210 × 297 mm, B&W",      price: 10 },
  { label: "A4 · Full Colour",       dimensions: "210 × 297 mm, Colour",   price: 30 },
  { label: "A3 · Black & White",    dimensions: "297 × 420 mm, B&W",      price: 20 },
  { label: "A3 · Full Colour",       dimensions: "297 × 420 mm, Colour",   price: 60 },
  { label: "A4 · Binding (up to 50 pp)", dimensions: "Spiral or comb bound", price: 250 },
];

const materialNote =
  "Printed on 80 gsm bond paper (standard) or 90–100 gsm premium paper on request. Binding options include spiral, comb, and thermal binding. Laminated covers available. Prices shown are per page (single-sided); double-sided rates available.";

const faqs = [
  {
    q: "What file formats do you accept?",
    a: "We accept PDF, DOCX, PPTX, XLSX, and most common document formats. For the best print output, PDF is recommended as it preserves fonts, layouts, and images exactly.",
  },
  {
    q: "Can I print double-sided?",
    a: "Yes, double-sided (duplex) printing is available for both black-and-white and colour documents and is charged at a reduced per-page rate. Mention this when placing your order.",
  },
  {
    q: "Do you offer binding services?",
    a: "Yes. We offer spiral binding, comb binding, and thermal (perfect) binding. Covers can be clear PVC or printed card. Just let us know your preferred finish.",
  },
  {
    q: "How quickly can I get my documents printed?",
    a: "Most document print jobs are ready within the hour for orders placed before 3 PM. Same-day binding is also available for most quantities — contact us to confirm.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum — you can print a single page. Volume discounts apply for orders of 100+ pages; contact us for a bulk quote.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Business Cards Printing",
    href: "/products/digital-printing/business-cards",
    image: ph(400, 300, "Business+Cards"),
  },
  {
    name: "Photo Printing Services",
    href: "/products/digital-printing/photos",
    image: ph(400, 300, "Photo+Printing"),
  },
  {
    name: "Flyers Printing",
    href: "/products/flyers",
    image: ph(400, 300, "Flyers"),
  },
];

export default function DocumentPrintingPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Document Printing — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Document Printing</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Best Seller</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Document Printing
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Fast, high-quality black-and-white and colour document printing — single pages to bound
            reports — ready same day in Muhoroni, Kisumu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Document+Printing")}
                alt="Document Printing"
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
                  From a single-page memo to a fully bound 200-page report, Ramirez Ventures
                  delivers fast, crisp document printing for businesses, students, schools,
                  organisations, and individuals in Muhoroni and across Kenya.
                </p>
                <p>
                  We print on high-quality 80 gsm bond paper as standard, with 90–100 gsm premium
                  paper available on request for presentations and client-facing documents. Both
                  black-and-white and full-colour options are available in A4 and A3 formats,
                  single-sided or double-sided.
                </p>
                <p>
                  Need your documents bound? We offer spiral binding, comb binding, and thermal
                  (perfect) binding with clear PVC or printed card covers — giving your reports,
                  proposals, and manuals a professional, finished look.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Black-and-white and full-colour printing, A4 and A3</li>
                  <li>Single-sided and double-sided (duplex) options</li>
                  <li>80 gsm standard or 90–100 gsm premium paper</li>
                  <li>Spiral, comb, and thermal binding available</li>
                  <li>Clear PVC or printed card cover options</li>
                  <li>No minimum order — print from a single page</li>
                  <li>Same-day turnaround for most orders</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Print Options</h2>
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
                      name: `Document Printing – ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Document+Printing"),
                      href: "/products/digital-printing/documents",
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
                Orders confirmed within 1 hour · Same-day turnaround · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>No minimum order — single pages welcome</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Binding and cover finishing available in-house</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Same-day turnaround for most document orders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Walk-in or send files via WhatsApp — your choice</span>
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
