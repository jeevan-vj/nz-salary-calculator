import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hourly Rate Calculator NZ - Convert Salary to Hourly Pay 2024/2025',
  description: 'Free hourly rate calculator for New Zealand. Convert your annual salary to hourly pay, calculate overtime rates, and understand your true hourly earning power with tax deductions.',
  keywords: 'hourly rate calculator NZ, salary to hourly converter, hourly pay calculator, overtime calculator NZ, hourly wage calculator New Zealand',
  openGraph: {
    title: 'Hourly Rate Calculator NZ - Convert Salary to Hourly Pay',
    description: 'Free hourly rate calculator for New Zealand. Convert your annual salary to hourly pay and calculate overtime rates.',
    url: 'https://nzsalarycalculator.iamjeevan.com/hourly-rate-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/hourly-rate-calculator',
  },
};

export default function HourlyRateCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
