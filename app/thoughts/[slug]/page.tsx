import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for MDX content
const MDXContent = dynamic(() => import("./MDXContent"));

// Function to get a single blog post by slug
async function getBlogPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date ? new Date(data.date).toISOString() : null,
    author: data.author || "runtime.works",
    tags: data.tags || [],
    readingTime: data.readingTime || "5 min read",
    image: data.image || null,
  };
}

// Function to get all blog post slugs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content", "posts");

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mt-6">
      {/* Back link */}
      <Link
        href="/thoughts"
        className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors mb-8"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to all thoughts
      </Link>

      {/* Article header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-xl text-gray-300 mb-6">{post.description}</p>
        )}

        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-6">
          {post.date && (
            <div className="flex items-center">
              <Calendar size={14} className="mr-1" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          )}

          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime}</span>
          </div>

          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-blue-500/10 rounded text-blue-400 flex items-center"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Optional featured image */}
        {post.image && (
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>
        )}
      </header>

      {/* Terminal-style content container */}
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black/30 backdrop-blur p-8 mb-12">
        <div className="absolute top-0 left-0 right-0 h-10 bg-black/50 border-b border-white/10 flex items-center px-4">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          <div className="text-gray-500 text-sm font-mono ml-2">
            {post.slug}.mdx
          </div>
        </div>

        {/* MDX Content */}
        <div className="prose prose-invert max-w-none pt-8 text-gray-200">
          <MDXContent content={post.content} />
        </div>
      </div>

      {/* Author bio & share section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/30 backdrop-blur border border-white/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">About the author</h3>
          <p className="text-gray-400">
            {post.author === "runtime.works"
              ? "The team at runtime.works is passionate about building software that matters. We focus on craftsmanship, deep work, and thoughtful architecture."
              : `${post.author} is a guest contributor to the runtime.works blog.`}
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur border border-white/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Share this thought</h3>
          <div className="flex space-x-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                post.title
              )}&url=${encodeURIComponent(
                `https://runtime.works/thoughts/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                `https://runtime.works/thoughts/${post.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* More posts navigation */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="font-mono text-gray-400 mb-6">
          $ cat more_thoughts.txt
        </h3>
        <Link href="/thoughts">
          <div className="p-4 rounded-lg bg-black/30 backdrop-blur border border-white/10 hover:border-blue-500/30 transition-colors text-center">
            <span className="text-blue-400">View all thoughts</span>
          </div>
        </Link>
      </div>
    </article>
  );
}
