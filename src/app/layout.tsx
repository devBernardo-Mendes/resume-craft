import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito, Nunito_Sans } from "next/font/google";
import { Variable } from "lucide-react";
import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "Resume Craft | CV Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(fontSans.variable, fontTitle.variable)}>
        {children}
      </body>
    </html>
  );
}
