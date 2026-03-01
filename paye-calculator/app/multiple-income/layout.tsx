import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multiple Income Tax Calculator NZ - Calculate Tax from Multiple Sources 2026/2027',
  description: 'Free New Zealand multiple income tax calculator. Calculate PAYE tax, take-home pay and deductions from multiple income sources including salary, wages, and benefits using latest IRD rates.',
  keywords: 'multiple income calculator NZ, multiple source tax calculator, NZ multi job tax, secondary tax calculator NZ, PAYE multiple income, New Zealand multiple employer tax',
  openGraph: {
    title: 'Multiple Income Tax Calculator NZ - Calculate Tax from Multiple Sources',
    description: 'Free New Zealand multiple income tax calculator. Calculate PAYE tax, take-home pay and deductions from multiple income sources.',
    url: 'https://nzsalarycalculator.iamjeevan.com/multiple-income',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/multiple-income',
  },
};

export default function MultipleIncomeLayout({
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
            name: "NZ Multiple Income Tax Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://nzsalarycalculator.iamjeevan.com/multiple-income",
            description:
              "Calculate total PAYE tax and take-home pay across multiple jobs and income sources in New Zealand.",
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
