import type { Metadata } from "next";
import { Geist, Domine, Vollkorn, Outfit } from "next/font/google";
import "@/styles/globals.css";

const fA = Outfit({ variable: "--font-geist-sans", subsets: ["latin"], });
const fB = Domine({ variable: "--font-geist-mono", subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Keita",
  description: "...",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${fA.className} ${fB.variable} antialiased relative`} >
        {children}
      </body>
    </html>
  );
}
