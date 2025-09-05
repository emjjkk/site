import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Keita | Leading Africa-First Edtech Platform",
  description: "...",
};

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`relative bg-background text-foreground ${inter.className}`} >
        {children}
      </body>
    </html>
  );
}
