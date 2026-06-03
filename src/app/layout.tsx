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
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen">
        <div className="relative overflow-hidden min-h-screen radial-bg">
          {children}
        </div>
      </body>
    </html>
  );
}

