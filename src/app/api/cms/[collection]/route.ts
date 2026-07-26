import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

const VALID_COLLECTIONS = ["services", "portfolio", "blog", "testimonials", "careers", "pricing"];

function getModel(collection: string) {
  switch (collection) {
    case "services":
      return db.service;
    case "portfolio":
      return db.portfolio;
    case "blog":
      return db.blog;
    case "testimonials":
      return db.testimonial;
    case "careers":
      return db.career;
    case "pricing":
      return db.pricingPlan;
    default:
      return null;
  }
}

// GET - List all items in a collection
export async function GET(
  req: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  try {
    const { collection } = await params;
    
    if (!VALID_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: "Invalid collection" }, { status: 400 });
    }

    const model: any = getModel(collection);
    let items = [];

    if (collection === "pricing") {
      items = await model.findMany({ orderBy: { price: "asc" } });
    } else if (collection === "services") {
      items = await model.findMany({ orderBy: { title: "asc" } });
    } else {
      items = await model.findMany({ orderBy: { createdAt: "desc" } });
    }

    return NextResponse.json(items);
  } catch (error) {
    console.error("GET CMS collection error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST - Create new item in a collection (Admin)
export async function POST(
  req: Request,
  { params }: { params: Promise<{ collection: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { collection } = await params;
    if (!VALID_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: "Invalid collection" }, { status: 400 });
    }

    const body = await req.json();
    const model: any = getModel(collection);

    // Dynamic schema validation & parsing
    let data: any = {};
    if (collection === "services") {
      const { title, slug, category, description, icon, features, techStack } = body;
      if (!title || !slug || !category || !description || !icon || !features) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      data = {
        title,
        slug,
        category,
        description,
        icon,
        features: typeof features === "string" ? features : JSON.stringify(features),
        techStack: techStack ? (typeof techStack === "string" ? techStack : JSON.stringify(techStack)) : "[]"
      };
    } else if (collection === "portfolio") {
      const { title, slug, category, client, description, challenge, solution, results, imageUrl, websiteUrl, featured } = body;
      if (!title || !slug || !category || !client || !description || !challenge || !solution || !results || !imageUrl) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      data = {
        title,
        slug,
        category,
        client,
        description,
        challenge,
        solution,
        results: typeof results === "string" ? results : JSON.stringify(results),
        imageUrl,
        websiteUrl: websiteUrl || null,
        featured: !!featured
      };
    } else if (collection === "blog") {
      const { title, slug, content, excerpt, coverImage, author, readTime, tags, published } = body;
      if (!title || !slug || !content || !excerpt || !coverImage || !author || !readTime || !tags) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      data = {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        author,
        readTime,
        tags: typeof tags === "string" ? tags : JSON.stringify(tags),
        published: !!published,
        publishedAt: published ? new Date() : null
      };
    } else if (collection === "testimonials") {
      const { name, role, company, feedback, rating, avatarUrl, featured } = body;
      if (!name || !role || !company || !feedback) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      data = {
        name,
        role,
        company,
        feedback,
        rating: Number(rating) || 5,
        avatarUrl: avatarUrl || null,
        featured: !!featured
      };
    } else if (collection === "careers") {
      const { title, department, location, type, description, requirements, benefits, status } = body;
      if (!title || !department || !location || !type || !description || !requirements || !benefits) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      data = {
        title,
        department,
        location,
        type,
        description,
        requirements: typeof requirements === "string" ? requirements : JSON.stringify(requirements),
        benefits: typeof benefits === "string" ? benefits : JSON.stringify(benefits),
        status: status || "OPEN"
      };
    } else if (collection === "pricing") {
      const { name, price, billingPeriod, description, features, buttonText, buttonUrl, featured } = body;
      if (!name || !price || !billingPeriod || !description || !features) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      data = {
        name,
        price,
        billingPeriod,
        description,
        features: typeof features === "string" ? features : JSON.stringify(features),
        buttonText: buttonText || "Get Started",
        buttonUrl: buttonUrl || "/contact",
        featured: !!featured
      };
    }

    const item = await model.create({ data });
    return NextResponse.json({ success: true, item });
  } catch (error: any) {
    console.error("POST CMS collection error:", error);
    if (error.code === "P2002") {
      return NextResponse.json({ error: "An item with this unique key or slug already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
