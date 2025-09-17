import type { Metadata } from "next";
import { Geist_Mono, DM_Sans, Outfit } from "next/font/google";
import "@/styles/globals.css";

const hostGrotesk = DM_Sans({ variable: "--font-host-grotesk", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
