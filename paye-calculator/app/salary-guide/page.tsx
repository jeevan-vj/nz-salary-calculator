
import Link from 'next/link';

export default function SalaryGuidePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          New Zealand Salary Guide 2024/2025
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Everything you need to know about salaries, tax rates, and take-home pay in New Zealand
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Average NZ Salary</h3>
          <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">$70,000</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Median annual income</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Top Tax Rate</h3>
          <p className="text-2xl font-bold text-green-800 dark:text-green-200">39%</p>
          <p className="text-sm text-green-700 dark:text-green-300">On income over $180,000</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Tax-Free Threshold</h3>
          <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">$14,000</p>
          <p className="text-sm text-purple-700 dark:text-purple-300">Annual tax-free amount</p>
        </div>
      </div>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Understanding New Zealand Tax Brackets 2024/2025</h2>
        <p>
          New Zealand operates a progressive tax system where higher incomes are taxed at higher rates. 
          Understanding these tax brackets is crucial for calculating your take-home pay and making informed financial decisions.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 my-6 border">
          <h3>2024/2025 Tax Brackets</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Income Range</th>
                  <th className="text-left py-2">Tax Rate</th>
                  <th className="text-left py-2">Tax on Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">$0 - $14,000</td>
                  <td className="py-2">10.5%</td>
                  <td className="py-2">$0 - $1,470</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">$14,001 - $48,000</td>
                  <td className="py-2">17.5%</td>
                  <td className="py-2">$1,470 - $7,420</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">$48,001 - $70,000</td>
                  <td className="py-2">30%</td>
                  <td className="py-2">$7,420 - $14,020</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">$70,001 - $180,000</td>
                  <td className="py-2">33%</td>
                  <td className="py-2">$14,020 - $50,320</td>
                </tr>
                <tr>
                  <td className="py-2">$180,001+</td>
                  <td className="py-2">39%</td>
                  <td className="py-2">$50,320+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Average Salaries by Profession in New Zealand</h2>
        <p>
          Salary expectations vary significantly across different industries and experience levels. 
          Here's a breakdown of average salaries across popular professions in New Zealand:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Technology & IT</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Software Developer</span><span>$65,000 - $120,000</span></li>
              <li className="flex justify-between"><span>Data Scientist</span><span>$80,000 - $130,000</span></li>
              <li className="flex justify-between"><span>IT Manager</span><span>$90,000 - $150,000</span></li>
              <li className="flex justify-between"><span>DevOps Engineer</span><span>$75,000 - $125,000</span></li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Healthcare</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Registered Nurse</span><span>$55,000 - $80,000</span></li>
              <li className="flex justify-between"><span>General Practitioner</span><span>$120,000 - $200,000</span></li>
              <li className="flex justify-between"><span>Physiotherapist</span><span>$60,000 - $85,000</span></li>
              <li className="flex justify-between"><span>Pharmacist</span><span>$65,000 - $95,000</span></li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Finance & Business</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Accountant</span><span>$50,000 - $85,000</span></li>
              <li className="flex justify-between"><span>Financial Analyst</span><span>$60,000 - $95,000</span></li>
              <li className="flex justify-between"><span>Business Analyst</span><span>$65,000 - $100,000</span></li>
              <li className="flex justify-between"><span>Project Manager</span><span>$70,000 - $110,000</span></li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Education & Training</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Primary Teacher</span><span>$50,000 - $75,000</span></li>
              <li className="flex justify-between"><span>Secondary Teacher</span><span>$55,000 - $85,000</span></li>
              <li className="flex justify-between"><span>University Lecturer</span><span>$70,000 - $120,000</span></li>
              <li className="flex justify-between"><span>Principal</span><span>$90,000 - $140,000</span></li>
            </ul>
          </div>
        </div>

        <h2>KiwiSaver and Retirement Savings</h2>
        <p>
          KiwiSaver is New Zealand's voluntary retirement savings scheme. Understanding how KiwiSaver contributions 
          affect your take-home pay is essential for financial planning.
        </p>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-6">
          <h3 className="text-blue-900 dark:text-blue-100 font-semibold mb-3">KiwiSaver Contribution Rates</h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200">
            <li><strong>Employee:</strong> 3%, 4%, 6%, 8%, or 10% of gross salary</li>
            <li><strong>Employer:</strong> Minimum 3% of gross salary (compulsory)</li>
            <li><strong>Government:</strong> Up to $521.43 annually (member tax credit)</li>
          </ul>
        </div>

        <h2>Student Loan Repayments</h2>
        <p>
          If you have a student loan, repayments are automatically deducted from your salary when your income 
          exceeds the repayment threshold.
        </p>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-6">
          <h3 className="text-orange-900 dark:text-orange-100 font-semibold mb-3">2024/2025 Student Loan Details</h3>
          <ul className="space-y-2 text-orange-800 dark:text-orange-200">
            <li><strong>Repayment Threshold:</strong> $22,828 annually</li>
            <li><strong>Repayment Rate:</strong> 12% on income above threshold</li>
            <li><strong>Interest Rate:</strong> 0% for NZ residents</li>
          </ul>
        </div>

        <h2>Maximizing Your Take-Home Pay</h2>
        <p>Here are some strategies to optimize your take-home pay in New Zealand:</p>
        
        <ol>
          <li><strong>Optimize KiwiSaver Contributions:</strong> Balance employer matching with tax benefits</li>
          <li><strong>Understand Tax Codes:</strong> Ensure you're on the correct tax code (M, ME, SB, etc.)</li>
          <li><strong>Salary Packaging:</strong> Consider non-cash benefits where available</li>
          <li><strong>Professional Development:</strong> Invest in skills that command higher salaries</li>
        </ol>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
          <h3 className="text-green-900 dark:text-green-100 font-semibold mb-3">🧮 Calculate Your Take-Home Pay</h3>
          <p className="text-green-800 dark:text-green-200 mb-4">
            Use our free salary calculator to instantly calculate your take-home pay, including all deductions.
          </p>
            <Link 
              href="/" 
              className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Calculate My Salary
            </Link>
        </div>
      </article>
    </main>
  );
}
