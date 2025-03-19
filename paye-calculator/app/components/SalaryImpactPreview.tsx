'use client';

import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { calculateTax, TaxCalculationResult } from '../utils/taxCalculator';
import { motion } from 'framer-motion';

interface SalaryImpactPreviewProps {
  baseIncome: number;
  kiwiSaverRate: number;
  hasStudentLoan: boolean;
  baseResults: TaxCalculationResult | null;
}

export default function SalaryImpactPreview({
  baseIncome,
  kiwiSaverRate,
  hasStudentLoan,
  baseResults,
}: SalaryImpactPreviewProps) {
  const [percentageChange, setPercentageChange] = useState<number>(0);
  const [previewResults, setPreviewResults] = useState<TaxCalculationResult | null>(null);
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    if (!baseResults || percentageChange === 0) {
      setPreviewResults(null);
      setDifference(0);
      return;
    }

    const newIncome = baseIncome * (1 + percentageChange / 100);
    const results = calculateTax(newIncome, kiwiSaverRate, hasStudentLoan);
    setPreviewResults(results);
    setDifference(results.netIncome - baseResults.netIncome);
  }, [percentageChange, baseIncome, kiwiSaverRate, hasStudentLoan, baseResults]);

  if (!baseResults) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-6 border rounded-lg bg-card text-card-foreground mt-4"
    >
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Salary Change Impact</h2>
      
      <div className="space-y-4">
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <span className="text-sm">Adjust salary by: {percentageChange > 0 ? '+' : ''}{percentageChange}%</span>
            <span className="text-sm font-medium">
              ${(baseIncome * (1 + percentageChange / 100)).toFixed(0)} p.a.
            </span>
          </div>
          <Slider
            defaultValue={[0]}
            min={-50}
            max={100}
            step={1}
            value={[percentageChange]}
            onValueChange={(values) => setPercentageChange(values[0])}
            className="w-full"
          />
        </div>

        {previewResults && (
          <div className="mt-4 p-3 sm:p-4 rounded-md bg-muted/50">
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex justify-between text-sm">
                <span>Current Net Income:</span>
                <span>${baseResults.netIncome.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>New Net Income:</span>
                <span>${previewResults.netIncome.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Monthly Change:</span>
                <span className={difference >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                  {difference >= 0 ? '+' : ''}${(difference / 12).toFixed(2)}
                </span>
              </div>
              
              <div className="flex justify-between font-medium">
                <span>Yearly Change:</span>
                <span className={difference >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                  {difference >= 0 ? '+' : ''}${difference.toFixed(2)}
                </span>
              </div>
              
              <div className="text-xs text-muted-foreground mt-2 italic leading-normal">
                {percentageChange > 0 
                  ? `Note: Your marginal tax rate may increase with your salary.`
                  : `Note: This is just an estimate. Your actual income may vary.`}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
