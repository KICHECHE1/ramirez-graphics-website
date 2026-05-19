import Link from "next/link";
import { ArrowRight, Palette, Printer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Designing Courses",
    href: "/services/designing-courses",
    description:
      "Practical design training for learners who want to create clean layouts, brand assets, posters, flyers, and print-ready artwork.",
    icon: Palette,
  },
  {
    title: "Printing Courses",
    href: "/services/printing-courses",
    description:
      "Hands-on printing training covering file preparation, materials, finishing, production workflow, and quality checks.",
    icon: Printer,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-border bg-brand-surface py-16 text-brand-surface-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-1.5 text-sm text-brand-surface-foreground/70">
            <Link href="/" className="hover:text-brand-surface-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-brand-surface-foreground">Services</span>
          </nav>
          <Badge variant="secondary" className="mb-4">
            Training Services
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Design and printing courses for practical creative skills
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-surface-foreground/80">
            Build confidence with guided, hands-on courses from a team that works with real client
            design and print projects every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Link
                key={course.href}
                href={course.href}
                className="group rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:border-primary"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h2 className="text-xl font-semibold">{course.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{course.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  View course
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-muted/40 p-6">
          <h2 className="text-xl font-semibold text-foreground">Need help choosing a course?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Share your current skill level and what you want to learn. Ramirez Ventures can recommend
            the right course path and schedule.
          </p>
          <Button asChild className="mt-5">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
