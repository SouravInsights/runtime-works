/* eslint-disable react/no-unescaped-entities */
import React from "react";

import PixelMascot from "./PixelMascot";

const PixelFooter = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Main terrain section */}
      <div className="relative h-48">
        {/* Background with our existing grid pattern */}
        <div
          className="absolute inset-0 bg-[#040407]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>

        {/* Dark surface/ground */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Pixelated border top */}
          <div
            className="h-6 w-full"
            style={{
              backgroundImage: `linear-gradient(to right,
                rgba(59, 130, 246, 0.2) 25%,
                rgba(59, 130, 246, 0.1) 25%,
                rgba(59, 130, 246, 0.1) 50%,
                rgba(59, 130, 246, 0.2) 50%,
                rgba(59, 130, 246, 0.2) 75%,
                rgba(59, 130, 246, 0.1) 75%)`,
              backgroundSize: "8px 8px",
              imageRendering: "pixelated",
            }}
          />
          {/* Main ground */}
          <div className="h-4 bg-blue-950/20" />
        </div>

        {/* Moving Mascot */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <PixelMascot />
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative bg-black/40 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <p className="font-mono text-3xl text-gray-400 leading-relaxed">
              "The best way to predict the future is to invent it."
            </p>
            <p className="font-mono text-2xl text-gray-500">― Alan Kay</p>
          </div>

          {/* Bottom Bar - Simplified and more responsive */}
          <div className="mt-16 pt-8 border-t border-blue-900/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-xs text-gray-500">© 2024 runtime.works</p>
              <div className="font-mono text-xs text-gray-500 bg-blue-500/5 px-3 py-1 rounded-sm">
                <span className="hidden md:inline">printf("</span>
                hello, world
                <span className="hidden md:inline">");</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
