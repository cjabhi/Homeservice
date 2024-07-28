import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeService",
  description: "by Abhishek Sharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag@3.0.1/dist/css/multi-select-tag.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
