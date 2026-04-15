import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "JD SEEDS - Premium Quality Seeds for Superior Yields",
    template: "%s | JD SEEDS",
  },
  description: "JD SEEDS - Your trusted partner in agriculture. Premium quality seeds for superior yields across diverse categories.",
  keywords: ["seeds", "agriculture", "farming", "JD SEEDS", "vegetable seeds", "crop seeds"],
  authors: [{ name: "JD SEEDS" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JD SEEDS",
    title: "JD SEEDS - Premium Quality Seeds for Superior Yields",
    description: "Your trusted partner in agriculture. Premium quality seeds for superior yields.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JD SEEDS - Premium Quality Seeds",
    description: "Your trusted partner in agriculture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#1B5E20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JD SEEDS",
              url: "https://jdseeds.in",
              logo: "https://jdseeds.in/assets/brands/jd-seeds.png",
              description: "Premium quality seeds for superior yields",
            }),
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
