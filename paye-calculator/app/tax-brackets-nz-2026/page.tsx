import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NZ Tax Brackets 2026/2027 | PAYE Rates and Examples",
  description:
    "Complete NZ tax bracket guide for 2026/2027. Understand PAYE rates, marginal tax, and take-home pay examples.",
  alternates: {
    canonical: "https://nzsalarycalculator.iamjeevan.com/tax-brackets-nz-2026",
  },
};

export default function TaxBracketsNz2026Page() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">NZ Tax Brackets 2026/2027</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        New Zealand uses a progressive PAYE system. You only pay each tax rate on the
        portion of income within that bracket.
      </p>

      <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Current PAYE Brackets</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Income Range</th>
              <th className="text-left py-2">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b"><td className="py-2">$0 - $15,600</td><td>10.5%</td></tr>
            <tr className="border-b"><td className="py-2">$15,601 - $53,500</td><td>17.5%</td></tr>
            <tr className="border-b"><td className="py-2">$53,501 - $78,100</td><td>30%</td></tr>
            <tr className="border-b"><td className="py-2">$78,101 - $180,000</td><td>33%</td></tr>
            <tr><td className="py-2">$180,001+</td><td>39%</td></tr>
          </tbody>
        </table>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2>Quick Example</h2>
        <p>
          On a salary of $80,000, your top marginal rate is 33%, but your effective tax rate
          is lower because lower bands are taxed first.
        </p>
      </div>

      <Link
        href="/"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Calculate My Take-Home Pay
      </Link>
    </main>
  );
}
