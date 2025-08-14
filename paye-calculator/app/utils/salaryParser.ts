export interface ParsedSalary {
  value: number;
  formatted: string;
  isValid: boolean;
  originalInput: string;
}

export function parseSalaryInput(input: string): ParsedSalary {
  const originalInput = input;
  
  // Remove all non-numeric characters except decimal points
  const cleanInput = input
    .replace(/[$,\s]/g, '') // Remove $, commas, and spaces
    .replace(/[^\d.k]/gi, '') // Keep only digits, dots, and k
    .toLowerCase();

  let value = 0;
  let isValid = false;

  try {
    if (cleanInput.includes('k')) {
      // Handle "k" suffix (thousands)
      const numericPart = cleanInput.replace('k', '');
      const parsedValue = parseFloat(numericPart);
      if (!isNaN(parsedValue)) {
        value = parsedValue * 1000;
        isValid = true;
      }
    } else if (cleanInput !== '') {
      // Handle regular numeric input
      const parsedValue = parseFloat(cleanInput);
      if (!isNaN(parsedValue)) {
        value = parsedValue;
        isValid = true;
      }
    }
  } catch {
    isValid = false;
  }

  // Format the output value
  let formatted = '';
  if (isValid && value > 0) {
    if (value >= 1000) {
      formatted = value.toLocaleString('en-NZ', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    } else {
      formatted = value.toString();
    }
  }

  return {
    value: Math.round(value),
    formatted,
    isValid: isValid && value >= 0 && value <= 10000000, // Reasonable salary limits
    originalInput
  };
}

export function formatSalaryDisplay(value: number): string {
  if (value >= 1000) {
    return value.toLocaleString('en-NZ', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
  return value.toString();
}

export function getSalaryInputSuggestions(input: string): string[] {
  const suggestions: string[] = [];
  const parsed = parseSalaryInput(input);
  
  if (parsed.isValid && parsed.value > 0) {
    const value = parsed.value;
    
    // Add common format suggestions
    suggestions.push(`$${formatSalaryDisplay(value)}`);
    
    if (value >= 1000) {
      const kValue = value / 1000;
      if (kValue % 1 === 0) {
        suggestions.push(`${kValue}k`);
      } else {
        suggestions.push(`${kValue.toFixed(1)}k`);
      }
    }
    
    // Add nearby common salaries
    const commonSalaries = [
      40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000, 
      85000, 90000, 95000, 100000, 110000, 120000, 130000, 140000, 150000
    ];
    
    const nearbyCommon = commonSalaries.filter(salary => 
      Math.abs(salary - value) <= 5000 && salary !== value
    );
    
    nearbyCommon.forEach(salary => {
      suggestions.push(`$${formatSalaryDisplay(salary)}`);
    });
  }
  
  return suggestions.slice(0, 4); // Limit to 4 suggestions
}