import { db } from "./db";
import { 
  fallbackServices, 
  fallbackPortfolio, 
  fallbackBlogs, 
  fallbackTestimonials, 
  fallbackCareers,
  ServiceItem,
  PortfolioItem,
  BlogItem,
  TestimonialItem,
  CareerItem
} from "./cmsData";

export async function getSiteSettings(): Promise<Record<string, string>> {
  try {
    const settings = await db.siteSetting.findMany();
    if (!settings || settings.length === 0) {
      return {
        "homepage.hero.title": "Turn Repetitive Business Operations into Intelligent AI Workflows.",
        "homepage.hero.subtitle": "VP VEYORA helps software agencies and growing businesses automate manual processes with AI agents, intelligent workflows, and custom system integrations. From initial discovery to deployment and ongoing support, we build practical automation solutions that save time and simplify operations.",
        "homepage.about.text": "VP Veyora Private Limited is an India-based technology company delivering custom AI automation, intelligent agents, and workflow systems for international agencies and growing enterprises across the UK, USA, UAE, Singapore, Australia, and Europe."
      };
    }
    return settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {} as Record<string, string>);
  } catch (e) {
    console.warn("DB site settings fetch failed, using fallback:", e);
    return {
      "homepage.hero.title": "Turn Repetitive Business Operations into Intelligent AI Workflows.",
      "homepage.hero.subtitle": "VP VEYORA helps software agencies and growing businesses automate manual processes with AI agents, intelligent workflows, and custom system integrations. From initial discovery to deployment and ongoing support, we build practical automation solutions that save time and simplify operations.",
      "homepage.about.text": "VP Veyora Private Limited is an India-based technology company delivering custom AI automation, intelligent agents, and workflow systems for international agencies and growing enterprises across the UK, USA, UAE, Singapore, Australia, and Europe."
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
