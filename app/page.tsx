/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GitBranch, Terminal } from "lucide-react";
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

// const CodeBlock = ({ children }: { children: React.ReactNode }) => (
//   <div className="relative bg-black/40 backdrop-blur-sm rounded-lg border border-white/[0.08] overflow-hidden">
//     {/* Terminal dots */}
//     <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/[0.08] flex items-center px-4 gap-2">
//       <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
//       <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
//       <div className="w-3 h-3 rounded-full bg-[#28C840]" />
//     </div>

//     {/* Code content */}
//     <div className="pt-12 p-6 font-mono text-sm">{children}</div>
//   </div>
// );

// const FeatureCard = ({
//   icon,
//   title,
//   description,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) => (
//   <div className="relative group">
//     {/* Gradient background */}
//     <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//     {/* Content */}
//     <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-lg p-6 h-full">
//       <div className="flex flex-col items-center text-center space-y-4">
//         {icon}
//         <h3 className="text-lg font-medium text-white">{title}</h3>
//         <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
//       </div>
//     </div>
//   </div>
// );

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
                <h1 className="font-pixel text-2xl md:text-4xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    runtime.works
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
              <div className="relative bg-black/40 backdrop-blur-sm rounded-lg border border-white/[0.08] p-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-6">
                  Our Process
                </h3>
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-blue-400 font-pixel">01</span>
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 font-pixel">02</span>
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 font-pixel">03</span>
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
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 font-pixel">04</span>
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
              <h2 className="font-pixel text-xl md:text-4xl font-bold">
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

