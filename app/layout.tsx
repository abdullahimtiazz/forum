import type { Metadata } from "next";
import "@fontsource-variable/funnel-sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aiforyounglawyers.com"),
  title: "AI for Young Lawyers Forum",
  description:
    "A free Hong Kong forum for law students and young practitioners on AI, legal education, and the changing practice of law.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "AI for Young Lawyers Forum",
    title: "AI for Young Lawyers Forum",
    description:
      "A free Hong Kong forum for law students and young practitioners on AI, legal education, and the changing practice of law.",
    images: [
      {
        url: "/aiyl-og.png",
        width: 1200,
        height: 630,
        alt: "AI for Young Lawyers Forum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Young Lawyers Forum",
    description:
      "A free Hong Kong forum for law students and young practitioners on AI, legal education, and the changing practice of law.",
    images: ["/aiyl-og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
