"use client";

import { useMemo, useState } from "react";

const STUDENT_LOAN_THRESHOLD = 24128;
const STUDENT_LOAN_RATE = 0.12;

interface ProjectionRow {
  year: number;
  income: number;
  repayment: number;
  indexation: number;
  balance: number;
}

function projectLoanRepayment(
  startingDebt: number,
  startingIncome: number,
  incomeGrowthRate: number,
  debtIndexationRate: number,
): ProjectionRow[] {
  let balance = startingDebt;
  let income = startingIncome;
  let year = new Date().getFullYear();
  const rows: ProjectionRow[] = [];

  while (balance > 0 && rows.length < 40) {
    const indexation = balance * (debtIndexationRate / 100);
    const repayment = Math.max(0, (income - STUDENT_LOAN_THRESHOLD) * STUDENT_LOAN_RATE);
    balance = Math.max(0, balance + indexation - repayment);

    rows.push({
      year,
      income,
      repayment,
      indexation,
      balance,
    });

    income *= 1 + incomeGrowthRate / 100;
    year += 1;
  }

  return rows;
}

export default function StudentLoanCalculatorPage() {
  const [loanBalance, setLoanBalance] = useState(35000);
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [incomeGrowthRate, setIncomeGrowthRate] = useState(3);
  const [debtIndexationRate, setDebtIndexationRate] = useState(2);

  const projection = useMemo(
    () =>
      projectLoanRepayment(
        loanBalance,
        annualIncome,
        incomeGrowthRate,
        debtIndexationRate,
      ),
    [loanBalance, annualIncome, incomeGrowthRate, debtIndexationRate],
  );

  const currentRepayment = Math.max(
    0,
    (annualIncome - STUDENT_LOAN_THRESHOLD) * STUDENT_LOAN_RATE,
  );
  const yearsToPayoff = projection.length;
  const estimatedPayoffYear =
    projection.length > 0 ? projection[projection.length - 1].year : new Date().getFullYear();

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">
        Student Loan Repayment Calculator NZ
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Estimate your yearly repayments, debt trajectory, and payoff year using NZ student
        loan rules.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Inputs</h2>

          <label className="block">
            <span className="text-sm font-medium">Current Loan Balance (NZD)</span>
            <input
              type="number"
              min={0}
              value={loanBalance}
              onChange={(e) => setLoanBalance(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Annual Repayment Income (NZD)</span>
            <input
              type="number"
              min={0}
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Annual Income Growth (%)</span>
            <input
              type="number"
              min={0}
              max={20}
              step={0.1}
              value={incomeGrowthRate}
              onChange={(e) => setIncomeGrowthRate(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium">Annual Debt Indexation (%)</span>
            <input
              type="number"
              min={0}
              max={20}
              step={0.1}
              value={debtIndexationRate}
              onChange={(e) => setDebtIndexationRate(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
            />
          </label>
        </div>

        <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Summary</h2>
          <div className="grid gap-3 text-sm">
            <div className="flex justify-between">
              <span>Current threshold</span>
              <span className="font-semibold">
                ${STUDENT_LOAN_THRESHOLD.toLocaleString("en-NZ")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Repayment rate</span>
              <span className="font-semibold">12%</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated annual repayment</span>
              <span className="font-semibold">
                ${currentRepayment.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated payoff time</span>
              <span className="font-semibold">{yearsToPayoff} years</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated payoff year</span>
              <span className="font-semibold">{estimatedPayoffYear}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Repayment Projection</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Year</th>
                <th className="text-left py-2">Income</th>
                <th className="text-left py-2">Repayment</th>
                <th className="text-left py-2">Indexation</th>
                <th className="text-left py-2">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {projection.map((row) => (
                <tr className="border-b last:border-0" key={row.year}>
                  <td className="py-2">{row.year}</td>
                  <td className="py-2">
                    ${row.income.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
                  </td>
                  <td className="py-2">
                    ${row.repayment.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
                  </td>
                  <td className="py-2">
                    ${row.indexation.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
                  </td>
                  <td className="py-2 font-semibold">
                    ${row.balance.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
