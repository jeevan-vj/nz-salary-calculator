import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NZ Salary Guide 2024/2025 - Average Salaries, Tax Rates & Take-Home Pay',
  description: 'Comprehensive New Zealand salary guide for 2024/2025. Discover average salaries by profession, understand tax brackets, PAYE rates, and calculate your ideal take-home pay.',
  keywords: 'NZ salary guide, New Zealand average salary, salary by profession NZ, tax brackets NZ, PAYE rates 2024, salary expectations NZ',
  openGraph: {
    title: 'NZ Salary Guide 2024/2025 - Average Salaries & Tax Information',
    description: 'Comprehensive New Zealand salary guide with average salaries by profession and detailed tax information.',
    url: 'https://nzsalarycalculator.iamjeevan.com/salary-guide',
    type: 'article',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/salary-guide',
  },
};

export default function SalaryGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
