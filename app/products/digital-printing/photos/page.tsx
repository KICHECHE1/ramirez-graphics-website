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
  { label: "4R  (4×6 in)",   dimensions: "102 × 152 mm",  price: 50 },
  { label: "5R  (5×7 in)",   dimensions: "127 × 178 mm",  price: 80 },
  { label: "6R  (6×8 in)",   dimensions: "152 × 203 mm",  price: 120 },
  { label: "8R  (8×10 in)",  dimensions: "203 × 254 mm",  price: 180 },
  { label: "A4  (8×12 in)",  dimensions: "210 × 297 mm",  price: 250 },
  { label: "A3  (12×17 in)", dimensions: "297 × 420 mm",  price: 450 },
];

const materialNote =
  "Printed on 260 gsm premium gloss or lustre photo paper. Colours are calibrated for true-to-life reproduction. No minimum order — print a single photo or hundreds. Framing and canvas options available on request.";

const faqs = [
  {
    q: "What file format and resolution should I send?",
    a: "JPEG or PNG files work best. For the sharpest results, use a file that is at least 300 dpi at the intended print size. A 4R photo needs roughly 1200 × 1800 px; an A4 needs at least 2480 × 3508 px. We will advise you if the resolution is too low before printing.",
  },
  {
    q: "Can you print from a mobile phone?",
    a: "Yes. Modern smartphone cameras produce files that are more than sufficient for standard photo sizes up to about 8R. For A4 and A3 prints, higher-resolution shots give the best results. Just send the file via WhatsApp or email.",
  },
  {
    q: "Do you offer photo editing or retouching?",
    a: "Basic colour correction and cropping are included. More advanced retouching — skin smoothing, background removal, brightness and contrast adjustments — is available at a small editing fee.",
  },
  {
    q: "Can you print canvas or framed photos?",
    a: "Yes. Canvas prints and standard picture frames are available on request. Contact us with your photo size and we will provide a quote and turnaround time.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum — you can print a single photo. Bulk rates apply for 20 or more prints of the same size.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Document Printing",
    href: "/products/digital-printing/documents",
    image: ph(400, 300, "Document+Printing"),
  },
  {
    name: "Business Cards Printing",
    href: "/products/digital-printing/business-cards",
    image: ph(400, 300, "Business+Cards"),
  },
  {
    name: "Flyers Printing",
    href: "/products/flyers",
    image: ph(400, 300, "Flyers"),
  },
];

export default function PhotoPrintingPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Photo Printing — ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Photo Printing Services</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Popular</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Photo Printing Services
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            True-to-life photo prints on 260 gsm premium photo paper — from wallet-size 4R up to
            A3 poster prints — no minimum order, same-day service available in Muhoroni, Kisumu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT: Image + Overview + FAQ */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Photo+Printing+Services")}
                alt="Photo Printing Services"
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
                  Whether you are printing memories from a graduation, a family event, a wedding,
                  or a professional photoshoot, Ramirez Ventures delivers vivid, true-to-life photo
                  prints on 260 gsm premium photo paper — available in gloss and lustre finishes.
                </p>
                <p>
                  We print standard photo sizes from 4R (4×6 in) all the way up to A3 (12×17 in),
                  with no minimum order. Send your files via WhatsApp or email and we will have
                  your prints ready for collection or delivery. Basic colour correction and
                  cropping are included at no extra charge.
                </p>
                <p>
                  We also offer canvas prints and framed photos on request — perfect for home
                  décor, office walls, gifts, or exhibition display. Contact us with your
                  requirements for a custom quote.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>260 gsm premium gloss or lustre photo paper</li>
                  <li>Sizes from 4R (4×6 in) to A3 (12×17 in)</li>
                  <li>No minimum order — print a single photo</li>
                  <li>Basic colour correction and cropping included</li>
                  <li>Send files via WhatsApp, email, or USB</li>
                  <li>Canvas and framed prints available on request</li>
                  <li>Same-day service for standard sizes</li>
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

          {/* RIGHT: Sizes + Order */}
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
                      name: `Photo Print – ${selectedSize.label} (${selectedSize.dimensions})`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Photo+Printing"),
                      href: "/products/digital-printing/photos",
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
                Orders confirmed within 1 hour · Same-day available · Free local Muhoroni delivery
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>No minimum — print a single photo or hundreds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Basic colour correction included at no charge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Send files via WhatsApp, email, or USB drive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Canvas and framed prints available on request</span>
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
