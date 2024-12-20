import type { Metadata } from "next";
import "./globals.css";
import { Onest } from "next/font/google";

export const metadata: Metadata = {
  title: "Portafolio Ibra",
  description: "Este es mi portafolio web",
};

const onest = Onest({ weight: ["200", "400", "600", "800"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${onest.className} antialiased max-w-6xl mx-auto`}>
        {children}
      </body>
    </html>
  );
}
