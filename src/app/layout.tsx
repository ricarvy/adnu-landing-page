import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ADNU - Advanced Draw And Understand',
    template: '%s | ADNU',
  },
  description:
    'Advanced Draw And Understand: Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension. ICML 2025',
  keywords: [
    'Multimodal LLM',
    'Visual Prompting',
    'Free-Shape Prompts',
    'Pixel-Level Comprehension',
    'Dynamic Gating',
    'Hyper-Graph Reasoning',
    'Multilingual Understanding',
    'Chinese-MDVP',
    'ICML 2025',
  ],
  authors: [{ name: 'ADNU Team' }],
  generator: 'Next.js',
  openGraph: {
    title: 'ADNU - Advanced Draw And Understand',
    description:
      'Free-Shape Visual Prompting for Pixel-Level Multimodal Comprehension - ICML 2025',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
