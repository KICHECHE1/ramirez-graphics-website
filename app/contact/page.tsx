"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

/* ── WhatsApp floating icon ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const addresses = [
  {
    city: "Muhoroni, Kisumu",
    lines: ["Muhoroni, Kisumu County", "Kenya"],
    phone: "+254 700 000 000",
    whatsapp: "254700000000",
    email: "info@ramirezventures.co.ke",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a real form endpoint
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Page hero ── */}
      <section className="bg-muted/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for quotes, support, or just to say hello.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* ── Left column: Find Us ── */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Find Us</h2>
              <div className="flex flex-col gap-8">
                {addresses.map((addr) => (
                  <div
                    key={addr.city}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col gap-4"
                  >
                    <p className="font-semibold text-foreground text-base">{addr.city}</p>
                    <address className="not-italic flex flex-col gap-3">
                      {/* Address lines */}
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
                        <span>{addr.lines.join(", ")}</span>
                      </div>
                      {/* Phone */}
                      <Link
                        href={`tel:${addr.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="size-4 shrink-0 text-primary" />
                        {addr.phone}
                      </Link>
                      {/* Email */}
                      <Link
                        href={`mailto:${addr.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="size-4 shrink-0 text-primary" />
                        {addr.email}
                      </Link>
                    </address>

                    {/* WhatsApp CTA inside card */}
                    <Link
                      href={`https://wa.me/${addr.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90 w-fit"
                    >
                      <WhatsAppIcon />
                      Chat on WhatsApp
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-foreground">8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">9:00 AM – 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Right column: Contact form ── */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <Send className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="e.g. Business card quote"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry…"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="size-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
