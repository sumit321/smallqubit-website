import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inter — primary UI font (Apple-level neutrality and precision)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// JetBrains Mono — for technical labels, code blocks, metadata
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Small Qubit Labs",
  description:
    "A laboratory for ideas at the intersection of quantum computing, AI, and precision engineering.",
  openGraph: {
    title: "Small Qubit Labs",
    description:
      "A laboratory for ideas at the intersection of quantum computing, AI, and precision engineering.",
    url: "https://www.smallqubit.com",
    siteName: "Small Qubit Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9f9fb] text-[#1a1c1d]">
        {children}
      </body>
    </html>
  );
}
