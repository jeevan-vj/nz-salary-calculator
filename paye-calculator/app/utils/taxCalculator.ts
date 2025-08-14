export type PayPeriod = 'hourly' | 'weekly' | 'fortnightly' | 'monthly' | 'yearly';

export interface TaxCalculationResult {
  grossIncome: number;
  netIncome: number;
  paye: number;
  acc: number;
  kiwiSaver: number;
  studentLoan: number;
  kiwiSaverRate: number;
  hasStudentLoan: boolean;
  hourly: {
    grossIncome: number;
    netIncome: number;
    paye: number;
    acc: number;
    kiwiSaver: number;
    studentLoan: number;
  };
  weekly: {
    grossIncome: number;
    netIncome: number;
    paye: number;
    acc: number;
    kiwiSaver: number;
    studentLoan: number;
  };
  fortnightly: {
    grossIncome: number;
    netIncome: number;
    paye: number;
    acc: number;
    kiwiSaver: number;
    studentLoan: number;
  };
  monthly: {
    grossIncome: number;
    netIncome: number;
    paye: number;
    acc: number;
    kiwiSaver: number;
    studentLoan: number;
  };
}

export function calculateTax(
  income: number,
  kiwiSaverRate: number,
  hasStudentLoan: boolean
): TaxCalculationResult {
  // Tax brackets for 2024-2025 (effective 31 July 2024)
  const taxBrackets = [
    { threshold: 15600, rate: 0.105 },
    { threshold: 53500, rate: 0.175 },
    { threshold: 78100, rate: 0.30 },
    { threshold: 180000, rate: 0.33 },
    { threshold: Infinity, rate: 0.39 }
  ];

  let paye = 0;
  let remainingIncome = income;
  let previousThreshold = 0;

  for (const bracket of taxBrackets) {
    const taxableInThisBracket = Math.min(
      Math.max(remainingIncome, 0),
      bracket.threshold - previousThreshold
    );
    paye += taxableInThisBracket * bracket.rate;
    remainingIncome -= taxableInThisBracket;
    previousThreshold = bracket.threshold;
    if (remainingIncome <= 0) break;
  }

  const acc = income * 0.0167; // ACC earners levy rate 2024-25: $1.67 per $100
  const kiwiSaver = income * (kiwiSaverRate / 100);
  // Student loan repayment: 12% of income over $24,128 threshold (2024-25)
  const studentLoanThreshold = 24128;
  const studentLoan = hasStudentLoan && income > studentLoanThreshold 
    ? (income - studentLoanThreshold) * 0.12 
    : 0;
  const netIncome = income - paye - acc - kiwiSaver - studentLoan;

  const periodicResults = {
    hourly: {
      grossIncome: income / (52 * 40), // Assuming 40-hour work week
      netIncome: netIncome / (52 * 40),
      paye: paye / (52 * 40),
      acc: acc / (52 * 40),
      kiwiSaver: kiwiSaver / (52 * 40),
      studentLoan: studentLoan / (52 * 40),
    },
    weekly: {
      grossIncome: income / 52,
      netIncome: netIncome / 52,
      paye: paye / 52,
      acc: acc / 52,
      kiwiSaver: kiwiSaver / 52,
      studentLoan: studentLoan / 52,
    },
    fortnightly: {
      grossIncome: income / 26,
      netIncome: netIncome / 26,
      paye: paye / 26,
      acc: acc / 26,
      kiwiSaver: kiwiSaver / 26,
      studentLoan: studentLoan / 26,
    },
    monthly: {
      grossIncome: income / 12,
      netIncome: netIncome / 12,
      paye: paye / 12,
      acc: acc / 12,
      kiwiSaver: kiwiSaver / 12,
      studentLoan: studentLoan / 12,
    },
  };

  return {
    grossIncome: income,
    netIncome,
    paye,
    acc,
    kiwiSaver,
    studentLoan,
    kiwiSaverRate,
    hasStudentLoan,
    ...periodicResults
  };
}