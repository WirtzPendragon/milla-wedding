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
  title: "Wahyu & Milla Wedding",
  description: "Kami mengundang Anda untuk menghadiri pernikahan Wahyu dan Milla.",
  icons: {
    icon: "/icon.ico", 
  },
  metadataBase: new URL("https://wahyu-milla-wedding.vercel.app"),
  openGraph: {
    title: "Wahyu & Milla Wedding",
    description: "Kami mengundang Anda untuk menghadiri pernikahan Wahyu dan Milla.",
    url: "https://wahyu-milla-wedding.vercel.app",
    siteName: "Wahyu & Milla Wedding",
    images: [
      {
        url: "/public/gallery/img_12.jpg", // Pakai path relatif saja, Next.js yang urus
        width: 1200,
        height: 630,
        alt: "Wahyu & Milla Wedding",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wahyu & Milla Wedding",
    description: "The Wedding of Wahyu & Milla.",
    images: ["/gallery/img_12.jpg"],
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
        
        {children}
      </body>
    </html>
  );
}
