import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myportfoliome.vercel.app"),
  title: "Adebanjo Stephen | AI & ML Engineer",
  description:
    "AI and machine learning engineer building end-to-end systems across RAG pipelines, document intelligence, and product-grade web applications with Next.js, TypeScript, and modern AI tooling.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "RAG",
    "Retrieval Augmented Generation",
    "LLM",
    "Document Intelligence",
    "Software Engineer",
    "Full-stack developer",
    "Next.js",
    "TypeScript",
    "AI products",
    "Adebanjo Stephen",
  ],
  authors: [{ name: "Adebanjo Stephen" }],
  creator: "Adebanjo Stephen",
  publisher: "Adebanjo Stephen",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfoliome.vercel.app",
    siteName: "Adebanjo Stephen Portfolio",
    title: "Adebanjo Stephen | AI & ML Engineer",
    description:
      "AI and machine learning engineer building end-to-end systems across RAG pipelines, document intelligence, and product-grade web applications with Next.js, TypeScript, and modern AI tooling.",
    images: [
      {
        url: "https://myportfoliome.vercel.app/img/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Adebanjo Stephen | AI & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebanjo Stephen | AI & ML Engineer",
    description:
      "AI and machine learning engineer building end-to-end systems across RAG pipelines, document intelligence, and product-grade web applications.",
    creator: "@Midecodez",
    images: ["https://myportfoliome.vercel.app/img/profile-pic.jpg"],
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
  },
  verification: {
    google: "your-google -verification-code",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Adebanjo Stephen Olumide",
  },
};

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Adebanjo Stephen",
      url: "https://myportfoliome.vercel.app",
      image: "https://myportfoliome.vercel.app/img/profile-pic.jpg",
      email: "mailto:contact@myportfoliome.vercel.app",
      sameAs: [
        "https://github.com/SteeveSticks",
        "https://x.com/Midecodez",
      ],
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "StartupFounder",
      },
    }),
  }}
/>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adebanjo Stephen",
              url: "https://myportfoliome.vercel.app",
              logo: "https://myportfoliome.vercel.app/img/profile-pic.jpg",
              description:
                "Software Engineer specializing in Frontend, Backend, and Full-stack development",
              sameAs: [
                "https://github.com/SteeveSticks",
                "https://x.com/Midecodez",
                "https://www.linkedin.com/in/stephenadebanjo/?isSelfProfile=true",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <main className="font-sans border-b border-l border-r max-w-3xl mx-auto">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
