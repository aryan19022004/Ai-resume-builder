import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter, Nunito } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/common/ProgressBarProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "ResumeBuilder RB – AI Resume Builder | Professional ResumeAI",
  description:
    "ResumeBuilder RB helps you generate polished, professional resumes in minutes using AI. Try our free templates and AI-powered resume builder today!",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    title: "ResumeBuilder RB – AI Resume Builder",
    description:
      "Create professional resumes quickly with ResumeBuilder RB using AI-powered tools and free templates.",
    url: "https://ai-resume-builder-vert.vercel.app/",
    siteName: "ResumeBuilder RB",
    images: [
      {
        url: "/icons/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeBuilder RB – AI Resume Builder",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResumeBuilder RB – AI Resume Builder",
    description:
      "Create professional resumes quickly with ResumeBuilder RB using AI-powered tools and free templates.",
    images: ["/icons/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          logoImageUrl: "/icons/logo.svg",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.variable} ${nunito.variable} font-inter`}>
          <Providers>{children}</Providers>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
