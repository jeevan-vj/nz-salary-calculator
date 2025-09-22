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
import ShareResults from './components/ShareResults';
import CalculationHistory from './components/CalculationHistory';

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

  const handleLoadCalculation = (loadedResults: TaxCalculationResult) => {
    setFormData({
      income: loadedResults.grossIncome,
      kiwiSaverRate: loadedResults.kiwiSaverRate,
      hasStudentLoan: loadedResults.hasStudentLoan,
      taxCode: loadedResults.taxCode
    });
    setResults(loadedResults);
  };

  return (
    <>
      <section className="container mx-auto p-4 space-y-6">
        <header className="text-center mb-8" itemScope itemType="https://schema.org/WebApplication">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" itemProp="name">
            New Zealand Salary Calculator 2024/2025
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-2" itemProp="description">
            Free PAYE Tax Calculator - Calculate Your Take-Home Pay
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Calculate PAYE tax, KiwiSaver contributions, student loan repayments, and hourly rates with the most accurate NZ income tax calculator using latest IRD rates for the 2024/2025 tax year.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              🇳🇿 IRD Compliant
            </span>
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              ✓ 100% Free
            </span>
            <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-semibold px-2.5 py-0.5 rounded">
              ⚡ Instant Results
            </span>
          </div>
        </header>
        
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Input Form */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 lg:p-6 border lg:sticky lg:top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  Tax Calculator
                </h2>
                <CalculationHistory 
                  onLoadCalculation={handleLoadCalculation} 
                  currentResults={results}
                />
              </div>
              <InputForm onCalculate={handleCalculate} />
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-8 space-y-6" ref={resultsRef}>
            {results && <SummaryCards results={results} />}
            
            <div className="grid gap-6">
              {results && (
                <div className="grid lg:grid-cols-2 gap-6">
                  <ResultsDisplay results={results} isLoading={false} />
                  <IncomeVsDeductionsChart results={results} />
                </div>
              )}
              
              {results && <TaxBracketProgress results={results} />}
              
              {results && (
                <div className="grid md:grid-cols-2 gap-6">
                  <ShareResults results={results} />
                  <div className="md:col-span-1">
                    {/* Placeholder for future components */}
                  </div>
                </div>
              )}
              
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

      {/* Related Tools Section */}
      <section className="container mx-auto p-4 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Related Salary & Tax Calculators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive tools to help you understand your finances in New Zealand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/hourly-rate-calculator" className="block bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Hourly Rate Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Convert your annual salary to hourly pay and understand overtime rates
              </p>
            </div>
          </a>
          
          <a href="/kiwisaver-calculator" className="block bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="text-center">
              <div className="text-3xl mb-3">🏦</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                KiwiSaver Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Calculate retirement savings and see how KiwiSaver affects your pay
              </p>
            </div>
          </a>
          
          <a href="/multiple-income" className="block bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Multiple Income Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Calculate tax from multiple jobs and income sources
              </p>
            </div>
          </a>
          
          <a href="/salary-guide" className="block bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                NZ Salary Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Average salaries by profession and comprehensive tax information
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="container mx-auto p-4 mt-12" itemScope itemType="https://schema.org/AboutPage">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6" itemProp="headline">
            About Our New Zealand Salary Calculator
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accurate PAYE Tax Calculations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our calculator uses the latest IRD tax rates and brackets for the 2024/2025 tax year. Get precise calculations for PAYE tax, ACC levies, and net take-home pay. 
                <a href="/salary-guide" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Learn more about NZ tax brackets</a>.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                KiwiSaver & Student Loan Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Calculate <a href="/kiwisaver-calculator" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">KiwiSaver contributions</a> (3%, 4%, 6%, 8%, or 10%) and student loan repayments based on current thresholds and rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Multiple Pay Period Calculations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                View your salary breakdown across annual, monthly, fortnightly, weekly, daily, and <a href="/hourly-rate-calculator" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">hourly rates</a> to understand your income across different time periods. Perfect for comparing job offers and understanding your true earning power.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Multiple Income Source Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Need to calculate tax from multiple jobs? Use our <a href="/multiple-income" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">multiple income calculator</a> to accurately determine your total tax obligations and take-home pay from various income sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4 mt-8" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Frequently Asked Questions About NZ Salary Tax Calculations
        </h2>
        <div className="space-y-6" itemProp="mainEntity">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" itemProp="name">
              How accurate is this New Zealand salary calculator?
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                Our calculator uses the official IRD tax rates and brackets for 2024/2025. It includes PAYE tax, ACC earner levy, and considers KiwiSaver contributions and student loan repayments for maximum accuracy. All calculations are based on current New Zealand tax legislation.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" itemProp="name">
              What KiwiSaver rates can I calculate?
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                You can calculate KiwiSaver contributions at 3%, 4%, 6%, 8%, or 10% rates. The calculator also includes the employer contribution (3%) and government contribution where applicable.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" itemProp="name">
              Does this calculator include student loan repayments?
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                Yes, the calculator includes student loan repayments based on the current repayment threshold ($22,828 for 2024/2025) and 12% repayment rate on income above this threshold.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" itemProp="name">
              Can I calculate hourly rates from my annual salary?
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                Absolutely! The calculator shows your equivalent hourly rate based on a standard 40-hour work week (2,080 hours annually). This helps you understand your true hourly earning power.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3" itemProp="name">
              Is this calculator free to use?
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300" itemProp="text">
                Yes, this New Zealand salary calculator is completely free to use with no registration, sign-up, or payment required. We believe everyone should have access to accurate tax calculations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
