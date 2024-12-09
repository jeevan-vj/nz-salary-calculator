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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <form 
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium">Annual Income</label>
          <Input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            pattern='[0-9]*'
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">KiwiSaver Rate: {kiwiSaverRate}%</label>
          <Slider
            defaultValue={[kiwiSaverRate]}
            max={10}
            min={3}
            step={1}
            onValueChange={(value) => setKiwiSaverRate(value[0])}
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="student-loan"
            checked={hasStudentLoan}
            onCheckedChange={(checked) => setHasStudentLoan(checked === true)}
          />
          <label htmlFor="student-loan" className="text-sm font-medium">
            I have a student loan
          </label>
        </div>

        <Button type="submit" className="w-full">
          Calculate
        </Button>
      </form>
    </motion.div>
  );
}