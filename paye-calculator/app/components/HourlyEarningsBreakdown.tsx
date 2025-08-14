import { motion } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';

interface HourlyEarningsBreakdownProps {
  hourlyRate: number;
  currentHoursPerWeek: number;
  results: TaxCalculationResult;
}

export default function HourlyEarningsBreakdown({
  hourlyRate,
  currentHoursPerWeek,
  results
}: HourlyEarningsBreakdownProps) {
  const scenarios = [20, 30, 37.5, 40, 45, 50].filter(hours => hours !== currentHoursPerWeek);
  
  const calculateEarnings = (hoursPerWeek: number) => {
    const weeklyGross = hourlyRate * hoursPerWeek;
    const annualGross = weeklyGross * 52;
    
    // Calculate proportional deductions based on current results
    const grossRatio = annualGross / results.grossIncome;
    
    return {
      hourly: hourlyRate,
      weekly: weeklyGross,
      monthly: weeklyGross * 52 / 12,
      annual: annualGross,
      weeklyNet: (results.weekly.netIncome / results.weekly.grossIncome) * weeklyGross,
      monthlyNet: (results.monthly.netIncome / results.monthly.grossIncome) * weeklyGross * 52 / 12,
      annualNet: (results.netIncome / results.grossIncome) * annualGross,
    };
  };

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-card-foreground"
    >
      <motion.h3 
        variants={itemVariants}
        className="text-xl font-bold text-blue-800 dark:text-blue-200"
      >
        💼 Earnings at Different Working Hours
      </motion.h3>
      
      <motion.div 
        variants={itemVariants}
        className="bg-blue-100 dark:bg-blue-800/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700"
      >
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Current: {currentHoursPerWeek} hours/week @ ${hourlyRate.toFixed(2)}/hour
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div>
            <span className="text-blue-700 dark:text-blue-300">Weekly:</span>
            <span className="font-medium ml-1">${results.weekly.netIncome.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-blue-700 dark:text-blue-300">Monthly:</span>
            <span className="font-medium ml-1">${results.monthly.netIncome.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-blue-700 dark:text-blue-300">Annual:</span>
            <span className="font-medium ml-1">${results.netIncome.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-blue-700 dark:text-blue-300">Gross Annual:</span>
            <span className="font-medium ml-1">${results.grossIncome.toFixed(2)}</span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-3">
        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
          📊 Compare Different Hour Scenarios
        </h4>
        
        <div className="grid gap-3">
          {scenarios.map((hours) => {
            const earnings = calculateEarnings(hours);
            const isPartTime = hours < 37.5;
            const isOvertime = hours > 40;
            
            return (
              <motion.div
                key={hours}
                variants={itemVariants}
                className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                  isPartTime 
                    ? 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-700'
                    : isOvertime
                    ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700'
                    : 'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-600'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      {hours} hours/week
                    </span>
                    {isPartTime && (
                      <span className="text-xs px-2 py-1 bg-orange-200 text-orange-800 rounded-full dark:bg-orange-800 dark:text-orange-200">
                        Part-time
                      </span>
                    )}
                    {isOvertime && (
                      <span className="text-xs px-2 py-1 bg-green-200 text-green-800 rounded-full dark:bg-green-800 dark:text-green-200">
                        Overtime
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Take-home
                    </div>
                    <div className="font-bold text-lg">
                      ${earnings.annualNet.toFixed(0)}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Weekly:</span>
                    <div className="font-medium">${earnings.weeklyNet.toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Monthly:</span>
                    <div className="font-medium">${earnings.monthlyNet.toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Gross Annual:</span>
                    <div className="font-medium">${earnings.annual.toFixed(0)}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border"
      >
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
          💡 Quick Calculations
        </h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Daily rate (8h):</span>
            <span className="font-medium ml-2">${(hourlyRate * 8).toFixed(2)}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Full-time annual:</span>
            <span className="font-medium ml-2">${(hourlyRate * 40 * 52).toFixed(0)}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}