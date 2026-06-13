import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import "./globals.css";

const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "A Plant Named Zee",
  description:
    "A messy, hopeful, unfinished garden for building communities and growing ideas.",

  openGraph: {
    title: "A Plant Named Zee",
    description:
      "A messy, hopeful, unfinished garden for building communities and growing ideas.",
    images: [
      {
        url: "/hero_3.png",
        width: 1200,
        height: 630,
        alt: "A Plant Named Zee",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={abeezee.className}>
        {children}
      </body>
    </html>
  );
}


