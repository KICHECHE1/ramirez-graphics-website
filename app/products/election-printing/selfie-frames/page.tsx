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
  { label: "A3 Selfie Frame",   dimensions: "297 x 420 mm, rigid foam board",   price: 2500 },
  { label: "A2 Selfie Frame",   dimensions: "420 x 594 mm, rigid foam board",   price: 4000 },
  { label: "A1 Selfie Frame",   dimensions: "594 x 841 mm, rigid foam board",   price: 7000 },
  { label: "Foldable A2",       dimensions: "420 x 594 mm, foldable cardboard", price: 3200 },
  { label: "Custom Size",       dimensions: "Any dimension, contact us",       price: 0    },
];

const materialNote =
  "Printed full-colour on 5 mm foam board (rigid) or 3 mm corrugated board (foldable). Face cut-out finished with smooth round edges. Face hole sized for optimal framing. Minimum 10 frames per order for standard designs.";

const faqs = [
  {
    q: "What is a selfie frame?",
    a: "A selfie frame is a printed board with a face-shaped cut-out. Supporters hold it up and take selfies with the candidate's poster, creating hundreds of organic social media posts with the candidate's branding. It is one of the most cost-effective viral campaign tools.",
  },
  {
    q: "Can the face hole be any size or shape?",
    a: "We offer standard oval and round face holes sized for comfortable framing. Custom shapes, heart, star, or free-form, are available on request at the same price.",
  },
  {
    q: "What material do you print on?",
    a: "Standard selfie frames use 5 mm foam board, rigid and lightweight. A foldable corrugated board option is available for easy transport and outdoor distribution at campaign events.",
  },
  {
    q: "How long does production take?",
    a: "A3 and A2 selfie frames are ready within 24 hours for standard designs. A1 frames and custom sizes take 48 hours. Rush production available, contact us.",
  },
  {
    q: "Can I get handles or sticks attached?",
    a: "Yes. Wooden or plastic hand-holding sticks can be attached to any selfie frame, ideal for crowd use at rallies and events. Mention this when placing your order.",
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
    name: "Posters Printing",
    href: "/products/election-printing/posters",
    image: ph(400, 300, "Campaign+Posters"),
  },
  {
    name: "Nametags",
    href: "/products/election-printing/nametags",
    image: ph(400, 300, "Nametags"),
  },
];

export default function SelfieFramesPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Selfie Frames, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Selfie Frames</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge className="mb-3">Trending</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Selfie Frames
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Branded selfie frames that turn every supporter into a campaign promoter, viral
            social media reach from A3 to A1 foam board, same-day turnaround in Muhoroni, Kisumu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Selfie+Frames")}
                alt="Selfie Frames"
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
                  Selfie frames are one of the most powerful and affordable viral campaign tools
                  in modern elections. Supporters hold the frame at a rally or event, take a
                  selfie through the face cut-out, and share across WhatsApp, Facebook, and
                  TikTok, each post carrying your candidate&apos;s branding to hundreds more people
                  at zero media cost.
                </p>
                <p>
                  At Ramirez Ventures we print sharp full-colour selfie frames on 5 mm rigid
                  foam board (standard) or foldable corrugated board (for easy distribution).
                  Sizes from A3 handheld frames to large A1 rally pieces, with face cut‐outs
                  finished to smooth round edges for comfortable use.
                </p>
                <p>
                  Selfie frames are also popular at brand activations, product launches, school
                  events, weddings, and community celebrations. Wooden or plastic hand-holding
                  sticks can be attached on request.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>Full-colour print on 5 mm foam board or foldable corrugated board</li>
                  <li>Sizes: A3, A2, A1, and custom dimensions</li>
                  <li>Standard oval/round face cut-out, custom shapes available</li>
                  <li>Optional hand-holding sticks for rally use</li>
                  <li>Free design from your candidate photo and brand colours</li>
                  <li>Minimum 10 frames per order</li>
                  <li>Ready within 24 to 48 hours</li>
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
                      name: `Selfie Frame  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Selfie+Frames"),
                      href: "/products/election-printing/selfie-frames",
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
                  <span>Turns supporters into viral social media promoters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Free design from your candidate photo and brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Rigid foam board or foldable design for easy transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>Hand-holding sticks for rally and crowd use available</span>
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
