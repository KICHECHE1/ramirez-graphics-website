"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart, Star, Truck, ShieldCheck, ThumbsUp,
  Printer, Palette, Clock, Award, ArrowRight, Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart, type AddToCartInput } from "@/lib/cart-context";

/* ─── Asset imports ─── */
import BusinessCards from "@/app/assets/Business Card.jpg";
import Buttons from "@/app/assets/button + poster.jpg";
import Tshirts from "@/app/assets/branded tshirt.jpg";
import Rollup from "@/app/assets/Roll-Up Stand Banner.jpg";
import Company from "@/app/assets/company profile.jpg";
import Brochure from "@/app/assets/brochure.jpg";
import Brand from "@/app/assets/brand identity.jpg";
import Magazine from "@/app/assets/event magazine.jpg";
import Apron from "@/app/assets/apron.jpg";
import Banner from "@/app/assets/banner.jpg";
import Flyers from "@/app/assets/Flyer and brochure.jpg";
import TShirts from "@/app/assets/T-Shirt.jpg";
import Posters from "@/app/assets/Poster.jpg";
import Signage from "@/app/assets/Signages.jpg";
import Stickers from "@/app/assets/Sticker.jpg";
import Funeral from "@/app/assets/funeral program.jpg";
import School from "@/app/assets/school magz.jpg";
import Hoodie from "@/app/assets/hoodie.jpg";
import ReflectorJacket from "@/app/assets/reflector.jpg";
import Jersey from "@/app/assets/club jersay.jpg";
import Bookmark from "@/app/assets/bookmark cards.jpg";
import Businesscard from "@/app/assets/Business Card - official.jpg";
import Business from "@/app/assets/Business Card 2.1.jpg";
import Gift from "@/app/assets/gift voucher.jpg";
import Postcards from "@/app/assets/postcards.jpg";

/* ─── placeholder helper ─── */
const ph = (w: number, h: number, label: string) =>
  `https://placehold.co/${w}x${h}/e0f2fe/0284c7?text=${encodeURIComponent(label)}`;

/* ─── Hero slides (carousel) ─── */
interface HeroSlide {
  badge: string;
  name: string;
  description: string;
  price: number;
  image: string;
  href: string;
}

const heroSlides: HeroSlide[] = [
  {
    badge: "Best Seller",
    name: "Premium Spot UV Business Cards",
    description:
      "Make a lasting first impression with our premium Spot UV Business Cards — 400gsm card stock with a high-gloss UV coating for a luxurious tactile finish.",
    price: 2500,
    image: BusinessCards.src,
    href: "/products/business-cards/spot-uv",
  },
  {
    badge: "Popular Choice",
    name: "Custom Branded T-Shirts & Uniforms",
    description:
      "Gear up your team with vibrant custom-branded T-shirts and uniforms. Premium fabric, durable screen printing, perfect for businesses, schools, and events.",
    price: 850,
    image: Tshirts.src,
    href: "/products/branded-apparel/t-shirts",
  },
  {
    badge: "Event Ready",
    name: "Rollup & Backdrop Banners",
    description:
      "Command attention at your next event with our high-resolution rollup and backdrop banners. Lightweight, portable, and printed on premium vinyl.",
    price: 4500,
    image: Rollup.src,
    href: "/products/events-display/table-rollup",
  },
  {
    badge: "Campaign Special",
    name: "Election Posters & Button Badges",
    description:
      "Win your campaign with bold, high-impact election posters and button badges. Fast turnaround, bulk pricing available, and vivid full-colour printing.",
    price: 600,
    image: Buttons.src,
    href: "/products/election-printing/posters",
  },
  {
    badge: "Corporate Favourite",
    name: "Company Profile Booklets",
    description:
      "Present your business professionally with our custom-designed and printed company profile booklets. Saddle-stitched or perfect-bound — we handle it all.",
    price: 3500,
    image: Company.src,
    href: "/products/booklet-magazines/booklets",
  },
  {
    badge: "Quick Turnaround",
    name: "Flyer & Brochures Design & Printing",
    description:
      "Spread the word fast with our crisp, colourful flyers. Ideal for promotions, events, and announcements — same-day printing available for urgent orders.",
    price: 1500,
    image: Brochure.src,
    href: "/products/flyers/flyers",
  },
  {
    badge: "Premium Finish",
    name: "Brand Identity Design",
    description:
      "We create professional and memorable brand identities that reflect your business values and personality.From Logos to colors and visual branding, we help your brand stand out and build customer trust.",
    price: 2000,
    image: Brand.src,
    href: "/products/flyers/brochures",
  },
  {
    badge: "School Special",
    name: "School & Event Magazines",
    description:
      "Celebrate milestones with beautifully printed school yearbooks and event magazines. Full-colour pages, custom covers, and professional binding included.",
    price: 2800,
    image: Magazine.src,
    href: "/products/booklet-magazines/booklets",
  },
  {
    badge: "Affordable",
    name: "Branded Promotional Items",
    description:
      "From branded pens to custom notebooks, our promotional items are perfect for giveaways, events, and corporate gifts. High-quality printing on a variety of products to suit your needs.",
    price: 50,
    image: ph(600, 500, "Documents"),
    href: "/products/digital-printing/documents",
  },
  {
    badge: "Unique Gift",
    name: "Reflector Jackets & Branded Aprons",
    description:
      "Keep your workforce visible and branded with our custom reflector jackets and printed aprons. Durable, safety-compliant, and tailored to your logo.",
    price: 3500,
    image: Apron.src,
    href: "/products/branded-apparel/reflector-jackets",
  },
];

