import React, { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

const Prose: React.FC<ProseProps> = ({ children, className = "" }) => (
  <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
    {children}
  </div>
);

export default Prose;
