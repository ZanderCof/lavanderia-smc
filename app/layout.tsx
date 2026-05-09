import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"; // Font moderni
import "./globals.css";
import Footer from "@/components/mycomponents/Footer";
import Navbar from "@/components/mycomponents/Navabar";
// Font principale: Moderno, geometrico e pulito
const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Font mono: Più moderno di Geist Mono per i dettagli tecnici
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavanderia SCM | Pulizia Professionale",
  description: "Servizi di lavanderia e stireria moderna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${jakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="max-h-full flex flex-col font-sans "> 
        <Navbar />
        <main className="grow ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
