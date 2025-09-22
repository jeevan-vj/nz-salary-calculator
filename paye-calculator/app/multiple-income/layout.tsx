import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multiple Income Tax Calculator NZ - Calculate Tax from Multiple Sources 2024/2025',
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
  return children;
}
