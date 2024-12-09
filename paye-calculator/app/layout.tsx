import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from './theme/ThemeProvider'
import Header from './components/Header'

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
  title: "NZ Salary Calculator | PAYE Tax Calculator | Hourly Rate Calculator",
  description: 'Free New Zealand salary calculator. Calculate PAYE, take-home pay, hourly rate, and tax deductions. Most accurate NZ income tax calculator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="max-w-7xl mx-auto p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
