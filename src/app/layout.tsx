import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VP VEYORA | AI Automation Delivery Partner | Intelligent AI Workflows & Agents",
  description: "VP VEYORA helps software agencies and growing businesses automate manual operations with AI agents, intelligent workflows, document extraction, and custom system integrations.",
  keywords: [
    "AI Automation",
    "AI Automation Delivery Partner",
    "White-label AI Development",
    "AI Agents",
    "Business Process Automation",
    "Document AI Extraction",
    "n8n Workflow Automation",
    "CRM System Integration",
    "VP Veyora Private Limited",
    "Vignesh Pandiya"
  ],
  authors: [{ name: "VP VEYORA PRIVATE LIMITED" }],
  metadataBase: new URL("https://vpveyora.com"),
  alternates: {
    canonical: "https://vpveyora.com",
  },
  openGraph: {
    title: "VP VEYORA | AI Automation Delivery Partner",
    description: "Turn repetitive business operations into intelligent AI workflows. White-label delivery, joint implementations, and custom automation engineering.",
    url: "https://vpveyora.com",
    siteName: "VP VEYORA PRIVATE LIMITED",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VP VEYORA | AI Automation Delivery Partner",
    description: "Engineering practical AI automation solutions, intelligent agents, and system integrations for growing businesses and agencies worldwide.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VP VEYORA PRIVATE LIMITED",
    "url": "https://vpveyora.com",
    "logo": "https://vpveyora.com/logo.png",
    "description": "AI automation delivery partner building supervised workflows, autonomous agents, and system integrations for software agencies and enterprises.",
    "founder": {
      "@type": "Person",
      "name": "Vignesh Pandiya"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://linkedin.com/company/vpveyora",
      "https://github.com/007VICKY007/VP-Veyora-Website"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "150",
      "offerCount": "4"
    }
  };

  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#05050d] text-white selection:bg-[#F5C200] selection:text-[#05050d]">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
