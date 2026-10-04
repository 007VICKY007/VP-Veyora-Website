import { db } from "./db";
import { 
  fallbackServices, 
  fallbackPortfolio, 
  fallbackBlogs, 
  fallbackTestimonials, 
  fallbackCareers, 
  fallbackPricing,
  ServiceItem,
  PortfolioItem,
  BlogItem,
  TestimonialItem,
  CareerItem,
  PricingPlanItem
} from "./cmsData";

export async function getSiteSettings(): Promise<Record<string, string>> {
  try {
    const settings = await db.siteSetting.findMany();
    if (!settings || settings.length === 0) {
      return {
        "homepage.hero.title": "Engineering AI Solutions for Tomorrow",
        "homepage.hero.subtitle": "Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies.",
        "homepage.about.text": "VP Veyora Private Limited is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, automation workflows, enterprise applications, cloud infrastructure, and cybersecurity solutions."
      };
    }
    return settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);
  } catch (e) {
    console.warn("DB site settings fetch failed, using fallback:", e);
    return {
      "homepage.hero.title": "Engineering AI Solutions for Tomorrow",
      "homepage.hero.subtitle": "Helping businesses automate, innovate, and grow using Artificial Intelligence and modern software technologies.",
      "homepage.about.text": "VP Veyora Private Limited is an AI-first technology company founded by Vignesh Pandiya. We help startups, enterprises, and organizations build intelligent software, AI-powered products, automation workflows, enterprise applications, cloud infrastructure, and cybersecurity solutions."
    };
  }
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const services = await db.service.findMany();
    if (!services || services.length === 0) return fallbackServices;
    return services.map(s => ({
      ...s,
      features: typeof s.features === "string" ? JSON.parse(s.features) : s.features,
      techStack: s.techStack ? (typeof s.techStack === "string" ? JSON.parse(s.techStack) : s.techStack) : []
    }));
  } catch (e) {
    console.warn("DB services fetch failed, using fallback:", e);
    return fallbackServices;
  }
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  try {
    const portfolio = await db.portfolio.findMany();
    if (!portfolio || portfolio.length === 0) return fallbackPortfolio;
    return portfolio.map(p => ({
      ...p,
      results: typeof p.results === "string" ? JSON.parse(p.results) : p.results
    }));
  } catch (e) {
    console.warn("DB portfolio fetch failed, using fallback:", e);
    return fallbackPortfolio;
  }
}

export async function getBlogs(): Promise<BlogItem[]> {
  try {
    const blogs = await db.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" }
    });
    if (!blogs || blogs.length === 0) return fallbackBlogs;
    return blogs.map(b => ({
      ...b,
      tags: typeof b.tags === "string" ? JSON.parse(b.tags) : b.tags
    }));
  } catch (e) {
    console.warn("DB blogs fetch failed, using fallback:", e);
    return fallbackBlogs;
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const testimonials = await db.testimonial.findMany();
    if (!testimonials || testimonials.length === 0) return fallbackTestimonials;
    return testimonials;
  } catch (e) {
    console.warn("DB testimonials fetch failed, using fallback:", e);
    return fallbackTestimonials;
  }
}

export async function getCareers(): Promise<CareerItem[]> {
  try {
    const careers = await db.career.findMany();
    if (!careers || careers.length === 0) return fallbackCareers;
    return careers.map(c => ({
      ...c,
      requirements: typeof c.requirements === "string" ? JSON.parse(c.requirements) : c.requirements,
      benefits: typeof c.benefits === "string" ? JSON.parse(c.benefits) : c.benefits,
      status: c.status as "OPEN" | "CLOSED"
    }));
  } catch (e) {
    console.warn("DB careers fetch failed, using fallback:", e);
    return fallbackCareers;
  }
}

export async function getPricingPlans(): Promise<PricingPlanItem[]> {
  try {
    const plans = await db.pricingPlan.findMany();
    if (!plans || plans.length === 0) return fallbackPricing;
    return plans.map(p => ({
      ...p,
      features: typeof p.features === "string" ? JSON.parse(p.features) : p.features
    }));
  } catch (e) {
    console.warn("DB pricing plans fetch failed, using fallback:", e);
    return fallbackPricing;
  }
}
