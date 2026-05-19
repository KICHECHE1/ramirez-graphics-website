"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import logo from "@/app/assets/Ramirez Logo 1.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CartBadge = dynamic(() => import("@/components/common/CartBadge"), { ssr: false });
const ThemeToggle = dynamic(() => import("@/components/common/ThemeToggle"), { ssr: false });

const productCategories = [
  {
    label: "Banners",
    href: "/products/banners",
    items: [
      { label: "Table Rollup Printing", href: "/products/banners/table-rollup" },
      { label: "Adjustable Backdrop Banner", href: "/products/banners/backdrop-banner" },
      { label: "Table Cloth Printing", href: "/products/banners/table-cloth" },
      { label: "S-Banner Printing", href: "/products/banners/s-banner" },
      { label: "PVC Wheel Cover", href: "/products/banners/pvc-wheel-cover" },
    ],
  },
  {
    label: "Booklet Magazines",
    href: "/products/booklet-magazines",
    items: [
      { label: "Funeral Programs Printing", href: "/products/booklet-magazines/funeral-programs" },
      { label: "Booklet Magazines Printing", href: "/products/booklet-magazines/booklets" },
    ],
  },
  {
    label: "Branded Apparel",
    href: "/products/branded-apparel",
    items: [
      { label: "Reflector Jackets Printing", href: "/products/branded-apparel/reflector-jackets" },
      { label: "Branded Aprons", href: "/products/branded-apparel/aprons" },
      { label: "Branded T-shirts", href: "/products/branded-apparel/t-shirts" },
      { label: "Branded Hoodies", href: "/products/branded-apparel/hoodies" },
      { label: "Branded Jerseys for Clubs", href: "/products/branded-apparel/jerseys" },
    ],
  },
  {
    label: "Business Cards",
    href: "/products/business-cards",
    items: [
      { label: "Spot UV Business Cards", href: "/products/business-cards/spot-uv" },
      { label: "Bookmarks Printing", href: "/products/business-cards/bookmarks" },
      { label: "Postcards Printing", href: "/products/business-cards/postcards" },
      { label: "Business Cards Printing", href: "/products/business-cards/standard" },
      { label: "Gift Voucher Printing", href: "/products/business-cards/gift-vouchers" },
    ],
  },
  {
    label: "Digital Printing",
    href: "/products/digital-printing",
    items: [
      { label: "Document Printing", href: "/products/digital-printing/documents" },
      { label: "Business Cards Printing", href: "/products/digital-printing/business-cards" },
      { label: "Gift Voucher Printing", href: "/products/digital-printing/gift-vouchers" },
      { label: "Photo Printing Services", href: "/products/digital-printing/photos" },
    ],
  },
  {
    label: "Election Printing",
    href: "/products/election-printing",
    items: [
      { label: "Button Badges Printing", href: "/products/election-printing/button-badges" },
      { label: "Posters Printing", href: "/products/election-printing/posters" },
      { label: "Nametags", href: "/products/election-printing/nametags" },
      { label: "Selfie Frames", href: "/products/election-printing/selfie-frames" },
      { label: "Branded Aprons", href: "/products/election-printing/aprons" },
    ],
  },
  {
    label: "Events Display",
    href: "/products/events-display",
    items: [
      { label: "Button Badges Printing", href: "/products/events-display/button-badges" },
      { label: "Table Rollup Printing", href: "/products/events-display/table-rollup" },
      { label: "Adjustable Backdrop Banner", href: "/products/events-display/backdrop-banner" },
      { label: "Table Cloth Printing", href: "/products/events-display/table-cloth" },
      { label: "Kitenge Notebooks", href: "/products/events-display/kitenge-notebooks" },
    ],
  },
  {
    label: "Flyers",
    href: "/products/flyers",
    items: [
      { label: "Flyers Printing", href: "/products/flyers/flyers" },
      { label: "Brochures Printing", href: "/products/flyers/brochures" },
    ],
  },
];

