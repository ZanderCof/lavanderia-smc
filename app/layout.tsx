import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/mycomponents/Footer";
import Navbar from "@/components/mycomponents/Navabar";

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
    <html
      lang="it"
      className={`${jakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      {/* Aggiunto bg-slate-50 e una sfumatura azzurra soffusa */}
      <body
        className={`${jakartaSans.className} min-h-screen flex flex-col bg-[#F0F7FF] relative overflow-x-hidden`}
      >
        {/* LIVELLO DECORATIVO (Sfondo dinamico azzurro) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Bolla azzurra in alto a sinistra */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200 blur-[120px]" />

          {/* Bolla blu più intensa al centro/destra */}
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-sky-300 blur-[100px]" />

          {/* Bolla ciano in basso a sinistra */}
          <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-cyan-100 blur-[80px]" />
        </div>

        <Navbar />
        <main className="grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