/* ─── Printing services (circular grid) ─── */
const printingServices = [
  { label: "Banners & Displays", image: Banner.src, href: "/products/banners" },
  { label: "Flyers & Brochures", image: Flyers.src, href: "/products/flyers" },
  { label: "Booklets & Magazines", image: Magazine.src, href: "/products/booklet-magazines" },
  { label: "Branded T-Shirts", image: TShirts.src, href: "/products/branded-apparel" },
  { label: "Business Cards", image: BusinessCards.src, href: "/products/business-cards" },
  { label: "Posters", image: Posters.src, href: "/products/posters" },
  { label: "Signages", image: Signage.src, href: "/products/signages" },
  { label: "Stickers", image: Stickers.src, href: "/products/stickers" },
];

/* ─── Product sections ─── */
interface Product { name: string; price: number; image: string; href: string; }
interface ProductSection { id: string; title: string; href: string; products: Product[]; }

const productSections: ProductSection[] = [
  {
    id: "booklets",
    title: "Booklet Magazines",
    href: "/products/booklet-magazines",
    products: [
      { name: "Funeral Program Booklet", price: 1800, image: Funeral.src, href: "/products/booklet-magazines/funeral-programs" },
      { name: "Event Magazine", price: 2200, image: Magazine.src, href: "/products/booklet-magazines/booklets" },
      { name: "Company Profile Booklet", price: 3500, image: Company.src, href: "/products/booklet-magazines/booklets" },
      { name: "School Magazine", price: 2800, image: School.src, href: "/products/booklet-magazines/booklets" },
    ],
  },
  {
    id: "apparel",
    title: "Branded Apparel",
    href: "/products/branded-apparel",
    products: [
      { name: "Branded T-Shirt", price: 850, image: TShirts.src, href: "/products/branded-apparel/t-shirts" },
      { name: "Branded Hoodie", price: 2200, image: Hoodie.src, href: "/products/branded-apparel/hoodies" },
      { name: "Reflector Jacket", price: 3500, image: ReflectorJacket.src, href: "/products/branded-apparel/reflector-jackets" },
      { name: "Branded Apron", price: 1200, image: Apron.src, href: "/products/branded-apparel/aprons" },
      { name: "Club Jersey", price: 1800, image: Jersey.src, href: "/products/branded-apparel/jerseys" },
    ],
  },
  {
    id: "business-cards",
    title: "Business Cards",
    href: "/products/business-cards",
    products: [
      { name: "Spot UV Business Cards", price: 2500, image: Business.src, href: "/products/business-cards/spot-uv" },
      { name: "Standard Business Cards", price: 1200, image: Businesscard.src, href: "/products/business-cards/standard" },
      { name: "Bookmark Cards", price: 900, image: Bookmark.src, href: "/products/business-cards/bookmarks" },
      { name: "Postcards", price: 800, image: Postcards.src, href: "/products/business-cards/postcards" },
      { name: "Gift Vouchers", price: 1500, image: Gift.src, href: "/products/business-cards/gift-vouchers" },
    ],
  },
  {
    id: "digital",
    title: "Digital Printing",
    href: "/products/digital-printing",
    products: [
      { name: "Document Printing (A4)", price: 50, image: ph(400, 400, "Document"), href: "/products/digital-printing/documents" },
      { name: "Photo Printing (4×6)", price: 120, image: ph(400, 400, "Photo Print"), href: "/products/digital-printing/photos" },
      { name: "Gift Voucher Print", price: 1500, image: ph(400, 400, "Gift Voucher"), href: "/products/digital-printing/gift-vouchers" },
      { name: "Business Cards (Digital)", price: 1200, image: ph(400, 400, "Biz Card Digital"), href: "/products/digital-printing/business-cards" },
    ],
  },
  {
    id: "election",
    title: "Election Printing",
    href: "/products/election-printing",
    products: [
      { name: "Button Badges", price: 350, image: ph(400, 400, "Button Badges"), href: "/products/election-printing/button-badges" },
      { name: "Election Posters", price: 600, image: ph(400, 400, "Election Posters"), href: "/products/election-printing/posters" },
      { name: "Nametags", price: 250, image: ph(400, 400, "Nametags"), href: "/products/election-printing/nametags" },
      { name: "Selfie Frames", price: 800, image: ph(400, 400, "Selfie Frames"), href: "/products/election-printing/selfie-frames" },
    ],
  },
  {
    id: "events",
    title: "Events Display",
    href: "/products/events-display",
    products: [
      { name: "Table Rollup Banner", price: 4500, image: ph(400, 400, "Rollup Banner"), href: "/products/events-display/table-rollup" },
      { name: "Backdrop Banner", price: 6500, image: ph(400, 400, "Backdrop"), href: "/products/events-display/backdrop-banner" },
      { name: "Table Cloth Print", price: 3200, image: ph(400, 400, "Table Cloth"), href: "/products/events-display/table-cloth" },
      { name: "Kitenge Notebook", price: 750, image: ph(400, 400, "Kitenge Notebook"), href: "/products/events-display/kitenge-notebooks" },
    ],
  },
  {
    id: "flyers",
    title: "Flyers",
    href: "/products/flyers",
    products: [
      { name: "A5 Flyers (250 pcs)", price: 1500, image: ph(400, 400, "A5 Flyers"), href: "/products/flyers/flyers" },
      { name: "A4 Flyers (100 pcs)", price: 1200, image: ph(400, 400, "A4 Flyers"), href: "/products/flyers/flyers" },
      { name: "Tri-fold Brochure", price: 2000, image: ph(400, 400, "Brochure"), href: "/products/flyers/brochures" },
      { name: "DL Brochure", price: 1800, image: ph(400, 400, "DL Brochure"), href: "/products/flyers/brochures" },
    ],
  },
];

