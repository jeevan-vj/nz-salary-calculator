import { TaxCalculationResult } from "../utils/taxCalculator";
import { getIncomePercentile } from "../utils/incomePercentile";

interface IncomePercentileCardProps {
  results: TaxCalculationResult;
}

export default function IncomePercentileCard({
  results,
}: IncomePercentileCardProps) {
  const percentile = getIncomePercentile(results.grossIncome);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Income Percentile (NZ)
      </h3>
      <div className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Your income of{" "}
          <span className="font-semibold">
            ${results.grossIncome.toLocaleString("en-NZ")}
          </span>{" "}
          is in approximately the{" "}
          <span className="font-semibold">top {100 - percentile.percentile}%</span>{" "}
          of NZ earners.
        </p>

        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>0%</span>
            <span>{percentile.percentile}th percentile</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${percentile.percentile}%` }}
            />
          </div>
        </div>

        <div className="text-sm p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200">
          {percentile.label}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Approximation based on NZ income distribution bands (Stats NZ aligned).
        </p>
      </div>
    </div>
  );
}
