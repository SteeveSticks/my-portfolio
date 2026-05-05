import { MetadataRoute } from 'next';
import { projects } from '@/_data/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myportfoliome.vercel.app';

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...projectRoutes,
  ];
}
