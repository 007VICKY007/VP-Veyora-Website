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

// PATCH - Update item details in a collection (Admin)
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ collection: string; id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { collection, id } = await params;
    if (!VALID_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: "Invalid collection" }, { status: 400 });
    }

    const body = await req.json();
    const model: any = getModel(collection);

    // Verify item exists
    const existingItem = await model.findUnique({ where: { id } });
    if (!existingItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Dynamic schema validation & parsing
    let data: any = {};
    if (collection === "services") {
      const { title, slug, category, description, icon, features, techStack } = body;
      data = {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(category && { category }),
        ...(description && { description }),
        ...(icon && { icon }),
        ...(features && { features: typeof features === "string" ? features : JSON.stringify(features) }),
        ...(techStack && { techStack: typeof techStack === "string" ? techStack : JSON.stringify(techStack) })
      };
    } else if (collection === "portfolio") {
      const { title, slug, category, client, description, challenge, solution, results, imageUrl, websiteUrl, featured } = body;
      data = {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(category && { category }),
        ...(client && { client }),
        ...(description && { description }),
        ...(challenge && { challenge }),
        ...(solution && { solution }),
        ...(results && { results: typeof results === "string" ? results : JSON.stringify(results) }),
        ...(imageUrl && { imageUrl }),
        ...(websiteUrl !== undefined && { websiteUrl: websiteUrl || null }),
        ...(featured !== undefined && { featured: !!featured })
      };
    } else if (collection === "blog") {
      const { title, slug, content, excerpt, coverImage, author, readTime, tags, published } = body;
      data = {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(content && { content }),
        ...(excerpt && { excerpt }),
        ...(coverImage && { coverImage }),
        ...(author && { author }),
        ...(readTime && { readTime }),
        ...(tags && { tags: typeof tags === "string" ? tags : JSON.stringify(tags) }),
        ...(published !== undefined && { 
          published: !!published,
          publishedAt: published ? new Date() : null
        })
      };
    } else if (collection === "testimonials") {
      const { name, role, company, feedback, rating, avatarUrl, featured } = body;
      data = {
        ...(name && { name }),
        ...(role && { role }),
        ...(company && { company }),
        ...(feedback && { feedback }),
        ...(rating !== undefined && { rating: Number(rating) }),
        ...(avatarUrl !== undefined && { avatarUrl: avatarUrl || null }),
        ...(featured !== undefined && { featured: !!featured })
      };
    } else if (collection === "careers") {
      const { title, department, location, type, description, requirements, benefits, status } = body;
      data = {
        ...(title && { title }),
        ...(department && { department }),
        ...(location && { location }),
        ...(type && { type }),
        ...(description && { description }),
        ...(requirements && { requirements: typeof requirements === "string" ? requirements : JSON.stringify(requirements) }),
        ...(benefits && { benefits: typeof benefits === "string" ? benefits : JSON.stringify(benefits) }),
        ...(status && { status })
      };
    } else if (collection === "pricing") {
      const { name, price, billingPeriod, description, features, buttonText, buttonUrl, featured } = body;
      data = {
        ...(name && { name }),
        ...(price && { price }),
        ...(billingPeriod && { billingPeriod }),
        ...(description && { description }),
        ...(features && { features: typeof features === "string" ? features : JSON.stringify(features) }),
        ...(buttonText !== undefined && { buttonText }),
        ...(buttonUrl !== undefined && { buttonUrl }),
        ...(featured !== undefined && { featured: !!featured })
      };
    }

    const updatedItem = await model.update({
      where: { id },
      data,
    });

    return NextResponse.json({ success: true, item: updatedItem });
  } catch (error: any) {
    console.error("PATCH CMS collection item error:", error);
    if (error.code === "P2002") {
      return NextResponse.json({ error: "An item with this unique key or slug already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// DELETE - Delete item from a collection (Admin)
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ collection: string; id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { collection, id } = await params;
    if (!VALID_COLLECTIONS.includes(collection)) {
      return NextResponse.json({ error: "Invalid collection" }, { status: 400 });
    }

    const model: any = getModel(collection);

    // Verify item exists
    const existingItem = await model.findUnique({ where: { id } });
    if (!existingItem) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    await model.delete({ where: { id } });
    return NextResponse.json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.error("DELETE CMS collection item error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
