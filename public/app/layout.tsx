
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Pusdekar — Full Stack Developer & AI Enthusiast",
  description:
    "A Full Stack Developer and AI-ML intern passionate about building intelligent, scalable applications. Currently interning at Nullclass and AWS EduSkills, I craft software that blends clean UI with efficient backend architecture.",
  keywords: [
    "full stack developer",
    "React",
    "Next.js",
    "MongoDB",
    "Express",
    "Node.js",
    "AI ML",
    "AWS",
    "frontend developer",
    "developer portfolio",
    "software engineer",
    "kunal pusdekar",
    "web development",
    "tech resume",
    "intern",
  ],
  openGraph: {
    title: "Kunal Pusdekar — Full Stack Developer & AI Enthusiast",
    description:
      "Full Stack Web Developer Intern at Nullclass and AWS AI-ML Virtual Intern. I build robust web apps with modern frameworks like React, Node, and Next.js, delivering polished frontend and powerful backend solutions.",
    url: "https://www.kunalpusdekar.me",
    siteName: "www.kunalpusdekar.me",
    images: [
      {
        url: "kunal_logo.png",
        width: 1200,
        height: 630,
        alt: "Kunal Pusdekar — Developer & Programmer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Pusdekar — Full Stack Developer & AI Enthusiast",
    description:
      "I craft modern software using React, Next.js, MongoDB, and AWS tools. Currently interning at Nullclass and AWS EduSkills. Let’s build something great.",
    creator: "@kunalpusdekar",
    images: ["https://i.ibb.co/FKMqc28/kunal_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",


  icons: {
    icon: "/kunal_logo.png", 
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
