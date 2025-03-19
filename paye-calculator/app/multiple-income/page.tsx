'use client';

import { useState, useRef } from 'react';
import IncomeSourceForm from '../components/IncomeSourceForm';
import ResultsDisplay from '../components/ResultsDisplay';
import { calculateMultipleIncomeTax } from '../utils/multipleIncomeTaxCalculator';
import { IncomeSource } from '../types/income';
import { TaxCalculationResult } from '../utils/taxCalculator';

export default function MultipleIncomePage() {
  const [results, setResults] = useState<TaxCalculationResult | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleCalculate = (sources: IncomeSource[]) => {
    const result = calculateMultipleIncomeTax(sources);
    setResults(result);
    
    if (window.innerWidth <= 768) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-6">Multiple Income Calculator</h1>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
          Calculate your total tax and take-home pay from multiple income sources.
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
