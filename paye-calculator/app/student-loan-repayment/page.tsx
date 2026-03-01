import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Loan Repayment NZ 2026/2027 | Thresholds and Repayment Rules",
  description:
    "Learn NZ student loan repayment rules, thresholds, repayment rate, and how to estimate your payoff timeline.",
  alternates: {
    canonical: "https://nzsalarycalculator.iamjeevan.com/student-loan-repayment",
  },
};

export default function StudentLoanRepaymentPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Student Loan Repayment NZ (2026/2027)
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Repayments are generally 12% of repayment income above the annual threshold.
      </p>

      <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">Current Rules</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Threshold:</strong> $24,128
          </li>
          <li>
            <strong>Repayment rate:</strong> 12% above threshold
          </li>
          <li>
            <strong>Collection method:</strong> PAYE payroll deductions
          </li>
          <li>
            <strong>NZ-based borrowers:</strong> Generally interest-free
          </li>
        </ul>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>How to Estimate Repayments</h2>
        <p>
          If your annual repayment income is $80,000, the repayment base is
          $80,000 - $24,128 = $55,872. Annual repayment is 12% of that amount.
        </p>
      </div>

      <Link
        href="/student-loan-calculator"
        className="inline-block mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Open Student Loan Calculator
      </Link>
    </main>
  );
}
