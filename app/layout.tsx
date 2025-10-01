import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientAnalytics from "./components/ClientAnalytics";

const geistSans = localFont({
     src: "./fonts/GeistVF.woff",
     variable: "--font-geist-sans",
     weight: "100 900",
});
const geistMono = localFont({
     src: "./fonts/GeistMonoVF.woff",
     variable: "--font-geist-mono",
     weight: "100 900",
});

export const metadata: Metadata = {
     title: "Pratik",
     description: "Pratik's personal website",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <head>
                    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                    <link
                         rel="stylesheet"
                         href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;500;600;700&display=swap"
                    />
               </head>
               <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
               >
                    <div className="crt-overlay"></div>
                    <ClientAnalytics>
                         {children}
                    </ClientAnalytics>
               </body>
          </html>
     );
}
