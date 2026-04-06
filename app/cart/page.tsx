"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/cart-context";

const WHATSAPP = "254706207037";

export default function CartPage() {
  const { items, updateQty, removeFromCart, clearCart } = useCart();

  /* ── Build WhatsApp message from cart items ── */
  const buildWhatsAppMessage = () => {
    const lines = items.map(
      (item) => `• ${item.name}${item.qty > 1 ? ` (×${item.qty})` : ""}`
    );
    return encodeURIComponent(
      `Hi Ramirez Ventures! I'd like to enquire about the following items:\n\n${lines.join("\n")}\n\nPlease advise on pricing and availability. Thank you.`
    );
  };

  /* ── Empty state ── */
  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center gap-6 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="size-9 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Your order list is empty</h1>
        <p className="text-muted-foreground max-w-sm">
          Browse our products, add what you need, then send us a WhatsApp message to get a personalised quote.
        </p>
        <Button asChild size="lg">
          <Link href="/">Browse Products</Link>
        </Button>
      </section>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="size-3.5" />
        <span className="text-foreground font-medium">Order Enquiry</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Order Enquiry{" "}
          <span className="text-lg font-normal text-muted-foreground">
            ({items.length} {items.length === 1 ? "item" : "items"})
          </span>
        </h1>
        <button
          onClick={clearCart}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors"
        >
          Clear list
        </button>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* ── Cart items ── */}
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm"
            >
              {/* Thumbnail */}
              <Link href={item.href} className="shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="size-24 rounded-lg object-cover"
                  unoptimized
                />
              </Link>

              {/* Details */}
              <div className="flex flex-1 flex-col gap-2 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    href={item.href}
                    className="font-semibold text-foreground leading-snug hover:text-primary transition-colors line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="shrink-0 text-muted-foreground hover:text-destructive transition-colors p-1 rounded"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>

                <p className="text-xs text-muted-foreground">Quantity</p>

                <div className="flex items-center mt-auto">
                  {/* Qty controls */}
                  <div className="flex items-center gap-1 rounded-lg border border-border">
                    <button
                      onClick={() => updateQty(item.id, -1)}
                      disabled={item.qty === 1}
                      aria-label="Decrease quantity"
                      className="flex size-8 items-center justify-center rounded-l-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors disabled:opacity-40 disabled:pointer-events-none"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium tabular-nums select-none">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, 1)}
                      aria-label="Increase quantity"
                      className="flex size-8 items-center justify-center rounded-r-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Continue shopping */}
          <div className="mt-2">
            <Button variant="outline" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="size-4" />
                Continue Browsing
              </Link>
            </Button>
          </div>
        </div>

        {/* ── Enquiry panel ── */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col gap-5">
            <div>
              <h2 className="font-bold text-lg text-foreground">Send Enquiry</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Pricing is tailored to your specific requirements. Send us your list on WhatsApp and we&apos;ll get back to you with a personalised quote.
              </p>
            </div>

            <Separator />

            <div className="flex flex-col gap-2 text-sm">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-muted-foreground">
                  <span className="line-clamp-1 flex-1 pr-4">{item.name}</span>
                  <span className="shrink-0 font-medium text-foreground">×{item.qty}</span>
                </div>
              ))}
            </div>

            <Separator />

            <Button
              size="lg"
              className="w-full gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP}?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Send Order via WhatsApp
              </a>
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              We&apos;ll confirm your order and discuss pricing on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
