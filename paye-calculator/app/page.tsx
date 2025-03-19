'use client';

import { useState, useRef } from 'react';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateTax, TaxCalculationResult } from './utils/taxCalculator';
import InputForm from './components/InputFrom';
import { TaxConfiguration } from './components/TaxConfiguration';
import SalaryImpactPreview from './components/SalaryImpactPreview';

export default function Home() {
  const resultsRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<TaxCalculationResult | null>(null);
  const [formData, setFormData] = useState({
    income: 70000,
    kiwiSaverRate: 3,
    hasStudentLoan: false
  });

  const handleCalculate = (income: number, kiwiSaverRate: number, hasStudentLoan: boolean) => {
    setFormData({ income, kiwiSaverRate, hasStudentLoan });
    const result = calculateTax(income, kiwiSaverRate, hasStudentLoan);
    setResults(result);
    
    // Scroll to results on mobile
    if (window.innerWidth <= 768) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="container mx-auto p-4 space-y-6">
      <InputForm onCalculate={handleCalculate} />
      <TaxConfiguration />
      <div className="mt-8" ref={resultsRef}>
        <ResultsDisplay results={results} isLoading={false} />
        {results && (
          <SalaryImpactPreview 
            baseIncome={formData.income} 
            kiwiSaverRate={formData.kiwiSaverRate} 
            hasStudentLoan={formData.hasStudentLoan} 
            baseResults={results} 
          />
        )}
      </div>
    </main>
  );
}
