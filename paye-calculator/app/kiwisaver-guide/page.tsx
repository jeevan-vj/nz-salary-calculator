import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KiwiSaver Guide NZ 2026/2027 | Rates, Employer Match, Government Contribution",
  description:
    "Understand KiwiSaver contribution rates, employer match, and government contribution rules for NZ in 2026/2027.",
  alternates: {
    canonical: "https://nzsalarycalculator.iamjeevan.com/kiwisaver-guide",
  },
};

export default function KiwiSaverGuidePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">KiwiSaver Guide 2026/2027</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        KiwiSaver helps you build long-term retirement savings while receiving employer
        contributions.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-900 border rounded-lg p-5">
          <h2 className="font-semibold mb-2">Minimum Employee Rate</h2>
          <p className="text-2xl font-bold">3.5%</p>
        </div>
        <div className="bg-white dark:bg-gray-900 border rounded-lg p-5">
          <h2 className="font-semibold mb-2">Minimum Employer Rate</h2>
          <p className="text-2xl font-bold">3.5%</p>
        </div>
        <div className="bg-white dark:bg-gray-900 border rounded-lg p-5">
          <h2 className="font-semibold mb-2">Max Govt Contribution</h2>
          <p className="text-2xl font-bold">$260.72</p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Contribution Options</h2>
        <p>
          Employees can contribute 3.5%, 4%, 6%, 8%, or 10% of gross income.
          Higher rates increase long-term balances but reduce short-term take-home pay.
        </p>
        <h2>Government Contribution</h2>
        <p>
          The government contributes up to $260.72 each year when your personal contributions
          reach the qualifying minimum.
        </p>
      </div>

      <Link
        href="/kiwisaver-calculator"
        className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        Open KiwiSaver Calculator
      </Link>
    </main>
  );
}
