'use client';

import { useState } from 'react';
//import InputForm from './components/InputForm';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateTax, TaxCalculationResult } from './utils/taxCalculator';
import InputForm from './components/InputFrom';
import { TaxConfiguration } from './components/TaxConfiguration';

export default function Home() {
  const [results, setResults] = useState<TaxCalculationResult | null>(null);

  const handleCalculate = (income: number, kiwiSaverRate: number, hasStudentLoan: boolean) => {
    const result = calculateTax(income, kiwiSaverRate, hasStudentLoan);
    setResults(result);
  };

  return (
    <main className="container mx-auto p-4 space-y-6">
      
      <InputForm onCalculate={handleCalculate} />
      <TaxConfiguration />
      <div className="mt-8">
        <ResultsDisplay results={results} />
      </div>
    </main>
  );
}
