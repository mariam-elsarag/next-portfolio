import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/_assets/styles/globals.css";
import Footer from "./_components/layout/Footer";
import Navigation from "./_components/layout/Navigation";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Mariam  El-sarag",
  description: "Modern & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  min-h-dvh flex flex-col justify-between bg-surface ${inter.variable} ${spaceGrotesk.variable}`}
      >
        <div>
          <Navigation />
          <div className="Container flex-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
