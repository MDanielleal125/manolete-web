import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comidas Rápidas Manolete | Las mejores hamburguesas de Piedecuesta",
  description:
    "Hamburguesas, perros calientes, picadas y más en Piedecuesta. Domicilios rápidos y comida deliciosa. ¡Pide por WhatsApp!",
  keywords: [
    "hamburguesas",
    "Piedecuesta",
    "comida rápida",
    "domicilios",
    "perros calientes",
    "picadas",
    "salchipapas",
  ],
  openGraph: {
    title: "Comidas Rápidas Manolete",
    description: "Las mejores hamburguesas de Piedecuesta. ¡Pide ya!",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
