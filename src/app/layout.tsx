import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import ClientOnly from "./client";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axel Soler Portfolio",
  description: "Axel Soler Portfolio",
  keywords: [
    "Software Developer",
    "JavaScript",
    "Full-Stack",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Axel Soler" }],
  creator: "Axel Soler",
  publisher: "Axel Soler",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://axel-soler-dev.netlify.app/",
    title: "Axel Soler | Full-Stack Developer",
    description:
      "Explore the projects and skills of Axel Soler, a passionate software developer.",
    siteName: "Axel Soler Portfolio",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/C4D03AQFiBM2qEQ07GA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654712370919?e=2147483647&v=beta&t=sYiRYzq33CxWZ-wNNHglFs4Z8BUFCJU5VCkS8buIzrk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AxelSoler18", // Reemplaza con tu usuario de Twitter
    title: "Axel Soler | Software Developer",
    description: "Portfolio of Axel Soler, a passionate software developer.",
    images: ["https://media.licdn.com/dms/image/v2/C4D03AQFiBM2qEQ07GA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654712370919?e=2147483647&v=beta&t=sYiRYzq33CxWZ-wNNHglFs4Z8BUFCJU5VCkS8buIzrk"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth overflow-x-auto"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black dark:text-white bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-md dark:bg-gradient-to-r dark:from-[#0a0a0a] dark:via-[#004aad] dark:to-[#0a0a0a] transition-colors duration-500 ease-in-out`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <NextIntlClientProvider>
            <ClientOnly>{children}</ClientOnly>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
