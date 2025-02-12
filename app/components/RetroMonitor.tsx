import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RetroMonitor = () => {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("");

  // Simulated boot sequence
  useEffect(() => {
    if (isOn) {
      const bootSequence = async () => {
        setText("LOADING...");
        await new Promise((r) => setTimeout(r, 1000));
        setText("MEMORY CHECK...");
        await new Promise((r) => setTimeout(r, 800));
        setText("SYSTEM READY\n\nC:\\>");
      };
      bootSequence();
    }
  }, [isOn]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-4xl"
      >
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          {/* Monitor Frame */}
          <defs>
            <linearGradient
              id="plasticGradient"
              x1="0"
              y1="0"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d4d4d4" />
              <stop offset="50%" stopColor="#a3a3a3" />
              <stop offset="100%" stopColor="#858585" />
            </linearGradient>
            {/* Screen Overlay */}
            <pattern
              id="scanlines"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="2"
              />
            </pattern>
            {/* Screen Glow */}
            <filter id="screenGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0   0 0 0 0 0.5   0 0 0 0 1  0 0 0 1 0"
              />
            </filter>
          </defs>

          {/* Monitor Body */}
          <g transform="translate(100, 50)">
            {/* Main Frame */}
            <path
              d="M0 0 L600 0 Q620 0 620 20 L620 400 Q620 420 600 420 L0 420 Q-20 420 -20 400 L-20 20 Q-20 0 0 0"
              fill="url(#plasticGradient)"
              stroke="#666"
              strokeWidth="2"
            />

            {/* Screen Bezel */}
            <rect x="40" y="40" width="540" height="340" rx="10" fill="#111" />

            {/* Screen */}
            <rect x="50" y="50" width="520" height="320" fill="#000033" />
            <rect
              x="50"
              y="50"
              width="520"
              height="320"
              fill="url(#scanlines)"
            />

            {/* Power LED */}
            <circle cx="580" cy="390" r="5" fill="#40ff40" />

            {/* Control Panel */}
            <rect x="480" y="390" width="100" height="20" rx="5" fill="#666" />
            <circle cx="500" cy="400" r="6" fill="#333" />
            <circle cx="520" cy="400" r="6" fill="#333" />
            <circle cx="540" cy="400" r="6" fill="#333" />
          </g>

          {/* Monitor Stand */}
          <path
            d="M400 470 L500 470 L450 550 L350 550 Z"
            fill="url(#plasticGradient)"
            stroke="#666"
            strokeWidth="2"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`font-mono text-blue-400 p-8 transition-opacity duration-1000 ${
              isOn ? "opacity-100" : "opacity-0"
            }`}
          >
            {text}
          </div>
        </div>

        {/* Power button interaction */}
        <button
          onClick={() => setIsOn(!isOn)}
          className="absolute bottom-4 right-4 w-4 h-4 rounded-full focus:outline-none"
          style={{
            backgroundColor: isOn ? "#40ff40" : "#333",
            boxShadow: isOn ? "0 0 10px #40ff40" : "none",
          }}
        />
      </motion.div>
    </div>
  );
};

export default RetroMonitor;
