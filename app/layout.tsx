import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USM | eNavigation",
  description: "USM campus eNavigation demo prototype",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-100 text-zinc-800 font-sans">
        {children}
      </body>
    </html>
  );
}
