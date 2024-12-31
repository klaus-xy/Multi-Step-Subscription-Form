import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntu.variable} antialiased `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
