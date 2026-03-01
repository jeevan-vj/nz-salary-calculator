import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hourly Rate Calculator NZ | Minimum Wage Calculator NZ 2026',
  description: 'Free hourly rate calculator for New Zealand. Calculate minimum wage NZ take-home pay ($23.15/hour), convert salary to hourly pay, and see your net earnings after PAYE tax and deductions.',
  keywords: 'hourly rate calculator NZ, minimum wage calculator NZ, minimum wage nz, salary to hourly converter, hourly pay calculator, overtime calculator NZ, hourly wage calculator New Zealand, minimum wage take home pay NZ',
  openGraph: {
    title: 'Hourly Rate Calculator NZ | Minimum Wage Calculator NZ 2026',
    description: 'Free hourly rate calculator for New Zealand. Calculate minimum wage NZ take-home pay and convert salary to hourly pay.',
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
