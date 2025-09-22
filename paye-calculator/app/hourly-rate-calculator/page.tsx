
import Link from 'next/link';

export default function HourlyRateCalculatorPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hourly Rate Calculator New Zealand 2024/2025
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Convert your annual salary to hourly pay and understand your true hourly earning power
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
              🧮 Use Our Full Salary Calculator
            </h2>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              Get detailed hourly rate calculations including tax deductions, KiwiSaver, and take-home pay
            </p>
            <a 
              href="/" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Calculate Hourly Rate with Taxes
            </a>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h2>How to Calculate Hourly Rate from Annual Salary</h2>
            <p>
              Converting your annual salary to an hourly rate helps you understand your true earning power 
              and compare job offers effectively. Here's how to calculate it:
            </p>

            <h3>Basic Hourly Rate Formula</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
              <p className="text-center font-mono text-lg">
                <strong>Hourly Rate = Annual Salary ÷ (Hours per Week × 52 weeks)</strong>
              </p>
            </div>

            <h3>Standard Working Hours in New Zealand</h3>
            <ul>
              <li><strong>Full-time:</strong> 40 hours per week (2,080 hours annually)</li>
              <li><strong>Part-time:</strong> Varies, typically 20-35 hours per week</li>
              <li><strong>Maximum:</strong> 50 hours per week (without agreement for more)</li>
            </ul>

            <h3>Example Calculations</h3>
            <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 my-6">
              <h4 className="font-semibold mb-4">Salary: $70,000 per year</h4>
              <div className="space-y-2">
                <p><strong>40 hours/week:</strong> $70,000 ÷ 2,080 = <span className="text-green-600 font-semibold">$33.65/hour</span></p>
                <p><strong>37.5 hours/week:</strong> $70,000 ÷ 1,950 = <span className="text-green-600 font-semibold">$35.90/hour</span></p>
                <p><strong>45 hours/week:</strong> $70,000 ÷ 2,340 = <span className="text-green-600 font-semibant">$29.91/hour</span></p>
              </div>
            </div>

            <h2>Understanding Overtime Rates in New Zealand</h2>
            <p>
              New Zealand employment law requires overtime payments for certain types of work. 
              Understanding these rates is crucial for calculating your total hourly earnings.
            </p>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 my-6">
              <h3 className="text-orange-900 dark:text-orange-100 font-semibold mb-3">Overtime Requirements</h3>
              <ul className="space-y-2 text-orange-800 dark:text-orange-200">
                <li><strong>Time and a half:</strong> Often required for work over 8 hours/day or 40 hours/week</li>
                <li><strong>Double time:</strong> May apply for work on public holidays or after time and a half</li>
                <li><strong>Varies by agreement:</strong> Check your employment contract for specific rates</li>
              </ul>
            </div>

            <h2>Factors That Affect Your Hourly Rate</h2>
            <h3>Experience Level</h3>
            <ul>
              <li><strong>Entry Level:</strong> Often 10-20% below market average</li>
              <li><strong>Mid-Level:</strong> Market average rates</li>
              <li><strong>Senior Level:</strong> 20-50% above market average</li>
            </ul>

            <h3>Industry Variations</h3>
            <ul>
              <li><strong>Technology:</strong> Generally higher hourly rates ($30-70/hour)</li>
              <li><strong>Healthcare:</strong> Varies widely ($25-100/hour)</li>
              <li><strong>Retail:</strong> Often at or near minimum wage ($22.70/hour)</li>
              <li><strong>Professional Services:</strong> $30-80/hour depending on specialization</li>
            </ul>

            <h2>Take-Home vs Gross Hourly Rate</h2>
            <p>
              Your gross hourly rate is different from what you actually take home. 
              In New Zealand, deductions include:
            </p>
            
            <ul>
              <li><strong>PAYE Tax:</strong> 10.5% to 39% depending on income level</li>
              <li><strong>ACC Levy:</strong> Currently 1.6% of gross earnings</li>
              <li><strong>KiwiSaver:</strong> 3%, 4%, 6%, 8%, or 10% (if enrolled)</li>
              <li><strong>Student Loan:</strong> 12% on income above $22,828 annually</li>
            </ul>

            <h3>Example: $35/hour Take-Home Calculation</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 my-4">
              <p><strong>Gross:</strong> $35/hour × 2,080 hours = $72,800 annually</p>
              <p><strong>Tax & Levies:</strong> ~$18,200</p>
              <p><strong>KiwiSaver (3%):</strong> ~$2,184</p>
              <p><strong>Net Take-Home:</strong> ~$52,416 annually = <span className="text-green-600 font-semibold">$25.20/hour</span></p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-green-900 dark:text-green-100 font-semibold mb-3">💡 Pro Tip</h3>
              <p className="text-green-800 dark:text-green-200">
                When negotiating salary, consider the total package including benefits, holidays, 
                and working conditions, not just the hourly rate. A slightly lower rate with better 
                conditions might provide better value.
              </p>
            </div>
          </article>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
            <h3 className="font-semibold mb-4">Related Calculators</h3>
            <div className="space-y-3">
              <a href="/" className="block p-3 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">PAYE Tax Calculator</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Calculate full tax deductions</p>
              </a>
              <a href="/multiple-income" className="block p-3 bg-green-50 dark:bg-green-900/20 rounded hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors">
                <h4 className="font-semibold text-green-900 dark:text-green-100">Multiple Income Calculator</h4>
                <p className="text-sm text-green-700 dark:text-green-300">Calculate tax from multiple sources</p>
              </a>
              <a href="/salary-guide" className="block p-3 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Salary Guide</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Average salaries by profession</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
