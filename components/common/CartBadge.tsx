"use client";

import { useCart } from "@/lib/cart-context";

export default function CartBadge() {
  const { totalItems } = useCart();
  if (totalItems === 0) return null;
  return (
    <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold leading-none">
      {totalItems > 99 ? "99+" : totalItems}
    </span>
  );
}
