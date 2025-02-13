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

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="relative bg-black/40 backdrop-blur-sm rounded-lg border border-white/[0.08] overflow-hidden">
    {/* Terminal dots */}
    <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/[0.08] flex items-center px-4 gap-2">
      <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
      <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
      <div className="w-3 h-3 rounded-full bg-[#28C840]" />
    </div>

    {/* Code content */}
    <div className="pt-12 p-6 font-mono text-sm">{children}</div>
  </div>
);

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="relative group">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Content */}
    <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-lg p-6 h-full">
      <div className="flex flex-col items-center text-center space-y-4">
        {icon}
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
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
      <div className="fixed inset-0 bg-[#040407]">
        <motion.div
          className="absolute inset-0 opacity-[0.1]"
          style={{ y: backgroundY }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #8B8B8B 1px, transparent 1px),
                linear-gradient(to bottom, #8B8B8B 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #8B8B8B 1px, transparent 1px),
                linear-gradient(to bottom, #8B8B8B 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              opacity: 0.5,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040407] via-transparent to-transparent" />
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <CodeBlock>
                  <div className="text-gray-400">Our approach is simple</div>
                  <div className="mt-4">
                    <span className="text-[#60A5FA]">const</span>{" "}
                    <span className="text-[#A78BFA]">approach</span> = {"{"}
                  </div>
                  <div className="pl-8 space-y-1">
                    <div>
                      thoughtfulArchitecture:{" "}
                      <span className="text-[#34D399]">true</span>,
                    </div>
                    <div>
                      deepUnderstanding:{" "}
                      <span className="text-[#34D399]">true</span>,
                    </div>
                    <div>
                      quickFixes: <span className="text-[#EF4444]">false</span>
                    </div>
                  </div>
                  <div>{"}"}</div>
                </CodeBlock>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Terminal size={24} className="text-[#60A5FA]" />}
                title="Deep Understanding"
                description="We take time to understand the problem space before writing a single line of code."
              />
              <FeatureCard
                icon={<Code2 size={24} className="text-[#A78BFA]" />}
                title="Thoughtful Architecture"
                description="Building software that's meant to last, not just to ship."
              />
              <FeatureCard
                icon={<Cpu size={24} className="text-[#34D399]" />}
                title="Impact at Runtime"
                description="Creating solutions that make a real difference when deployed."
              />
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
