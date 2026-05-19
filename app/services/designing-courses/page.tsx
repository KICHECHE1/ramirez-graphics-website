import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Globe2,
  ImageIcon,
  Layers3,
  Megaphone,
  Palette,
  PencilRuler,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const topics = [
  {
    title: "Logo Design",
    description: "Learn how to create simple, memorable marks for businesses, events, and personal brands.",
    icon: BadgeCheck,
  },
  {
    title: "Flyer and Poster Design",
    description: "Build clean promotional layouts with strong hierarchy, spacing, colour, and readable text.",
    icon: Megaphone,
  },
  {
    title: "Brochure Design",
    description: "Design folded marketing pieces that organise products, services, and company information clearly.",
    icon: FileText,
  },
  {
    title: "Image Tracing",
    description: "Convert rough artwork, sketches, and low-quality graphics into cleaner editable designs.",
    icon: PencilRuler,
  },
  {
    title: "Photo Editing",
    description: "Retouch images, adjust colours, clean backgrounds, and prepare photos for print or web use.",
    icon: ImageIcon,
  },
  {
    title: "Brand Identity",
    description: "Create consistent visual systems with logos, colours, fonts, patterns, and brand rules.",
    icon: Palette,
  },
  {
    title: "Social Media Design",
    description: "Make polished posts, banners, stories, and campaign graphics for digital platforms.",
    icon: Share2,
  },
  {
    title: "Web Design",
    description: "Understand page layout, responsive sections, visual balance, and modern website presentation.",
    icon: Globe2,
  },
  {
    title: "Company Profile Design",
    description: "Structure professional company profiles for proposals, introductions, and corporate marketing.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Card Design",
    description: "Design sharp business cards that are easy to read, brand-aligned, and print-ready.",
    icon: Layers3,
  },
];

export default function DesigningCoursesPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border bg-brand-surface py-16 text-brand-surface-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-brand-surface-foreground/70">
            <Link href="/" className="hover:text-brand-surface-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-surface-foreground transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="font-medium text-brand-surface-foreground">Designing Courses</span>
          </nav>
          <Badge variant="secondary" className="mb-4">
            Designing Courses
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Learn practical design skills for print, branding, and digital media
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-surface-foreground/80">
            A simple, hands-on course for learners who want to create polished designs for real
            businesses, events, campaigns, and online platforms.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <Badge variant="secondary" className="mb-4">
            Course Content
          </Badge>
          <h2 className="text-2xl font-semibold text-foreground">What you will learn</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            The course focuses on practical design work: planning the layout, choosing the right
            visual style, preparing files, and presenting professional artwork.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <div
                  key={topic.title}
                  className="rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="rounded-lg border border-border bg-muted/40 p-6">
          <h2 className="text-xl font-semibold text-foreground">Start Designing Courses</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Contact Ramirez Ventures for course availability, fees, duration, and entry requirements.
            Beginners are welcome.
          </p>
          <div className="mt-5 space-y-3">
            {["Beginner-friendly", "Hands-on practice", "Print and digital focus"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Button asChild className="mt-5 w-full">
            <Link href="/contact">Ask About This Course</Link>
          </Button>
        </aside>
      </section>
    </main>
  );
}
