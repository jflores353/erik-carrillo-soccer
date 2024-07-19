import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import MainMenu from "@/components/main-menu";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "512 Next Level Training",
  description: "Ready to gain skill, speed, and confidence?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-white ${inter.className}`}>
        <div className="px-12 py-8">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainMenu />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
