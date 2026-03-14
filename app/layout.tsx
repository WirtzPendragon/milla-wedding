import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wahyu & Milla Wedding Invitation",
  description:
    "Kami mengundang Anda untuk menghadiri pernikahan Wahyu dan Milla.",
  openGraph: {
    title: "Wahyu & Milla Wedding Invitation",
    description:
      "Kami mengundang Anda untuk menghadiri pernikahan Wahyu dan Milla.",
    url: "https://wahyu-milla-wedding.vercel.app",
    siteName: "Wahyu & Milla Wedding",
    images: [
      {
        url: "https://wahyu-milla-wedding.vercel.app/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  other: {
    "fb:app_id": "1234567890",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <meta property="og:title" content="Wahyu & Milla Wedding" />
        <meta
          property="og:description"
          content="The Wedding of Wahyu & Milla. Save the date and celebrate with us."
        />
        <meta
          property="og:image"
          content="https://wahyu-milla-wedding.vercel.app/gallery/img_12.jpg"
        />
        <meta
          property="og:url"
          content="https://wahyu-milla-wedding.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wahyu & Milla Wedding" />
        <meta
          name="twitter:description"
          content="The Wedding of Wahyu & Milla."
        />
        <meta
          name="twitter:image"
          content="https://wahyu-milla-wedding.vercel.app/gallery/img_12.jpg"
        />
        {children}
      </body>
    </html>
  );
}
