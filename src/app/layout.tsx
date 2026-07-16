import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-orbitron",
});

const siteUrl = "https://axelsoler.dev";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await cookies()).get("locale")?.value === "es" ? "es" : "en";
  const isSpanish = locale === "es";
  const title = isSpanish
    ? "Axel Soler | Desarrollador Full Stack"
    : "Axel Soler | Full Stack Developer";
  const description = isSpanish
    ? "Portfolio de Axel Soler, desarrollador Full Stack y System Operator especializado en React, Next.js, Node.js y automatización entre aplicaciones."
    : "Portfolio of Axel Soler, a Full Stack Developer and System Operator specializing in React, Next.js, Node.js, and app automation.";

  return {
    metadataBase: new URL(siteUrl),
    applicationName: "Axel Soler Portfolio",
    title: {
      default: title,
      template: "%s | Axel Soler",
    },
    description,
    keywords: [
      "Axel Soler",
      "Full Stack Developer",
      "System Operator",
      "Software Developer",
      "App Automation",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
    ],
    authors: [{ name: "Axel Soler", url: siteUrl }],
    creator: "Axel Soler",
    publisher: "Axel Soler",
    category: "technology",
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      title: "Axel Soler",
      statusBarStyle: "black-translucent",
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title,
      description,
      siteName: "Axel Soler Portfolio",
      locale: isSpanish ? "es_AR" : "en_US",
      alternateLocale: isSpanish ? ["en_US"] : ["es_AR"],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@AxelSoler18",
      title,
      description,
    },
  };
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e2e8f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await cookies()).get("locale")?.value === "es" ? "es" : "en";

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="scroll-smooth overflow-x-auto"
    >
      <body
        className={`${inter.className} ${orbitron.variable} antialiased text-black dark:text-white bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-md dark:bg-gradient-to-r dark:from-[#0a0a0a] dark:via-[#004aad] dark:to-[#0a0a0a] transition-colors duration-500 ease-in-out`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
