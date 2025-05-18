import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "website_filmes",
  description: "Criando um site de filmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
