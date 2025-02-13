/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, GitBranch, Terminal, Cpu } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  year: string;
  link: string;
}

interface CodeBlockProps {
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  year,
  link,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative bg-black/50 backdrop-blur border border-white/10 rounded-lg overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative p-6 space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        <span className="text-sm text-gray-500">{year}</span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs bg-white/5 rounded text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="pt-4">
        <a
          href={link}
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          <GitBranch size={16} className="mr-2" />
          View Project
        </a>
      </div>
    </div>
  </motion.div>
);

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => (
  <div className="font-mono text-sm bg-black/70 backdrop-blur rounded-lg border border-white/10 p-4">
    <div className="flex items-center space-x-2 mb-3 text-gray-500">
      <div className="w-3 h-3 rounded-full bg-red-500/50" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
      <div className="w-3 h-3 rounded-full bg-green-500/50" />
    </div>
    <div className="text-gray-300 space-y-2">{children}</div>
  </div>
);

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "FairForms",
      description:
        "A self-hosted form builder that doesn't cost a kidney per month. Create beautiful, conversational forms without breaking the bank.",
      tech: ["TypeScript", "Next.js", "Shadcn", "PostgreSQL", "Drizzle"],
      year: "2024",
      link: "https://www.fairforms.xyz/",
    },
    {
      title: "Vendorly",
      description:
        "A web app for fashion retailers to manage vendor meetings, organize design collections, and share designs with customizable privacy options.",
      tech: ["TypeScript", "Next.js", "Shadcn", "PostgreSQL", "Drizzle"],
      year: "2024",
      link: "https://vendorly.vercel.app/",
    },
    {
      title: "NightOwls Community",
      description:
        "🦉 A cozy corner on the internet where night owls share their code, music, and late-night building adventures",
      tech: ["TypeScript", "Next.js", "Shadcn", "PostgreSQL", "Drizzle"],
      year: "2024",
      link: "https://nightowl-community.vercel.app/",
    },
    {
      title: "create-permissionless-app",
      description:
        "CLI tool for bootstrapping Account Abstraction apps, similar to create-next-app but for Pimlico's AA infrastructure",
      tech: ["TypeScript", "Node.js", "React", "Viem"],
      year: "2024",
      link: "https://github.com/SouravInsights/permissionless.js/tree/main/packages/create-permissionless-app",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white"
    >
      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 70%)",
        }}
      />

      {/* Background Grid */}
      <div className="fixed inset-0">
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff0a 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff05 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff05 1px, transparent 1px)
              `,
              backgroundSize: "16px 16px",
            }}
          />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent"
          style={{ opacity }}
        />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    runtime.works
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
                  Building software that matters. Where code meets reality.
                </p>
              </div>

              <CodeBlock>
                <div className="opacity-50">Our approach is simple</div>
                <div className="pl-4">
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-purple-400">approach</span> = {"{"}
                </div>
                <div className="pl-8">
                  thoughtfulArchitecture:{" "}
                  <span className="text-green-400">true</span>,
                  <br />
                  deepUnderstanding:{" "}
                  <span className="text-green-400">true</span>,
                  <br />
                  quickFixes: <span className="text-red-400">false</span>
                </div>
                <div className="pl-4">{"}"}</div>
              </CodeBlock>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg border border-white/10"
              >
                <Terminal size={24} className="text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Deep Understanding
                </h3>
                <p className="text-gray-400 text-sm">
                  We take time to understand the problem space before writing a
                  single line of code.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg border border-white/10"
              >
                <Code2 size={24} className="text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Thoughtful Architecture
                </h3>
                <p className="text-gray-400 text-sm">
                  Building software that's meant to last, not just to ship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg border border-white/10"
              >
                <Cpu size={24} className="text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Impact at Runtime
                </h3>
                <p className="text-gray-400 text-sm">
                  Creating solutions that make a real difference when deployed.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recent Work
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Projects where understanding the problem was as crucial as
                writing the code.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Build Something
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project that needs thoughtful execution? Let's talk about
                making it real.
              </p>

              <div className="flex justify-center">
                <a
                  href="mailto:init@runtime.works"
                  className="inline-flex items-center px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 
                           border border-blue-500/20 rounded-lg text-blue-400 transition-colors"
                >
                  <Terminal size={18} className="mr-2" />
                  init@runtime.works
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
