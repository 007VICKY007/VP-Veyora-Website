import { MetadataRoute } from "next";
import { fallbackServices, fallbackPortfolio, fallbackBlogs } from "@/lib/cmsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vpveyora.com";
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions/ai-automation`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demos`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic portfolio routes
  const portfolioRoutes: MetadataRoute.Sitemap = fallbackPortfolio.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic blog routes
  const blogRoutes: MetadataRoute.Sitemap = fallbackBlogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes];
}
