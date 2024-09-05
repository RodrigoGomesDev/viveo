import type { Metadata } from "next";
import "../styles/globals.css";
import { inter } from "./fonts";
export const metadata: Metadata = {
  title: "Viveo - teste técnico",
  description: "Teste técnico para contratação - Rodrigo Gomes Simões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body
        className={`antialiased bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
