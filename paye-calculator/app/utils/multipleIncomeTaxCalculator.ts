import { IncomeSource } from '../types/income';
import { TaxCalculationResult } from './taxCalculator';

const convertToYearly = (amount: number, frequency: string, hours?: number, weeks?: number): number => {
  switch (frequency) {
    case 'hourly':
      return amount * (hours || 40) * 52;
    case 'weekly':
      return amount * (weeks || 52);
    case 'fortnightly':
      return amount * (weeks || 52) / 2;
    case 'monthly':
      return amount * 12;
    default:
      return amount;
  }
};

export const calculateMultipleIncomeTax = (
  incomeSources: IncomeSource[]
): TaxCalculationResult => {
  // Sort so primary income is first
  const sortedSources = [...incomeSources].sort(
    (a, b) => (b.type === 'primary' ? 1 : -1)
  );

  let totalTax = 0;
  let totalIncome = 0;
  let totalAcc = 0;
  let totalKiwiSaver = 0;
  let totalStudentLoan = 0;

  sortedSources.forEach((source, index) => {
    const yearlyAmount = convertToYearly(
      source.amount,
      source.frequency,
      source.hours,
      source.weeks
    );

    totalIncome += yearlyAmount;

    // Calculate tax based on whether it's primary or secondary income
    if (index === 0) {
      // Primary income tax calculation
      if (yearlyAmount <= 14000) {
        totalTax += yearlyAmount * 0.105;
      } else if (yearlyAmount <= 48000) {
        totalTax += 14000 * 0.105 + (yearlyAmount - 14000) * 0.175;
      } else if (yearlyAmount <= 70000) {
        totalTax += 14000 * 0.105 + 34000 * 0.175 + (yearlyAmount - 48000) * 0.30;
      } else if (yearlyAmount <= 180000) {
        totalTax += 14000 * 0.105 + 34000 * 0.175 + 22000 * 0.30 + (yearlyAmount - 70000) * 0.33;
      } else {
        totalTax += 14000 * 0.105 + 34000 * 0.175 + 22000 * 0.30 + 110000 * 0.33 + (yearlyAmount - 180000) * 0.39;
      }
    } else {
      // Secondary income - flat rate based on total income
      const totalSoFar = totalIncome - yearlyAmount;
      if (totalSoFar <= 14000) totalTax += yearlyAmount * 0.105;
      else if (totalSoFar <= 48000) totalTax += yearlyAmount * 0.175;
      else if (totalSoFar <= 70000) totalTax += yearlyAmount * 0.30;
      else if (totalSoFar <= 180000) totalTax += yearlyAmount * 0.33;
      else totalTax += yearlyAmount * 0.39;
    }

    // Calculate other deductions
    totalAcc += yearlyAmount * 0.0139;
    totalKiwiSaver += yearlyAmount * 0.03; // Default KiwiSaver rate
    if (totalIncome > 20280) { // Student loan threshold
      totalStudentLoan += yearlyAmount * 0.12;
    }
  });

  const netIncome = totalIncome - totalTax - totalAcc - totalKiwiSaver - totalStudentLoan;

  return {
    grossIncome: totalIncome,
    netIncome,
    paye: totalTax,
    acc: totalAcc,
    kiwiSaver: totalKiwiSaver,
    studentLoan: totalStudentLoan,
    hasStudentLoan: totalStudentLoan > 0,
    kiwiSaverRate: 3,
    taxCode: 'M' as const,
    effectiveTaxRate: totalIncome > 0 ? (totalTax / totalIncome) * 100 : 0,
    currentTaxBracket: 0,
    nextTaxBracket: undefined,
    weekly: {
      grossIncome: totalIncome / 52,
      netIncome: netIncome / 52,
      paye: totalTax / 52,
      acc: totalAcc / 52,
      kiwiSaver: totalKiwiSaver / 52,
      studentLoan: totalStudentLoan / 52,
    },
    fortnightly: {
      grossIncome: totalIncome / 26,
      netIncome: netIncome / 26,
      paye: totalTax / 26,
      acc: totalAcc / 26,
      kiwiSaver: totalKiwiSaver / 26,
      studentLoan: totalStudentLoan / 26,
    },
    monthly: {
      grossIncome: totalIncome / 12,
      netIncome: netIncome / 12,
      paye: totalTax / 12,
      acc: totalAcc / 12,
      kiwiSaver: totalKiwiSaver / 12,
      studentLoan: totalStudentLoan / 12,
    },
    hourly: {
      grossIncome: totalIncome / (52 * 40),
      netIncome: netIncome / (52 * 40),
      paye: totalTax / (52 * 40),
      acc: totalAcc / (52 * 40),
      kiwiSaver: totalKiwiSaver / (52 * 40),
      studentLoan: totalStudentLoan / (52 * 40),
    }
  };
};
