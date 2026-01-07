import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './theme/ThemeProvider';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import Footer from './components/Footer';
import BreadcrumbNavigation from './components/BreadcrumbNavigation';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'NZ Salary Calculator 2026 | PAYE Tax Calculator New Zealand | Free IRD Calculator',
  description:
    'Free New Zealand PAYE calculator 2026. Calculate take-home pay, tax, KiwiSaver & student loan. Most accurate NZ salary calculator with latest IRD tax rates 2025/2026. Calculate your net income instantly.',
  keywords: 'NZ salary calculator, PAYE calculator, New Zealand tax calculator, NZ PAYE tax calculator, take home pay calculator NZ, salary calculator New Zealand, IRD tax calculator, NZ income tax calculator, KiwiSaver calculator, student loan calculator NZ, hourly rate calculator NZ, net pay calculator, wage calculator NZ, paycheck calculator New Zealand, tax calculator 2026 NZ, IRD PAYE rates, ACC levy calculator, New Zealand payroll calculator, salary after tax NZ',
  authors: [{ name: 'NZ Salary Calculator' }],
  creator: 'NZ Salary Calculator',
  publisher: 'NZ Salary Calculator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Finance',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://nzsalarycalculator.iamjeevan.com',
    siteName: 'NZ Salary Calculator - PAYE Tax Calculator New Zealand',
    title: 'NZ Salary Calculator 2026 | Free PAYE Tax Calculator | IRD Rates',
    description: 'Calculate your NZ take-home pay with our free PAYE calculator. Includes tax, KiwiSaver, student loan & ACC levy. Updated 2026 IRD rates. Instant, accurate results.',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'New Zealand Salary Calculator - Free PAYE Tax Calculator 2024/2025',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NZ Salary Calculator 2026 | Free PAYE Tax Calculator | IRD Rates',
    description: 'Calculate your NZ take-home pay with our free PAYE calculator. Includes tax, KiwiSaver, student loan & ACC levy. Updated 2026 IRD rates.',
    images: ['/og-image.svg'],
    creator: '@nzsalarycalc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="geo.region" content="NZ" />
        <meta name="geo.country" content="New Zealand" />
        <meta name="geo.placename" content="New Zealand" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="NZ Salary Calculator" />
        <meta name="copyright" content="NZ Salary Calculator" />
        <meta name="reply-to" content="contact@nzsalarycalculator.com" />
        <meta property="og:site_name" content="NZ Salary Calculator - PAYE Tax Calculator" />
        <meta property="og:type" content="website" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="NZ PAYE Calculator" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://nzsalarycalculator.iamjeevan.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "New Zealand Salary Calculator - PAYE Tax Calculator 2026",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "url": "https://nzsalarycalculator.iamjeevan.com",
                "description": "Free New Zealand PAYE salary calculator 2026. Calculate take-home pay, PAYE tax, KiwiSaver contributions, student loan repayments, ACC levy & hourly rates. Accurate NZ income tax calculator with latest IRD rates for 2025/2026 tax year. Instant results for salary, wage, and income calculations.",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "2847",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "NZD"
                },
                "author": {
                  "@type": "Organization",
                  "name": "NZ Salary Calculator"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "NZ Salary Calculator"
                },
                "inLanguage": "en-NZ",
                "dateModified": "2026-01-07",
                "datePublished": "2024-01-01",
                "lastReviewed": "2026-01-07",
                "featureList": [
                  "PAYE Tax Calculation",
                  "Take-home Pay Calculation", 
                  "KiwiSaver Contribution Calculator",
                  "Student Loan Repayment Calculator",
                  "Hourly Rate Calculator",
                  "Annual vs Weekly vs Fortnightly Pay Breakdown",
                  "Multiple Income Source Calculator",
                  "Tax Bracket Analysis",
                  "IRD Compliant Tax Rates",
                  "ACC Levy Calculation"
                ],
                "audience": {
                  "@type": "Audience",
                  "geographicArea": {
                    "@type": "Country",
                    "name": "New Zealand"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "NZ Salary Calculator",
                "url": "https://nzsalarycalculator.iamjeevan.com",
                "description": "Providing accurate and free salary calculations for New Zealand workers",
                "areaServed": {
                  "@type": "Country",
                  "name": "New Zealand"
                },
                "knowsAbout": [
                  "New Zealand Tax Calculation",
                  "PAYE Tax Rates",
                  "KiwiSaver Contributions",
                  "Student Loan Repayments",
                  "IRD Tax Rates",
                  "New Zealand Salary Analysis"
                ],
                "serviceType": "Tax Calculator"
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How accurate is this New Zealand salary calculator?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Our calculator uses the official IRD tax rates and brackets for 2024/2025. It includes PAYE tax, ACC earner levy, and considers KiwiSaver contributions and student loan repayments for maximum accuracy."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "What KiwiSaver rates can I calculate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can calculate KiwiSaver contributions at 3%, 4%, 6%, 8%, or 10% rates. The calculator also includes the employer contribution (3%) and government contribution where applicable."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does this calculator include student loan repayments?", 
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, the calculator includes student loan repayments based on the current repayment threshold ($22,828 for 2024/2025) and 12% repayment rate on income above this threshold."
                    }
                  }
                ]
              }
            ])
          }}
        />
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
          <BreadcrumbNavigation />
          <main className="max-w-7xl mx-auto p-4">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
