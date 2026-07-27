import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogs } from "@/lib/dataLoaders";
import { GlassCard } from "@/components/shared/GlassCard";
import { ArrowRight, User, Calendar, Clock, Share2, Mail } from "lucide-react";
import { LinkedInIcon, TwitterIcon } from "@/components/shared/SocialIcons";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const tags = Array.isArray(blog.tags) ? blog.tags : [];
  const formattedDate = blog.publishedAt 
    ? new Date(blog.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "July 25, 2026";

  return (
    <div className="bg-transparent text-slate-900 dark:text-white min-h-screen py-20 px-4">
      <article className="max-w-4xl mx-auto space-y-10">
        
        {/* Back link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-600 dark:text-gray-400 hover:text-[#00529b] dark:text-blue-400 transition-colors"
        >
          <ArrowRight className="h-4 w-4 rotate-180" />
          <span>Back to All Blogs</span>
        </Link>

        {/* Blog Header Info */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs font-bold text-[#00529b] dark:text-blue-400 uppercase tracking-wider">#{tag}</span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {blog.title}
          </h1>

          {/* Author/Date/ReadTime Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-gray-400 border-y border-slate-200 dark:border-gray-900 py-4">
            <span className="flex items-center space-x-2">
              <span className="h-6 w-6 rounded-full bg-[#00529b]/20 text-[#00529b] dark:text-blue-400 flex items-center justify-center font-bold text-[10px]">
                VP
              </span>
              <span>{blog.author}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Calendar className="h-4 w-4 text-[#00529b] dark:text-blue-400" />
              <span>{formattedDate}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4 text-[#00529b] dark:text-blue-400" />
              <span>{blog.readTime}</span>
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div 
          className="h-80 sm:h-96 w-full rounded-2xl bg-cover bg-center border border-slate-200 dark:border-gray-900 shadow-xl"
          style={{ backgroundImage: `url(${blog.coverImage})` }}
        />

        {/* Split Section: Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pt-4">
          
          {/* Main Body Content */}
          <div className="lg:col-span-3 space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-r border-gray-950 pr-4">
            {/* Split paragraphs and render markdown elements manually/cleanly */}
            {blog.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("###")) {
                return (
                  <h3 key={index} className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-4">
                    {paragraph.replace("###", "").trim()}
                  </h3>
                );
              }
              if (paragraph.startsWith("1.") || paragraph.startsWith("-")) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-2 text-slate-600 dark:text-gray-400">
                    {paragraph.split("\n").map((li, i) => (
                      <li key={i}>{li.replace(/^[0-9]\.\s*|-\s*/, "").trim()}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard interactive={false} className="border-slate-200 dark:border-gray-900 space-y-4 p-4 text-xs sm:text-sm">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
                <Share2 className="h-4 w-4" />
                <span>Share Article</span>
              </h4>
              <div className="flex space-x-3 pt-2">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://vpenterpriceses.com/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:text-blue-400 text-slate-500 dark:text-gray-500">
                  <LinkedInIcon className="h-5 w-5" />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=https://vpenterpriceses.com/blog/${blog.slug}&text=${blog.title}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00529b] dark:text-blue-400 text-slate-500 dark:text-gray-500">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href={`mailto:?subject=${blog.title}&body=Check this article out: https://vpenterpriceses.com/blog/${blog.slug}`} className="hover:text-[#00529b] dark:text-blue-400 text-slate-500 dark:text-gray-500">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </GlassCard>

            <GlassCard className="border-[#00529b]/20 bg-blue-50/40 border border-blue-100/50 dark:bg-blue-50/40 border border-blue-100/50 space-y-3 p-4">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Join Newsletter</h4>
              <p className="text-[10px] text-slate-600 dark:text-gray-400 leading-relaxed">
                Stay updated on machine learning releases and n8n systems.
              </p>
              <Link 
                href="/contact"
                className="block text-center rounded-lg bg-[#00529b] py-2 text-xs font-bold text-white hover:bg-blue-500"
              >
                Connect With Us
              </Link>
            </GlassCard>
          </div>

        </div>

      </article>
    </div>
  );
}
