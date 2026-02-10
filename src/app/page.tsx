import Link from "next/link";
import { ArrowRight, BookOpen, Code, Users, Zap, Globe, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>ADNU</span>
          </Link>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="#abstract" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Abstract
            </Link>
            <Link href="/paper" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Paper
            </Link>
            <Link href="#method" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Method
            </Link>
            <Link href="#results" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Results
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            ICML 2025
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Advanced Draw And Understand
          </h1>
          <p className="mb-4 text-xl font-semibold text-foreground/90">
            Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension
          </p>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Elevating multimodal large language models to genuine pixel-level comprehension by replacing
            conventional rectangular proxies with learnable free-shape visual prompts
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Read Paper
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#method"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Abstract</h2>
          <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
            <p className="leading-relaxed text-muted-foreground">
              Advanced Draw And Understand (ADNU) elevates multimodal large language models to genuine
              pixel-level comprehension by replacing the conventional rectangular proxy with learnable
              free-shape visual prompts. A plug-in visual prompt encoder converts arbitrary user sketches
              into compact token sequences, while a dynamic gating mechanism lets the LLM decide which
              prompts to attend to, eliminating performance inversion when multiple regions are marked.
              Extensive experiments on MDVP-Bench and five downstream tasks show that ADNU improves
              Referral accuracy by <strong>4.7%</strong>, Reasoning accuracy by <strong>5.6%</strong>,
              and zero-shot Chinese OCR by <strong>24.7%</strong> over the strongest bounding-box baseline,
              yet requires no extra detection labels during pre-training.
            </p>
          </div>
        </div>
      </section>

      {/* Key Innovations */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Key Innovations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Free-Shape Prompts</h3>
              <p className="text-sm text-muted-foreground">
                Replace bounding boxes with arbitrary sketches, polygons, and scribbles for pixel-level precision
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <Network className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Dynamic Gating</h3>
              <p className="text-sm text-muted-foreground">
                Adaptive filtering mechanism eliminates performance inversion in multi-target scenarios
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <Globe className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Cultural Bridge</h3>
              <p className="text-sm text-muted-foreground">
                Large-scale Chinese-MDVP dataset mitigates English-centric bias for multilingual understanding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Overview */}
      <section id="method" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Method Overview</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Visual Prompt Encoder</h3>
              <p className="text-sm text-muted-foreground">
                Fourier descriptors for closed contours and Bézier curves for scribbles enable compact,
                noise-robust representations that preserve geometric fidelity
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Hyper-Graph Reasoning</h3>
              <p className="text-sm text-muted-foreground">
                Models high-order semantic relationships among visual entities with up to 48.1% improvement
                on 4-hop reasoning tasks
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Self-Supervised Learning</h3>
              <p className="text-sm text-muted-foreground">
                MAE-style prompt reconstruction and contrastive learning eliminate need for expensive detection labels
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Cross-Lingual Alignment</h3>
              <p className="text-sm text-muted-foreground">
                Zero-shot transfer capabilities from English to Chinese with 36% average improvement on cultural tasks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Experimental Results</h2>
          <div className="mb-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-primary/5 p-6 text-center">
              <p className="mb-2 text-sm font-medium text-foreground/70">Referral Accuracy</p>
              <p className="text-3xl font-bold text-primary">+4.7%</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6 text-center">
              <p className="mb-2 text-sm font-medium text-foreground/70">Reasoning Accuracy</p>
              <p className="text-3xl font-bold text-primary">+5.6%</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6 text-center">
              <p className="mb-2 text-sm font-medium text-foreground/70">Chinese OCR</p>
              <p className="text-3xl font-bold text-primary">+24.7%</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-6 text-center">
              <p className="mb-2 text-sm font-medium text-foreground/70">Cultural Tasks</p>
              <p className="text-3xl font-bold text-primary">+36.0%</p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Multi-Hop Reasoning Performance</h3>
            <div className="grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="mb-1 text-xs text-muted-foreground">1-hop</p>
                <p className="text-lg font-semibold">+1.0%</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="mb-1 text-xs text-muted-foreground">2-hop</p>
                <p className="text-lg font-semibold">+9.9%</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="mb-1 text-xs text-muted-foreground">3-hop</p>
                <p className="text-lg font-semibold">+30.6%</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 text-center">
                <p className="mb-1 text-xs text-muted-foreground">4-hop</p>
                <p className="text-lg font-semibold">+48.1%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Authors</h2>
          <p className="mb-4 text-muted-foreground">
            Proceedings of the 42nd International Conference on Machine Learning (ICML 2025)
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname1 Lastname1*
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname2 Lastname2*
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname3 Lastname3
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname4 Lastname4
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname5 Lastname5
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname6 Lastname6
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname7 Lastname7
            </span>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Firstname8 Lastname8
            </span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">*Equal contribution</p>
        </div>
      </section>

      {/* Citation Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Citation</h2>
          <div className="rounded-lg border bg-muted/50 p-6 font-mono text-sm">
            <pre className="whitespace-pre-wrap overflow-x-auto">
{`@inproceedings{lastname2025advanced,
  title={Advanced Draw And Understand: Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension},
  author={Firstname1 Lastname1 and Firstname2 Lastname2 and Firstname3 Lastname3 and Firstname4 Lastname4 and Firstname5 Lastname5 and Firstname6 Lastname6 and Firstname7 Lastname7 and Firstname8 Lastname8},
  booktitle={Proceedings of the 42nd International Conference on Machine Learning},
  year={2025},
  organization={PMLR}
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
              © 2025 ADNU. ICML 2025
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="/paper" className="transition-colors hover:text-foreground">
                Paper
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Code
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
