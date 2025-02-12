import React, { JSX, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  // font sizes and weights based on heading level
  const sizes = {
    1: "text-5xl sm:text-6xl md:text-7xl",
    2: "text-4xl sm:text-5xl md:text-6xl",
    3: "text-3xl sm:text-4xl md:text-5xl",
    4: "text-2xl sm:text-3xl md:text-4xl",
    5: "text-xl sm:text-2xl md:text-3xl",
    6: "text-lg sm:text-xl md:text-2xl",
  };

  return (
    <Tag
      className={`${sizes[level]} font-bold text-gray-100 mb-8 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
