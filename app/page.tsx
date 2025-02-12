"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { DriftVisual, WorkshopVisual } from "./components/visuals";

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
  <blockquote className="text-2xl md:text-3xl border-l-4 border-blue-500 pl-6 my-12 font-light">
    {children}
  </blockquote>
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
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-blue-500/30"
    >
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(0deg, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <RetroTerminal className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono text-sm mb-4 md:mb-6">
                <span className="text-green-500">$</span> cat manifesto.txt
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                runtime.works
              </h1>
              <p className="text-lg sm:text-xl text-gray-400">
                This isn't another dev agency manifesto.
              </p>
            </motion.div>
          </RetroTerminal>
        </motion.div>
      </section>

      {/* The Spark Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <h2 className="text-4xl md:text-6xl font-bold mb-16">
                The Spark
              </h2>

              <RetroTerminal className="mb-12">
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

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed">
                  The computer lab, that ancient PC with Windows XP. The
                  worn-out keyboard where the spacebar needed an extra push. You
                  typed out your first program - something about printf and void
                  main(). Your notebook open beside you, filled with flowcharts
                  and algorithms from morning lectures. The textbook, borrowed
                  from the library, propped open to Chapter 1: Introduction to
                  Programming.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  The syntax was confusing. The semicolons were annoying. The
                  compiler errors were cryptic. But none of that mattered when
                  you pressed F9.
                </p>

                <Quote>Your code ran.</Quote>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Not in the textbook diagrams. Not on the whiteboard
                  flowcharts. Not in the countless practice questions you solved
                  on paper. It ran here, on this machine, in this world. You
                  made a computer do something.
                </p>

                <Quote>That's runtime.</Quote>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Maybe yours wasn't Turbo C++. Maybe it was BlueJ, fighting
                  with Java classes in a cramped cyber cafe. Python in IDLE,
                  discovered through late-night YouTube tutorials. HTML in
                  Notepad, building your first website by copying and modifying
                  code from templates. Visual Basic in computer class, making
                  forms and buttons come alive.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  The tool doesn't matter. What matters is that moment – when
                  you first bridged the gap between writing code and making
                  something real. When you realized that these machines weren't
                  just for playing Counter-Strike or checking Orkut. They were
                  portals where logic became reality.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  We built operating systems in that gap. Databases. Browsers.
                  Games. Tools that changed how humans work, create, and think.
                  We didn't just write code – we crafted systems that lived,
                  breathed, and ran.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* The Drift Section */}
      <section className="relative py-32 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <h2 className="text-4xl md:text-6xl font-bold mb-16">
                The Drift
              </h2>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Today, we have more computing power in our pockets than those
                  early mainframes. Our IDEs are intelligent. Our APIs are
                  robust. Our frameworks are battle-tested. Our clouds are
                  infinite.
                </p>

                <Quote>We should be building incredible things.</Quote>

                <p className="text-xl text-gray-300 leading-relaxed mt-8 mb-12">
                  But here's what our day actually looks like:
                </p>
              </div>

              <DriftVisual />

              <div className="prose prose-invert prose-lg max-w-none mt-16">
                <p className="text-xl text-gray-300 leading-relaxed">
                  We're drowning in JIRA tickets. Racing through two-week
                  sprints. Building micro-features for micro-services. Updating
                  Confluence pages. Resolving merge conflicts. Debating story
                  points.
                </p>

                <div className="my-12 space-y-4 text-xl text-gray-300">
                  <p>We've traded systems thinking for feature shipping.</p>
                  <p>Deep work for daily standups.</p>
                  <p>Craftsmanship for velocity metrics.</p>
                  <p>Runtime for runtime errors.</p>
                </div>

                <p className="text-xl text-gray-300 leading-relaxed">
                  The modern dev shop has become a factory. Kanban boards are
                  assembly lines. Code reviews are quality control. Sprints are
                  production quotas. Developers are resources. Everything is a
                  ticket, a metric, a deliverable.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Look at your terminal. When was the last time you wrote
                  something that made you lean back and think: "This. This is
                  why I code." When did we stop being craftspeople who build
                  systems and start being ticket-closers who ship features?
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* The Workshop Section */}
      <section className="relative py-32 bg-gradient-to-b from-blue-950/20 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <h2 className="text-4xl md:text-6xl font-bold mb-16">
                The Workshop
              </h2>
              <WorkshopVisual />

              <div className="prose prose-invert prose-lg max-w-none">
                <Quote>runtime.works isn't another dev agency.</Quote>

                <p className="text-xl text-gray-300 leading-relaxed">
                  We're not here to disrupt the industry. We're not here to move
                  fast and break things. We're not here to revolutionize
                  software development.
                </p>

                <Quote>We're here to build systems that matter.</Quote>

                <p className="text-xl text-gray-300 leading-relaxed">
                  This is a workshop, not a factory. A place where code isn't
                  measured by story points, but by its impact at runtime. Where
                  we take the time to understand systems before we build them.
                  Where we care about what happens when theory meets reality.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">
                  What does this mean in practice?
                </h3>

                <ul className="space-y-4 text-xl text-gray-300">
                  <li>
                    We take on projects where the hard part isn't the code –
                    it's understanding the system.
                  </li>
                  <li>
                    We work with clients who value thoughtful architecture over
                    quick fixes.
                  </li>
                  <li>
                    We spend time in the terminal, not in endless meetings.
                  </li>
                  <li>We optimize for understanding, not for velocity.</li>
                  <li>
                    We ship features when they're ready, not when the sprint
                    ends.
                  </li>
                </ul>

                <p className="text-xl text-gray-300 leading-relaxed mt-12">
                  We're a small team of builders who still believe in the craft
                  of software. People who get excited about elegant solutions.
                  Who see coding as a creative act. Who care about what happens
                  at runtime.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Section>
              <div className="space-y-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    If you've read this far, you might be one of us.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    We're not promising to change the world. We're just creating
                    a space where builders can do their best work.
                  </p>
                  <Quote>That's runtime.works.</Quote>
                </div>

                <RetroTerminal className="max-w-2xl mx-auto">
                  <div className="font-mono space-y-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span className="text-green-500">$</span>
                      <span className="typing-effect">cat README.md</span>
                    </div>
                    <div className="text-blue-400 space-y-2">
                      <p>
                        We're a small team that cares about building good
                        software.
                      </p>
                      <p>No buzzwords. No over-engineering. Just solid work.</p>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-400 mt-6">
                      <span className="text-green-500">$</span>
                      <span className="typing-effect">cat contact.txt</span>
                    </div>
                    <div className="bg-blue-500/10 p-4 rounded border border-blue-500/20">
                      <p className="text-lg mb-4">
                        Need help building something? Let's talk.
                      </p>
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
