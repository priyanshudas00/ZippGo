import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import "@/lib/console-filter"; // Suppress Fast Refresh console messages

export const metadata: Metadata = {
  title: "ZippGo Mobility - India's Smartest Bike Rental Platform",
  description: "Affordable bike rentals starting at ₹99. Vehicle owners earn ₹20,000/month passive income.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}