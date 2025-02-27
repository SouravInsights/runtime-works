/* eslint-disable react/no-unescaped-entities */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ThoughtsList from "../components/ThoughtsList";

// Function to get all blog posts
async function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content", "posts");

  // Create the directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(".mdx", ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date ? new Date(data.date).toISOString() : null,
        author: data.author || "runtime.works",
        tags: data.tags || [],
        readingTime: data.readingTime || "5 min read",
      };
    })
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  return posts;
}

export default async function ThoughtsPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <div className="mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Thoughts & Ideas
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A place for deep dives into software craft, thinking about systems,
          and building things that matter.
        </p>
      </div>

      <ThoughtsList posts={posts} />

      {/* Terminal-style CTA */}
      <div className="mt-16 bg-black/50 backdrop-blur p-6 rounded-lg border border-white/10">
        <div className="mb-2 flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="font-mono space-y-4">
          <div className="text-gray-400">
            <span className="text-green-500">$</span> echo "Want to contribute?"
          </div>
          <p className="text-blue-400">
            Have a thought or idea you'd like to share? We're always looking for
            guest posts from fellow craftspeople.
          </p>
          <div className="pt-2">
            <a
              href="mailto:init@runtime.works?subject=Thoughts Contribution"
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors text-sm"
            >
              Send us your ideas →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
