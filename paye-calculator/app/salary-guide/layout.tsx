import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Average Salary NZ 2026 | NZ Salary Guide - Teacher, Minimum Wage & Truck Driver',
  description: 'Complete NZ average salary guide 2026. Find teacher salary NZ, minimum wage NZ, truck driver salary NZ and more. Calculate take-home pay with our free salary calculator NZ using latest IRD tax rates.',
  keywords: 'average salary nz, nz average salary, NZ salary guide, teacher salary nz, teachers salary nz, minimum wage nz, truck driver salary nz, salary calculator nz, New Zealand average salary 2026, salary by profession NZ, tax brackets NZ 2026, PAYE rates 2025/2026, salary expectations NZ, average income New Zealand, industry salaries NZ, NZ wage guide, salary comparison NZ, take home pay by profession',
  openGraph: {
    title: 'Average Salary NZ 2026 | NZ Salary Guide - Teacher, Minimum Wage & More',
    description: 'Complete NZ average salary guide with teacher salary NZ, minimum wage NZ, truck driver salary NZ and detailed tax information for 2026.',
    url: 'https://nzsalarycalculator.iamjeevan.com/salary-guide',
    type: 'article',
    locale: 'en_NZ',
    siteName: 'NZ Salary Calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Average Salary NZ 2026 | NZ Salary Guide - Teacher & Minimum Wage',
    description: 'Complete NZ average salary guide with teacher salary, minimum wage, truck driver salary and detailed tax information.',
  },
  alternates: {
    canonical: 'https://nzsalarycalculator.iamjeevan.com/salary-guide',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const salaryGuideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Average Salary NZ 2026 - Complete New Zealand Salary Guide",
  "description": "Complete NZ average salary guide 2026. Find teacher salary NZ, minimum wage NZ, truck driver salary NZ and more professions with take-home pay calculations.",
  "author": {
    "@type": "Organization",
    "name": "NZ Salary Calculator"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NZ Salary Calculator",
    "url": "https://nzsalarycalculator.iamjeevan.com"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2026-01-07",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nzsalarycalculator.iamjeevan.com/salary-guide"
  }
};

const salaryGuideFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the average salary in NZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average salary in NZ is approximately $70,000 per year (median income). Salaries vary by industry, experience, and location. Use our salary calculator to see your take-home pay after tax."
      }
    },
    {
      "@type": "Question",
      "name": "What is the teacher salary NZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teacher salary NZ ranges from $55,000 for beginning teachers to $85,000+ for experienced secondary teachers. Senior teachers, HODs, and principals can earn $95,000 to $180,000+ depending on the school and responsibilities."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum wage NZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum wage NZ is $23.15 per hour for adult workers as of April 2024. At 40 hours per week, this equates to approximately $48,152 per year before tax."
      }
    },
    {
      "@type": "Question",
      "name": "What is the truck driver salary NZ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Truck driver salary NZ ranges from $50,000 for local delivery drivers to $95,000+ for long-haul and specialized drivers. Class 5 heavy truck drivers typically earn $60,000 to $85,000 per year."
      }
    }
  ]
};

export default function SalaryGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(salaryGuideSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(salaryGuideFAQSchema)
        }}
      />
      {children}
    </>
  );
}
