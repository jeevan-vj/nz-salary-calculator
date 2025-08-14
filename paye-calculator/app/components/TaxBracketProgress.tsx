import { motion } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';
import { TrendingUp } from 'lucide-react';

interface TaxBracketProgressProps {
  results: TaxCalculationResult;
}

export default function TaxBracketProgress({ results }: TaxBracketProgressProps) {
  const taxBrackets = [
    { threshold: 0, nextThreshold: 15600, rate: 10.5, label: '10.5%' },
    { threshold: 15600, nextThreshold: 53500, rate: 17.5, label: '17.5%' },
    { threshold: 53500, nextThreshold: 78100, rate: 30.0, label: '30.0%' },
    { threshold: 78100, nextThreshold: 180000, rate: 33.0, label: '33.0%' },
    { threshold: 180000, nextThreshold: Infinity, rate: 39.0, label: '39.0%' }
  ];

  // Find current bracket
  const currentBracket = taxBrackets.find(
    bracket => results.grossIncome > bracket.threshold && 
    (results.grossIncome <= bracket.nextThreshold || bracket.nextThreshold === Infinity)
  );

  if (!currentBracket) return null;

  const progress = currentBracket.nextThreshold === Infinity 
    ? 100 
    : ((results.grossIncome - currentBracket.threshold) / 
       (currentBracket.nextThreshold - currentBracket.threshold)) * 100;

  const nextBracket = taxBrackets.find(
    bracket => bracket.threshold === currentBracket.nextThreshold
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-lg p-6 border"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Tax Bracket Progress
        </h3>
        <TrendingUp className="h-5 w-5 text-blue-600" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Current Tax Rate</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {currentBracket.rate}%
            </p>
          </div>
          {nextBracket && (
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Next Rate</p>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {nextBracket.rate}%
              </p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              ${currentBracket.threshold.toLocaleString('en-NZ')}
            </span>
            {currentBracket.nextThreshold !== Infinity && (
              <span className="text-gray-600 dark:text-gray-400">
                ${currentBracket.nextThreshold.toLocaleString('en-NZ')}
              </span>
            )}
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
            </motion.div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Start of bracket</span>
            {currentBracket.nextThreshold !== Infinity && (
              <span>Next bracket at ${currentBracket.nextThreshold.toLocaleString('en-NZ')}</span>
            )}
          </div>
        </div>

        {currentBracket.nextThreshold !== Infinity && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-medium">
                ${(currentBracket.nextThreshold - results.grossIncome).toLocaleString('en-NZ')}
              </span>
              {' '}until next tax bracket ({nextBracket?.rate}%)
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}