import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar";
import styles from "@/app/styles.module.css";

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
      <body className={styles.styles}>
        <Navbar />
        <main className="min-h-screen max-w-screen">{children}</main>
      </body>
    </html>
  );
}