const WhyWorkWithUs = () => {
  const [activeComparison, setActiveComparison] = useState<
    "traditional" | "runtime" | null
  >(null);

  const [rates, setRates] = useState({
    designer: 120,
    frontend: 150,
    backend: 160,
  });

  const HOURS = 480; // 3 months
  const RUNTIME_RATE = 350;

  const calculateTraditional = () => {
    return (rates.designer + rates.frontend + rates.backend) * HOURS;
  };

  const calculateRuntime = () => RUNTIME_RATE * HOURS;
  // const calculateSavings = () => calculateTraditional() - calculateRuntime();

  const RateInput = ({
    label,
    value,
    onChange,
    colorClass,
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    colorClass: string;
  }) => (
    <div className="grid grid-cols-[1fr,120px,100px] items-center gap-4">
      <div className={`text-sm ${colorClass}`}>{label}</div>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const newValue = e.target.value === "" ? 0 : Number(e.target.value);
            onChange(newValue);
          }}
          className={`w-full bg-white/5 border border-white/10 rounded px-6 py-1.5
                     font-mono text-white text-sm focus:outline-none focus:border-white/20`}
        />
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
          $
        </span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
          /hr
        </span>
      </div>
      <div className="text-sm text-gray-500">
        = ${(value * HOURS).toLocaleString()}
      </div>
    </div>
  );

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Us
            </h2>
            <p className="text-gray-400">Let's do a quick comparison...</p>
          </div>
          {/* Timeline Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Path */}
            <div
              className={`relative min-h-[400px] p-6 transition-colors duration-300 rounded-lg backdrop-blur-lg
      ${
        activeComparison === "traditional"
          ? "bg-white/[0.05] border border-white/[0.2]"
          : "bg-white/[0.02] border border-white/[0.08]"
      }
    `}
              onMouseEnter={() => setActiveComparison("traditional")}
              onMouseLeave={() => setActiveComparison(null)}
            >
              <div>
                <h3 className="font-pixel text-sm text-gray-400 mb-6">
                  Traditional Way
                </h3>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <span className="font-mono text-purple-400">1w</span>
                    </div>
                    <div>
                      <div className="text-gray-300">Find & Hire Team</div>
                      <div className="text-sm text-gray-500">
                        3 different hiring processes
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="font-mono text-blue-400">2w</span>
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
                      <span className="font-mono text-red-400">4w</span>
                    </div>
                    <div>
                      <div className="text-gray-300">Start Building</div>
                      <div className="text-sm text-gray-500">
                        High coordination overhead
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - positioned at bottom */}
              <div className="absolute bottom-6 left-6 right-6 pt-8 border-t border-white/10">
                <div className="flex items-baseline justify-between">
                  <div className="text-sm text-gray-500">
                    Total Time to Value
                  </div>
                  <div className="font-mono text-xl text-gray-300">7 weeks</div>
                </div>
              </div>
            </div>
            {/* runtime.works Path */}
            <div
              className={`relative min-h-[400px] p-6 transition-colors duration-300 rounded-lg backdrop-blur-lg
      ${
        activeComparison === "runtime"
          ? "bg-blue-500/10 border border-blue-500/30"
          : "bg-blue-500/5 border border-blue-500/20"
      }
    `}
              onMouseEnter={() => setActiveComparison("runtime")}
              onMouseLeave={() => setActiveComparison(null)}
            >
              <div>
                <h3 className="font-pixel text-sm text-blue-400 mb-6">
                  runtime.works Way
                </h3>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <span className="font-mono text-blue-400">1d</span>
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
                      <span className="font-mono text-blue-400">2d</span>
                    </div>
                    <div>
                      <div className="text-gray-300">Start Building</div>
                      <div className="text-sm text-gray-500">
                        All in one team
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - positioned at bottom */}
              <div className="absolute bottom-6 left-6 right-6 pt-8 border-t border-white/10">
                <div className="flex items-baseline justify-between">
                  <div className="text-sm text-gray-500">
                    Total Time to Value
                  </div>
                  <div className="font-mono text-xl text-blue-400">3 days</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 relative bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            {/* Rate Inputs */}
            <div className="space-y-4 mb-8">
              <RateInput
                label="Product Designer"
                value={rates.designer}
                onChange={(value) =>
                  setRates((prev) => ({ ...prev, designer: value }))
                }
                colorClass="text-purple-400"
              />
              <RateInput
                label="Frontend Engineer"
                value={rates.frontend}
                onChange={(value) =>
                  setRates((prev) => ({ ...prev, frontend: value }))
                }
                colorClass="text-blue-400"
              />
              <RateInput
                label="Backend Engineer"
                value={rates.backend}
                onChange={(value) =>
                  setRates((prev) => ({ ...prev, backend: value }))
                }
                colorClass="text-green-400"
              />
            </div>

            {/* Results */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div>
                <div className="text-sm text-gray-500 mb-1">Traditional</div>
                <div className="text-xl font-mono text-white">
                  ${calculateTraditional().toLocaleString()}
                </div>
              </div>

              <div className="text-center px-4">
                <div className="text-sm font-pixel text-gray-500">VS</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">runtime.works</div>
                <div className="text-xl font-mono text-white">
                  ${calculateRuntime().toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  ${RUNTIME_RATE}/hr × {HOURS}hrs
                </div>
              </div>
            </div>

            {/* Savings */}
            <div className="mt-6 text-center">
              <div className="inline-block bg-green-500/10 px-4 py-2 rounded-full">
                {/* <div className="text-sm text-green-400">You save</div>
                <div className="text-lg font-mono text-green-400">
                  ${calculateSavings().toLocaleString()}
                </div> */}

                <div className="text-md font-mono text-green-400">
                  40% <span className="text-sm">more efficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mt-24 mb-16 text-center">
            <p className="text-sm text-gray-500 font-pixel">
              But the real value goes beyond the numbers...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 font-pixel">01</span>
              </div>
              <h3 className="text-lg text-gray-300">Deep Focus</h3>
              <p className="text-gray-400">
                Your product gets our full, undivided attention - no context
                switching between multiple clients.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 font-pixel">02</span>
              </div>
              <h3 className="text-lg text-gray-300">Think First</h3>
              <p className="text-gray-400">
                We take time to understand problems deeply before jumping into
                solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 font-pixel">03</span>
              </div>
              <h3 className="text-lg text-gray-300">Built to Grow</h3>
              <p className="text-gray-400">
                We build systems that can evolve with your needs, not quick
                fixes that need constant rewrites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
