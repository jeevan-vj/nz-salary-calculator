import { motion, AnimatePresence } from 'framer-motion';
import { TaxCalculationResult, PayPeriod } from '../utils/taxCalculator';
import { useState, useRef, useEffect } from 'react';
import SalaryDistributionChart from './SalaryDistributionChart';
import LoadingSpinner from './LoadingSpinner';

interface ResultsDisplayProps {
  results: TaxCalculationResult | null;
  isLoading: boolean; // Add this line
}

export default function ResultsDisplay({
  results,
  isLoading,
}: ResultsDisplayProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<PayPeriod>('yearly');
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (results && window.innerWidth <= 768) {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [results]);

  if (isLoading) return <LoadingSpinner />;
  if (!results) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const periodData =
    selectedPeriod === 'yearly'
      ? {
          grossIncome: results.grossIncome,
          netIncome: results.netIncome,
          paye: results.paye,
          acc: results.acc,
          kiwiSaver: results.kiwiSaver,
          studentLoan: results.studentLoan,
        }
      : results[selectedPeriod];

  return (
    <AnimatePresence>
      <motion.div
        ref={resultsRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-5 p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Your Tax Breakdown</h2>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value as PayPeriod)}
            className="form-select w-full sm:w-auto min-w-[160px]"
          >
            <option value="yearly">Yearly</option>
            <option value="monthly">Monthly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="weekly">Weekly</option>
            <option value="hourly">Hourly</option>
          </select>
        </motion.div>

        <div className="grid gap-3">
          <motion.div variants={itemVariants} className="flex justify-between">
            <span>Gross Income:</span>
            <motion.span
              key={periodData.grossIncome}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ${periodData.grossIncome.toFixed(2)}
            </motion.span>
          </motion.div>

          {Object.entries({
            PAYE: periodData.paye,
            ACC: periodData.acc,
            KiwiSaver: periodData.kiwiSaver,
            ...(results.hasStudentLoan
              ? { 'Student Loan': periodData.studentLoan }
              : {}),
          }).map(([label, value]) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="flex justify-between"
            >
              <span>{label}:</span>
              <motion.span
                key={value}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                ${value.toFixed(2)}
              </motion.span>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="flex justify-between font-bold pt-2 border-t"
          >
            <span>Net Income:</span>
            <motion.span
              key={periodData.netIncome}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ${periodData.netIncome.toFixed(2)}
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SalaryDistributionChart
            grossIncome={periodData.grossIncome}
            netIncome={periodData.netIncome}
            paye={periodData.paye}
            acc={periodData.acc}
            kiwiSaver={periodData.kiwiSaver}
            studentLoan={periodData.studentLoan}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
