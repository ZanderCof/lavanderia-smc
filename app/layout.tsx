import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { BackgroundDecorations } from "@/components/layout/BackgroundDecorations";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavasecco SCM",
  description:
    "Lavanderia professionale specializzata nel lavaggio di tappeti, trapunte, piumoni, capi in pelle e biancheria. Servizio rapido, abiti da cerimonia, cura dei tessuti e qualità garantita.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${jakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className={`${jakartaSans.className} min-h-screen flex flex-col bg-[#F0F7FF] relative overflow-x-hidden`}>

        <BackgroundDecorations />

        <Navbar />

        <main className="grow relative z-10">{children}</main>

        <Footer />

      </body>
    </html>
  );
}
