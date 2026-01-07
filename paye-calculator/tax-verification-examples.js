// Tax Calculation Verification Examples - 2025/2026 Tax Year
// Run this in browser console or Node.js to verify calculations

// Example 1: Median NZ Salary (~$60,000)
const example1 = {
  income: 60000,
  expectedPaye: 10638, // 15600*0.105 + 37900*0.175 + 6500*0.30
  expectedACC: 1002, // 60000 * 0.0167
  expectedKiwiSaver3: 1800, // 60000 * 0.03
  expectedStudentLoan: 4305.36, // (60000 - 24128) * 0.12
  expectedNet: 42254.64 // without student loan: 46560
};

// Example 2: Lower Income ($35,000)
const example2 = {
  income: 35000,
  expectedPaye: 4553.5, // 15600*0.105 + 19400*0.175
  expectedACC: 584.5, // 35000 * 0.0167
  expectedKiwiSaver3: 1050, // 35000 * 0.03
  expectedStudentLoan: 1304.64, // (35000 - 24128) * 0.12
  expectedNet: 27507.36 // without student loan: 28812
};

// Example 3: High Income ($150,000)
const example3 = {
  income: 150000,
  expectedPaye: 42358, // 15600*0.105 + 37900*0.175 + 24600*0.30 + 71900*0.33
  expectedACC: 2505, // 150000 * 0.0167
  expectedKiwiSaver3: 4500, // 150000 * 0.03
  expectedStudentLoan: 15104.64, // (150000 - 24128) * 0.12
  expectedNet: 85532.36 // without student loan: 100637
};

// Example 4: Very High Income ($200,000)
const example4 = {
  income: 200000,
  expectedPaye: 58158, // 15600*0.105 + 37900*0.175 + 24600*0.30 + 101900*0.33 + 20000*0.39
  expectedACC: 3340, // 200000 * 0.0167
  expectedKiwiSaver3: 6000, // 200000 * 0.03
  expectedStudentLoan: 21104.64, // (200000 - 24128) * 0.12
  expectedNet: 111397.36 // without student loan: 132502
};

// Example 5: Low Income (below tax threshold)
const example5 = {
  income: 12000,
  expectedPaye: 1260, // 12000 * 0.105
  expectedACC: 200.4, // 12000 * 0.0167
  expectedKiwiSaver3: 360, // 12000 * 0.03
  expectedStudentLoan: 0, // below threshold
  expectedNet: 10179.6
};

// Example 6: Income at student loan threshold
const example6 = {
  income: 24128,
  expectedPaye: 3130.4, // 15600*0.105 + 8528*0.175
  expectedACC: 402.94, // 24128 * 0.0167
  expectedKiwiSaver3: 723.84, // 24128 * 0.03
  expectedStudentLoan: 0, // exactly at threshold
  expectedNet: 19870.82
};

console.log('Verification Examples for 2025/2026 Tax Year');
console.log('===============================================\n');

console.log('Example 1: Median Salary ($60,000)');
console.log('PAYE:', example1.expectedPaye);
console.log('ACC:', example1.expectedACC);
console.log('KiwiSaver (3%):', example1.expectedKiwiSaver3);
console.log('Student Loan:', example1.expectedStudentLoan);
console.log('Net Income:', example1.expectedNet, '\n');

console.log('Tax Bracket Breakdown for $60,000:');
console.log('- $0-$15,600 @ 10.5%:', 15600 * 0.105, '=', 1638);
console.log('- $15,601-$53,500 @ 17.5%:', 37900 * 0.175, '=', 6632.5);
console.log('- $53,501-$60,000 @ 30%:', 6500 * 0.30, '=', 1950);
console.log('Total PAYE:', 1638 + 6632.5 + 1950, '\n');

console.log('Effective Tax Rate:', ((example1.expectedPaye / example1.income) * 100).toFixed(2) + '%');
console.log('Total Deductions Rate (with student loan):', (((example1.expectedPaye + example1.expectedACC + example1.expectedKiwiSaver3 + example1.expectedStudentLoan) / example1.income) * 100).toFixed(2) + '%');
