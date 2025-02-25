/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Clock, GitBranch, Terminal, DollarSign } from "lucide-react";
import Link from "next/link";

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
      {/* Background Abstract Blobs */}
      <div className="fixed inset-0 bg-[#040407]">
        <motion.div
          className="absolute inset-0 opacity-[0.1]"
          style={{ y: backgroundY }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cg fill='%235b8bf7' fill-opacity='0.1'%3E%3Ccircle cx='400' cy='400' r='600'/%3E%3Ccircle cx='400' cy='400' r='500'/%3E%3Ccircle cx='400' cy='400' r='400'/%3E%3Ccircle cx='400' cy='400' r='300'/%3E%3Ccircle cx='400' cy='400' r='200'/%3E%3Ccircle cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "cover",
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
                <h1 className="font-mono text-2xl md:text-6xl font-medium">
                  <span className="text-transparent bg-clip-text bg-green-400">
                    runtime works
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
                  Building software that matters.
                </p>

                {/* Manifesto button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Link
                    href="/manifesto"
                    className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 transition-colors group"
                  >
                    <span className="font-heading text-sm">Read our story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-black/40 backdrop-blur-sm rounded-lg border border-white/[0.08] p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-6">
                  Our Process
                </h3>
                <div className="space-y-6 md:space-y-8">
                  {/* Step 1 */}
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-mono text-lg font-semibold">
                        01
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Discovery
                      </h4>
                      <p className="text-gray-400 text-sm">
                        We dive deep into your business goals, challenges, and
                        user needs to craft a tailored solution.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 font-mono text-lg font-semibold">
                        02
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Design & Prototyping
                      </h4>
                      <p className="text-gray-400 text-sm">
                        We create intuitive designs and interactive prototypes
                        to ensure the solution aligns with your vision.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 font-mono text-lg font-semibold">
                        03
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Development
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Using cutting-edge technologies, we build scalable and
                        maintainable systems.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-mono text-lg font-semibold">
                        04
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-100">
                        Launch & Iterate
                      </h4>
                      <p className="text-gray-400 text-sm">
                        We deploy your product and continuously refine it based
                        on real-world feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Our in-house projects
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

      <WhyWorkWithUs />

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
              <h2 className="font-mono text-xl md:text-4xl font-bold">
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

const RateInput = ({
  value,
  onChange,
  color = "blue",
}: {
  value: number;
  onChange: (value: number) => void;
  color?: string;
}) => (
  <div className="relative group">
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className={`w-24 bg-${color}-500/10 border border-${color}-500/20 rounded 
                 px-2 py-1 text-${color}-400 focus:outline-none focus:border-${color}-500/40`}
    />
    <span className="text-sm text-gray-500 ml-2">/hr</span>
  </div>
);

const WhyWorkWithUs = () => {
  const [activeComparison, setActiveComparison] = useState<
    "traditional" | "runtime" | null
  >(null);
  const [activeView, setActiveView] = useState<"time" | "cost">("time");
  const [rates, setRates] = useState({
    designer: 30,
    frontend: 50,
    backend: 50,
  });

  // Calculate costs for a month (160 hours)
  const calculateTraditionalCost = () => {
    return (rates.designer + rates.frontend + rates.backend) * 160;
  };

  const calculateRuntimeCost = () => {
    return 60 * 160; // Our team rate
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us
            </h2>
            <p className="text-gray-400">Let's do a quick comparison...</p>
          </div>

          {/* View Toggle */}
          <div className="flex gap-4 mb-8">
            {[
              { id: "time", icon: Clock },
              { id: "cost", icon: DollarSign },
            ].map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveView(id as "time" | "cost")}
                className={`px-4 py-2 font-mono text-sm rounded-lg transition-colors flex items-center gap-2
                  ${
                    activeView === id
                      ? "bg-blue-500/20 border border-blue-500/40 text-blue-400"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
              >
                <Icon size={14} />
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Path */}
            <div
              className={`relative min-h-[440px] p-6 transition-colors duration-300 rounded-lg backdrop-blur-lg
                ${
                  activeComparison === "traditional"
                    ? "bg-white/[0.05] border border-white/[0.2]"
                    : "bg-white/[0.02] border border-white/[0.08]"
                }`}
              onMouseEnter={() => setActiveComparison("traditional")}
              onMouseLeave={() => setActiveComparison(null)}
            >
              <div className="pb-24">
                <h3 className="font-mono text-sm text-gray-400 mb-6">
                  Traditional Way
                </h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeView}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeView === "time" ? (
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-lg font-semibold text-purple-400 ">
                              1w
                            </span>
                          </div>
                          <div>
                            <div className="text-gray-300">
                              Find & Hire Team
                            </div>
                            <div className="text-sm text-gray-500">
                              3 different hiring processes
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-lg font-semibold text-blue-400">
                              2w
                            </span>
                          </div>
                          <div>
                            <div className="text-gray-300">Team Alignment</div>
                            <div className="text-sm text-gray-500">
                              Multiple meetings & setups
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-lg font-semibold text-red-400">
                              4w
                            </span>
                          </div>
                          <div>
                            <div className="text-gray-300">Start Building</div>
                            <div className="text-sm text-gray-500">
                              High coordination overhead
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono font-semibold text-purple-400">
                              $
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-300 mb-2">Designer</div>
                            <RateInput
                              value={rates.designer}
                              onChange={(value) => {
                                console.log("Parent updating:", value);
                                setRates((prev) => ({
                                  ...prev,
                                  designer: value,
                                }));
                              }}
                              color="purple"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono font-semibold text-blue-400">
                              $
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-300 mb-2">
                              Frontend Developer
                            </div>
                            <RateInput
                              value={rates.frontend}
                              onChange={(value) =>
                                setRates((prev) => ({
                                  ...prev,
                                  frontend: value,
                                }))
                              }
                              color="blue"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono font-semibold text-green-400">
                              $
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-300 mb-2">
                              Backend Developer
                            </div>
                            <RateInput
                              value={rates.backend}
                              onChange={(value) =>
                                setRates((prev) => ({
                                  ...prev,
                                  backend: value,
                                }))
                              }
                              color="green"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="absolute bottom-6 left-6 right-6 pt-8 border-t border-white/10">
                <div className="flex items-baseline justify-between">
                  <div className="text-sm text-gray-500">
                    {activeView === "time" ? "Time to Value" : "Monthly Cost"}
                  </div>
                  <div className="font-mono text-xl text-gray-300">
                    {activeView === "time"
                      ? "7 weeks"
                      : `$${calculateTraditionalCost().toLocaleString()}`}
                  </div>
                </div>
              </div>
            </div>

            {/* runtime.works Path */}
            <div
              className={`relative min-h-[500px] p-6 transition-colors duration-300 rounded-lg backdrop-blur-lg
                ${
                  activeComparison === "runtime"
                    ? "bg-blue-500/10 border border-blue-500/30"
                    : "bg-blue-500/5 border border-blue-500/20"
                }`}
              onMouseEnter={() => setActiveComparison("runtime")}
              onMouseLeave={() => setActiveComparison(null)}
            >
              <div className="pb-24">
                <h3 className="font-mono text-sm text-blue-400 mb-6">
                  runtime.works Way
                </h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeView}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeView === "time" ? (
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-lg font-semibold text-blue-400">
                              1d
                            </span>
                          </div>
                          <div>
                            <div className="text-gray-300">Quick Chat</div>
                            <div className="text-sm text-gray-500">
                              Understand your needs
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-lg font-semibold text-blue-400">
                              2d
                            </span>
                          </div>
                          <div>
                            <div className="text-gray-300">
                              Project Alignment
                            </div>
                            {/* <div className="text-sm text-gray-500">
                              All in one team
                            </div> */}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-lg font-semibold text-blue-400">
                              3d
                            </span>
                          </div>
                          <div>
                            <div className="text-gray-300">Start Building</div>
                            <div className="text-sm text-gray-500">
                              All in one team
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <span className="font-mono font-semibold text-blue-400">
                              $
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="text-gray-300 mb-2">
                              Full-Stack Team
                            </div>
                            <div className="font-mono text-blue-400">
                              $60/hr
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              Everything included
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="absolute bottom-6 left-6 right-6 pt-8 border-t border-white/10">
                <div className="flex items-baseline justify-between">
                  <div className="text-sm text-gray-500">
                    {activeView === "time" ? "Time to Value" : "Monthly Cost"}
                  </div>
                  <div className="font-mono text-xl text-blue-400">
                    {activeView === "time"
                      ? "3 days"
                      : `$${calculateRuntimeCost().toLocaleString()}`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Calculation */}
          {activeView === "cost" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <div className="text-gray-400">
                Estimated monthly savings:{" "}
                <span className="text-blue-400 font-mono">
                  $
                  {(
                    calculateTraditionalCost() - calculateRuntimeCost()
                  ).toLocaleString()}
                </span>
              </div>
            </motion.div>
          )}

          {/* "Real Reasons" section */}
          <div className="mt-24 text-center">
            <p className="text-sm text-gray-500 font-mono mb-16">
              But here's why you should really work with us...
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {["Deep Understanding", "Quality First", "Full Ownership"].map(
                (reason, i) => (
                  <div key={i} className="text-left">
                    <div className="text-blue-400 font-mono mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-gray-300 mb-2">{reason}</h3>
                    <p className="text-sm text-gray-500">
                      {i === 0 &&
                        "We take time to understand your business and users deeply."}
                      {i === 1 &&
                        "We believe in doing things right the first time."}
                      {i === 2 &&
                        "We treat your product like our own, thinking long-term."}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
