import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/site";
import "./globals.css";

const description =
  "Wang Jiawei is a NUS Computer Engineering student building practical systems across embedded hardware, robotics, AI, FPGA design, and workflow automation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${profile.name} | Computer Engineering Portfolio`,
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
    title: `${profile.name} | Computer Engineering Portfolio`,
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
