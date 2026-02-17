import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lytra-learning.netlify.app"),
  title: "Lytra Learning",
  description: "Lytra Learning — the payments that buy freedom.",
  applicationName: "Lytra Learning",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: ["/logo.png"],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Lytra Learning",
    title: "Lytra Learning",
    description: "the payments that buy freedom.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lytra Learning",
    description: "the payments that buy freedom.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
