import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://akshaey-full-stack-portfolio.akshaey2007.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Akshaey Keerthi SN — Full-Stack Web Developer',
  description: 'Projects, skills and resume of Full-Stack Web Developer Akshaey Keerthi SN.',
  openGraph: {
    title: 'Akshaey Keerthi SN — Full-Stack Web Developer',
    description: 'Projects, skills and resume.',
    type: 'website',
    images: [{ url: `${siteUrl}/og.png`, width: 1729, height: 910, alt: 'Akshaey Keerthi SN — Full-Stack Web Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshaey Keerthi SN — Full-Stack Web Developer',
    description: 'Projects, skills and resume.',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
