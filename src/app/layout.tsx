import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Linux",
    "distribution",
    "distro",
    "finder",
    "comparison",
    "Ubuntu",
    "Fedora",
    "Arch",
    "Debian",
  ],
  authors: [
    {
      name: "GlimmerAtlas Team",
    },
  ],
  creator: "GlimmerAtlas Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // GitHub Pages SPA redirect handler
              // Restores the path that was saved by 404.html
              (function() {
                var redirect = sessionStorage.redirect;
                delete sessionStorage.redirect;
                if (redirect && redirect !== location.href) {
                  history.replaceState(null, null, redirect);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
