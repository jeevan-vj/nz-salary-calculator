import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KiwiSaver Calculator NZ - Calculate Retirement Savings & Contributions 2026/2027',
  description: 'Free KiwiSaver calculator for New Zealand. Calculate your retirement savings, employer contributions, 2026 government contributions, and see how KiwiSaver affects your take-home pay.',
  keywords: 'KiwiSaver calculator, retirement calculator NZ, KiwiSaver contributions, employer matching NZ, government contributions, retirement savings calculator',
  openGraph: {
    title: 'KiwiSaver Calculator NZ - Calculate Your Retirement Savings',
    description: 'Free KiwiSaver calculator. Calculate your retirement savings with employer and government contributions.',
    url: 'https://nzsalarycalculator.iamjeevan.com/kiwisaver-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/kiwisaver-calculator',
  },
};

export default function KiwiSaverCalculatorLayout({
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
            name: "NZ KiwiSaver Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://nzsalarycalculator.iamjeevan.com/kiwisaver-calculator",
            description:
              "Estimate KiwiSaver employee and employer contributions, government contribution, and take-home pay impact in New Zealand.",
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
