import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Github } from "lucide-react";

export default function PaperPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>Draw and Understand</span>
          </Link>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/70">
              About
            </Link>
            <Link href="/paper" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Paper
            </Link>
            <Link href="/#demo" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Demo
            </Link>
            <Link href="/#team" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Team
            </Link>
          </div>
        </div>
      </nav>

      {/* Paper Content */}
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <article className="mx-auto max-w-4xl">
          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Draw and Understand: Visual Understanding through Sketch-based Interaction
          </h1>

          {/* Authors */}
          <div className="mb-8 text-muted-foreground">
            <p className="font-medium">Authors</p>
            <p>Author Name 1, Author Name 2, Author Name 3</p>
          </div>

          {/* Abstract */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Abstract</h2>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <p className="leading-relaxed text-muted-foreground">
                This paper presents a novel framework for visual understanding that leverages sketch-based interaction.
                Our approach combines deep learning techniques with intuitive user interfaces to create an engaging
                and effective learning experience. We demonstrate that sketch-based interaction provides unique advantages
                in understanding visual concepts and enables more natural communication between humans and AI systems.
              </p>
            </div>
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Download</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent"
              >
                <FileText className="h-5 w-5" />
                <span className="font-medium">PDF</span>
              </Link>
              <Link
                href="https://arxiv.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent"
              >
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">arXiv</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">Code</span>
              </Link>
            </div>
          </section>

          {/* Method Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Method</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Overview</h3>
                <p className="text-muted-foreground">
                  Our framework consists of three main components: a sketch recognition module,
                  a visual understanding network, and an interactive interface that enables
                  real-time feedback and learning.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Sketch Recognition</h3>
                <p className="text-muted-foreground">
                  We employ state-of-the-art deep learning models to recognize and interpret
                  user sketches with high accuracy. The system understands both abstract and
                  detailed sketches, making it accessible to users with varying drawing skills.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold">Visual Understanding</h3>
                <p className="text-muted-foreground">
                  Our visual understanding network combines the recognized sketches with
                  contextual information to provide comprehensive visual analysis. The system
                  can identify objects, relationships, and spatial configurations from sketches.
                </p>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Results</h2>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <p className="mb-4 text-muted-foreground">
                We conducted extensive experiments on multiple datasets to evaluate the
                effectiveness of our approach. Our method achieves state-of-the-art
                performance in sketch recognition and visual understanding tasks.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium">Sketch Recognition Accuracy</p>
                  <p className="text-3xl font-bold">94.5%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="mb-2 text-sm font-medium">Visual Understanding Score</p>
                  <p className="text-3xl font-bold">89.2%</p>
                </div>
              </div>
            </div>
          </section>

          {/* Citation */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Citation</h2>
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
          </section>

          {/* BibTeX */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">BibTeX</h2>
            <div className="rounded-lg border bg-muted/50 p-6 font-mono text-sm">
              <pre className="whitespace-pre-wrap overflow-x-auto">
{`@inproceedings{author2024draw,
  title={Draw and Understand: Visual Understanding through Sketch-based Interaction},
  author={Author Name 1 and Author Name 2 and Author Name 3},
  booktitle={Conference Name},
  year={2024},
  organization={Organization}
}`}
              </pre>
            </div>
          </section>
        </article>
      </div>

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
