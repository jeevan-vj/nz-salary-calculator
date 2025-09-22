'use client';

import { useState, useRef } from 'react';
import IncomeSourceForm from '../components/IncomeSourceForm';
import ResultsDisplay from '../components/ResultsDisplay';
import { calculateMultipleIncomeTax } from '../utils/multipleIncomeTaxCalculator';
import type { IncomeSource } from '../types/income';
import type { TaxCalculationResult } from '../utils/taxCalculator';

export default function MultipleIncomePage() {
  const [results, setResults] = useState<TaxCalculationResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (sources: IncomeSource[]) => {
    try {
      if (!sources || sources.length === 0) {
        setResults(null);
        return;
      }
      const result = calculateMultipleIncomeTax(sources);
      setResults(result);
      
      if (window.innerWidth <= 768) {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error calculating tax:', error);
      setResults(null);
    }
  };

  return (
    <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-6">New Zealand Multiple Income Tax Calculator 2024/2025</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
          Calculate your total PAYE tax and take-home pay from multiple income sources including salary, wages, benefits, and secondary employment using latest IRD rates.
        </p>
        
        <div className="w-full overflow-x-hidden">
          <IncomeSourceForm onCalculate={handleCalculate} />
        </div>
        
        <div className="mt-4 sm:mt-8" ref={resultsRef}>
          <ResultsDisplay results={results} isLoading={false} />
        </div>
      </div>
    </main>
  );
}
