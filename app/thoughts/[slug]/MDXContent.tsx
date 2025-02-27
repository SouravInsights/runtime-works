"use client";

import { MDXRemote } from "next-mdx-remote/rsc";

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  return <MDXRemote source={content} />;
}
