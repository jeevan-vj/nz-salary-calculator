import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Loan Repayment Calculator NZ 2026/2027",
  description:
    "Calculate NZ student loan repayments, payoff date, and projection timeline with income growth and indexation assumptions.",
  keywords:
    "student loan calculator nz, nz student loan repayment calculator, student loan payoff date nz, repayment threshold nz",
  alternates: {
    canonical: "https://nzsalarycalculator.iamjeevan.com/student-loan-calculator",
  },
};

export default function StudentLoanCalculatorLayout({
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
            name: "NZ Student Loan Repayment Calculator",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            url: "https://nzsalarycalculator.iamjeevan.com/student-loan-calculator",
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
