import type { Metadata } from "next";
import "./globals.css";
import NavBar from '@/components/NavBar'

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
        <NavBar />
        <main className="container mx-auto flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
