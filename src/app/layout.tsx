import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Premium Portfolio | Full Stack Developer",
  description: "Crafting exceptional digital experiences with modern web technologies. Explore projects, technical skills, and background.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="bg-background text-foreground font-sans antialiased min-h-screen transition-colors duration-300">
        <div className="relative overflow-hidden min-h-screen radial-bg">
          {children}
        </div>
      </body>
    </html>
  );
}

