'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
import SEOContent from './components/SEOContent';

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
        <header className="text-center mb-12 mt-8" itemScope itemType="https://schema.org/WebApplication">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" itemProp="name">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
              New Zealand Salary Calculator
            </span>
            <span className="block text-2xl md:text-3xl mt-2 text-gray-700 dark:text-gray-300">
              2024/2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-3 font-semibold" itemProp="description">
            Free PAYE Tax Calculator - Calculate Your Take-Home Pay
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Calculate PAYE tax, KiwiSaver contributions, student loan repayments, and hourly rates with the most accurate NZ income tax calculator using latest IRD rates for the 2024/2025 tax year.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
              🇳🇿 IRD Compliant
            </span>
            <span className="inline-flex items-center bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
              ✓ 100% Free
            </span>
            <span className="inline-flex items-center bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200 dark:border-purple-700 text-purple-800 dark:text-purple-200 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
              ⚡ Instant Results
            </span>
          </div>
        </header>
        
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Input Form */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-5 lg:p-7 border border-gray-200 dark:border-gray-800 shadow-lg lg:sticky lg:top-24 transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
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
            {!results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Welcome Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-3 mr-4">
                      <span className="text-3xl">💰</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Welcome! 👋
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        Let's calculate your take-home pay
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                      <span>Enter your annual or hourly salary on the left</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                      <span>Adjust your KiwiSaver contribution rate</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                      <span>Toggle student loan if applicable</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">✓</span>
                      <span>Click calculate to see your detailed breakdown</span>
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="text-blue-600 dark:text-blue-400 mr-3 mt-1 text-xl">🧮</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          PAYE Tax Calculation
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Accurate calculations using 2024/2025 IRD tax rates
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-5 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="text-green-600 dark:text-green-400 mr-3 mt-1 text-xl">🏦</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          KiwiSaver Contributions
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Calculate contributions from 3% to 10%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="text-purple-600 dark:text-purple-400 mr-3 mt-1 text-xl">🎓</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Student Loan Repayment
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Automatic calculation at 12% above threshold
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-5 border border-orange-200 dark:border-orange-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="text-orange-600 dark:text-orange-400 mr-3 mt-1 text-xl">⏰</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Multiple Pay Periods
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          View yearly, monthly, weekly, and hourly breakdowns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Brackets Info */}
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-center mb-5">
                    <span className="text-2xl mr-3">📊</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      2024/2025 Tax Brackets
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        $0 - $14,000
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                        10.5%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        $14,001 - $48,000
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                        17.5%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        $48,001 - $70,000
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                        30%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        $70,001 - $180,000
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                        33%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        $180,001+
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                        39%
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">💡 Pro Tip:</span> Your effective tax rate is usually lower than your top marginal rate because you only pay the higher rate on income above each threshold.
                    </p>
                  </div>
                </div>

                {/* Quick Examples */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="text-2xl mr-2">📈</span>
                    Quick Examples
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/70 dark:bg-gray-900/60 rounded-lg p-4 hover:bg-white dark:hover:bg-gray-900/80 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">$50,000/year</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Median income</span>
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        Take-home: <span className="font-semibold text-green-600 dark:text-green-400">~$42,500/year</span> (before KiwiSaver)
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-gray-900/60 rounded-lg p-4 hover:bg-white dark:hover:bg-gray-900/80 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">$75,000/year</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Above average</span>
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        Take-home: <span className="font-semibold text-green-600 dark:text-green-400">~$60,000/year</span> (before KiwiSaver)
                      </div>
                    </div>
                    <div className="bg-white/70 dark:bg-gray-900/60 rounded-lg p-4 hover:bg-white dark:hover:bg-gray-900/80 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900 dark:text-white">$100,000/year</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">High income</span>
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        Take-home: <span className="font-semibold text-green-600 dark:text-green-400">~$78,500/year</span> (before KiwiSaver)
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

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
      <section className="container mx-auto p-4 mt-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Related Salary & Tax Calculators
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive tools to help you understand your finances in New Zealand
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="/hourly-rate-calculator" className="group block bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-2">
            <div className="text-center">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Hourly Rate Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Convert your annual salary to hourly pay and understand overtime rates
              </p>
            </div>
          </a>
          
          <a href="/kiwisaver-calculator" className="group block bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-green-200 dark:hover:border-green-800 hover:-translate-y-2">
            <div className="text-center">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">🏦</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                KiwiSaver Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Calculate retirement savings and see how KiwiSaver affects your pay
              </p>
            </div>
          </a>
          
          <a href="/multiple-income" className="group block bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-purple-200 dark:hover:border-purple-800 hover:-translate-y-2">
            <div className="text-center">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">💼</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Multiple Income Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Calculate tax from multiple jobs and income sources
              </p>
            </div>
          </a>
          
          <a href="/salary-guide" className="group block bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-800 hover:-translate-y-2">
            <div className="text-center">
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">📊</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                NZ Salary Guide
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Average salaries by profession and comprehensive tax information
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="container mx-auto p-4 mt-16" itemScope itemType="https://schema.org/AboutPage">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" itemProp="headline">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              About Our New Zealand Salary Calculator
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
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

      <section className="container mx-auto p-4 mt-16" itemScope itemType="https://schema.org/FAQPage">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            About NZ Salary Tax Calculations
          </p>
        </div>
        <div className="space-y-5 max-w-4xl mx-auto" itemProp="mainEntity">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-800" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-start" itemProp="name">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-2xl">Q:</span>
              <span>How accurate is this New Zealand salary calculator?</span>
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300 ml-10 leading-relaxed" itemProp="text">
                Our calculator uses the official IRD tax rates and brackets for 2024/2025. It includes PAYE tax, ACC earner levy, and considers KiwiSaver contributions and student loan repayments for maximum accuracy. All calculations are based on current New Zealand tax legislation.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-800" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-start" itemProp="name">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-2xl">Q:</span>
              <span>What KiwiSaver rates can I calculate?</span>
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300 ml-10 leading-relaxed" itemProp="text">
                You can calculate KiwiSaver contributions at 3%, 4%, 6%, 8%, or 10% rates. The calculator also includes the employer contribution (3%) and government contribution where applicable.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-800" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-start" itemProp="name">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-2xl">Q:</span>
              <span>Does this calculator include student loan repayments?</span>
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300 ml-10 leading-relaxed" itemProp="text">
                Yes, the calculator includes student loan repayments based on the current repayment threshold ($22,828 for 2024/2025) and 12% repayment rate on income above this threshold.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-800" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-start" itemProp="name">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-2xl">Q:</span>
              <span>Can I calculate hourly rates from my annual salary?</span>
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300 ml-10 leading-relaxed" itemProp="text">
                Absolutely! The calculator shows your equivalent hourly rate based on a standard 40-hour work week (2,080 hours annually). This helps you understand your true hourly earning power.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 dark:border-gray-800" itemScope itemType="https://schema.org/Question">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-start" itemProp="name">
              <span className="text-blue-600 dark:text-blue-400 mr-3 text-2xl">Q:</span>
              <span>Is this calculator free to use?</span>
            </h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p className="text-gray-600 dark:text-gray-300 ml-10 leading-relaxed" itemProp="text">
                Yes, this New Zealand salary calculator is completely free to use with no registration, sign-up, or payment required. We believe everyone should have access to accurate tax calculations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Content Section */}
      <SEOContent />
    </>
  );
}
