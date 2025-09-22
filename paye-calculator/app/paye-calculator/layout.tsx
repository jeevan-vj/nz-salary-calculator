import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAYE Calculator NZ - Free New Zealand Tax Calculator 2024/2025 | Salary Calculator',
  description: 'Free PAYE tax calculator for New Zealand. Calculate your take-home pay, tax deductions, KiwiSaver contributions, and student loan repayments using official IRD rates for 2024/2025.',
  keywords: 'PAYE calculator, NZ tax calculator, New Zealand salary calculator, take home pay calculator, IRD tax rates, PAYE tax rates NZ, salary tax calculator',
  openGraph: {
    title: 'PAYE Calculator NZ - Free New Zealand Tax Calculator 2024/2025',
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
  return children;
}
