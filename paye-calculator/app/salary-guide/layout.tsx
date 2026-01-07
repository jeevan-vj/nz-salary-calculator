import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NZ Salary Guide 2026 | Average Salaries, Tax Rates & PAYE Calculator',
  description: 'Complete New Zealand salary guide 2026. Average salaries by industry, tax brackets, PAYE rates, take-home pay calculations. Updated IRD tax rates for 2025/2026. Free salary comparison tool.',
  keywords: 'NZ salary guide, New Zealand average salary 2026, salary by profession NZ, tax brackets NZ 2026, PAYE rates 2025/2026, salary expectations NZ, average income New Zealand, industry salaries NZ, NZ wage guide, salary comparison NZ, take home pay by profession',
  openGraph: {
    title: 'NZ Salary Guide 2026 | Average Salaries & Tax Rates | PAYE Calculator',
    description: 'Complete New Zealand salary guide with average salaries by industry, detailed tax information, and PAYE calculations for 2026.',
    url: 'https://nzsalarycalculator.iamjeevan.com/salary-guide',
    type: 'article',
    locale: 'en_NZ',
    siteName: 'NZ Salary Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NZ Salary Guide 2026 | Average Salaries & Tax Rates',
    description: 'Complete New Zealand salary guide with average salaries by industry and detailed tax information.',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/salary-guide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SalaryGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
