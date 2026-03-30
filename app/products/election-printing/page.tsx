"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── placeholder helper ─── */
const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

/* ─── Products ─── */
interface ElectionProduct {
  id: string;
  name: string;
  image: string;
  badge?: string;
}

const electionProducts: ElectionProduct[] = [
  {
    id: "ep-1",
    name: "Button Badges Printing",
    image: ph(400, 320, "Button+Badges"),
    badge: "Best Seller",
  },
  {
    id: "ep-2",
    name: "Posters Printing",
    image: ph(400, 320, "Campaign+Posters"),
    badge: "Popular",
  },
  {
    id: "ep-3",
    name: "Nametags",
    image: ph(400, 320, "Nametags"),
  },
  {
    id: "ep-4",
    name: "Selfie Frames",
    image: ph(400, 320, "Selfie+Frames"),
    badge: "Trending",
  },
  {
    id: "ep-5",
    name: "Branded Aprons",
    image: ph(400, 320, "Branded+Aprons"),
  },
  {
    id: "ep-6",
    name: "Branded T-Shirts",
    image: ph(400, 320, "Branded+T-Shirts"),
  },
  {
    id: "ep-7",
    name: "Branded Hoodies",
    image: ph(400, 320, "Branded+Hoodies"),
  },
  {
    id: "ep-8",
    name: "Flyers Printing",
    image: ph(400, 320, "Flyers"),
  },
  {
    id: "ep-9",
    name: "Umbrella Printing",
    image: ph(400, 320, "Umbrella+Printing"),
  },
  {
    id: "ep-10",
    name: "Roll Up Banner Printing",
    image: ph(400, 320, "Roll+Up+Banner"),
  },
  {
    id: "ep-11",
    name: "Calendar Printing",
    image: ph(400, 320, "Calendar+Printing"),
  },
  {
    id: "ep-12",
    name: "Brochure Printing",
    image: ph(400, 320, "Brochure+Printing"),
  },
  {
    id: "ep-13",
    name: "Vinyl Sticker Printing",
    image: ph(400, 320, "Vinyl+Stickers"),
  },
  {
    id: "ep-14",
    name: "Media Wall Banner",
    image: ph(400, 320, "Media+Wall+Banner"),
  },
  {
    id: "ep-15",
    name: "Vinyl Banner Printing",
    image: ph(400, 320, "Vinyl+Banner"),
  },
];

const PHONE = "+254 700 000 000";
const WHATSAPP = "254700000000";

export default function ElectionPrintingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-14">

          {/* ── Brief intro ── */}
          <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <Badge variant="secondary" className="mb-4">Election & Campaign Printing</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-snug">
                Win Your Campaign with Ramirez Ventures
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                At Ramirez Ventures, we understand that every campaign is time-sensitive and every
                impression counts. We produce vibrant, durable election materials — from button
                badges and posters to branded aprons — that put your face and message in front of
                voters. Fast turnaround, bulk pricing, and delivery across Kenya.
              </p>
              <Button asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
          </section>

            {/* ── Products grid ── */}
            <section id="products">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Campaign Materials</h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    Contact us for custom pricing and bulk order discounts
                  </p>
                </div>
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {electionProducts.length} Products
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
                {electionProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      {product.badge && (
                        <div className="absolute top-2 left-2">
                          <Badge className="text-xs shadow">{product.badge}</Badge>
                        </div>
                      )}
                    </div>

                    {/* Name */}
                    <div className="px-4 py-3">
                      <p className="font-semibold text-sm text-foreground leading-snug">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Contact for pricing</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          {/* ── CTA section ── */}
          <section className="rounded-2xl overflow-hidden border border-border bg-primary">
            <div className="p-8 sm:p-10 text-primary-foreground text-center flex flex-col items-center gap-5">
              <Badge className="bg-white/20 text-primary-foreground border-0 backdrop-blur-sm">
                Ready to Order?
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold leading-snug max-w-xl">
                Let&apos;s Get Your Campaign Materials Printed
              </h2>
              <p className="text-primary-foreground/80 max-w-lg">
                Fast turnaround. Bulk discounts. Delivered across Kenya. Call or WhatsApp us now
                and we&apos;ll send you a quote within minutes.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 gap-2 shadow-lg font-semibold"
                  asChild
                >
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                    <Phone className="size-4" />
                    {PHONE}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-primary-foreground hover:bg-white/15 gap-2"
                  asChild
                >
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I'd like a quote for election campaign printing.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-primary-foreground hover:bg-white/15"
                  asChild
                >
                  <Link href="/contact">Get a Quote Online</Link>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
