"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingCart, Search, Menu, X, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import BrandMark from "@/app/assets/Ramirez Logo 1.png";
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

const serviceItems = [
  { label: "Designing Courses", href: "/services/designing-courses" },
  { label: "Printing Courses", href: "/services/printing-courses" },
];

const searchItems = [
  ...productCategories.flatMap((cat) => [
    { label: cat.label, href: cat.href, type: "Product Category", keywords: cat.label },
    ...cat.items.map((item) => ({
      label: item.label,
      href: item.href,
      type: cat.label,
      keywords: `${item.label} ${cat.label}`,
    })),
  ]),
  ...moreCategories.map((cat) => ({
    label: cat.label,
    href: cat.href,
    type: "Product Category",
    keywords: cat.label,
  })),
  { label: "Services", href: "/services", type: "Service", keywords: "services courses training" },
  {
    label: "Designing Courses",
    href: "/services/designing-courses",
    type: "Service",
    keywords:
      "designing courses logo flyer poster brochure image tracing photo editing brand identity social media design web design company profile business cards graphics",
  },
  {
    label: "Printing Courses",
    href: "/services/printing-courses",
    type: "Service",
    keywords:
      "printing courses screen printing single color single colour multiple color multiple colour print flash print cmyk cymk discharge dicharge split color process puff print exposing screen washing screen emulsion acetate asitet alignment press setup exposure time stretching screen ink caring ink",
  },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const trimmedSearch = searchQuery.trim().toLowerCase();
  const searchResults =
    trimmedSearch.length > 0
      ? searchItems
          .filter((item) => `${item.label} ${item.keywords}`.toLowerCase().includes(trimmedSearch))
          .slice(0, 8)
      : [];

  const closeSearch = () => {
    setSearchFocused(false);
    setSearchQuery("");
  };

  const goToSearchResult = (href: string) => {
    closeSearch();
    setMenuOpen(false);
    setDesktopProductsOpen(false);
    setDesktopServicesOpen(false);
    router.push(href);
  };

  const handleSearchSubmit = () => {
    if (searchResults[0]) {
      goToSearchResult(searchResults[0].href);
    }
  };

  const renderSearchBox = (mobile = false) => (
    <div className={cn("relative", mobile ? "mb-2" : "ml-2 flex w-48 items-center lg:w-64")}>
      <Search
        className={cn(
          "absolute left-2.5 size-4 text-brand-surface-foreground/60 pointer-events-none",
          mobile && "top-1/2 -translate-y-1/2"
        )}
      />
      <Input
        type="search"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          setSearchFocused(true);
        }}
        onFocus={() => {
          setSearchFocused(true);
          setDesktopProductsOpen(false);
          setDesktopServicesOpen(false);
        }}
        onBlur={() => {
          setTimeout(() => setSearchFocused(false), 120);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleSearchSubmit();
          }
          if (event.key === "Escape") {
            setSearchFocused(false);
          }
        }}
        placeholder="Search products or services..."
        className={cn(
          "pl-8 h-9 border-brand-surface-foreground/20 bg-background text-foreground caret-primary placeholder:text-muted-foreground focus-visible:border-primary",
          mobile && "w-full"
        )}
      />
      {searchFocused && trimmedSearch.length > 0 && (
        <div
          className={cn(
            "absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg",
            mobile ? "max-h-72 overflow-y-auto" : "right-auto w-80"
          )}
        >
          {searchResults.length > 0 ? (
            <div className="p-1">
              {searchResults.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => goToSearchResult(item.href)}
                  className="flex w-full flex-col rounded-md px-3 py-2 text-left transition-colors hover:bg-muted focus:bg-muted focus:outline-none"
                >
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.type}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="px-3 py-3 text-sm text-muted-foreground">No matching product or service found.</p>
          )}
        </div>
      )}
    </div>
  );

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-brand-surface-foreground/20 bg-brand-surface"
      onMouseLeave={() => {
        setDesktopProductsOpen(false);
        setDesktopServicesOpen(false);
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-brand-surface-foreground">
          <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-brand-surface-foreground/20">
            <Image
              src={BrandMark}
              alt="Ramirez Ventures logo"
              height={40}
              className="h-10 w-auto max-w-none object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold uppercase text-brand-surface-foreground sm:text-base">
              Ramirez Ventures
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-brand-surface-foreground/70 sm:text-xs">
              Your local printshop
            </span>
          </span>
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
            onMouseEnter={() => {
              setDesktopProductsOpen(true);
              setDesktopServicesOpen(false);
            }}
            onClick={() => {
              setDesktopProductsOpen((p) => !p);
              setDesktopServicesOpen(false);
            }}
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

          {/* Services trigger */}
          <div
            onMouseEnter={() => {
              setDesktopServicesOpen(true);
              setDesktopProductsOpen(false);
            }}
            className="relative"
          >
            <Link
              href="/services"
              onClick={() => setDesktopServicesOpen(false)}
              className={cn(
                "relative flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-primary after:transition-[width] after:duration-200",
                desktopServicesOpen
                  ? "text-brand-surface-foreground after:w-full"
                  : "text-brand-surface-foreground/80 hover:text-brand-surface-foreground after:w-0 hover:after:w-full"
              )}
            >
              Services
              <ChevronDown
                className={cn("size-3.5 transition-transform duration-200", desktopServicesOpen && "rotate-180")}
              />
            </Link>
          </div>

          {/* Search bar */}
          {renderSearchBox()}
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

        {/* Services dropdown */}
        <div
          onMouseEnter={() => {
            setDesktopServicesOpen(true);
            setDesktopProductsOpen(false);
          }}
          className={cn(
            "absolute left-0 top-full w-full bg-popover border-b border-border shadow-lg z-40 transition-all duration-200 origin-top hidden md:block",
            desktopServicesOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setDesktopServicesOpen(false)}
                  className="rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
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
          {renderSearchBox(true)}

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

          {/* Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((p) => !p)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-brand-surface-foreground/80 transition-colors duration-200 hover:text-brand-surface-foreground hover:bg-brand-surface-foreground/10"
            >
              Services
              <ChevronDown
                className={cn("size-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                mobileServicesOpen ? "max-h-48" : "max-h-0"
              )}
            >
              <div className="pl-6 pr-2 pb-2 flex flex-col gap-1 pt-1">
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-medium text-brand-surface-foreground/70 hover:text-primary transition-colors duration-150"
                >
                  View all Services
                </Link>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xs text-brand-surface-foreground/70 hover:text-primary transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                ))}
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