/* ─── Why Choose us ─── */
const whyUs = [
  { icon: Award, title: "Premium Quality", desc: "We use top-grade materials and professional-grade equipment to deliver prints that wow every time." },
  { icon: Clock, title: "Fast Turnaround", desc: "Same-day and next-day printing available for most products. We never miss your deadline." },
  { icon: Palette, title: "Custom Designs", desc: "Our in-house design team brings your vision to life — from concept to finished print." },
  { icon: Truck, title: "Free Delivery", desc: "Free delivery on orders above KES 5,000 within Kisumu and surrounding areas." },
  { icon: ShieldCheck, title: "Secure Payments", desc: "M-Pesa, bank transfer, or card — your payments are 100% safe and confirmed instantly." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Over 10,000 happy customers and a 98% satisfaction rate speak for themselves." },
];

/* ─── Star rating helper ─── */
function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="size-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

/* ─── Product card ─── */
function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: AddToCartInput) => void }) {
  return (
    <div className="group flex flex-col rounded-xl border border-border overflow-hidden bg-background">
      
      {/* ✅ Image container - all visual effects stay HERE */}
      <Link href={product.href} className="block relative overflow-hidden aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Optional: subtle hover overlay confined to image only */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
      </Link>
      
      {/* ✅ Content area - clean, no shadow/background bleed */}
      <div className="flex flex-col gap-2 p-3 bg-background">
        <Link href={product.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2 leading-snug">
          {product.name}
        </Link>
        <Stars />
        <Button
          size="sm"
          className="w-full gap-1.5 mt-auto bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="size-3.5" />
          Add to Cart
        </Button>
      </div>
      
    </div>
  );
}

/* ─── Section wrapper ─── */
function SectionWrapper({ id, title, href, products, onAddToCart }: ProductSection & { onAddToCart: (p: AddToCartInput) => void }) {
  return (
    <section id={id} className="py-14 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
            <div className="mt-1 h-1 w-16 rounded-full bg-primary" />
          </div>
          <Link
            href={href}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((p) => (
            <ProductCard key={p.href + p.name} product={p} onAddToCart={(prod) => onAddToCart(prod)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PAGE ─────────────────────── */
export default function HomePage() {
  const { addToCart } = useCart();
  const [cartMsg, setCartMsg] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = heroSlides.length;

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((s) => (s + 1) % total), 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleAddToCart(product: AddToCartInput) {
    addToCart(product);
    setCartMsg(`"${product.name}" added to cart`);
    setTimeout(() => setCartMsg(null), 2500);
  }

  return (
    <div className="flex flex-col">

      {/* ── Cart toast ── */}
      {cartMsg && (
        <div className="fixed bottom-6 right-6 z-50 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg animate-in slide-in-from-bottom-4 duration-300">
          {cartMsg}
        </div>
      )}

      {/* ══════════════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-background py-16 sm:py-24">
        {/* Background accent blob */}
        <div className="pointer-events-none absolute -top-32 -right-32 size-150 rounded-full bg-primary/10 blur-3xl" />

        {/* Slide stack — all slides share the same grid cell, fade in/out */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`[grid-area:1/1] transition-opacity duration-2000 ease-in-out ${
                  currentSlide === idx
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                  {/* Left */}
                  <div className="flex flex-col gap-6">
                    <Badge className="w-fit bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                      {slide.badge}
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                      {slide.name}
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <Stars />
                      <span className="text-sm text-muted-foreground">(128 reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="lg"
                        className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                        onClick={() => handleAddToCart({ name: slide.name, price: slide.price, image: slide.image, href: slide.href })}
                      >
                        <ShoppingCart className="size-5" />
                        Order Now
                      </Button>
                      <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8" asChild>
                        <Link href="/products">View All Categories</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right — product image */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-3xl bg-primary/5" />
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      width={600}
                      height={500}
                      className="relative rounded-2xl object-cover shadow-2xl w-full max-w-lg"
                      priority={idx === 0}
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>


      </section>

      {/* ══════════════════════════════════════════════
          ABOUT / TRUST BADGES
      ══════════════════════════════════════════════ */}
      <section className="bg-muted/40 py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Description */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">About Ramirez Ventures</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-snug">
                  Muhoroni&apos;s Trusted Print &amp; Branding Partner
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Based in Muhoroni, Kisumu, Ramirez Ventures has been delivering high-quality printing and branded merchandise to businesses, schools, community organisations, and individuals across Kenya. From a single business card to a full event branding package, we handle it all — with care, speed, and precision.
              </p>
              <Button asChild className="w-fit gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  <Phone className="size-4" /> Contact Us
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Truck, title: "Free Delivery", desc: "On orders above KES 5,000 within Kisumu." },
                { icon: ShieldCheck, title: "Secure Payments", desc: "M-Pesa, bank and card payments accepted safely." },
                { icon: ThumbsUp, title: "100% Satisfaction", desc: "We reprint or refund — your satisfaction is guaranteed." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center gap-3 rounded-xl border border-border bg-background p-5 shadow-sm">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRINTING SERVICES — circular grid
      ══════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Printing Services</h2>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6">
            {printingServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group flex flex-col items-center gap-2"
              >
                {/* ✅ Removed bg-muted to prevent background behind circular image */}
                <div className="relative size-16 sm:size-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-200">
                  <Image
                    src={svc.image}
                    alt={svc.label}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-150 leading-tight">
                  {svc.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PRODUCT SECTIONS
      ══════════════════════════════════════════════ */}
      {productSections.map((section) => (
        <SectionWrapper key={section.id} {...section} onAddToCart={handleAddToCart} />
      ))}

      {/* ══════════════════════════════════════════════
          WHY CHOOSE RAMIREZ
      ══════════════════════════════════════════════ */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Our Promise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Choose Ramirez Ventures?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <Printer className="size-12 text-primary opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground max-w-2xl leading-tight">
            Ready to Bring Your Ideas to Print?
          </h2>
          <p className="text-muted-foreground max-w-lg text-lg">
            Get a free quote today. Whether it&apos;s 10 business cards or 10,000 branded T-shirts, we&apos;ve got you covered.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8"
              asChild
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8"
              asChild
            >
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}