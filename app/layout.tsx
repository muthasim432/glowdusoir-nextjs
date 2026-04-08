import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glow du Soir — Luxury Begins at Dusk",
  description:
    "Glow Du Soir is a modern cosmetic and clothing brand showcasing elegant beauty products and stylish fashion collections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
