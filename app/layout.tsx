import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/site";
import "./globals.css";

const description =
  "Wang Jiawei — Computer Engineering student at NUS building embedded systems, robotics, AI web apps, and workflow automation tools.";

export const metadata: Metadata = {
  // TODO: replace with the production portfolio URL before launch.
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${profile.name} | NUS Computer Engineering Portfolio`,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Wang Jiawei",
    "Computer Engineering",
    "NUS",
    "Embedded Systems",
    "Robotics",
    "FPGA",
    "Workflow Automation",
    "AI Projects",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${profile.name} | NUS Computer Engineering Portfolio`,
    description,
    url: "/",
    siteName: `${profile.name} Portfolio`,
    type: "website",
    images: [
      {
        url: "/portfolio-signal.png",
        width: 1600,
        height: 900,
        alt: "Abstract portfolio preview artwork for Wang Jiawei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Computer Engineering Portfolio`,
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
