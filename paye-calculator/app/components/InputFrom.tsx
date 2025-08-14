import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { event } from '../utils/gtag';
import { Switch } from '@/components/ui/switch';
import { TaxCode, TAX_CODES, suggestTaxCode, TaxCodeSuggestion } from '../utils/taxCalculator';

type InputMode = 'annual' | 'hourly';

interface InputFormProps {
  onCalculate: (
    income: number,
    kiwiSaverRate: number,
    hasStudentLoan: boolean,
    isHourly?: boolean,
    hoursPerWeek?: number,
    taxCode?: TaxCode
  ) => void;
}

export default function InputForm({ onCalculate }: InputFormProps) {
  const [inputMode, setInputMode] = useState<InputMode>('annual');
  const [income, setIncome] = useState<string>('70000');
  const [hourlyRate, setHourlyRate] = useState<string>('35');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [kiwiSaverRate, setKiwiSaverRate] = useState<number>(3);
  const [hasStudentLoan, setHasStudentLoan] = useState<boolean>(false);
  const [includeKiwiSaver, setIncludeKiwiSaver] = useState<boolean>(true);
  const [taxCode, setTaxCode] = useState<TaxCode>('M');
  const [taxCodeSuggestion, setTaxCodeSuggestion] = useState<TaxCodeSuggestion | null>(null);
  const [isManualTaxCode, setIsManualTaxCode] = useState<boolean>(false);

  const isValidIncome = (value: string) => {
    const num = Number(value);
    return value !== '' && !isNaN(num) && num >= 0;
  };

  // Auto-suggest tax code when income or student loan status changes
  useEffect(() => {
    const currentIncome = inputMode === 'annual' ? Number(income) : Number(hourlyRate) * hoursPerWeek * 52;
    if (currentIncome > 0 && !isManualTaxCode) {
      const suggestion = suggestTaxCode(currentIncome, hasStudentLoan);
      setTaxCodeSuggestion(suggestion);
      setTaxCode(suggestion.taxCode);
    }
  }, [income, hourlyRate, hoursPerWeek, hasStudentLoan, inputMode, isManualTaxCode]);

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

  const itemVariants = {
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

  const sliderVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // const handleCalculate = () => {
  //   const incomeNumber = Number(income) || 0;
  //   const kiwiSaverRateToUse = includeKiwiSaver ? kiwiSaverRate : 0;
  //   onCalculate(incomeNumber, kiwiSaverRateToUse, hasStudentLoan);
  //   event({
  //     action: 'calculate_salary',
  //     category: 'engagement',
  //     label: 'salary_calculator',
  //     value: incomeNumber,
  //   });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const kiwiSaverRateToUse = includeKiwiSaver ? kiwiSaverRate : 0;
    
    if (inputMode === 'hourly') {
      const hourlyRateNumber = Number(hourlyRate) || 0;
      // Convert hourly to annual income
      const annualIncome = hourlyRateNumber * hoursPerWeek * 52;
      onCalculate(annualIncome, kiwiSaverRateToUse, hasStudentLoan, true, hoursPerWeek, taxCode);
      event({
        action: 'calculate_salary',
        category: 'engagement',
        label: 'hourly_calculator',
        value: hourlyRateNumber,
      });
    } else {
      const incomeNumber = Number(income) || 0;
      onCalculate(incomeNumber, kiwiSaverRateToUse, hasStudentLoan, false, undefined, taxCode);
      event({
        action: 'calculate_salary',
        category: 'engagement',
        label: 'salary_calculator',
        value: incomeNumber,
      });
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <motion.div
          className="space-y-4"
          variants={itemVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setInputMode('annual')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                inputMode === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Annual Salary
            </button>
            <button
              type="button"
              onClick={() => setInputMode('hourly')}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                inputMode === 'hourly'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Hourly Rate
            </button>
          </div>
        </motion.div>

        {inputMode === 'annual' ? (
          <motion.div
            className="space-y-2"
            variants={itemVariants}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <label className="text-sm font-medium">Annual Income</label>
            <Input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              pattern="[0-9]*"
              placeholder="e.g., 70000"
            />
          </motion.div>
        ) : (
          <motion.div
            className="space-y-4"
            variants={itemVariants}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Hourly Rate</label>
              <Input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                pattern="[0-9]*"
                placeholder="e.g., 35"
                step="0.01"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Hours per week: {hoursPerWeek}
              </label>
              <Slider
                defaultValue={[hoursPerWeek]}
                max={60}
                min={10}
                step={1}
                onValueChange={(value) => setHoursPerWeek(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>10 hrs</span>
                <span>Part-time</span>
                <span>Full-time</span>
                <span>60 hrs</span>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          className="space-y-3"
          variants={itemVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Tax Code</label>
            {taxCodeSuggestion && !isManualTaxCode && (
              <span className={`text-xs px-2 py-1 rounded-full ${
                taxCodeSuggestion.confidence === 'high' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                  : taxCodeSuggestion.confidence === 'medium'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
              }`}>
                Auto-suggested
              </span>
            )}
          </div>
          
          <select
            value={taxCode}
            onChange={(e) => {
              setTaxCode(e.target.value as TaxCode);
              setIsManualTaxCode(true);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {TAX_CODES.map((code) => (
              <option key={code.code} value={code.code}>
                {code.code} - {code.description}
              </option>
            ))}
          </select>

          {taxCodeSuggestion && (
            <div className={`text-xs p-3 rounded-lg ${
              taxCodeSuggestion.confidence === 'high' 
                ? 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/10 dark:border-green-800 dark:text-green-400'
                : taxCodeSuggestion.confidence === 'medium'
                ? 'bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-900/10 dark:border-blue-800 dark:text-blue-400'
                : 'bg-yellow-50 border border-yellow-200 text-yellow-700 dark:bg-yellow-900/10 dark:border-yellow-800 dark:text-yellow-400'
            }`}>
              <div className="flex items-start space-x-2">
                <span className="font-medium">
                  {isManualTaxCode ? 'Previous suggestion:' : 'Recommended:'} {taxCodeSuggestion.taxCode}
                </span>
              </div>
              <p className="mt-1">{taxCodeSuggestion.reason}</p>
              {isManualTaxCode && (
                <button
                  type="button"
                  onClick={() => {
                    setTaxCode(taxCodeSuggestion.taxCode);
                    setIsManualTaxCode(false);
                  }}
                  className="mt-2 text-xs underline hover:no-underline"
                >
                  Use suggested tax code
                </button>
              )}
            </div>
          )}
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          variants={itemVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Switch
            id="include-kiwisaver"
            checked={includeKiwiSaver}
            onCheckedChange={(checked) => setIncludeKiwiSaver(checked === true)}
          />
          <label htmlFor="include-kiwisaver" className="text-sm font-medium">
            Include KiwiSaver
          </label>
        </motion.div>

        <motion.div
          initial={includeKiwiSaver ? 'visible' : 'hidden'}
          animate={includeKiwiSaver ? 'visible' : 'hidden'}
          variants={sliderVariants}
          className="mb-2"
        >
          <motion.div
            className="space-y-2"
            variants={itemVariants}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <label className="text-sm font-medium">
              KiwiSaver Rate: {kiwiSaverRate}%
            </label>
            <Slider
              defaultValue={[kiwiSaverRate]}
              max={10}
              min={3}
              step={1}
              onValueChange={(value) => setKiwiSaverRate(value[0])}
              className="w-full"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 space-y-2"
          variants={itemVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Checkbox
            id="student-loan"
            checked={hasStudentLoan}
            onCheckedChange={(checked) => setHasStudentLoan(checked === true)}
          />
          <label htmlFor="student-loan" className="text-sm font-medium">
            I have a student loan
          </label>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Button
            type="submit"
            className="w-full"
            disabled={inputMode === 'annual' ? !isValidIncome(income) : !isValidIncome(hourlyRate)}
          >
            Calculate {inputMode === 'hourly' ? 'Hourly' : 'Salary'}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}
