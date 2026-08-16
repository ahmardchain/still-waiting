import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Still Waiting — A Shelter Data Story",
  description:
    "An interactive Snowflake-powered exploration of how long dogs wait in shelters.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
