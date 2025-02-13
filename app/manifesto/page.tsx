import { Metadata } from "next";
import ManifestoPage from "./ManifestoPage";

export const metadata: Metadata = {
  title: "Software is craft, not assembly | runtime.works",
  description:
    "Remember when you wrote code because it was magical, not because JIRA told you to? This is a story about bringing that magic back.",
  openGraph: {
    title: "Software is craft, not assembly | runtime.works",
    description:
      "Remember when you wrote code because it was magical, not because JIRA told you to? This is a story about bringing that magic back.",
    url: "https://runtime.works/manifesto",
    siteName: "runtime.works",
    images: [
      {
        url: "/og-image-manifesto.png",
        width: 1200,
        height: 630,
        alt: "runtime.works manifesto",
      },
    ],
  },
};

export default function Page() {
  return <ManifestoPage />;
}
