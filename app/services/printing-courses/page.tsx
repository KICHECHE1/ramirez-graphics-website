import Link from "next/link";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Droplets,
  Flame,
  Layers3,
  PaintBucket,
  Palette,
  Printer,
  ScanLine,
  Settings2,
  ShieldCheck,
  Sparkles,
  StretchHorizontal,
  SwatchBook,
  Target,
  Waves,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const topics = [
  {
    title: "Single Colour Print",
    description: "Learn how to set up and print clean one-colour designs with strong coverage and sharp edges.",
    icon: PaintBucket,
  },
  {
    title: "Multiple Colour Print",
    description: "Understand registration, colour order, and layer control for designs with more than one ink colour.",
    icon: Palette,
  },
  {
    title: "Print Flash Print",
    description: "Practice flashing between layers to build opacity, especially on dark garments and heavy designs.",
    icon: Flame,
  },
  {
    title: "CMYK Printing",
    description: "Learn the basics of process colour printing for detailed artwork and photographic effects.",
    icon: SwatchBook,
  },
  {
    title: "Discharge Printing",
    description: "Understand discharge ink, fabric suitability, curing needs, and how to achieve a soft hand feel.",
    icon: Droplets,
  },
  {
    title: "Split Colour Process",
    description: "Break down artwork into printable colour separations for smoother production and better results.",
    icon: Layers3,
  },
  {
    title: "Puff Print",
    description: "Explore raised ink effects, correct ink handling, heat control, and design choices for puff printing.",
    icon: Sparkles,
  },
  {
    title: "Exposing Screen",
    description: "Learn how coated screens are exposed, timed, and prepared for accurate stencil detail.",
    icon: Clock3,
  },
  {
    title: "Washing Screen",
    description: "Practice washing out screens cleanly without damaging fine artwork or weakening the stencil.",
    icon: Waves,
  },
  {
    title: "Quality Screen With Emulsion",
    description: "Understand coating technique, drying, emulsion thickness, and how screen quality affects print output.",
    icon: ShieldCheck,
  },
  {
    title: "Acetate Alignment",
    description: "Use acetate positives to align artwork accurately before exposure and during press setup.",
    icon: Target,
  },
  {
    title: "Press Setup",
    description: "Set up the press, lock screens, align platens, test registration, and prepare for production.",
    icon: Settings2,
  },
  {
    title: "Exposure Time",
    description: "Find the right exposure time based on emulsion, light source, artwork detail, and screen mesh.",
    icon: ScanLine,
  },
  {
    title: "Stretching Screen",
    description: "Learn why screen tension matters and how stretched screens affect detail, registration, and ink flow.",
    icon: StretchHorizontal,
  },
  {
    title: "Choosing the Right Ink",
    description: "Compare ink types and choose the right one for fabric, colour, finish, durability, and production needs.",
    icon: Printer,
  },
  {
    title: "Caring for Ink",
    description: "Store, mix, handle, and maintain inks properly so they stay usable and consistent during printing.",
    icon: BadgeCheck,
  },
];

export default function PrintingCoursesPage() {
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
            <span className="font-medium text-brand-surface-foreground">Printing Courses</span>
          </nav>
          <Badge variant="secondary" className="mb-4">
            Printing Courses
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Learn practical screen printing from screen setup to final print
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-surface-foreground/80">
            A hands-on screen printing course for learners who want to understand artwork
            separation, screen preparation, press setup, ink choice, and quality production.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <div>
          <Badge variant="secondary" className="mb-4">
            Screen Printing Course
          </Badge>
          <h2 className="text-2xl font-semibold text-foreground">What you will learn</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            The course keeps things practical: preparing the screen, setting up the press, choosing
            the right ink, controlling colour, and producing consistent screen-printed work.
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
          <h2 className="text-xl font-semibold text-foreground">Start Printing Courses</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Contact Ramirez Ventures for course availability, fees, duration, and entry requirements.
            The course is built around real screen printing practice.
          </p>
          <div className="mt-5 space-y-3">
            {["Screen preparation", "Press and colour setup", "Ink handling and care"].map((item) => (
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
