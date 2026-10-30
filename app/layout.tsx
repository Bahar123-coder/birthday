import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  ),
  title: 'Bijaya’s 27th Birthday | Leave a Wish & Share the Love',
  description:
    'Celebrate Bijaya’s 27th birthday! Leave a heartfelt wish, share a favourite memory, and add your message to a birthday wall filled with love.',
  openGraph: {
    title: 'Bijaya’s 27th Birthday | Leave a Wish & Share the Love',
    description:
      'Celebrate Bijaya’s 27th birthday! Leave a heartfelt wish, share a favourite memory, and add your message to a birthday wall filled with love.',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 409,
        alt: 'Bijaya’s 27th Birthday',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bijaya’s 27th Birthday | Leave a Wish & Share the Love',
    description:
      'Celebrate Bijaya’s 27th birthday! Leave a heartfelt wish, share a favourite memory, and add your message to a birthday wall filled with love.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

