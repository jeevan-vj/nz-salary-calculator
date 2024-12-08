import { motion } from 'framer-motion';
import { TaxCalculationResult, PayPeriod } from '../utils/taxCalculator';
import { useState } from 'react';

interface ResultsDisplayProps {
  results: TaxCalculationResult | null;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<PayPeriod>('yearly');

  if (!results) return null;

  const periodData = selectedPeriod === 'yearly' 
    ? { 
        grossIncome: results.grossIncome,
        netIncome: results.netIncome,
        paye: results.paye,
        acc: results.acc,
        kiwiSaver: results.kiwiSaver,
        studentLoan: results.studentLoan
      }
    : results[selectedPeriod];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 p-6 border rounded-lg bg-card text-card-foreground"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Tax Breakdown</h2>
        <select 
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value as PayPeriod)}
          className="form-select w-auto"
        >
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
          <option value="fortnightly">Fortnightly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <span>Gross Income:</span>
          <span>${periodData.grossIncome.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>PAYE:</span>
          <span>${periodData.paye.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>ACC:</span>
          <span>${periodData.acc.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>KiwiSaver:</span>
          <span>${periodData.kiwiSaver.toFixed(2)}</span>
        </div>
        {results.hasStudentLoan && (
          <div className="flex justify-between">
            <span>Student Loan:</span>
            <span>${periodData.studentLoan.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-bold pt-2 border-t">
          <span>Net Income:</span>
          <span>${periodData.netIncome.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
}