import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";
import AmbientLogo from "@/components/AmbientLogo";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EngageGuru | Calling-First WhatsApp CRM for Modern Teams",
  description: "The CRM designed for sales, real estate, and education. Calling-first, WhatsApp-native lead management that helps you close more leads.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FFPS2188JC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FFPS2188JC');
          `}
        </Script>
        {children}
        <FloatingActions />
        {/* <AmbientLogo /> */}
      </body>
    </html>
  );
}
