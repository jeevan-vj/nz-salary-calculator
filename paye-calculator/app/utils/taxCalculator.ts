export type PayPeriod = 'weekly' | 'fortnightly' | 'monthly' | 'yearly';

export interface TaxCalculationResult {
  grossIncome: number;
  netIncome: number;
  paye: number;
  acc: number;
  kiwiSaver: number;
  studentLoan: number;
  kiwiSaverRate: number;
  hasStudentLoan: boolean;
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
  // Tax brackets for 2023-2024
  const taxBrackets = [
    { threshold: 14000, rate: 0.105 },
    { threshold: 48000, rate: 0.175 },
    { threshold: 70000, rate: 0.30 },
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

  const acc = income * 0.0139;
  const kiwiSaver = income * (kiwiSaverRate / 100);
  const studentLoan = hasStudentLoan ? income * 0.12 : 0;
  const netIncome = income - paye - acc - kiwiSaver - studentLoan;

  const periodicResults = {
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