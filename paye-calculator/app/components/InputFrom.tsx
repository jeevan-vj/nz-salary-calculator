import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { event } from '../utils/gtag';

interface InputFormProps {
  onCalculate: (income: number, kiwiSaverRate: number, hasStudentLoan: boolean) => void;
}

export default function InputForm({ onCalculate }: InputFormProps) {
  const [income, setIncome] = useState<string>("70000");
  const [kiwiSaverRate, setKiwiSaverRate] = useState<number>(3);
  const [hasStudentLoan, setHasStudentLoan] = useState<boolean>(false);

  const isValidIncome = (value: string) => {
    const num = Number(value);
    return value !== '' && !isNaN(num) && num >= 0;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const incomeNumber = Number(income) || 0;
    onCalculate(incomeNumber, kiwiSaverRate, hasStudentLoan);
    event({
      action: 'calculate_salary',
      category: 'engagement',
      label: 'salary_calculator',
      value: incomeNumber
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <form 
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <motion.div 
          className="space-y-2"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <label className="text-sm font-medium">Annual Income</label>
          <Input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            pattern='[0-9]*'
          />
        </motion.div>

        <motion.div 
          className="space-y-2"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <label className="text-sm font-medium">KiwiSaver Rate: {kiwiSaverRate}%</label>
          <Slider
            defaultValue={[kiwiSaverRate]}
            max={10}
            min={3}
            step={1}
            onValueChange={(value) => setKiwiSaverRate(value[0])}
            className="w-full"
          />
        </motion.div>

        <motion.div 
          className="flex items-center space-x-2"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
          whileHover={{ scale: isValidIncome(income) ? 1.05 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Button 
            type="submit" 
            className="w-full"
            disabled={!isValidIncome(income)}
          >
            Calculate
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}