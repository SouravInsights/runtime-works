import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className = "" }) => (
  <p className={`text-gray-300 leading-relaxed ${className}`}>{children}</p>
);

export default Text;
