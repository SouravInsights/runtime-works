"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Menu, X, ScrollText, Brain } from "lucide-react";

const MENU_ITEMS = [
  { icon: Home, label: "Home" },
  { icon: ScrollText, label: "Manifesto" },
  { icon: Brain, label: "thoughts" },
];

export default function Header() {
  const [isGooeyOpen, setIsGooeyOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur bg-black/50 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl bg-clip-text text-transparent bg-green-400"
        >
          runtime.works
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/manifesto"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Manifesto
          </Link>
          <Link
            href="/thoughts"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Thoughts
          </Link>
        </nav>

        {/* Gooey Menu - Mobile Only */}
        <div className="md:hidden bottom-6 right-6">
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
                />
              </filter>
            </defs>
          </svg>
          <div
            className="relative flex flex-col items-center"
            style={{ filter: "url(#gooey-filter-menu)" }}
          >
            <AnimatePresence>
              {isGooeyOpen &&
                MENU_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.label}
                      className="absolute w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center shadow-lg"
                      initial={{ y: 0, opacity: 0 }}
                      animate={{
                        y: (index + 1) * 50, // Moves downward
                        opacity: 1,
                      }}
                      exit={{
                        y: 0,
                        opacity: 0,
                        transition: {
                          delay: (MENU_ITEMS.length - index) * 0.05,
                          duration: 0.4,
                        },
                      }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={`/${item.label.toLowerCase()}`}
                        onClick={() => setIsGooeyOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-gray-700 hover:text-black" />
                      </Link>
                    </motion.button>
                  );
                })}
            </AnimatePresence>

            {/* Gooey Menu Button */}
            <motion.button
              className="relative w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center shadow-lg"
              onClick={() => setIsGooeyOpen(!isGooeyOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isGooeyOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
