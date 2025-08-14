import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { parseSalaryInput, formatSalaryDisplay, getSalaryInputSuggestions } from '../utils/salaryParser';
import { Check, DollarSign, TrendingUp } from 'lucide-react';

interface SmartSalaryInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  showSlider?: boolean;
}

export default function SmartSalaryInput({
  value,
  onChange,
  label,
  placeholder = "e.g., 70000 or 70k",
  min = 20000,
  max = 200000,
  step = 1000,
  showSlider = true
}: SmartSalaryInputProps) {
  const [focused, setFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const parsed = parseSalaryInput(value);

  useEffect(() => {
    if (value && value.length > 1) {
      const newSuggestions = getSalaryInputSuggestions(value);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0 && focused);
    } else {
      setShowSuggestions(false);
    }
  }, [value, focused]);

  const handleSliderChange = (sliderValue: number[]) => {
    const newValue = sliderValue[0];
    onChange(newValue.toString());
  };

  const handleSuggestionClick = (suggestion: string) => {
    const suggestionParsed = parseSalaryInput(suggestion);
    if (suggestionParsed.isValid) {
      onChange(suggestionParsed.value.toString());
    }
    setShowSuggestions(false);
  };

  const sliderValue = parsed.isValid ? parsed.value : min;
  const commonSalaries = [25000, 35000, 45000, 55000, 65000, 75000, 85000, 100000, 120000, 150000, 200000];

  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">{label}</label>
        {parsed.isValid && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400"
          >
            <Check className="h-3 w-3" />
            <span>${parsed.formatted}</span>
          </motion.div>
        )}
      </div>

      <div className="relative">
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder={placeholder}
            className={`pl-10 pr-4 ${
              value && !parsed.isValid 
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                : parsed.isValid 
                ? 'border-green-300 focus:border-green-500 focus:ring-green-500'
                : ''
            }`}
          />
        </div>

        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg"
            >
              <div className="py-1">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between group"
                  >
                    <span>{suggestion}</span>
                    <TrendingUp className="h-3 w-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showSlider && parsed.isValid && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Quick adjust:</span>
            <span>${formatSalaryDisplay(sliderValue)}</span>
          </div>
          
          <Slider
            value={[sliderValue]}
            onValueChange={handleSliderChange}
            min={min}
            max={max}
            step={step}
            className="w-full"
          />
          
          <div className="flex justify-between text-xs text-gray-400">
            <span>${formatSalaryDisplay(min)}</span>
            <span>${formatSalaryDisplay(max)}</span>
          </div>

          {/* Quick salary buttons */}
          <div className="flex flex-wrap gap-1">
            {commonSalaries
              .filter(salary => salary >= min && salary <= max)
              .map((salary) => (
                <button
                  key={salary}
                  type="button"
                  onClick={() => onChange(salary.toString())}
                  className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                    sliderValue === salary
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600'
                  }`}
                >
                  {salary >= 1000 ? `${salary / 1000}k` : salary}
                </button>
              ))}
          </div>
        </motion.div>
      )}

      {value && !parsed.isValid && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-red-500 dark:text-red-400"
        >
          Please enter a valid salary amount (e.g., 70000, 70k, $70,000)
        </motion.div>
      )}
    </motion.div>
  );
}