import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI for Young Lawyers forum",
  description:
    "A Hong Kong forum for young lawyers, students, and legal leaders on artificial intelligence and the future of early-career legal work.",
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
