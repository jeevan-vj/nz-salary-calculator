export type IncomeType = 'primary' | 'secondary';
export type IncomeFrequency = 'hourly' | 'weekly' | 'fortnightly' | 'monthly' | 'yearly';

export interface IncomeSource {
  id: string;
  amount: number;
  frequency: IncomeFrequency;
  type: IncomeType;
  hours?: number; // For hourly rate
  weeks?: number; // For part-year employment
}

export interface IncomeSourceFormData extends Omit<IncomeSource, 'id'> {
  kiwiSaverRate: number;
  hasStudentLoan: boolean;
}
