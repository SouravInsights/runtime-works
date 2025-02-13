"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DriftVisual, WorkshopVisual } from "../components/visuals";
import Text from "../components/Text";
import Heading from "../components/Heading";
import Prose from "../components/Prose";

interface Props {
  children: ReactNode;
  className?: string;
}

const RetroTerminal: React.FC<Props> = ({ children, className = "" }) => (
  <div
    className={`bg-black/50 backdrop-blur p-8 rounded-lg border border-blue-900/30 ${className}`}
  >
    <div className="flex items-center mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    {children}
  </div>
);

const Quote: React.FC<Props> = ({ children }) => (
  <motion.blockquote
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-xl md:text-2xl border-l-4 border-blue-500 pl-6 my-8 font-light italic text-gray-300"
  >
    {children}
  </motion.blockquote>
);

const Highlight: React.FC<Props> = ({ children }) => (
  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
    {children}
  </span>
);

const Section: React.FC<Props> = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);

const ManifestoPage = () => {
  const containerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Grid Background */}

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

      {/* 8 bit pattern */}
      {/* <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#030303]">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h8v8H0zm8 8h8v8H8zm8-8h8v8h-8zm8 8h8v8h-8zM0 16h8v8H0zm8 8h8v8H8zm8-8h8v8h-8zm8 8h8v8h-8z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
              backgroundSize: "32px 32px",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto relative z-10 p-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-2xl md:text-3xl text-gray-400 mb-6 font-mono">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="text-green-500">$</span> ./init
                </motion.span>
              </h1>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Terminal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <RetroTerminal>
                  <div className="font-mono space-y-4">
                    <div className="text-gray-400">
                      <span className="text-green-500">$</span> whoweare
                    </div>
                    <div className="text-blue-400">
                      <p>
                        We're craftspeople who believe in elegant solutions, not
                        quick fixes. Building software like it's meant to last.
                      </p>
                    </div>
                    <div className="text-gray-400 mt-6">
                      <span className="text-green-500">$</span> ps aux | grep
                      patterns
                    </div>
                    <div className="text-blue-400">
                      deep-work RUNNING craft RUNNING meetings KILLED sprints
                      STOPPED
                    </div>
                  </div>
                </RetroTerminal>
              </motion.div>

              {/* Right Side - Main Message */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  runtime.works
                </h2>
                <p className="text-xl md:text-2xl text-gray-300">
                  This isn't <Highlight>another dev agency</Highlight>{" "}
                  manifesto. This is a story about bringing back the{" "}
                  <Highlight>craft</Highlight> of software.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => {
                      const sparkSection =
                        document.getElementById("spark-section");
                      sparkSection?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors"
                  >
                    Read our story →
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </section>

      {/* The Spark Section */}
      <section id="spark-section" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <Heading level={2} className="mb-12">
                The Spark
              </Heading>

              <RetroTerminal className="mb-8">
                <div className="font-mono text-sm">
                  <div className="flex justify-between text-gray-500 mb-4">
                    <span>TURBO C++ 3.0</span>
                    <span>[ F9 to compile ]</span>
                  </div>
                  <pre className="text-blue-400 overflow-x-auto">
                    {`#include <stdio.h>
void main() {
  printf("Hello, World!");
  getch();
}`}
                  </pre>
                </div>
              </RetroTerminal>

              <Prose>
                <Text>
                  The computer lab, that ancient PC with Windows XP. The
                  worn-out keyboard where the spacebar needed an extra push. You
                  typed out your first program - something about printf and void
                  main(). Your notebook open beside you, filled with flowcharts
                  and algorithms from morning lectures. The textbook, borrowed
                  from the library, propped open to Chapter 1: Introduction to
                  Programming.
                </Text>

                <Text>
                  The syntax was confusing. The semicolons were annoying. The
                  compiler errors were cryptic. But none of that mattered{" "}
                  <Highlight>when you pressed F9.</Highlight>
                </Text>

                <Quote>Your code ran.</Quote>

                <Text>
                  Not in the textbook diagrams. Not on the whiteboard
                  flowcharts. Not in the countless practice questions you solved
                  on paper. It ran here, on this machine, in this world.{" "}
                  <Highlight>You made a computer do something.</Highlight>
                </Text>

                <Quote>That's runtime.</Quote>

                <Text>
                  Maybe yours wasn't Turbo C++. Maybe it was BlueJ, fighting
                  with Java classes in a cramped cyber cafe. Python in IDLE,
                  discovered through late-night YouTube tutorials. HTML in
                  Notepad, building your first website by copying and modifying
                  code from templates. Visual Basic in computer class, making
                  forms and buttons come alive.
                </Text>

                <Text>
                  The tool doesn't matter. What matters is that moment – when
                  you first bridged the gap between writing code and making
                  something real. When you realized that these machines weren't
                  just for playing Counter-Strike or checking Orkut. They were
                  portals where <Highlight>logic became reality.</Highlight>
                </Text>

                <Text>
                  We built operating systems in that gap. Databases. Browsers.
                  Games. Tools that changed how humans work, create, and think.
                  We didn't just write code – we crafted systems that lived,
                  breathed, and ran.
                </Text>
              </Prose>
            </Section>
          </div>
        </div>
      </section>

      {/* The Drift Section */}
      <section className="relative py-24 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <Heading level={2} className="mb-12">
                The Drift
              </Heading>

              <Prose>
                <Text>
                  Today, we have more computing power in our pockets than those
                  early mainframes. Our IDEs are intelligent. Our APIs are
                  robust. Our frameworks are battle-tested. Our clouds are
                  infinite.
                </Text>

                <Quote>We should be building incredible things.</Quote>

                <Text className="mt-8 mb-8">
                  But here's what our day actually looks like:
                </Text>
              </Prose>

              <DriftVisual />

              <Prose className="mt-12">
                <Text>
                  We're drowning in JIRA tickets. Racing through two-week
                  sprints. Building micro-features for micro-services. Updating
                  Confluence pages. Resolving merge conflicts. Debating story
                  points.
                </Text>

                <div className="my-8 space-y-4">
                  <Text>
                    We've traded systems thinking for feature shipping.
                  </Text>
                  <Text>Deep work for daily standups.</Text>
                  <Text>Craftsmanship for velocity metrics.</Text>
                  <Text>Runtime for runtime errors.</Text>
                </div>

                <Text>
                  The modern dev shop{" "}
                  <Highlight>has become a factory</Highlight>. Kanban boards are
                  assembly lines. Code reviews are quality control. Sprints are
                  production quotas. Developers are resources. Everything is a
                  ticket, a metric, a deliverable.
                </Text>

                <Text>
                  Look at your terminal. When was the last time you wrote
                  something that made you lean back and think:{" "}
                  <Highlight>"This is why I code."</Highlight> When did we stop
                  being craftspeople who build systems and start being
                  ticket-closers who ship features?
                </Text>
              </Prose>
            </Section>
          </div>
        </div>
      </section>

      {/* The Workshop Section */}
      <section className="relative py-24 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <Heading level={2} className="mb-12">
                The Workshop
              </Heading>
              <WorkshopVisual />

              <Prose>
                <Quote>runtime.works isn't another dev agency.</Quote>

                <Text>
                  We're not here to disrupt the industry. We're not here to move
                  fast and break things. We're not here to revolutionize
                  software development.
                </Text>

                <Quote>
                  We're here to{" "}
                  <Highlight>build products that matter.</Highlight>
                </Quote>

                <Text>
                  This is a workshop, not a factory. A place where code isn't
                  measured by story points, but by its impact at runtime. Where
                  we take the time to understand systems before we build them.
                  Where we care about what happens when theory meets reality.
                </Text>

                <Heading level={3} className="mt-12 mb-6">
                  What does this mean in practice?
                </Heading>

                <ul className="space-y-4">
                  <li>
                    <Text>
                      We take on projects where the hard part isn't the code –
                      it's <Highlight>understanding the system.</Highlight>
                    </Text>
                  </li>
                  <li>
                    <Text>
                      We work with clients who value{" "}
                      <Highlight>thoughtful architecture</Highlight>
                      over quick fixes.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      We spend time in the terminal, not in endless meetings.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      We optimize for understanding, not for velocity.
                    </Text>
                  </li>
                  <li>
                    <Text>
                      We ship features when they're ready, not when the sprint
                      ends.
                    </Text>
                  </li>
                </ul>

                <Text className="mt-12">
                  We're a small team of builders who still believe in the craft
                  of software. People who get excited about elegant solutions.
                  Who see <Highlight>coding as a creative act.</Highlight> Who
                  care about what happens at runtime.
                </Text>
              </Prose>
            </Section>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <div className="space-y-12">
                <Prose>
                  <Text>If you've read this far, you might be one of us.</Text>
                  <Text>
                    We're not promising to change the world. We're just creating
                    a space{" "}
                    <Highlight>
                      where builders can do their best work.
                    </Highlight>
                  </Text>
                  <Quote>That's runtime.works.</Quote>
                </Prose>

                <RetroTerminal className="max-w-2xl mx-auto">
                  <div className="font-mono space-y-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span className="text-green-500">$</span>
                      <span className="typing-effect">cat README.md</span>
                    </div>
                    <div className="text-blue-400 space-y-2">
                      <Text>
                        We're a small team that cares about{" "}
                        <Highlight>building good software.</Highlight>
                      </Text>
                      <Text>
                        No buzzwords. No over-engineering. Just solid work.
                      </Text>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400 mt-6">
                      <span className="text-green-500">$</span>
                      <span className="typing-effect">cat contact.txt</span>
                    </div>
                    <div className="bg-blue-500/10 p-4 rounded border border-blue-500/20">
                      <Text className="text-lg mb-4">
                        Need help building something? Let's talk.
                      </Text>
                      <a
                        href="mailto:init@runtime.works"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        init@runtime.works
                      </a>
                    </div>
                  </div>
                </RetroTerminal>
              </div>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManifestoPage;
