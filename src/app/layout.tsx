import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Beauty Landing Demo | AI Studio",
  description:
    "Три премиальных demo-лендинга AI Studio для beauty-мастеров: ресницы, маникюр и косметология.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
