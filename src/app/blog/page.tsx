import React from "react";
import Link from "next/link";
import { getBlogs } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="bg-transparent text-white  min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C200] ">Our Insights</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Tech & AI Blog</h1>
          <p className="text-white/60  text-lg leading-relaxed">
            Read technical articles, system security checklists, and automation case analysis written by founder Vignesh Pandiya.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => {
            const tags = Array.isArray(blog.tags) ? blog.tags : [];
            const formattedDate = blog.publishedAt 
              ? new Date(blog.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
              : "Jul 25, 2026";

            return (
              <GlassCard key={blog.id} className="overflow-hidden p-0 border-white/08 /60 flex flex-col justify-between group hover:scale-[1.01] transition-transform">
                <div>
                  <div 
                    className="h-56 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${blog.coverImage})` }}
                  />
                  
                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 ">
                      <span className="flex items-center space-x-1.5">
                        <User className="h-3.5 w-3.5" />
                        <span>{blog.author}</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{formattedDate}</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white  group-hover:text-[#F5C200] transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-sm text-white/60  leading-relaxed">
                      {blog.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-transparent  border border-white/08  px-2 py-0.5 rounded text-[10px] text-white/60  font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-[#F5C200]  hover:text-[#F5C200]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </div>
  );
}
