"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "254700000000";
const MESSAGE = "Hi, I'd like to get a quote for printing services.";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          50%       { box-shadow: 0 0 0 10px rgba(37,211,102,0); }
        }
        .wa-flicker {
          animation: wa-pulse 1.6s ease-in-out infinite;
        }
      `}</style>
      <Link
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-flicker fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#20c05c] transition-colors group"
      >
        <MessageCircle className="size-5 shrink-0" />
        <span className="text-sm font-semibold">
          Chat with us via whastapp
        </span>
      </Link>
    </>
  );
}
