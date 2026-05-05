import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Adebanjo Stephen',
  description:
    'Explore my portfolio of completed projects built with Next.js, React, TypeScript, and modern web technologies. From AI-powered applications to collaborative tools.',
  openGraph: {
    title: 'Projects | Adebanjo Stephen',
    description:
      'Explore my portfolio of completed projects built with Next.js, React, TypeScript, and modern web technologies.',
    type: 'website',
    url: 'https://myportfoliome.vercel.app/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
