import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './theme/ThemeProvider';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'NZ Salary Calculator | PAYE Tax Calculator | Hourly Rate Calculator',
  description:
    'Free New Zealand salary calculator. Calculate PAYE, take-home pay, hourly rate, and tax deductions. Most accurate NZ income tax calculator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-5489372004076046",
            enable_page_level_ads: true
          });`}
        </script>
      </head>
      <body className="transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="max-w-7xl mx-auto p-4">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
