import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deck Defense | Provo Townhome Owners",
  description:
    "Mobilize Independence Avenue owners against retroactive deck assessments. Stay informed, know the law, and organize for fair HOA action.",
  openGraph: {
    title: "Deck Defense | Provo Townhome Owners",
    description:
      "Mobilize Independence Avenue owners against retroactive deck assessments. Stay informed, know the law, and organize for fair HOA action.",
    url: "https://deck-defense.local",
    siteName: "Deck Defense Alliance",
    images: [
      {
        url: "https://dummyimage.com/1200x630/f8fafc/047857&text=Deck+Defense+Alliance",
        width: 1200,
        height: 630,
        alt: "Deck Defense Alliance awareness banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://deck-defense.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-transparent text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
