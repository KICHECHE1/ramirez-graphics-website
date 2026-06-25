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
  { label: "Plain Apron · Front Print",     dimensions: "Standard adult size, 1 side",    price: 18000 },
  { label: "Plain Apron · Full Print",      dimensions: "Standard adult size, full cover", price: 22000 },
  { label: "Bib Apron · Front Print",       dimensions: "Bib style, chest + waist print", price: 20000 },
  { label: "Waist Apron · Front Print",     dimensions: "Half apron, waist down",         price: 14000 },
];

const materialNote =
  "Fabric: 240 gsm poly-cotton blend (white or colour base). Print method: heat transfer vinyl (HTV) for sharp logos and text; dye-sublimation available for full-colour all-over prints. Bulk discounts for 100+ pcs.";

const faqs = [
  {
    q: "What print method do you use for branded aprons?",
    a: "We use heat transfer vinyl (HTV) for sharp, durable single and multi-colour logos and text. For photographic or full-colour all-over prints, dye-sublimation is used on polyester-face aprons, producing vivid, wash-resistant colour across the entire surface.",
  },
  {
    q: "Can I choose the base fabric colour?",
    a: "Yes. We stock aprons in white, black, navy, red, green, and khaki as standard. Custom colour aprons are available on request for larger orders.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our minimum is 20 aprons per order. Volume pricing steps apply at 50, 100, and 250 pieces, contact us for a bulk quote.",
  },
  {
    q: "How do I submit my design?",
    a: "Send your logo or design file via WhatsApp or email in PNG, PDF, or AI format at 300 dpi or higher. If you do not have a print-ready file, our designers can prepare artwork from your logo at no extra charge.",
  },
  {
    q: "How long does production take?",
    a: "Standard apron printing orders are ready in 3 to 5 working days. Rush orders may be possible depending on current capacity, contact us to confirm.",
  },
  {
    q: "Are the aprons suitable for outdoor campaign use?",
    a: "Yes. The heat-transfer prints are wash-resistant and durable for outdoor use. For maximum durability over repeated washing and heavy use, opt for dye-sublimation on a polyester-face apron.",
  },
  {
    q: "Do you deliver outside Muhoroni?",
    a: "Yes, we deliver nationwide across Kenya. Muhoroni orders qualify for free local delivery. Upcountry and courier delivery charges apply based on destination.",
  },
];

const relatedProducts = [
  {
    name: "Branded Aprons (General)",
    href: "/products/branded-apparel/aprons",
    image: ph(400, 300, "Branded+Aprons"),
  },
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
];

export default function ElectionApronsPage() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const waMessage = encodeURIComponent(
    `Hi Ramirez Ventures, I'd like to order Branded Campaign Aprons, ${selectedSize.label} (${selectedSize.dimensions}). Please confirm availability and pricing.`
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
            <span className="text-foreground font-medium">Branded Aprons</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">Campaign Essential</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
            Branded Campaign Aprons
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Custom-printed campaign aprons for agents, volunteers, and community mobilisers,
            bold logo printing on 240 gsm poly-cotton, MOQ 20, delivered across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-border bg-muted shadow-sm">
              <Image
                src={ph(700, 525, "Branded+Campaign+Aprons")}
                alt="Branded Campaign Aprons"
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
                  Campaign aprons are a highly visible, practical branding tool, worn by agents,
                  volunteers, community kitchens, and ward committee members, they carry your
                  candidate&apos;s face and party colours throughout the constituency every day leading up
                  to the election. At Ramirez Ventures we print sharp logos and full-colour
                  campaign visuals on 240 gsm poly-cotton aprons using heat transfer vinyl (HTV)
                  or dye-sublimation printing.
                </p>
                <p>
                  We stock plain adult aprons, bib aprons, and waist aprons in multiple base
                  colours, white, black, navy, red, green, and khaki. Front print, full print,
                  and chest-and-waist prints are all available. Minimum 20 pieces per order.
                </p>
                <p>
                  Beyond elections, our branded aprons are popular for restaurants, hotels, salons,
                  schools, caterers, and corporate events. The same quality and production
                  timeline applies for all uses.
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-1">
                  <li>240 gsm poly-cotton blend aprons in multiple base colours</li>
                  <li>Plain, bib, and waist apron styles</li>
                  <li>HTV print for logos and text; dye-sublimation for full-colour</li>
                  <li>Front, full, and bib/waist print areas available</li>
                  <li>Minimum 20 aprons per order</li>
                  <li>Free artwork from your logo and brand colours</li>
                  <li>3 to 5 working day turnaround</li>
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
              <h2 className="text-lg font-semibold text-foreground mb-4">Available Styles</h2>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/60 border-b border-border">
                      <th className="text-left px-4 py-3 font-medium text-muted-foreground">Style</th>
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
                      name: `Campaign Aprons  to  ${selectedSize.label}`,
                      price: selectedSize.price,
                      image: ph(400, 300, "Branded+Aprons"),
                      href: "/products/election-printing/aprons",
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
                  <span>Multiple base colours, white, black, navy, red, green, khaki</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>HTV or dye-sublimation, sharp logos and vivid full-colour prints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 size-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 text-[10px] font-bold">✓</span>
                  <span>MOQ just 20 aprons, no massive bulk commitment needed</span>
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
