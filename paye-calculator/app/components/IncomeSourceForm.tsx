'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { IncomeSource, IncomeFrequency, IncomeType } from '../types/income';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

interface IncomeSourceFormProps {
  onCalculate: (sources: IncomeSource[]) => void;
}

export default function IncomeSourceForm({ onCalculate }: IncomeSourceFormProps) {
  const [incomeSources, setIncomeSources] = useState<IncomeSource[]>([
    {
      id: '1',
      amount: 0,
      frequency: 'yearly',
      type: 'primary',
      hours: 40,
      weeks: 52
    }
  ]);

  const addIncomeSource = () => {
    setIncomeSources([
      ...incomeSources,
      {
        id: Math.random().toString(),
        amount: 0,
        frequency: 'yearly',
        type: 'secondary',
        hours: 40,
        weeks: 52
      }
    ]);
  };

  const removeIncomeSource = (id: string) => {
    setIncomeSources(incomeSources.filter(source => source.id !== id));
  };

  const updateIncomeSource = (id: string, updates: Partial<IncomeSource>) => {
    setIncomeSources(incomeSources.map(source => 
      source.id === id ? { ...source, ...updates } : source
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(incomeSources);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence>
        {incomeSources.map((source, index) => (
          <motion.div
            key={source.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-3 sm:p-4 border rounded-lg space-y-4 overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">
                {source.type === 'primary' ? 'Primary Income' : `Secondary Income ${index}`}
              </h3>
              {index > 0 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeIncomeSource(source.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-sm">Amount</Label>
                <Input
                  type="number"
                  value={source.amount || ''}
                  onChange={e => updateIncomeSource(source.id, { amount: Number(e.target.value) })}
                  placeholder="Enter amount"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm">Frequency</Label>
                <select
                  className="w-full p-2 border rounded-md text-sm"
                  value={source.frequency}
                  onChange={e => updateIncomeSource(source.id, { frequency: e.target.value as IncomeFrequency })}
                >
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                  <option value="fortnightly">Fortnightly</option>
                  <option value="weekly">Weekly</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>

              {source.frequency === 'hourly' && (
                <div className="space-y-2 col-span-full sm:col-span-1">
                  <Label>Hours per week</Label>
                  <Input
                    type="number"
                    value={source.hours || ''}
                    onChange={e => updateIncomeSource(source.id, { hours: Number(e.target.value) })}
                    placeholder="Hours per week"
                  />
                </div>
              )}

              <div className="space-y-2 col-span-full sm:col-span-1">
                <Label>Weeks per year</Label>
                <Input
                  type="number"
                  value={source.weeks || ''}
                  onChange={e => updateIncomeSource(source.id, { weeks: Number(e.target.value) })}
                  placeholder="Weeks per year"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={addIncomeSource}
          className="w-full order-2 sm:order-1"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Income Source
        </Button>
        <Button type="submit" className="w-full order-1 sm:order-2">Calculate</Button>
      </div>
    </form>
  );
}
