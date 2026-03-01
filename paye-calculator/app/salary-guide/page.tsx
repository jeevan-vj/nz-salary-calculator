
import Link from 'next/link';

export default function SalaryGuidePage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl" itemScope itemType="https://schema.org/Article">
      <div className="mb-8">
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4" itemProp="headline">
          New Zealand Salary Guide 2026 - Average Salary NZ, Tax Rates & Take-Home Pay
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300" itemProp="description">
          Complete NZ average salary guide for 2026/2027. Find teacher salary NZ, minimum wage NZ, truck driver salary NZ and more. 
          Updated with latest IRD tax brackets and take-home pay calculations.
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span itemProp="datePublished" content="2024-01-01">Published: January 2024</span>
          <span className="mx-2">•</span>
          <span itemProp="dateModified" content="2026-01-07">Updated: January 2026</span>
        </div>
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
        <section id="average-salary-nz" className="mb-8">
          <h2>What is the Average Salary in NZ?</h2>
          <p>
            The <strong>average salary NZ</strong> is approximately $70,000 per year, which represents the median annual income 
            for full-time workers in New Zealand. The <strong>NZ average salary</strong> varies significantly by industry, 
            experience level, and location. Auckland typically offers higher salaries due to the higher cost of living, 
            while regional areas may have lower average incomes but also reduced living expenses.
          </p>
          <p>
            Understanding the average salary in NZ helps you benchmark your earnings and negotiate better pay. 
            Use our free <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">salary calculator NZ</Link> to 
            see exactly how much take-home pay you&apos;ll receive after PAYE tax, KiwiSaver, and other deductions.
          </p>
        </section>

        <h2>Understanding New Zealand Tax Brackets 2026/2027</h2>
        <p>
          New Zealand operates a progressive tax system where higher incomes are taxed at higher rates. 
          Understanding these tax brackets is crucial for calculating your take-home pay and making informed financial decisions.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 my-6 border">
          <h3>2026/2027 Tax Brackets</h3>
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
                  <td className="py-2">$0 - $15,600</td>
                  <td className="py-2">10.5%</td>
                  <td className="py-2">$0 - $1,638</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">$15,601 - $53,500</td>
                  <td className="py-2">17.5%</td>
                  <td className="py-2">$1,638 - $8,270.50</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">$53,501 - $78,100</td>
                  <td className="py-2">30%</td>
                  <td className="py-2">$8,270.50 - $15,650.50</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">$78,101 - $180,000</td>
                  <td className="py-2">33%</td>
                  <td className="py-2">$15,650.50 - $49,277.50</td>
                </tr>
                <tr>
                  <td className="py-2">$180,001+</td>
                  <td className="py-2">39%</td>
                  <td className="py-2">$49,277.50+</td>
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

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Transport & Logistics</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Truck Driver</span><span>$50,000 - $85,000</span></li>
              <li className="flex justify-between"><span>Delivery Driver</span><span>$45,000 - $60,000</span></li>
              <li className="flex justify-between"><span>Bus Driver</span><span>$45,000 - $65,000</span></li>
              <li className="flex justify-between"><span>Logistics Manager</span><span>$70,000 - $110,000</span></li>
            </ul>
          </div>
        </div>

        <section id="minimum-wage-nz" className="my-8 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
          <h2 className="text-yellow-900 dark:text-yellow-100 mt-0">Minimum Wage NZ</h2>
          <p className="text-yellow-800 dark:text-yellow-200">
            The <strong>minimum wage NZ</strong> (minimum wage New Zealand) is currently <strong>$23.95 per hour</strong> for 
            adult workers as of April 2026. This applies to employees aged 16 and over who are not starting-out or training workers.
          </p>
          <div className="my-4">
            <h4 className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">2026 Minimum Wage Rates:</h4>
            <ul className="space-y-1 text-yellow-800 dark:text-yellow-200">
              <li><strong>Adult minimum wage:</strong> $23.95 per hour</li>
              <li><strong>Starting-out wage:</strong> $19.16 per hour (80% of adult rate)</li>
              <li><strong>Training wage:</strong> $19.16 per hour (80% of adult rate)</li>
            </ul>
          </div>
          <p className="text-yellow-800 dark:text-yellow-200">
            At 40 hours per week, the minimum wage NZ equates to approximately <strong>$49,816 per year</strong> before tax. 
            Want to know your take-home pay on minimum wage?
          </p>
          <Link 
            href="/hourly-rate-calculator" 
            className="inline-block mt-3 bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors no-underline"
          >
            Calculate Minimum Wage Take-Home Pay
          </Link>
        </section>

        <section id="teacher-salary-nz" className="my-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-indigo-900 dark:text-indigo-100 mt-0">Teacher Salary NZ</h2>
          <p className="text-indigo-800 dark:text-indigo-200">
            <strong>Teacher salary NZ</strong> varies based on experience, qualifications, and the type of school. 
            Teachers salary NZ is determined by collective agreements negotiated between unions and the Ministry of Education.
          </p>
          <div className="my-4">
            <h4 className="text-indigo-900 dark:text-indigo-100 font-semibold mb-2">Teacher Salary Bands 2024/2025:</h4>
            <ul className="space-y-1 text-indigo-800 dark:text-indigo-200">
              <li><strong>Beginning Teacher:</strong> $55,000 - $60,000 per year</li>
              <li><strong>Primary Teacher (experienced):</strong> $60,000 - $75,000 per year</li>
              <li><strong>Secondary Teacher (experienced):</strong> $65,000 - $85,000 per year</li>
              <li><strong>Senior Teacher / HOD:</strong> $80,000 - $95,000 per year</li>
              <li><strong>Deputy Principal:</strong> $95,000 - $120,000 per year</li>
              <li><strong>Principal:</strong> $100,000 - $180,000+ per year</li>
            </ul>
          </div>
          <p className="text-indigo-800 dark:text-indigo-200">
            Teacher salary NZ includes additional allowances for responsibilities, qualifications (e.g., Masters degree), 
            and location (rural schools may offer incentives). Calculate your teacher take-home pay after PAYE and KiwiSaver:
          </p>
          <Link 
            href="/" 
            className="inline-block mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors no-underline"
          >
            Calculate Teacher Take-Home Pay
          </Link>
        </section>

        <section id="truck-driver-salary-nz" className="my-8 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
          <h2 className="text-teal-900 dark:text-teal-100 mt-0">Truck Driver Salary NZ</h2>
          <p className="text-teal-800 dark:text-teal-200">
            <strong>Truck driver salary NZ</strong> depends on the type of vehicle, routes driven, and experience level. 
            Long-haul drivers typically earn more than local delivery drivers due to the demanding nature of the work.
          </p>
          <div className="my-4">
            <h4 className="text-teal-900 dark:text-teal-100 font-semibold mb-2">Truck Driver Salary Ranges 2024/2025:</h4>
            <ul className="space-y-1 text-teal-800 dark:text-teal-200">
              <li><strong>Local Delivery Driver:</strong> $45,000 - $55,000 per year</li>
              <li><strong>Class 2 Truck Driver:</strong> $50,000 - $65,000 per year</li>
              <li><strong>Class 4 Truck Driver:</strong> $55,000 - $75,000 per year</li>
              <li><strong>Class 5 (Heavy) Truck Driver:</strong> $60,000 - $85,000 per year</li>
              <li><strong>Long-Haul / Interstate Driver:</strong> $70,000 - $95,000+ per year</li>
              <li><strong>Dangerous Goods Driver:</strong> $65,000 - $90,000 per year</li>
            </ul>
          </div>
          <p className="text-teal-800 dark:text-teal-200">
            Truck driver salary NZ can be higher with overtime, night shifts, and specialized endorsements. 
            Many drivers also receive allowances for meals and accommodation on long trips.
          </p>
          <Link 
            href="/" 
            className="inline-block mt-3 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors no-underline"
          >
            Calculate Truck Driver Take-Home Pay
          </Link>
        </section>

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
          <h3 className="text-orange-900 dark:text-orange-100 font-semibold mb-3">2026/2027 Student Loan Details</h3>
          <ul className="space-y-2 text-orange-800 dark:text-orange-200">
            <li><strong>Repayment Threshold:</strong> $24,128 annually</li>
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
