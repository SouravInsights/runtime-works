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
  return (
    <Tag
      className={`text-4xl md:text-5xl font-bold mb-16 text-gray-100 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
