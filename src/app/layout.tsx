import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/context/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio | Júlia Lima",
  description: "Portfólio da Júlia Lima - Desenvolvedora Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Portfólio da Júlia Lima</title>
        <meta
          name="description"
          content="Confira meus projetos e habilidades como desenvolvedora front-end."
        />
        <meta property="og:title" content="Portfólio da Júlia Lima" />
        <meta
          property="og:description"
          content="Veja meus projetos e habilidades como desenvolvedora front-end."
        />
        <meta property="og:url" content="juliafclima.software" />
        <meta
          property="og:image"
          content="juliafclima.software
"
        />
        <link rel="icon" href="favicon.ico" />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