const moreCategories = [
  { label: "Graphic Design", href: "/products/graphic-design" },
  { label: "Mug Printing & Branded Drinkware", href: "/products/mug-printing" },
  { label: "Packaging", href: "/products/packaging" },
  { label: "Photo Printing and Framing", href: "/products/photo-printing" },
  { label: "Posters", href: "/products/posters" },
  { label: "Promotional Items", href: "/products/promotional-items" },
  { label: "Signages", href: "/products/signages" },
  { label: "Stationary", href: "/products/stationary" },
  { label: "Stickers", href: "/products/stickers" },
  { label: "T-shirts", href: "/products/t-shirts" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-brand-surface-foreground/20 bg-brand-surface"
      onMouseLeave={() => setDesktopProductsOpen(false)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="Ramirez Ventures"
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 ml-6">
          {/* Home */}
          <Link
            href="/"
            className="relative px-3 py-1.5 text-sm font-medium text-brand-surface-foreground/80 transition-colors duration-200 hover:text-brand-surface-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-[width] after:duration-200 hover:after:w-full"
          >
            Home
          </Link>

          {/* Products trigger */}
          <button
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onClick={() => setDesktopProductsOpen((p) => !p)}
            className={cn(
              "relative flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors duration-200",
              desktopProductsOpen ? "text-brand-surface-foreground" : "text-brand-surface-foreground/80 hover:text-brand-surface-foreground"
            )}
          >
            Products
            <ChevronDown
              className={cn("size-3.5 transition-transform duration-200", desktopProductsOpen && "rotate-180")}
            />
          </button>

          {/* Search bar */}
          <div className="flex items-center w-48 lg:w-64 relative ml-2">
            <Search className="absolute left-2.5 size-4 text-brand-surface-foreground/60 pointer-events-none" />
            <Input
              type="search"
              placeholder="Search products…"
              className="pl-8 h-9"
            />
          </div>
        </div>

        {/* Full-width mega-dropdown — anchored to header */}
        <div
          onMouseEnter={() => setDesktopProductsOpen(true)}
          className={cn(
            "absolute left-0 top-full w-full bg-popover border-b border-border shadow-lg z-40 transition-all duration-200 origin-top hidden md:block",
            desktopProductsOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            {/* Main categories grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
              {productCategories.map((cat) => (
                <div key={cat.href}>
                  <Link
                    href={cat.href}
                    onClick={() => setDesktopProductsOpen(false)}
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-150 block mb-2"
                  >
                    {cat.label}
                  </Link>
                  <ul className="space-y-1">
                    {cat.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setDesktopProductsOpen(false)}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href={cat.href}
                        onClick={() => setDesktopProductsOpen(false)}
                        className="text-xs font-medium text-primary hover:underline"
                      >
                        View all →
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* More categories */}
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground mb-2 font-medium">More Categories</p>
              <div className="flex flex-wrap gap-2">
                {moreCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setDesktopProductsOpen(false)}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-150"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Contact + Cart — desktop */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />

          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            <Link href="/contact">Contact</Link>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative shrink-0 text-brand-surface-foreground">
            <Link href="/cart" aria-label="Shopping cart">
              <ShoppingCart className="size-5" />
              <CartBadge />
            </Link>
          </Button>
        </div>

        {/* Mobile: cart + menu toggle */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />

          <Button variant="ghost" size="icon" asChild className="relative shrink-0 text-brand-surface-foreground">
            <Link href="/cart" aria-label="Shopping cart">
              <ShoppingCart className="size-5" />
              <CartBadge />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 text-brand-surface-foreground"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-brand-surface-foreground/20 bg-brand-surface transition-all duration-200",
          menuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {/* Mobile search */}
          <div className="relative mb-2">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-brand-surface-foreground/60 pointer-events-none" />
            <Input
              type="search"
              placeholder="Search products…"
              className="pl-8 h-9 w-full"
            />
          </div>

          {/* Home */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="rounded-md px-3 py-2 text-sm font-medium text-brand-surface-foreground/80 transition-colors duration-200 hover:text-brand-surface-foreground hover:bg-brand-surface-foreground/10"
          >
            Home
          </Link>

          {/* Products accordion */}
          <div>
            <button
              onClick={() => setMobileProductsOpen((p) => !p)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-brand-surface-foreground/80 transition-colors duration-200 hover:text-brand-surface-foreground hover:bg-brand-surface-foreground/10"
            >
              Products
              <ChevronDown
                className={cn("size-4 transition-transform duration-200", mobileProductsOpen && "rotate-180")}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                mobileProductsOpen ? "max-h-[2000px]" : "max-h-0"
              )}
            >
              <div className="pl-4 pr-2 pb-2 flex flex-col gap-3 pt-1">
                {productCategories.map((cat) => (
                  <div key={cat.href}>
                    <Link
                      href={cat.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm font-semibold text-brand-surface-foreground hover:text-primary transition-colors duration-150 block mb-1"
                    >
                      {cat.label}
                    </Link>
                    <ul className="flex flex-col gap-0.5 pl-2">
                      {cat.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xs text-brand-surface-foreground/70 hover:text-primary transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="border-t border-border pt-2">
                  <p className="text-xs text-brand-surface-foreground/70 mb-1 font-medium">More Categories</p>
                  <div className="flex flex-wrap gap-1.5">
                    {moreCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-full border border-brand-surface-foreground/30 px-2.5 py-0.5 text-xs text-brand-surface-foreground/70 hover:border-primary hover:text-primary transition-colors duration-150"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary text-center transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
