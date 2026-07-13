import type { Metadata } from "next";
import "@fontsource-variable/funnel-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI for Young Lawyers Forum",
  description:
    "A free Hong Kong forum for law students and young practitioners on AI, legal education, and the changing practice of law.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
