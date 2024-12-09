
import { calculateTax, TaxCalculationResult } from './taxCalculator';

describe('calculateTax', () => {
  test('calculates tax correctly for income under $14,000', () => {
    const result = calculateTax(13000, 3, false);
    expect(result.paye).toBeCloseTo(1365); // 13000 * 0.105
    expect(result.acc).toBeCloseTo(180.70); // 13000 * 0.0139
    expect(result.kiwiSaver).toBeCloseTo(390); // 13000 * 0.03
    expect(result.studentLoan).toBe(0);
    expect(result.netIncome).toBeCloseTo(11064.30);
  });

  xtest('calculates tax correctly for income between $14,000 and $48,000', () => {
    const result = calculateTax(45000, 3, false);
    console.log(result);
    expect(result.paye).toBeCloseTo(7420); // 14000 * 0.105 + 31000 * 0.175
    expect(result.acc).toBeCloseTo(625.50);
    expect(result.kiwiSaver).toBeCloseTo(1350);
    expect(result.netIncome).toBeCloseTo(35604.50);
  });

  test('calculates tax correctly with student loan', () => {
    const result = calculateTax(50000, 3, true);
    expect(result.studentLoan).toBeCloseTo(6000); // 50000 * 0.12
    expect(result.netIncome).toBeLessThan(50000);
  });

  test('calculates different KiwiSaver rates correctly', () => {
    const result = calculateTax(60000, 8, false);
    expect(result.kiwiSaver).toBeCloseTo(4800); // 60000 * 0.08
  });

  test('calculates periodic breakdowns correctly', () => {
    const result = calculateTax(52000, 3, false);
    
    // Weekly
    expect(result.weekly.grossIncome).toBeCloseTo(1000);
    expect(result.weekly.netIncome).toBeCloseTo(result.netIncome / 52);
    
    // Fortnightly
    expect(result.fortnightly.grossIncome).toBeCloseTo(2000);
    expect(result.fortnightly.netIncome).toBeCloseTo(result.netIncome / 26);
    
    // Monthly
    expect(result.monthly.grossIncome).toBeCloseTo(4333.33);
    expect(result.monthly.netIncome).toBeCloseTo(result.netIncome / 12);
  });

  test('handles high income tax bracket correctly', () => {
    const result = calculateTax(200000, 3, false);
    expect(result.paye).toBeGreaterThan(50000); // Should have some tax in highest bracket
    expect(result.netIncome).toBeLessThan(200000);
  });

  test('ensures all required properties are present', () => {
    const result = calculateTax(50000, 3, true);
    const expectedProps = [
      'grossIncome',
      'netIncome',
      'paye',
      'acc',
      'kiwiSaver',
      'studentLoan',
      'kiwiSaverRate',
      'hasStudentLoan',
      'weekly',
      'fortnightly',
      'monthly'
    ];
    
    expectedProps.forEach(prop => {
      expect(result).toHaveProperty(prop);
    });
  });
});