import { useState } from 'react';
import { suggestTaxCode } from '../utils/taxCalculator';

export default function TaxCodeDemo() {
  const [testIncome, setTestIncome] = useState(50000);
  const [testStudentLoan, setTestStudentLoan] = useState(false);

  const suggestion = suggestTaxCode(testIncome, testStudentLoan);

  const testCases = [
    { income: 12000, hasStudentLoan: false, label: 'Part-time job' },
    { income: 25000, hasStudentLoan: true, label: 'Graduate with student loan' },
    { income: 55000, hasStudentLoan: false, label: 'Average NZ salary' },
    { income: 85000, hasStudentLoan: true, label: 'Higher earner with student loan' },
    { income: 150000, hasStudentLoan: false, label: 'High earner' },
    { income: 200000, hasStudentLoan: false, label: 'Very high earner' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border mt-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Tax Code Auto-Selection Demo
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-3">Test Your Own Values:</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Annual Income</label>
              <input
                type="number"
                value={testIncome}
                onChange={(e) => setTestIncome(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={testStudentLoan}
                onChange={(e) => setTestStudentLoan(e.target.checked)}
                id="demo-student-loan"
              />
              <label htmlFor="demo-student-loan" className="text-sm">Has student loan</label>
            </div>
            <div className={`p-3 rounded-lg ${
              suggestion.confidence === 'high' 
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-blue-50 border border-blue-200 text-blue-700'
            }`}>
              <div className="font-medium">Suggested: {suggestion.taxCode}</div>
              <div className="text-sm mt-1">{suggestion.reason}</div>
              <div className="text-xs mt-1 opacity-75">Confidence: {suggestion.confidence}</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Common Scenarios:</h4>
          <div className="space-y-2">
            {testCases.map((testCase, index) => {
              const caseResult = suggestTaxCode(testCase.income, testCase.hasStudentLoan);
              return (
                <div key={index} className="text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="font-medium">{testCase.label}</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    ${testCase.income.toLocaleString()}{testCase.hasStudentLoan ? ' + Student Loan' : ''}
                  </div>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    → {caseResult.taxCode}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}