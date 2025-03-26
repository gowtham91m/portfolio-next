import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gowtham - Full-Stack Developer Portfolio",
  description:
    "Gowtham's portfolio showcasing experience building large-scale distributed systems",
  keywords: ["Gowtham", "Gowtham Mallikarjuna", "full-stack developer", "Java", "Python", "React", "AWS", "portfolio", "web development"],
  authors: [{ name: "Gowtham Mallikarjuna" }],
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
