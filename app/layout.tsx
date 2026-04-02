import React from "react";
import { Cal_Sans as FontHeading, Geist, Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/layout/landing/theme-provider";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const notoSerifHeading = Noto_Serif({subsets:['latin'],variable:'--font-heading'});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", notoSerifHeading.variable, "font-sans", inter.variable)}
      suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
