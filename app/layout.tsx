import type { Metadata } from "next";
import {Outfit } from "next/font/google";
import "./globals.css";
import {satoshi} from "@/lib/fonts";
import Navbar from "@/components/Navbar";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Raiden Shogun",
  description: "A glimpse into eternity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${satoshi.variable} ${outfitSans.variable}`}>
      <body
          className={`antialiased`}
      >
      <Navbar/>
      {children}
      </body>
      </html>
  );
}
