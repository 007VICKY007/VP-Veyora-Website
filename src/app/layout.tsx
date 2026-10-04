import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VP Veyora Private Limited | Engineering AI Solutions for Tomorrow",
  description: "VP Veyora Private Limited is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, automation workflows, and cybersecurity solutions.",
  keywords: [
    "Artificial Intelligence",
    "Software Development",
    "AI Automation",
    "Business Automation",
    "Cybersecurity",
    "Cloud Computing",
    "Enterprise Solutions",
    "Vignesh Pandiya",
    "VP Veyora Private Limited"
  ],
  authors: [{ name: "Vignesh Pandiya" }],
  metadataBase: new URL("https://vpenterpriceses.com"),
  openGraph: {
    title: "VP Veyora Private Limited | Engineering AI Solutions for Tomorrow",
    description: "VP Veyora Private Limited is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, and automation workflows.",
    url: "https://vpenterpriceses.com",
    siteName: "VP Veyora Private Limited",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VP Veyora Private Limited | Engineering AI Solutions for Tomorrow",
    description: "AI-first technology company helping startups and organizations scale through intelligent software and automation.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
      <body className="min-h-full flex flex-col bg-transparent text-white selection:bg-[#F5C200] selection:text-[#05050d]">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
