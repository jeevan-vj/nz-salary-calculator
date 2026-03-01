export interface IncomePercentileBand {
  min: number;
  max: number;
  percentile: number;
  label: string;
}

const INCOME_PERCENTILE_BANDS: IncomePercentileBand[] = [
  { min: 0, max: 30000, percentile: 20, label: "Bottom 20%" },
  { min: 30001, max: 45000, percentile: 35, label: "Bottom 35%" },
  { min: 45001, max: 60000, percentile: 50, label: "Median range" },
  { min: 60001, max: 80000, percentile: 65, label: "Upper-middle range" },
  { min: 80001, max: 100000, percentile: 80, label: "Top 20%" },
  { min: 100001, max: 130000, percentile: 90, label: "Top 10%" },
  { min: 130001, max: Infinity, percentile: 95, label: "Top 5%" },
];

export function getIncomePercentile(income: number): IncomePercentileBand {
  return (
    INCOME_PERCENTILE_BANDS.find(
      (band) => income >= band.min && income <= band.max,
    ) || INCOME_PERCENTILE_BANDS[INCOME_PERCENTILE_BANDS.length - 1]
  );
}
