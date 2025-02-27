import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { Terminal } from "lucide-react";

// Custom components that will be used in MDX files
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a target="_blank" rel="noopener noreferrer" {...props}>
        {props.children}
      </a>
    );
  }

  return <a {...props} />;
};

const CustomImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    caption?: string;
    width?: number;
    height?: number;
  }
) => {
  return (
    <div className="my-8 overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur">
      <Image
        alt={props.alt || "Image"}
        className="w-full"
        sizes="(max-width: 768px) 100vw, 800px"
        height={props.height || 600}
        width={props.width || 800}
        style={{ width: "100%", height: "auto" }}
        src={props.src || ""}
      />
      {props.caption && (
        <div className="px-4 py-2 text-sm text-gray-400">{props.caption}</div>
      )}
    </div>
  );
};

const CustomH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="mt-12 mb-8 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
    {children}
  </h1>
);

const CustomH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 mb-6 text-2xl md:text-3xl font-semibold text-gray-100">
    {children}
  </h2>
);

const CustomH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-8 mb-4 text-xl md:text-2xl font-medium text-gray-200">
    {children}
  </h3>
);

const CustomP = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-6 text-gray-300 leading-relaxed">{children}</p>
);

const CustomCode = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-blue-400 font-mono text-sm">
    {children}
  </code>
);

const CustomBlockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-xl font-light italic text-gray-300">
    {children}
  </blockquote>
);

const CustomPre = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => (
  <div className="my-8 overflow-hidden rounded-lg">
    <div className="flex items-center bg-black/70 px-4 py-2">
      <Terminal size={16} className="text-gray-400 mr-2" />
      <div className="text-sm text-gray-400 font-mono">Code</div>
    </div>
    <pre
      className="bg-black/50 backdrop-blur p-4 overflow-x-auto border border-white/10 font-mono text-sm text-gray-300"
      {...props}
    >
      {children}
    </pre>
  </div>
);

const CustomUl = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-6 pl-6 list-disc text-gray-300 space-y-2">{children}</ul>
);

const CustomOl = ({ children }: { children: React.ReactNode }) => (
  <ol className="mb-6 pl-6 list-decimal text-gray-300 space-y-2">{children}</ol>
);

const CustomLi = ({ children }: { children: React.ReactNode }) => (
  <li className="leading-relaxed">{children}</li>
);

const CustomHr = () => (
  <hr className="my-12 border-none h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    p: CustomP,
    a: CustomLink,
    img: CustomImage,
    blockquote: CustomBlockquote,
    pre: CustomPre,
    code: CustomCode,
    ul: CustomUl,
    ol: CustomOl,
    li: CustomLi,
    hr: CustomHr,
    // You can add any other components as needed
    ...components,
  };
}
