import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import BrandMark from "@/app/assets/Ramirez Logo 1.png";

/* ── Inline brand SVGs (lucide-react doesn't ship brand icons) ── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
    <path d="M17.5 6.3a6 6 0 0 1-3.2-3.8h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6.1.9.2V9.3a5.8 5.8 0 1 0 4.9 5.7V8.4a9.2 9.2 0 0 0 5.2 1.7V7a6.5 6.5 0 0 1-2.1-.7z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);
const productColumns = [
  {
    heading: "Print & Branding",
    links: [
      { label: "Banners", href: "/products/banners" },
      { label: "Booklet Magazines", href: "/products/booklet-magazines" },
      { label: "Branded Apparel", href: "/products/branded-apparel" },
      { label: "Business Cards", href: "/products/business-cards" },
      { label: "Digital Printing", href: "/products/digital-printing" },
    ],
  },
  {
    heading: "Events & More",
    links: [
      { label: "Election Printing", href: "/products/election-printing" },
      { label: "Events Display", href: "/products/events-display" },
      { label: "Flyers & Brochures", href: "/products/flyers" },
      { label: "Posters", href: "/products/posters" },
      { label: "Signages", href: "/products/signages" },
    ],
  },
  {
    heading: "Speciality",
    links: [
      { label: "Graphic Design", href: "/products/graphic-design" },
      { label: "Mug & Drinkware Printing", href: "/products/mug-printing" },
      { label: "Packaging", href: "/products/packaging" },
      { label: "Photo Printing & Framing", href: "/products/photo-printing" },
      { label: "Promotional Items", href: "/products/promotional-items" },
      { label: "Stickers", href: "/products/stickers" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/people/Ramirez-Ventures", icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/ramirezventures", icon: InstagramIcon },
  { label: "TikTok", href: "https://www.tiktok.com/@ramirezventures0", icon: TikTokIcon },
  { label: "YouTube", href: "https://www.youtube.com/@RAMIREZVENTURES", icon: YoutubeIcon },
];

const addresses = [
  {
    city: "Muhoroni, Kisumu",
    lines: ["Muhoroni, Kisumu County", "Kenya"],
    phone: "+254 706 207 037",
    email: "Ramirezentventures@gmail.com",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[oklch(0.145_0_0)] text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="rv-container py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.8fr_1fr]">
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3 text-white">
              <span className="relative flex size-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
              <Image
                src={BrandMark}
                alt="Ramirez Ventures logo"
                  height={44}
                  className="h-11 w-auto max-w-none object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
                <span className="text-base font-bold uppercase text-white">
                Ramirez Ventures
              </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                Your local printshop
              </span>
            </span>
          </Link>
            <p className="max-w-sm text-sm leading-6 text-white/70">
            Your one-stop print &amp; branding partner. Quality you can see, service you can trust.
          </p>

            <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors duration-200 hover:border-primary hover:bg-primary/15 hover:text-white"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {productColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-white/65 transition-colors duration-150 hover:text-primary"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
          </div>
        ))}
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Find Us
            </h3>
            {addresses.map((addr) => (
              <div key={addr.city} className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-white">{addr.city}</p>
                <address className="flex flex-col gap-2.5 not-italic">
                {addr.lines.map((line) => (
                    <span key={line} className="flex items-start gap-2 text-xs text-white/65">
                    {addr.lines.indexOf(line) === 0 && (
                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    )}
                    {addr.lines.indexOf(line) !== 0 && (
                      <span className="w-3.5 shrink-0" />
                    )}
                    {line}
                  </span>
                ))}
                <Link
                  href={`tel:${addr.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-xs text-white/65 transition-colors duration-150 hover:text-white"
                >
                    <Phone className="size-3.5 shrink-0 text-primary" />
                  {addr.phone}
                </Link>
                <Link
                  href={`mailto:${addr.email}`}
                    className="flex items-center gap-2 text-xs text-white/65 transition-colors duration-150 hover:text-white"
                >
                    <Mail className="size-3.5 shrink-0 text-primary" />
                  {addr.email}
                </Link>
              </address>
            </div>
          ))}
            <Link
              href="/contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="rv-container flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/55 sm:flex-row">
          <span>&copy; {year} Ramirez Ventures. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors duration-150 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors duration-150 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
