import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IThundxr",
  description: "IThundxr's Projects",
  manifest: "/metadata/site.webmanifest",
  icons: {
    icon: [
      { url: "/metadata/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/metadata/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/metadata/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} bg-foreground text-primary`}
      >
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
