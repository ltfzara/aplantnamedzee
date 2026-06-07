import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import "./globals.css";

const abeezee = ABeeZee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "A Plant Named Zee 🌱",
  description: "Building and learning in public.",
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
