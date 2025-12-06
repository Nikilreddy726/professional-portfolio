import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nikil Portfolio",
  description: "Portfolio of Nikil Kumar Reddy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
