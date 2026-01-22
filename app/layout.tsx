import { Geist, Geist_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className="relative block w-screen h-screen overflow-hidden bg-white"
        >
            <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
              {children}
            </div>
        </main>
      </body>
    </html>
  );
}
