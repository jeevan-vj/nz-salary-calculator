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
  const [income, setIncome] = useState<number>(70000);
  const [kiwiSaverRate, setKiwiSaverRate] = useState<number>(3);
  const [hasStudentLoan, setHasStudentLoan] = useState<boolean>(false);

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
    onCalculate(income, kiwiSaverRate, hasStudentLoan);
    event({
      action: 'calculate_salary',
      category: 'engagement',
      label: 'salary_calculator',
      value: income
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
            onChange={(e) => setIncome(Number(e.target.value))}
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
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          <Button type="submit" className="w-full">
            Calculate
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}