import { motion, AnimatePresence } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';
import { useState, useEffect } from 'react';
import { History, X, RotateCcw, Trash2 } from 'lucide-react';

interface CalculationEntry {
  id: string;
  timestamp: number;
  results: TaxCalculationResult;
  label?: string;
}

interface CalculationHistoryProps {
  onLoadCalculation: (results: TaxCalculationResult) => void;
  currentResults?: TaxCalculationResult | null;
}

export default function CalculationHistory({ onLoadCalculation, currentResults }: CalculationHistoryProps) {
  const [history, setHistory] = useState<CalculationEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load history from localStorage
    const savedHistory = localStorage.getItem('salary-calculation-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to load calculation history:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save current calculation to history
    if (currentResults) {
      const newEntry: CalculationEntry = {
        id: Date.now().toString(),
        timestamp: Date.now(),
        results: currentResults,
        label: `$${currentResults.grossIncome.toLocaleString('en-NZ')} (${currentResults.taxCode})`
      };

      setHistory(prev => {
        // Check if this exact calculation already exists
        const exists = prev.some(entry => 
          entry.results.grossIncome === currentResults.grossIncome &&
          entry.results.taxCode === currentResults.taxCode &&
          entry.results.kiwiSaverRate === currentResults.kiwiSaverRate &&
          entry.results.hasStudentLoan === currentResults.hasStudentLoan
        );

        if (exists) return prev;

        const updated = [newEntry, ...prev.slice(0, 9)]; // Keep only 10 most recent
        localStorage.setItem('salary-calculation-history', JSON.stringify(updated));
        return updated;
      });
    }
  }, [currentResults]);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('salary-calculation-history');
  };

  const removeEntry = (id: string) => {
    const updated = history.filter(entry => entry.id !== id);
    setHistory(updated);
    localStorage.setItem('salary-calculation-history', JSON.stringify(updated));
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffHours < 1) {
      return 'Just now';
    } else if (diffHours < 24) {
      return `${Math.floor(diffHours)} hours ago`;
    } else if (diffHours < 168) { // 7 days
      return `${Math.floor(diffHours / 24)} days ago`;
    } else {
      return date.toLocaleDateString('en-NZ');
    }
  };

  if (history.length === 0) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        <History className="h-4 w-4" />
        <span>History ({history.length})</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* History Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-96 max-w-[90vw] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-[60vh] overflow-hidden"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Calculation History
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearHistory}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    title="Clear all history"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="overflow-y-auto max-h-96">
                {history.map((entry, index) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {entry.label}
                          </span>
                          {entry.results.hasStudentLoan && (
                            <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 px-1 rounded">
                              SL
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Take-home: ${entry.results.netIncome.toLocaleString('en-NZ')}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(entry.timestamp)}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            onLoadCalculation(entry.results);
                            setIsOpen(false);
                          }}
                          className="p-1 text-blue-500 hover:text-blue-700 transition-colors"
                          title="Load this calculation"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeEntry(entry.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          title="Remove from history"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}