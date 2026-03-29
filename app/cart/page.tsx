"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Tag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";

const DELIVERY_FEE = 500;
const FREE_DELIVERY_THRESHOLD = 10000;

const VALID_COUPONS: Record<string, number> = {
  RAMIREZ10: 0.10,
  PRINT20: 0.20,
};

export default function CartPage() {
  const { items, updateQty, removeFromCart, clearCart, totalPrice } = useCart();
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState("");

  function applyCoupon() {
    const code = coupon.trim().toUpperCase();
    if (VALID_COUPONS[code]) {
      setAppliedCoupon(code);
      setCouponError("");
    } else {
      setAppliedCoupon(null);
      setCouponError("Invalid coupon code.");
    }
  }

  const discountRate = appliedCoupon ? VALID_COUPONS[appliedCoupon] : 0;
  const discount = Math.round(totalPrice * discountRate);
  const deliveryFee = totalPrice >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const total = totalPrice - discount + deliveryFee;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(n);

  /* ── Empty state ── */
  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center gap-6 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-muted">
          <ShoppingBag className="size-9 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Your cart is empty</h1>
        <p className="text-muted-foreground max-w-sm">
          Looks like you haven&apos;t added anything yet. Browse our products and find something you love.
        </p>
        <Button asChild size="lg">
          <Link href="/">Start Shopping</Link>
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
        <span className="text-foreground font-medium">Cart</span>
      </nav>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Shopping Cart{" "}
          <span className="text-lg font-normal text-muted-foreground">
            ({items.length} {items.length === 1 ? "item" : "items"})
          </span>
        </h1>
        <button
          onClick={clearCart}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors"
        >
          Clear cart
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

                <p className="text-xs text-muted-foreground">{fmt(item.price)} each</p>

                <div className="flex items-center justify-between mt-auto">
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

                  {/* Line total */}
                  <p className="font-semibold text-foreground tabular-nums">
                    {fmt(item.price * item.qty)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Continue shopping */}
          <div className="mt-2">
            <Button variant="outline" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="size-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>

        {/* ── Order summary ── */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col gap-5">
            <h2 className="font-bold text-lg text-foreground">Order Summary</h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium tabular-nums">{fmt(totalPrice)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span className="flex items-center gap-1">
                    <Tag className="size-3.5" />
                    Coupon ({appliedCoupon}) &mdash; {Math.round(discountRate * 100)}% off
                  </span>
                  <span className="font-medium tabular-nums">−{fmt(discount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery</span>
                {deliveryFee === 0 ? (
                  <Badge variant="secondary" className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/40 border-0">
                    Free
                  </Badge>
                ) : (
                  <span className="font-medium tabular-nums">{fmt(deliveryFee)}</span>
                )}
              </div>

              {totalPrice < FREE_DELIVERY_THRESHOLD && (
                <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2">
                  Add{" "}
                  <span className="font-semibold text-foreground">
                    {fmt(FREE_DELIVERY_THRESHOLD - totalPrice)}
                  </span>{" "}
                  more to get <span className="font-semibold text-foreground">free delivery</span>.
                </p>
              )}

              <Separator />

              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span className="tabular-nums">{fmt(total)}</span>
              </div>
            </div>

            <Button size="lg" className="w-full gap-2">
              Proceed to Checkout
              <ChevronRight className="size-4" />
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Secure checkout · Pay on delivery available
            </p>
          </div>

          {/* Coupon */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col gap-3">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
              <Tag className="size-4 text-primary" />
              Coupon Code
            </h3>
            <div className="flex gap-2">
              <Input
                placeholder="Enter code…"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                  setCouponError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                aria-label="Coupon code"
                className="flex-1"
              />
              <Button variant="outline" onClick={applyCoupon} className="shrink-0">
                Apply
              </Button>
            </div>
            {couponError && (
              <p className="text-xs text-destructive">{couponError}</p>
            )}
            {appliedCoupon && (
              <p className="text-xs text-green-600 dark:text-green-400">
                ✓ Coupon applied — {Math.round(discountRate * 100)}% off!
              </p>
            )}
            <p className="text-xs text-muted-foreground">Try: <code className="font-mono">RAMIREZ10</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
