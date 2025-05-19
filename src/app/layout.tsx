import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myportfoliome.vercel.app"),
  title: "Adebanjo Stephen | Software Engineer",
  description:
    "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, Full-stack development with Next.js, JavaScript, and TypeScript. As the founder of StartupFounder, a platform connecting developers and showcasing startups, I'm is dedicated to fostering innovation and community within the tech industry.",
  keywords: [
    "Self-taught",
    "Software Engineer",
    "Web Development",
    "Entrepreneur",
    "Backend",
    "Full-stack",
    "Frontend developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tech innovation",
    "Community building",
    "Adebanjo Stephen",
  ],
  authors: [{ name: "Adebanjo Stephen" }],
  creator: "Adebanjo Stephen",
  publisher: "Adebanjo Stephen",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/profile-image.jpg",
    shortcut: "/profile-image.jpg",
    apple: "/profile-image.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://myportfoliome.vercel.app",
    siteName: "Adebanjo Stephen Portfolio",
    title: "Adebanjo Stephen | Software Engineer",
    description:
      "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, Full-stack development with Next.js, JavaScript, and TypeScript. As the founder of StartupFounder, a platform connecting developers and showcasing startups, I'm is dedicated to fostering innovation and community within the tech industry.",
    images: [
      {
        url: "https://myportfoliome.vercel.app/img/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Adebanjo Stephen | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adebanjo Stephen | Software Engineer",
    description:
      "Self-taught software engineer and entrepreneur, specializing in Frontend, Backend, Full-stack development with Next.js, JavaScript, and TypeScript.",
    creator: "@AdebanjoSt63916",
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
      sameAs: [
        "https://github.com/SteeveSticks",
        "https://x.com/AdebanjoSt63916",
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
      <body className={`${geistSans.variable} antialiased`}>
        <main className="font-sans border-b border-l border-r max-w-3xl mx-auto">
          <Navbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
