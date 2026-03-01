import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAYE Calculator NZ - Free New Zealand Tax Calculator 2026/2027 | Salary Calculator',
  description: 'Free PAYE tax calculator for New Zealand. Calculate your take-home pay, tax deductions, KiwiSaver contributions, and student loan repayments using official IRD rates for 2026/2027.',
  keywords: 'PAYE calculator, NZ tax calculator, New Zealand salary calculator, take home pay calculator, IRD tax rates, PAYE tax rates NZ, salary tax calculator',
  openGraph: {
    title: 'PAYE Calculator NZ - Free New Zealand Tax Calculator 2026/2027',
    description: 'Free PAYE tax calculator for New Zealand. Calculate your take-home pay, tax deductions, KiwiSaver contributions, and student loan repayments.',
    url: 'https://nzsalarycalculator.iamjeevan.com/paye-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/paye-calculator',
  },
};

export default function PayeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "NZ PAYE Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://nzsalarycalculator.iamjeevan.com/paye-calculator",
            description:
              "Calculate PAYE, take-home pay, KiwiSaver, ACC levy, and student loan deductions for New Zealand salaries.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "NZD",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
