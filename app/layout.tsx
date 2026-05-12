import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/site";
import "./globals.css";

const description =
  "A portfolio for Wang Jiawei, a NUS Computer Engineering student focused on workflow automation, embedded systems, robotics, and AI projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${profile.name} | Personal Website`,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Personal Website`,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Personal Website`,
    description,
    url: "/",
    siteName: `${profile.name} Personal Website`,
    type: "website",
    images: [
      {
        url: "/portfolio-signal.png",
        width: 1600,
        height: 900,
        alt: "Abstract portfolio preview artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Personal Website`,
    description,
    images: ["/portfolio-signal.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
