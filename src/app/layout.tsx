import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VP Enterpriceses | Engineering AI Solutions for Tomorrow",
  description: "VP Enterpriceses is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, automation workflows, and cybersecurity solutions.",
  keywords: [
    "Artificial Intelligence",
    "Software Development",
    "AI Automation",
    "Business Automation",
    "Cybersecurity",
    "Cloud Computing",
    "Enterprise Solutions",
    "Vignesh Pandiya",
    "VP Enterpriceses"
  ],
  authors: [{ name: "Vignesh Pandiya" }],
  metadataBase: new URL("https://vpenterpriceses.in"),
  openGraph: {
    title: "VP Enterpriceses | Engineering AI Solutions for Tomorrow",
    description: "VP Enterpriceses is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, and automation workflows.",
    url: "https://vpenterpriceses.in",
    siteName: "VP Enterpriceses",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VP Enterpriceses | Engineering AI Solutions for Tomorrow",
    description: "AI-first technology company helping startups and organizations scale through intelligent software and automation.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50/30 text-slate-900 selection:bg-blue-500 selection:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
