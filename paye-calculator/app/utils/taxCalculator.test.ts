
import { calculateTax } from './taxCalculator';

describe('calculateTax', () => {
  test('calculates tax correctly for income under $15,600', () => {
    const result = calculateTax(13000, 3, false);
    expect(result.paye).toBeCloseTo(1365); // 13000 * 0.105
    expect(result.acc).toBeCloseTo(217.10); // 13000 * 0.0167
    expect(result.kiwiSaver).toBeCloseTo(390); // 13000 * 0.03
    expect(result.studentLoan).toBe(0);
    expect(result.netIncome).toBeCloseTo(11027.90);
  });

  test('calculates tax correctly for income between $15,600 and $53,500', () => {
    const result = calculateTax(45000, 3, false);
    // 15600 * 0.105 + 29400 * 0.175 = 1638 + 5145 = 6783
    expect(result.paye).toBeCloseTo(6783);
    expect(result.acc).toBeCloseTo(751.50); // 45000 * 0.0167
    expect(result.kiwiSaver).toBeCloseTo(1350); // 45000 * 0.03
    expect(result.studentLoan).toBe(0);
    expect(result.netIncome).toBeCloseTo(36115.50);
  });

  test('calculates tax correctly with student loan', () => {
    const result = calculateTax(50000, 3, true);
    // Student loan: (50000 - 24128) * 0.12 = 25872 * 0.12 = 3104.64
    expect(result.studentLoan).toBeCloseTo(3104.64);
    expect(result.netIncome).toBeLessThan(50000);
  });

  test('calculates different KiwiSaver rates correctly', () => {
    const result = calculateTax(60000, 8, false);
    expect(result.kiwiSaver).toBeCloseTo(4800); // 60000 * 0.08
    expect(result.acc).toBeCloseTo(1002); // 60000 * 0.0167
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

  test('student loan threshold is correctly applied', () => {
    // Income below threshold
    const resultBelow = calculateTax(20000, 3, true);
    expect(resultBelow.studentLoan).toBe(0);
    
    // Income exactly at threshold
    const resultAt = calculateTax(24128, 3, true);
    expect(resultAt.studentLoan).toBe(0);
    
    // Income above threshold
    const resultAbove = calculateTax(30000, 3, true);
    expect(resultAbove.studentLoan).toBeCloseTo((30000 - 24128) * 0.12);
  });
});