export type PayPeriod = 'hourly' | 'weekly' | 'fortnightly' | 'monthly' | 'yearly';

export type TaxCode = 'M' | 'ME' | 'ML' | 'SB' | 'S' | 'SH' | 'ST' | 'STC' | 'CAE' | 'EDW' | 'NSW' | 'SWT';

export interface TaxCodeInfo {
  code: TaxCode;
  description: string;
  taxFreeThreshold?: number;
}

export const TAX_CODES: TaxCodeInfo[] = [
  { code: 'M', description: 'Primary income source' },
  { code: 'ME', description: 'Primary income with exemption certificate' },
  { code: 'ML', description: 'Primary income with student loan' },
  { code: 'SB', description: 'Secondary income with basic rate' },
  { code: 'S', description: 'Secondary income' },
  { code: 'SH', description: 'Secondary income with higher rate' },
  { code: 'ST', description: 'Secondary income with top rate' },
  { code: 'STC', description: 'Secondary income with company tax rate' },
  { code: 'CAE', description: 'Casual agricultural employee' },
  { code: 'EDW', description: 'Election day worker' },
  { code: 'NSW', description: 'No withholding tax' },
  { code: 'SWT', description: 'Special withholding tax' }
];

export interface TaxCodeSuggestion {
  taxCode: TaxCode;
  reason: string;
  confidence: 'high' | 'medium' | 'low';
}

export function suggestTaxCode(
  income: number,
  hasStudentLoan: boolean,
  isPrimaryJob: boolean = true
): TaxCodeSuggestion {
  // For very low incomes (likely part-time or casual work)
  if (income < 15600) {
    if (isPrimaryJob) {
      return {
        taxCode: hasStudentLoan ? 'ML' : 'M',
        reason: hasStudentLoan 
          ? 'Low income primary job with student loan - M tax code with loan deductions'
          : 'Low income primary job - standard M tax code recommended',
        confidence: 'high'
      };
    } else {
      return {
        taxCode: 'SB',
        reason: 'Low income secondary job - basic secondary rate (10.5%) recommended',
        confidence: 'high'
      };
    }
  }

  // For moderate incomes (most common case)
  if (income >= 15600 && income <= 78100) {
    if (isPrimaryJob) {
      return {
        taxCode: hasStudentLoan ? 'ML' : 'M',
        reason: hasStudentLoan 
          ? 'Primary income with student loan - M code ensures correct loan deductions'
          : 'Primary income - standard M tax code for main job',
        confidence: 'high'
      };
    } else {
      // Use appropriate secondary rate based on income level
      if (income <= 53500) {
        return {
          taxCode: 'S',
          reason: 'Secondary income in moderate range - 17.5% flat rate appropriate',
          confidence: 'high'
        };
      } else {
        return {
          taxCode: 'SH',
          reason: 'Secondary income in upper moderate range - 30% flat rate prevents under-withholding',
          confidence: 'high'
        };
      }
    }
  }

  // For higher incomes (above average NZ salary)
  if (income > 78100 && income <= 120000) {
    if (isPrimaryJob) {
      return {
        taxCode: hasStudentLoan ? 'ML' : 'M',
        reason: hasStudentLoan 
          ? 'Higher income primary job with student loan - ensures progressive tax + loan deductions'
          : 'Higher income primary job - M code for progressive tax rates',
        confidence: 'high'
      };
    } else {
      // For secondary income in higher brackets, might want higher rate
      return {
        taxCode: 'SH',
        reason: 'Higher secondary income - 30% flat rate prevents under-withholding',
        confidence: 'medium'
      };
    }
  }

  // For very high incomes
  if (income > 120000) {
    if (isPrimaryJob) {
      return {
        taxCode: hasStudentLoan ? 'ML' : 'M',
        reason: hasStudentLoan 
          ? 'High income primary job with student loan - progressive rates essential'
          : 'High income primary job - M code for full progressive tax calculation',
        confidence: 'high'
      };
    } else {
      // For high secondary income, use top rate to avoid underpayment
      return {
        taxCode: income > 180000 ? 'STC' : 'ST',
        reason: income > 180000 
          ? 'Very high secondary income - 39% rate prevents significant underpayment'
          : 'High secondary income - 33% rate recommended',
        confidence: 'medium'
      };
    }
  }

  // Default fallback
  return {
    taxCode: hasStudentLoan ? 'ML' : 'M',
    reason: 'Standard primary income tax code',
    confidence: 'medium'
  };
}

export interface TaxCalculationResult {
  grossIncome: number;
  netIncome: number;
  paye: number;
  acc: number;
  kiwiSaver: number;
  studentLoan: number;
  kiwiSaverRate: number;
  hasStudentLoan: boolean;
  taxCode: TaxCode;
  effectiveTaxRate: number;
  currentTaxBracket: number;
  nextTaxBracket?: number;
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
  hasStudentLoan: boolean,
  taxCode: TaxCode = 'M'
): TaxCalculationResult {
  // Tax brackets for 2025-2026 (effective 1 April 2025)
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
  let currentTaxBracket = 0;
  let nextTaxBracket: number | undefined;

  // Calculate PAYE based on tax code
  if (taxCode === 'NSW') {
    paye = 0; // No withholding tax
  } else if (taxCode === 'SB') {
    paye = income * 0.175; // Flat 17.5% for secondary income basic rate
  } else if (taxCode === 'SH') {
    paye = income * 0.30; // Flat 30% for secondary income higher rate
  } else if (taxCode === 'ST') {
    paye = income * 0.33; // Flat 33% for secondary income top rate
  } else if (taxCode === 'STC') {
    paye = income * 0.39; // Flat 39% for secondary income company rate
  } else {
    // Standard progressive tax calculation for M, ME, ML codes
    for (const bracket of taxBrackets) {
      const taxableInThisBracket = Math.min(
        Math.max(remainingIncome, 0),
        bracket.threshold - previousThreshold
      );
      paye += taxableInThisBracket * bracket.rate;
      remainingIncome -= taxableInThisBracket;
      
      // Determine current tax bracket
      if (income > previousThreshold && income <= bracket.threshold) {
        currentTaxBracket = bracket.rate;
        // Find next bracket
        const currentIndex = taxBrackets.indexOf(bracket);
        if (currentIndex < taxBrackets.length - 1) {
          nextTaxBracket = taxBrackets[currentIndex + 1].rate;
        }
      }
      
      previousThreshold = bracket.threshold;
      if (remainingIncome <= 0) break;
    }
  }

  const effectiveTaxRate = income > 0 ? (paye / income) * 100 : 0;

  const acc = income * 0.0167; // ACC earners levy rate 2025-26: $1.67 per $100
  const kiwiSaver = income * (kiwiSaverRate / 100);
  // Student loan repayment: 12% of income over $24,128 threshold (2025-26)
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
    taxCode,
    effectiveTaxRate,
    currentTaxBracket: currentTaxBracket * 100, // Convert to percentage
    nextTaxBracket: nextTaxBracket ? nextTaxBracket * 100 : undefined,
    ...periodicResults
  };
}