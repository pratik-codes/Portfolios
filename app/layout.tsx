import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
                    {/* <link */}
                    {/*   rel="stylesheet" */}
                    {/*   href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;700&display=swap" */}
                    {/* /> */}
                    <link
                         rel="stylesheet"
                         href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
                    />
                    <meta name="theme-color" content="#000e00" />
               </head>
               <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
               >
                    <div className="crt-overlay"></div>
                    <div className="fixed inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none z-[5]"></div>
                    {children}
               </body>
          </html>
     );
}
