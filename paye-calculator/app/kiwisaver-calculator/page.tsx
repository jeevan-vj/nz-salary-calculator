
import Link from 'next/link';

export default function KiwiSaverCalculatorPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          KiwiSaver Calculator New Zealand 2024/2025
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Calculate your KiwiSaver contributions and see how they affect your take-home pay
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Minimum Rate</h3>
          <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">3%</p>
          <p className="text-sm text-blue-700 dark:text-blue-300">Employee contribution</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Employer Match</h3>
          <p className="text-2xl font-bold text-green-800 dark:text-green-200">3%</p>
          <p className="text-sm text-green-700 dark:text-green-300">Minimum required</p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
          <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Govt Contribution</h3>
          <p className="text-2xl font-bold text-purple-800 dark:text-purple-200">$521</p>
          <p className="text-sm text-purple-700 dark:text-purple-300">Maximum annually</p>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Maximum Rate</h3>
          <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">10%</p>
          <p className="text-sm text-orange-700 dark:text-orange-300">Employee contribution</p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
          🧮 Calculate Your KiwiSaver Impact
        </h2>
        <p className="text-green-800 dark:text-green-200 mb-4">
          Use our salary calculator to see exactly how different KiwiSaver rates affect your take-home pay
        </p>
        <Link 
          href="/" 
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Calculate with KiwiSaver
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Understanding KiwiSaver Contribution Rates</h2>
            <p>
              KiwiSaver is New Zealand's voluntary retirement savings scheme. As an employee, 
              you can choose to contribute 3%, 4%, 6%, 8%, or 10% of your gross salary.
            </p>

            <h3>Employee Contribution Options</h3>
            <div className="bg-white dark:bg-gray-800 border rounded-lg p-6 my-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">3% (Minimum)</span>
                  <span className="text-green-600">Good starting point</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">4%</span>
                  <span className="text-blue-600">Balanced approach</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">6%</span>
                  <span className="text-orange-600">Accelerated savings</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">8%</span>
                  <span className="text-purple-600">High saver</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">10% (Maximum)</span>
                  <span className="text-red-600">Maximum retirement focus</span>
                </div>
              </div>
            </div>

            <h3>Employer Contributions</h3>
            <p>
              Your employer must contribute at least 3% of your gross salary to your KiwiSaver 
              account. Some employers offer higher contribution rates as a benefit.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-6">
              <h4 className="text-blue-900 dark:text-blue-100 font-semibold mb-3">Key Points:</h4>
              <ul className="space-y-1 text-blue-800 dark:text-blue-200">
                <li>• Employer contributions are calculated on gross salary</li>
                <li>• Employer contributions don't count toward your tax</li>
                <li>• Some employers may contribute more than 3%</li>
                <li>• Employer contributions are subject to Employer Superannuation Contribution Tax (ESCT)</li>
              </ul>
            </div>

            <h2>Government Contributions (Member Tax Credit)</h2>
            <p>
              The government contributes up to $521.43 per year to your KiwiSaver account, 
              provided you contribute at least $1,042.86 annually.
            </p>

            <h3>How Government Contributions Work</h3>
            <ul>
              <li>Government matches 50 cents for every dollar you contribute</li>
              <li>Maximum government contribution: $521.43 per year</li>
              <li>You must contribute at least $1,042.86 to get the full government contribution</li>
              <li>Calculated from July 1st to June 30th each year</li>
            </ul>

            <h2>KiwiSaver Contribution Examples</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
              <h3 className="font-semibold mb-4">Annual Salary: $70,000</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 text-sm font-semibold border-b pb-2">
                  <span>Rate</span>
                  <span>Employee</span>
                  <span>Employer</span>
                  <span>Total</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <span>3%</span>
                  <span>$2,100</span>
                  <span>$2,100</span>
                  <span className="font-semibold">$4,200</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <span>4%</span>
                  <span>$2,800</span>
                  <span>$2,100</span>
                  <span className="font-semibold">$4,900</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <span>6%</span>
                  <span>$4,200</span>
                  <span>$2,100</span>
                  <span className="font-semibold">$6,300</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <span>8%</span>
                  <span>$5,600</span>
                  <span>$2,100</span>
                  <span className="font-semibold">$7,700</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <span>10%</span>
                  <span>$7,000</span>
                  <span>$2,100</span>
                  <span className="font-semibold">$9,100</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                * Plus up to $521.43 government contribution in all cases
              </p>
            </div>

            <h2>Impact on Take-Home Pay</h2>
            <p>
              KiwiSaver contributions reduce your take-home pay, but they're deducted before tax, 
              making them a tax-efficient way to save for retirement.
            </p>

            <h3>Take-Home Pay Reduction (Based on $70,000 salary)</h3>
            <div className="space-y-2 my-4">
              <div className="flex justify-between">
                <span>3% KiwiSaver:</span>
                <span>Take-home reduces by ~$1,575/year</span>
              </div>
              <div className="flex justify-between">
                <span>6% KiwiSaver:</span>
                <span>Take-home reduces by ~$3,150/year</span>
              </div>
              <div className="flex justify-between">
                <span>10% KiwiSaver:</span>
                <span>Take-home reduces by ~$5,250/year</span>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 my-8">
              <h3 className="text-green-900 dark:text-green-100 font-semibold mb-3">💡 Strategy Tip</h3>
              <p className="text-green-800 dark:text-green-200">
                Start with 3% to get the full employer match, then consider increasing gradually. 
                Even small increases can make a significant difference over time due to compound growth.
              </p>
            </div>
          </article>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg mb-6">
            <h3 className="font-semibold mb-4">Related Calculators</h3>
            <div className="space-y-3">
              <a href="/" className="block p-3 bg-blue-50 dark:bg-blue-900/20 rounded hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">PAYE Tax Calculator</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">Calculate with KiwiSaver</p>
              </a>
              <a href="/hourly-rate-calculator" className="block p-3 bg-orange-50 dark:bg-orange-900/20 rounded hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors">
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Hourly Rate Calculator</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">Convert salary to hourly</p>
              </a>
              <a href="/salary-guide" className="block p-3 bg-purple-50 dark:bg-purple-900/20 rounded hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors">
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Salary Guide</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Average salaries by profession</p>
              </a>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
            <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
              <li>• KiwiSaver is voluntary but auto-enrolled</li>
              <li>• You can take a contributions holiday</li>
              <li>• Funds are accessible at age 65</li>
              <li>• Can be used for first home purchase</li>
              <li>• Different fund types available (conservative, balanced, growth)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
