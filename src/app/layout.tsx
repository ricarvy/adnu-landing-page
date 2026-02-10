import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Draw and Understand',
    template: '%s | Draw and Understand',
  },
  description:
    'A novel approach to visual understanding through sketch-based interaction',
  keywords: [
    'Computer Vision',
    'Deep Learning',
    'Sketch-based Interaction',
    'Visual Understanding',
    'Machine Learning',
    'Human-Computer Interaction',
  ],
  authors: [{ name: 'Draw and Understand Team' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Draw and Understand',
    description:
      'A novel approach to visual understanding through sketch-based interaction',
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
