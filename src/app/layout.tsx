import { inter, lato, roboto } from '@/fonts/fonts';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Bank Dashboard',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.className} ${lato.className}`}
      >
        {children}
      </body>
    </html>
  );
}
