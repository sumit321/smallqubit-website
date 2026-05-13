import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Small Qubit Labs",
    template: "%s · Small Qubit Labs",
  },
  description:
    "Experimental Quantum. Practical AI. An independent research studio building solutions at the quantum-AI frontier.",
  openGraph: {
    title: "Small Qubit Labs",
    description:
      "Experimental Quantum. Practical AI. An independent research studio building solutions at the quantum-AI frontier.",
    url: "https://www.smallqubit.com",
    siteName: "Small Qubit Labs",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://www.smallqubit.com"),
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
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
