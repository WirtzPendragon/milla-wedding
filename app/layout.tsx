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

export const metadata: Metadata = {
  title: "Wahyu & Milla",
  description: "Wedding Invitation Wahyu & Milla",
  icons: {
    // Cukup panggil /namafile karena public adalah folder root
    icon: "/icon.ico",
  },
  openGraph: {
    title: "Wahyu & Milla Wedding",
    description: "The Wedding of Wahyu & Milla",
    url: "https://wahyu-milla-wedding.vercel.app/",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "../public/gallery/img_2.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
          content="https://wahyu-milla-wedding.vercel.app/preview.jpg"
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
          content="https://wahyu-milla-wedding.vercel.app/preview.jpg"
        />
        {children}
      </body>
    </html>
  );
}
