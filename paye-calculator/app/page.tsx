'use client';

import { useState, useRef } from 'react';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateTax, TaxCalculationResult, TaxCode } from './utils/taxCalculator';
import InputForm from './components/InputFrom';
import { TaxConfiguration } from './components/TaxConfiguration';
import SalaryImpactPreview from './components/SalaryImpactPreview';
import HourlyEarningsBreakdown from './components/HourlyEarningsBreakdown';
import SummaryCards from './components/SummaryCards';
import TaxBracketProgress from './components/TaxBracketProgress';
import IncomeVsDeductionsChart from './components/IncomeVsDeductionsChart';

export default function Home() {
  const resultsRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<TaxCalculationResult | null>(null);
  const [isHourlyMode, setIsHourlyMode] = useState<boolean>(false);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [formData, setFormData] = useState({
    income: 70000,
    kiwiSaverRate: 3,
    hasStudentLoan: false,
    taxCode: 'M' as TaxCode
  });

  const handleCalculate = (
    income: number, 
    kiwiSaverRate: number, 
    hasStudentLoan: boolean,
    isHourly?: boolean,
    hoursPerWeekParam?: number,
    taxCode?: TaxCode
  ) => {
    setFormData({ income, kiwiSaverRate, hasStudentLoan, taxCode: taxCode || 'M' });
    setIsHourlyMode(isHourly || false);
    setHoursPerWeek(hoursPerWeekParam || 40);
    const result = calculateTax(income, kiwiSaverRate, hasStudentLoan, taxCode);
    setResults(result);
    
    // Scroll to results on mobile
    if (window.innerWidth <= 768) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="container mx-auto p-4 space-y-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            New Zealand Salary Calculator 2024/2025
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
            Free PAYE Tax Calculator - Calculate Your Take-Home Pay
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Calculate PAYE tax, KiwiSaver contributions, student loan repayments, and hourly rates with the most accurate NZ income tax calculator using latest IRD rates.
          </p>
        </header>
        
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Input Form */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border sticky top-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tax Calculator
              </h2>
              <InputForm onCalculate={handleCalculate} />
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-8" ref={resultsRef}>
            {results && <SummaryCards results={results} />}
            
            <div className="grid gap-6">
              {results && (
                <div className="grid lg:grid-cols-2 gap-6">
                  <ResultsDisplay results={results} isLoading={false} />
                  <IncomeVsDeductionsChart results={results} />
                </div>
              )}
              
              {results && <TaxBracketProgress results={results} />}
              
              {results && isHourlyMode && (
                <HourlyEarningsBreakdown
                  hourlyRate={formData.income / (hoursPerWeek * 52)}
                  currentHoursPerWeek={hoursPerWeek}
                  results={results}
                />
              )}
              
              {results && (
                <SalaryImpactPreview 
                  baseIncome={formData.income} 
                  kiwiSaverRate={formData.kiwiSaverRate} 
                  hasStudentLoan={formData.hasStudentLoan} 
                  baseResults={results} 
                />
              )}
            </div>
          </div>
        </div>
        
        <TaxConfiguration />
      </section>

      <section className="container mx-auto p-4 mt-12">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            About Our New Zealand Salary Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accurate PAYE Tax Calculations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our calculator uses the latest IRD tax rates and brackets for the 2024/2025 tax year. Get precise calculations for PAYE tax, ACC levies, and net take-home pay.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                KiwiSaver & Student Loan Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Calculate KiwiSaver contributions (3%, 4%, 6%, 8%, or 10%) and student loan repayments based on current thresholds and rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Multiple Pay Period Calculations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                View your salary breakdown across annual, monthly, fortnightly, weekly, daily, and hourly rates to understand your income across different time periods.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Free & Always Up-to-Date
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Completely free to use with no registration required. We regularly update our calculator to reflect the latest New Zealand tax rates and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              How accurate is this New Zealand salary calculator?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our calculator uses the official IRD tax rates and brackets for 2024/2025. It includes PAYE tax, ACC earner levy, and considers KiwiSaver contributions and student loan repayments for maximum accuracy.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              What KiwiSaver rates can I calculate?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You can calculate KiwiSaver contributions at 3%, 4%, 6%, 8%, or 10% rates. The calculator also includes the employer contribution (3%) and government contribution where applicable.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Does this calculator include student loan repayments?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, the calculator includes student loan repayments based on the current repayment threshold ($22,828 for 2024/2025) and 12% repayment rate on income above this threshold.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Can I calculate hourly rates from my annual salary?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Absolutely! The calculator shows your equivalent hourly rate based on a standard 40-hour work week (2,080 hours annually). This helps you understand your true hourly earning power.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Is this calculator free to use?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, this New Zealand salary calculator is completely free to use with no registration, sign-up, or payment required. We believe everyone should have access to accurate tax calculations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
