import type { Metadata } from "next";
import "./globals.css";
import NavBar2 from '@/components/NavBar2'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kinesiólogo Marcelo Paiva - Inicio",
  description: "Aliviando el dolor de las personas desde hace 10 años en Las Condes",
  keywords: "kinesiología, rehabilitación, Las Condes, dolor, esguince, lumbalgia, ejercicio, deporte, salud"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NavBar2 />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
