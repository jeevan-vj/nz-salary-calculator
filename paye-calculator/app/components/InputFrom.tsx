import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

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
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label className="text-sm font-medium">Annual Income</label>
        <Input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          min="0"
          step="1000"
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
    </motion.form>
  );
}