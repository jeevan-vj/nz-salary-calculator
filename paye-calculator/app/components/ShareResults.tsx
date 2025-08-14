import { motion } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';
import { Share2, Copy, Download, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareResultsProps {
  results: TaxCalculationResult;
}

export default function ShareResults({ results }: ShareResultsProps) {
  const [copied, setCopied] = useState(false);

  const generateShareText = () => {
    const takeHomePercentage = ((results.netIncome / results.grossIncome) * 100).toFixed(1);
    return `NZ Salary Calculator Results:
💰 Gross Income: $${results.grossIncome.toLocaleString('en-NZ')}
✨ Take-Home Pay: $${results.netIncome.toLocaleString('en-NZ')} (${takeHomePercentage}%)
📊 PAYE Tax: $${results.paye.toLocaleString('en-NZ')}
🛡️ ACC Levy: $${results.acc.toLocaleString('en-NZ')}
🏦 KiwiSaver: $${results.kiwiSaver.toLocaleString('en-NZ')}
${results.hasStudentLoan ? `🎓 Student Loan: $${results.studentLoan.toLocaleString('en-NZ')}` : ''}

Calculate your own at: https://nzpayecalculator.co.nz`;
  };

  const generateShareURL = () => {
    const params = new URLSearchParams({
      income: results.grossIncome.toString(),
      kiwisaver: results.kiwiSaverRate.toString(),
      studentloan: results.hasStudentLoan.toString(),
      taxcode: results.taxCode
    });
    return `${window.location.origin}?${params.toString()}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generateShareText();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'NZ Salary Calculator Results',
          text: generateShareText(),
          url: generateShareURL()
        });
      } catch {
        console.log('Share cancelled');
      }
    } else {
      // Fallback to copy
      copyToClipboard();
    }
  };

  const downloadResults = () => {
    const content = `New Zealand Salary Calculator Results
Generated on: ${new Date().toLocaleDateString('en-NZ')}

=== INCOME BREAKDOWN ===
Gross Annual Income: $${results.grossIncome.toLocaleString('en-NZ')}
Tax Code: ${results.taxCode}

=== DEDUCTIONS ===
PAYE Tax: $${results.paye.toLocaleString('en-NZ')} (${results.effectiveTaxRate.toFixed(1)}%)
ACC Earners' Levy: $${results.acc.toLocaleString('en-NZ')}
KiwiSaver Contribution: $${results.kiwiSaver.toLocaleString('en-NZ')} (${results.kiwiSaverRate}%)
${results.hasStudentLoan ? `Student Loan Repayment: $${results.studentLoan.toLocaleString('en-NZ')}` : ''}

=== NET INCOME ===
Annual Take-Home Pay: $${results.netIncome.toLocaleString('en-NZ')}
Monthly Take-Home Pay: $${results.monthly.netIncome.toLocaleString('en-NZ')}
Fortnightly Take-Home Pay: $${results.fortnightly.netIncome.toLocaleString('en-NZ')}
Weekly Take-Home Pay: $${results.weekly.netIncome.toLocaleString('en-NZ')}
Daily Take-Home Pay: $${(results.weekly.netIncome / 5).toLocaleString('en-NZ')}
Hourly Take-Home Pay: $${results.hourly.netIncome.toLocaleString('en-NZ')}

=== TAX INFORMATION ===
Current Tax Bracket: ${results.currentTaxBracket}%
${results.nextTaxBracket ? `Next Tax Bracket: ${results.nextTaxBracket}%` : ''}
Effective Tax Rate: ${results.effectiveTaxRate.toFixed(2)}%

Generated using NZ PAYE Calculator - https://nzpayecalculator.co.nz
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nz-salary-calculation-${results.grossIncome}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-900 rounded-lg p-4 border"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        Share Results
      </h3>
      
      <div className="flex flex-wrap gap-2">
        <button
          onClick={shareNative}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>
        
        <button
          onClick={copyToClipboard}
          disabled={copied}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
        
        <button
          onClick={downloadResults}
          className="flex items-center space-x-2 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </button>
      </div>
      
      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Share your calculation results or save them for later reference
      </div>
    </motion.div>
  );
}