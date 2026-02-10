import Link from "next/link";
import { ArrowRight, BookOpen, Code, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>Draw and Understand</span>
          </Link>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/70">
              About
            </Link>
            <Link href="/paper" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Paper
            </Link>
            <Link href="#demo" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Demo
            </Link>
            <Link href="#team" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Team
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Draw and Understand
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            A novel approach to visual understanding through sketch-based interaction
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#paper"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read Paper
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">About</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <Code className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Visual Understanding</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI models that interpret and understand visual content from sketches
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <BookOpen className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Engage with the system through intuitive sketch-based interfaces
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Collaborative Research</h3>
              <p className="text-sm text-muted-foreground">
                Open-source contributions from researchers and developers worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paper Section */}
      <section id="paper" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Paper</h2>
          <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">
              Draw and Understand: Visual Understanding through Sketch-based Interaction
            </h3>
            <p className="mb-6 text-muted-foreground">
              This paper presents a novel framework for visual understanding that leverages sketch-based interaction.
              Our approach combines deep learning techniques with intuitive user interfaces to create an engaging
              and effective learning experience.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Computer Vision
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Deep Learning
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Human-Computer Interaction
              </span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View PDF
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                arXiv
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Code
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Demo</h2>
          <div className="aspect-video rounded-lg border bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-center text-card-foreground shadow-sm">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted"></div>
              <h3 className="mb-1 font-semibold">Author Name 1</h3>
              <p className="text-sm text-muted-foreground">Affiliation</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center text-card-foreground shadow-sm">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted"></div>
              <h3 className="mb-1 font-semibold">Author Name 2</h3>
              <p className="text-sm text-muted-foreground">Affiliation</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center text-card-foreground shadow-sm">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-muted"></div>
              <h3 className="mb-1 font-semibold">Author Name 3</h3>
              <p className="text-sm text-muted-foreground">Affiliation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Citation</h2>
          <div className="rounded-lg border bg-muted/50 p-6 font-mono text-sm">
            <pre className="whitespace-pre-wrap overflow-x-auto">
{`@inproceedings{
  title={Draw and Understand: Visual Understanding through Sketch-based Interaction},
  author={Author Name 1 and Author Name 2 and Author Name 3},
  booktitle={Conference Name},
  year={2024}
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Draw and Understand. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="https://github.com" className="transition-colors hover:text-foreground">
                GitHub
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
