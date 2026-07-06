import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI for Future Lawyers Forum",
  description:
    "A Hong Kong forum for law students and young practitioners on artificial intelligence, legal education, and early-career legal work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
