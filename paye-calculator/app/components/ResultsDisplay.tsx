import { motion } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';

interface ResultsDisplayProps {
  results: TaxCalculationResult | null;
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  if (!results) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4 p-6 border rounded-lg"
    >
      <h2 className="text-2xl font-bold">Your Tax Breakdown</h2>
      <div className="grid gap-2">
        <div className="flex justify-between">
          <span>Gross Income:</span>
          <span>${results.grossIncome.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>PAYE:</span>
          <span>${results.paye.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>ACC:</span>
          <span>${results.acc.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>KiwiSaver:</span>
          <span>${results.kiwiSaver.toFixed(2)}</span>
        </div>
        {results.hasStudentLoan && (
          <div className="flex justify-between">
            <span>Student Loan:</span>
            <span>${results.studentLoan.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-bold pt-2 border-t">
          <span>Net Income:</span>
          <span>${results.netIncome.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
}