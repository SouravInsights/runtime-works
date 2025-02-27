"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-blue-500/30"
    >
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#030303]">
          {/* Main grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff1a 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff1a 1px, transparent 1px),
                linear-gradient(to right, #ffffff08 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff08 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px, 80px 80px, 16px 16px, 16px 16px",
            }}
          />
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
          {/* Radial gradient for depth */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 20%, rgba(3, 3, 3, 0) 0%, #030303 100%)",
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative pt-24 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
