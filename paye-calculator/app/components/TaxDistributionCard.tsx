import { TaxCalculationResult } from "../utils/taxCalculator";

interface TaxDistributionCardProps {
  results: TaxCalculationResult;
}

const DISTRIBUTION = [
  { label: "Social Services & Welfare", percent: 35 },
  { label: "Healthcare", percent: 20 },
  { label: "Education", percent: 15 },
  { label: "Infrastructure", percent: 10 },
  { label: "Other Public Services", percent: 20 },
];

export default function TaxDistributionCard({ results }: TaxDistributionCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Where Your Tax Goes
      </h3>
      <div className="space-y-3">
        {DISTRIBUTION.map((item) => {
          const amount = (results.paye * item.percent) / 100;
          return (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${amount.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          );
        })}
        <p className="text-xs text-gray-500 dark:text-gray-400 pt-2">
          Indicative split based on recent NZ government spending categories.
        </p>
      </div>
    </div>
  );
}
