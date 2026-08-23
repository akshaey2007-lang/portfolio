import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3001'),
  title: 'Akshaey Keerthi SN — Full-Stack Web Developer',
  description: 'Projects, skills and resume of Full-Stack Web Developer Akshaey Keerthi SN.',
  openGraph: {
    title: 'Akshaey Keerthi SN — Full-Stack Web Developer',
    description: 'Projects, skills and resume.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Akshaey Keerthi SN — Full-Stack Web Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshaey Keerthi SN — Full-Stack Web Developer',
    description: 'Projects, skills and resume.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
