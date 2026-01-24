import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://etomidate-api.com",
  ),
  title: {
    default: "Etomidate API | Premium Pharmaceutical Ingredient",
    template: "%s | Etomidate API",
  },
  description:
    "Premium Etomidate Active Pharmaceutical Ingredient (API) - USP Grade, GMP Certified. Short-acting intravenous hypnotic agent for anesthesia induction with excellent cardiovascular stability.",
  keywords: [
    "Etomidate",
    "Etomidate API",
    "Active Pharmaceutical Ingredient",
    "Hypnotic Agent",
    "Anesthesia",
    "Intravenous Anesthesia",
    "GMP Certified",
    "USP Grade",
    "Pharmaceutical Manufacturing",
    "R-Etomidate",
    "Amidate",
    "Cardiovascular Stability",
    "Short-acting Hypnotic",
    "Sedative Agent",
    "Medical Grade API",
  ],
  authors: [{ name: "Etomidate API", url: "https://etomidate-api.com" }],
  creator: "Etomidate API",
  publisher: "Etomidate API",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Pharmaceutical",
  openGraph: {
    title: "Etomidate API | Premium Pharmaceutical Ingredient",
    description:
      "Premium Etomidate Active Pharmaceutical Ingredient - GMP Certified, USP Grade. Short-acting intravenous hypnotic agent with excellent cardiovascular stability.",
    url: "/",
    siteName: "Etomidate API",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Etomidate API - Premium Pharmaceutical Ingredient",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etomidate API | Premium Pharmaceutical Ingredient",
    description:
      "Premium Etomidate Active Pharmaceutical Ingredient - GMP Certified, USP Grade. Short-acting intravenous hypnotic agent with excellent cardiovascular stability.",
    images: ["/twitter-image"],
    creator: "@etomidate_api",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
