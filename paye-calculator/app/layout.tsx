import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from './theme/ThemeProvider';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'New Zealand Salary Calculator - Free PAYE Tax Calculator 2024/2025',
  description:
    'Free New Zealand salary calculator 2024/2025. Calculate PAYE tax, take-home pay, KiwiSaver, student loan repayments & hourly rates. Accurate NZ income tax calculator with latest IRD rates.',
  keywords: 'New Zealand salary calculator, NZ PAYE calculator, tax calculator NZ, take home pay calculator, KiwiSaver calculator, student loan calculator NZ, hourly rate calculator, income tax calculator New Zealand, IRD tax rates, net pay calculator',
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
    siteName: 'NZ Salary Calculator',
    title: 'New Zealand Salary Calculator - Free PAYE Tax Calculator 2024/2025',
    description: 'Free New Zealand salary calculator 2024/2025. Calculate PAYE tax, take-home pay, KiwiSaver, student loan repayments & hourly rates.',
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'New Zealand Salary Calculator - Free PAYE Tax Calculator 2024/2025',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Zealand Salary Calculator - Free PAYE Tax Calculator 2024/2025',
    description: 'Free New Zealand salary calculator 2024/2025. Calculate PAYE tax, take-home pay, KiwiSaver, student loan repayments & hourly rates.',
    images: ['/og-image.svg'],
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
        <link rel="canonical" href="https://nzsalarycalculator.iamjeevan.com" />
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
                "name": "New Zealand Salary Calculator",
                "applicationCategory": "FinanceApplication",
                "operatingSystem": "All",
                "url": "https://nzsalarycalculator.iamjeevan.com",
                "description": "Free New Zealand salary calculator 2024/2025. Calculate PAYE tax, take-home pay, KiwiSaver, student loan repayments & hourly rates. Accurate NZ income tax calculator with latest IRD rates.",
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
                "dateModified": "2024-09-22",
                "datePublished": "2024-01-01",
                "lastReviewed": "2024-09-22",
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
          <main className="max-w-7xl mx-auto p-4">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
