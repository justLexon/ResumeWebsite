import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";

export const metadata: Metadata = {
  title: "Lexon's Portfolio",
  description: "Resume and projects of Lexon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen container">{children}</main>
      </body>
    </html>
  );
}
