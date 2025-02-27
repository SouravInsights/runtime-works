/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Calendar, Tag } from "lucide-react";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string | null;
  author: string;
  tags: string[];
  readingTime: string;
}

interface ThoughtsListProps {
  posts: Post[];
}

export default function ThoughtsList({ posts }: ThoughtsListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-12"
    >
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="group"
          >
            <Link href={`/thoughts/${post.slug}`}>
              <div className="p-6 rounded-lg bg-black/30 backdrop-blur border border-white/10 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
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
                </div>

                <h2 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-4">{post.description}</p>

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
              </div>
            </Link>
          </motion.article>
        ))
      ) : (
        <div className="bg-black/30 backdrop-blur border border-white/10 p-8 rounded-lg text-center">
          <div className="font-mono text-green-500 mb-4">$ ls -la</div>
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-gray-400">
            We haven't published any thoughts yet. Check back soon!
          </p>
        </div>
      )}
    </motion.div>
  );
}
