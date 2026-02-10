# ADNU - Advanced Draw And Understand

This is the project website for "Advanced Draw And Understand: Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension" (ICML 2025).

## Project Overview

ADNU elevates multimodal large language models to genuine pixel-level comprehension by replacing conventional rectangular proxies with learnable free-shape visual prompts. The project website showcases the research paper, methodology, and experimental results.

## Key Features

- **Free-Shape Visual Prompts**: Replace bounding boxes with arbitrary sketches, polygons, and scribbles for pixel-level precision
- **Dynamic Gating Mechanism**: Adaptive filtering eliminates performance inversion in multi-target scenarios
- **Multilingual Support**: Large-scale Chinese-MDVP dataset mitigates English-centric bias
- **Hyper-Graph Reasoning**: Models high-order semantic relationships with up to 48.1% improvement on 4-hop reasoning tasks

## Paper Information

- **Title**: Advanced Draw And Understand: Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension
- **Conference**: ICML 2025 (42nd International Conference on Machine Learning)
- **Authors**: 8 authors (with equal contribution notation)
- **Venue**: Vancouver, Canada

## Main Results

### MDVP-Bench Performance
- Referral Accuracy: **+4.7%**
- Reasoning Accuracy: **+5.6%**
- Zero-shot Chinese OCR: **+24.7%**

### Cultural Tasks (Chinese-MDVP)
- Festival Recognition: **+43.3%**
- Idiom Understanding: **+43.7%**
- Traditional Object Description: **+35.4%**
- Chinese OCR: **+24.7%**
- Complex Relations: **+33.0%**
- **Average Improvement: +36.0%**

### Multi-Hop Reasoning
- 1-hop: +1.0%
- 2-hop: +9.9%
- 3-hop: **+30.6%**
- 4-hop: **+48.1%**

## Website Structure

```
/                    # Homepage - Abstract, Innovations, Results Overview
/paper              # Full paper details - Method, Experiments, Results
/paper.pdf          # PDF download
```

## Customization Guide

### Update Author Information

Edit `src/app/page.tsx` and `src/app/paper/page.tsx`, replace the placeholder author names:

```tsx
// Current placeholders
Firstname1 Lastname1*, Firstname2 Lastname2*, ...

// Replace with actual names
John Doe*, Jane Smith*, ...
```

### Update Affiliation Information

Edit `src/app/paper/page.tsx`:

```tsx
<p>1Department of XXX, University of YYY, Location, Country</p>
<p>2Company Name, Location, Country</p>
<p>3School of ZZZ, Institute of WWW, Location, Country</p>
```

### Add Links

Update these sections in `src/app/paper/page.tsx`:

1. **arXiv Link**: Update the `href` in the arXiv download button
2. **GitHub Repository**: Update the Code button link
3. **Dataset Link**: Update the Dataset button link

### Add Demo or Video

In `src/app/page.tsx`, you can add a video section:

```tsx
<section id="demo" className="container mx-auto px-4 py-16">
  <h2 className="mb-8 text-3xl font-bold">Demo</h2>
  <div className="aspect-video rounded-lg border bg-muted">
    {/* Add your video or demo here */}
  </div>
</section>
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Language**: TypeScript

## Development

### Start Development Server

```bash
coze dev
```

Visit http://localhost:5000

### Build Production Version

```bash
coze build
```

### Start Production Server

```bash
coze start
```

## Deployment

The project uses `.coze` configuration file for one-click deployment.

## Citation

```bibtex
@inproceedings{lastname2025advanced,
  title={Advanced Draw And Understand: Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension},
  author={Firstname1 Lastname1 and Firstname2 Lastname2 and Firstname3 Lastname3 and Firstname4 Lastname4 and Firstname5 Lastname5 and Firstname6 Lastname6 and Firstname7 Lastname7 and Firstname8 Lastname8},
  booktitle={Proceedings of the 42nd International Conference on Machine Learning},
  year={2025},
  organization={PMLR}
}
```

## License

© 2025 ADNU. ICML 2025
