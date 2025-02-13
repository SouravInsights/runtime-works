import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const PixelMascot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  // winking effect (only right eye)
  useEffect(() => {
    // Wink every 5 seconds
    const winkInterval = setInterval(() => {
      setIsWinking(true);
      // Keep eye closed for 200ms
      setTimeout(() => setIsWinking(false), 200);
    }, 5000);

    return () => clearInterval(winkInterval);
  }, []);

  const walkingVariants = {
    walk: {
      x: ["-40%", "40%", "-40%"],
      y: [0, -2, 0],
      transition: {
        x: {
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      },
    },
  };

  // bouncy hover animation
  const hoverVariants = {
    idle: {
      y: 0,
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const waveVariants = {
    idle: {
      rotate: 0,
    },
    wave: {
      rotate: [0, -15, 15, -15, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 300);
  };

  return (
    <motion.div
      variants={walkingVariants}
      animate="walk"
      className="relative w-16 h-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <motion.div
        variants={hoverVariants}
        animate={isHovered ? "hover" : "idle"}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Body - CRT Monitor style */}
          <rect
            x="4"
            y="6"
            width="24"
            height="20"
            className="fill-blue-500/30"
          />
          <rect x="6" y="8" width="20" height="16" className="fill-black/80" />

          {/* Screen (slightly glowing) */}
          <rect
            x="8"
            y="10"
            width="16"
            height="12"
            className="fill-blue-400/20"
          />

          {/* Antenna */}
          <motion.g
            variants={waveVariants}
            animate={isWaving ? "wave" : "idle"}
            style={{ transformOrigin: "16px 6px" }}
          >
            <rect
              x="15"
              y="2"
              width="2"
              height="4"
              className="fill-blue-400/40"
            />
            <circle cx="16" cy="2" r="1" className="fill-blue-300/40" />
          </motion.g>

          {/* Feet */}
          <rect
            x="8"
            y="26"
            width="4"
            height="2"
            className="fill-blue-600/40"
          />
          <rect
            x="20"
            y="26"
            width="4"
            height="2"
            className="fill-blue-600/40"
          />

          {/* Face - changes on hover */}
          {isHovered ? (
            <>
              {/* Left eye stays normal */}
              <rect
                x="11"
                y="14"
                width="2"
                height="2"
                className="fill-blue-300/60"
              />
              {/* Right eye winks */}
              <rect
                x="19"
                y="14"
                width="2"
                height={isWinking ? "1" : "2"}
                className="fill-blue-300/60"
              />
              {/* Smile */}
              <path
                d="M13 18 L19 18 L19 19 L13 19 Z"
                className="fill-blue-300/60"
              />
            </>
          ) : (
            <>
              {/* Left eye stays normal */}
              <rect
                x="11"
                y="14"
                width="2"
                height="2"
                className="fill-blue-300/40"
              />
              {/* Right eye winks */}
              <rect
                x="19"
                y="14"
                width="2"
                height={isWinking ? "1" : "2"}
                className="fill-blue-300/40"
              />
              {/* Neutral expression */}
              <rect
                x="13"
                y="18"
                width="6"
                height="1"
                className="fill-blue-300/40"
              />
            </>
          )}
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default PixelMascot;
