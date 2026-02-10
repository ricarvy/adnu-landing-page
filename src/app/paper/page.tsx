import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Github, Database, Sparkles } from "lucide-react";

export default function PaperPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <BookOpen className="h-6 w-6" />
            <span>ADNU</span>
          </Link>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/#abstract" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Abstract
            </Link>
            <Link href="/paper" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Paper
            </Link>
            <Link href="/#method" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Method
            </Link>
            <Link href="/#results" className="transition-colors hover:text-foreground/80 text-foreground/70">
              Results
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
          {/* Conference Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            NeurIPS 2026
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Advanced Draw And Understand: Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension
          </h1>

          {/* Authors */}
          <div className="mb-8 text-muted-foreground">
            <p className="font-medium">Authors</p>
            <p className="mb-2">
              Firstname1 Lastname1*, Firstname2 Lastname2*, Firstname3 Lastname3, Firstname4 Lastname4,
            </p>
            <p>
              Firstname5 Lastname5, Firstname6 Lastname6, Firstname7 Lastname7, Firstname8 Lastname8
            </p>
            <p className="mt-2 text-xs">*Equal contribution</p>
          </div>

          {/* Affiliation */}
          <div className="mb-8 text-sm text-muted-foreground">
            <p>1Department of XXX, University of YYY, Location, Country</p>
            <p>2Company Name, Location, Country</p>
            <p>3School of ZZZ, Institute of WWW, Location, Country</p>
          </div>

          {/* Abstract */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Abstract</h2>
            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
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
          </section>

          {/* Download Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Download</h2>
            <div className="grid gap-4 sm:grid-cols-4">
              <Link
                href="/paper.pdf"
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
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">Code</span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent"
              >
                <Database className="h-5 w-5" />
                <span className="font-medium">Dataset</span>
              </Link>
            </div>
          </section>

          {/* Method Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Method</h2>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Free-Shape Visual Prompt Representation
                </h3>
                <p className="text-muted-foreground mb-3">
                  We propose a parametric encoding scheme that generalizes to arbitrary shapes, including
                  polygons, scribbles, and masks.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Fourier Descriptor Parameterization:</strong> For closed contours or masks, we represent the boundary as a complex-valued function and expand it into a Fourier series, obtaining noise-robust, compact representations</li>
                  <li><strong>Bézier Curve Encoding:</strong> For open-ended scribbles or trajectories, we employ Bézier curve parameterization to indicate directional intent or motion paths</li>
                  <li><strong>Unified Prompt Tokenization:</strong> We map geometric embeddings into the visual token space via a learnable projection module</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Dynamic Gating for Adaptive Prompt Importance
                </h3>
                <p className="text-muted-foreground mb-3">
                  We introduce a Dynamic Gating Mechanism that adaptively weighs the importance of each visual
                  prompt based on the input context, solving the "performance inversion" problem.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Adaptive Filtering:</strong> Compute input-dependent gating coefficients to suppress noisy or irrelevant prompts while preserving informative ones</li>
                  <li><strong>Sparse Activation:</strong> Enforce a Top-K routing strategy, keeping only the K prompts with the highest gating scores</li>
                  <li><strong>Theoretical Guarantee:</strong> Explicitly down-weighting ambiguous box regions in favor of precise point or mask features resolves performance inversion</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Multilingual Cultural Bias Mitigation
                </h3>
                <p className="text-muted-foreground mb-3">
                  We construct Chinese-MDVP, a large-scale culturally aligned dataset, and introduce comprehensive
                  mitigation strategies.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Automated Data Construction:</strong> Leverage SAM and BLIP-2 to extract object masks and generate Chinese textual descriptions from 200,000 images</li>
                  <li><strong>Culturally Aware Prompts:</strong> Inject cultural priors to enhance recall of culturally specific entities (12% improvement on cultural entities)</li>
                  <li><strong>Cross-Lingual Alignment:</strong> Propose cross-lingual alignment loss for zero-shot transfer from English to Chinese</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Hyper-Graph Multi-Prompt Reasoning
                </h3>
                <p className="text-muted-foreground mb-3">
                  We model visual prompts as nodes in a hyper-graph, capturing high-order semantic relationships.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>Hyper-Graph Construction:</strong> Hyperedges connect subsets of prompts to capture complex spatial and semantic dependencies</li>
                  <li><strong>Order-Sensitive Reasoning:</strong> Encode temporal order for sequential actions or causality tasks</li>
                  <li><strong>Explainable Chain:</strong> Generate intermediate reasoning path: Prompt → Subgraph → Answer</li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <h3 className="mb-3 text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Self-Supervised Pre-training
                </h3>
                <p className="text-muted-foreground mb-3">
                  We introduce a self-supervised pre-training framework that learns robust visual prompt
                  representations from unlabeled images.
                </p>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li><strong>MAE-style Reconstruction:</strong> Randomly mask 50% of visual prompt tokens and task the model to reconstruct geometric attributes</li>
                  <li><strong>Prompt Contrastive Learning:</strong> Apply data augmentation to learn robust representations</li>
                  <li><strong>No Detection Labels:</strong> Eliminate need for expensive detection or segmentation supervision</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Experimental Results</h2>

            <div className="mb-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Main Results on MDVP-Bench</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <p className="mb-2 text-sm font-medium text-foreground/70">Referral Accuracy</p>
                  <p className="text-3xl font-bold text-primary">+4.7%</p>
                  <p className="text-xs text-muted-foreground mt-1">vs. bounding-box baseline</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <p className="mb-2 text-sm font-medium text-foreground/70">Reasoning Accuracy</p>
                  <p className="text-3xl font-bold text-primary">+5.6%</p>
                  <p className="text-xs text-muted-foreground mt-1">vs. bounding-box baseline</p>
                </div>
                <div className="rounded-lg bg-primary/5 p-4 text-center">
                  <p className="mb-2 text-sm font-medium text-foreground/70">Zero-shot Chinese OCR</p>
                  <p className="text-3xl font-bold text-primary">+24.7%</p>
                  <p className="text-xs text-muted-foreground mt-1">vs. zero-shot baseline</p>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Zero-shot Performance on Chinese-MDVP</h3>
              <div className="mb-4 grid gap-3 sm:grid-cols-5">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">Festival Rec.</p>
                  <p className="text-xl font-semibold">+43.3%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">Idiom Underst.</p>
                  <p className="text-xl font-semibold">+43.7%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">Trad. Obj.</p>
                  <p className="text-xl font-semibold">+35.4%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">Chinese OCR</p>
                  <p className="text-xl font-semibold">+24.7%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">Complex Rel.</p>
                  <p className="text-xl font-semibold">+33.0%</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Average improvement: +36.0%</p>
            </div>

            <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h3 className="mb-4 text-lg font-semibold">Multi-Hop Reasoning Performance</h3>
              <div className="mb-4 grid gap-3 sm:grid-cols-4">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">1-hop (Direct)</p>
                  <p className="text-xl font-semibold">+1.0%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">2-hop (Intermed.)</p>
                  <p className="text-xl font-semibold">+9.9%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">3-hop (Complex)</p>
                  <p className="text-xl font-semibold">+30.6%</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="mb-1 text-xs text-muted-foreground">4-hop (Deep)</p>
                  <p className="text-xl font-semibold">+48.1%</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Performance gains increase with reasoning complexity, demonstrating the effectiveness of our
                hyper-graph encoder
              </p>
            </div>
          </section>

          {/* Citation */}
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Citation</h2>
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
          </section>

          {/* BibTeX */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">BibTeX</h2>
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
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 ADNU. NeurIPS 2026
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="#" className="transition-colors hover:text-foreground">
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
