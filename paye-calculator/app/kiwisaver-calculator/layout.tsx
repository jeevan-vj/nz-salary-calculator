import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KiwiSaver Calculator NZ - Calculate Retirement Savings & Contributions 2024/2025',
  description: 'Free KiwiSaver calculator for New Zealand. Calculate your retirement savings, employer contributions, government contributions, and see how KiwiSaver affects your take-home pay.',
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
  return children;
}
