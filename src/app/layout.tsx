import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Studio | Красивые сайты для мастеров красоты за 7 дней",
  description:
    "Витрина AI Studio с четырьмя премиальными demo-сайтами для beauty-мастеров: салон красоты, ресницы, маникюр и косметология.",
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
