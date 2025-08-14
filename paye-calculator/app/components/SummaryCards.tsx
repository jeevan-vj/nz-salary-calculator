import { motion } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';
import { DollarSign, TrendingDown, PiggyBank, Shield } from 'lucide-react';

interface SummaryCardsProps {
  results: TaxCalculationResult;
}

export default function SummaryCards({ results }: SummaryCardsProps) {
  const cards = [
    {
      title: 'Take-Home Pay',
      value: results.netIncome,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      percentage: ((results.netIncome / results.grossIncome) * 100).toFixed(1),
      label: 'of gross income'
    },
    {
      title: 'PAYE Tax',
      value: results.paye,
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      percentage: results.effectiveTaxRate.toFixed(1),
      label: 'effective rate'
    },
    {
      title: 'KiwiSaver',
      value: results.kiwiSaver,
      icon: PiggyBank,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      percentage: results.kiwiSaverRate.toString(),
      label: 'contribution rate'
    },
    {
      title: 'ACC Levy',
      value: results.acc,
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      percentage: '1.67',
      label: 'per $100 earned'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
    >
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.title}
            variants={cardVariants}
            className={`relative overflow-hidden rounded-lg border ${card.bgColor} p-6`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {card.title}
                </p>
                <motion.p
                  key={card.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  ${card.value.toLocaleString('en-NZ', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })}
                </motion.p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className={`font-semibold ${card.color}`}>
                    {card.percentage}%
                  </span>
                  <span className="ml-1">{card.label}</span>
                </div>
              </div>
              <div className={`rounded-full p-3 ${card.bgColor}`}>
                <Icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}