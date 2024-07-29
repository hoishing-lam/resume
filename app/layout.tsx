import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `hoishing-lam's resume`,
  description: `hoishing-lam's resume`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
