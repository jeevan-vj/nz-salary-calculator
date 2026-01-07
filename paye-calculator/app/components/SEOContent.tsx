'use client';

export default function SEOContent() {
  return (
    <div className="mt-16 space-y-12">
      {/* Main Content Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
        <article itemScope itemType="https://schema.org/Article">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent" itemProp="headline">
            New Zealand PAYE Calculator 2026 - Calculate Your Take-Home Pay
          </h2>
          
          <div className="prose dark:prose-invert max-w-none space-y-4 text-gray-700 dark:text-gray-300" itemProp="articleBody">
            <p className="text-lg leading-relaxed">
              Welcome to New Zealand's most comprehensive and accurate <strong>PAYE salary calculator</strong> for 2026. 
              Our free calculator helps you instantly calculate your take-home pay, PAYE tax deductions, KiwiSaver contributions, 
              student loan repayments, and ACC levies based on the latest IRD (Inland Revenue Department) tax rates.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              Why Use Our NZ Salary Calculator?
            </h3>
            
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>100% Free:</strong> No hidden costs, no registration required</li>
              <li><strong>IRD Compliant:</strong> Updated with latest 2025/2026 tax rates and thresholds</li>
              <li><strong>Comprehensive:</strong> Includes PAYE tax, ACC levy, KiwiSaver, and student loan calculations</li>
              <li><strong>Instant Results:</strong> Get accurate calculations in seconds</li>
              <li><strong>Mobile Friendly:</strong> Calculate on any device, anywhere</li>
              <li><strong>Privacy First:</strong> All calculations happen in your browser - we don't store your data</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              Understanding New Zealand PAYE Tax Rates 2026
            </h3>
            
            <p>
              PAYE (Pay As You Earn) is New Zealand's income tax system where tax is deducted from your salary 
              before you receive it. Our calculator uses the current IRD tax brackets:
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300 dark:border-gray-700">
                <thead className="bg-blue-50 dark:bg-blue-900/20">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Income Range</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Tax Rate</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$0 - $14,000</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">10.5%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lower tax bracket</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$14,001 - $48,000</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">17.5%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Middle tax bracket</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$48,001 - $70,000</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">30%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Higher tax bracket</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$70,001 - $180,000</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">33%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Top tax bracket</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">$180,001+</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">39%</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Highest earners</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              What's Included in Our Calculations?
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-300">💰 PAYE Tax</h4>
                <p className="text-sm">
                  Calculated using IRD progressive tax brackets. The more you earn, the higher the rate 
                  on income above each threshold.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 className="font-bold text-lg mb-2 text-green-900 dark:text-green-300">🏥 ACC Levy</h4>
                <p className="text-sm">
                  Accident Compensation Corporation earner levy (currently 1.53% for 2025/2026) is 
                  automatically included in calculations.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h4 className="font-bold text-lg mb-2 text-purple-900 dark:text-purple-300">🏦 KiwiSaver</h4>
                <p className="text-sm">
                  Choose from 3%, 4%, 6%, 8%, or 10% contribution rates. Employer contributions (3%) 
                  are shown separately.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h4 className="font-bold text-lg mb-2 text-orange-900 dark:text-orange-300">🎓 Student Loan</h4>
                <p className="text-sm">
                  12% repayment rate on income above $23,492 threshold (2025/2026). Toggle on/off as needed.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              How to Use the NZ PAYE Calculator
            </h3>

            <ol className="space-y-3 list-decimal list-inside">
              <li className="leading-relaxed">
                <strong>Enter Your Salary:</strong> Input your annual salary or hourly rate in the calculator on the left
              </li>
              <li className="leading-relaxed">
                <strong>Select KiwiSaver Rate:</strong> Choose your contribution percentage (3-10%)
              </li>
              <li className="leading-relaxed">
                <strong>Add Student Loan:</strong> Toggle if you have a student loan requiring repayments
              </li>
              <li className="leading-relaxed">
                <strong>Choose Tax Code:</strong> Select your IRD tax code (M, M SL, ME, ME SL, etc.)
              </li>
              <li className="leading-relaxed">
                <strong>View Results:</strong> Instantly see your take-home pay broken down by annual, monthly, fortnightly, weekly, daily, and hourly amounts
              </li>
            </ol>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              Common Salary Calculations in New Zealand
            </h3>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-3">
              <h4 className="font-bold text-lg text-gray-900 dark:text-white">Popular Salary Queries:</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm">
                <li>✓ $50,000 salary after tax NZ</li>
                <li>✓ $60,000 take home pay calculator</li>
                <li>✓ $70,000 net salary NZ</li>
                <li>✓ $80,000 after tax New Zealand</li>
                <li>✓ $100,000 salary take home pay</li>
                <li>✓ $120,000 net income NZ</li>
                <li>✓ Minimum wage calculator NZ</li>
                <li>✓ Living wage take home pay</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              NZ Tax Year Information
            </h3>

            <p>
              The New Zealand tax year runs from <strong>1 April to 31 March</strong>. Our calculator is always 
              updated with the latest tax rates and thresholds for the current tax year (2025/2026). 
              IRD reviews and updates tax rates annually, and we ensure our calculator reflects these changes immediately.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
              Who Should Use This Calculator?
            </h3>

            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Job Seekers:</strong> Compare salary offers and understand actual take-home pay</li>
              <li><strong>Employees:</strong> Verify your payslip accuracy and plan your budget</li>
              <li><strong>Contractors:</strong> Calculate expected tax obligations</li>
              <li><strong>Employers:</strong> Estimate total employment costs</li>
              <li><strong>Students:</strong> Understand part-time work income after deductions</li>
              <li><strong>Migrants:</strong> Plan your financial move to New Zealand</li>
            </ul>
          </div>
        </article>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Frequently Asked Questions About NZ Salary & PAYE Tax
        </h2>

        <div className="space-y-6">
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              How accurate is this NZ salary calculator?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                Our calculator is highly accurate and uses the official IRD (Inland Revenue Department) tax rates, 
                ACC levy rates, and student loan repayment thresholds for the 2025/2026 tax year. We update the 
                calculator immediately when IRD announces any rate changes. The calculator includes all major 
                deductions: PAYE tax, ACC earner levy, KiwiSaver contributions (at various rates), and student loan 
                repayments, providing you with precise take-home pay calculations.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              What is PAYE and how does it work in New Zealand?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                PAYE (Pay As You Earn) is New Zealand's income tax collection system where tax is automatically 
                deducted from your salary or wages before you receive payment. Your employer calculates and deducts 
                the correct amount of tax based on your tax code and income, then forwards it to IRD on your behalf. 
                New Zealand uses a progressive tax system with rates ranging from 10.5% to 39% depending on your 
                income level.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              What KiwiSaver contribution rates can I choose?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                You can choose to contribute 3%, 4%, 6%, 8%, or 10% of your gross salary to KiwiSaver. The minimum 
                employee contribution is 3%. Your employer is required to contribute a minimum of 3% of your gross 
                salary (up to the employer superannuation contribution tax threshold). The government may also add 
                up to $521.43 per year if you meet eligibility criteria. Our calculator shows your contribution, 
                your employer's contribution, and your take-home pay after KiwiSaver deductions.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              How are student loan repayments calculated?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                Student loan repayments are automatically deducted through PAYE if you earn above the repayment 
                threshold ($23,492 for 2025/2026). The repayment rate is 12% of your income above this threshold. 
                For example, if you earn $50,000 annually, you'll pay 12% on the amount above $23,492 
                ($26,508 × 12% = $3,181 per year). Our calculator automatically includes this calculation when 
                you toggle the student loan option.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              What is the ACC levy and why is it deducted?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                The ACC (Accident Compensation Corporation) earner levy is a compulsory payment that funds 
                New Zealand's no-fault accident insurance scheme. For the 2025/2026 year, the levy is 1.53% of 
                your gross earnings (up to the maximum liable earnings threshold of $139,384). This levy covers 
                you for accidents both at work and outside of work. It's automatically deducted from your pay 
                through PAYE, and our calculator includes it in all calculations.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              Which tax code should I use?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                The most common tax codes in New Zealand are: <strong>M</strong> (main source of income with tax code M), 
                <strong>M SL</strong> (M with student loan), <strong>ME</strong> (main source with eligibility for IETC), 
                <strong>S</strong> (secondary income), <strong>ST</strong> (secondary income with student loan). 
                Use 'M' if this is your main or only source of income and you don't have a student loan. Use 'M SL' if you 
                have a student loan. If you have multiple jobs, use 'M' for your main job and 'S' for secondary jobs. 
                Check with IRD if unsure about your tax code.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              Can I use this calculator for hourly wages?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                Yes! Our calculator supports both annual salary and hourly rate calculations. Simply select the hourly 
                rate option, enter your hourly wage and hours worked per week, and the calculator will show you annual, 
                monthly, fortnightly, weekly, daily, and hourly take-home pay. This is perfect for part-time workers, 
                casual employees, or anyone paid by the hour who wants to understand their net income after all deductions.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              Is my salary information private and secure?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                Absolutely! All calculations are performed entirely in your web browser using JavaScript. Your salary 
                information is never sent to our servers, stored in a database, or shared with anyone. We respect your 
                privacy completely - there's no registration required, no accounts to create, and no data collection. 
                You can use the calculator with complete confidence that your financial information remains private.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              What's the difference between gross and net salary?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                <strong>Gross salary</strong> is your total income before any deductions - this is the amount in your 
                employment contract. <strong>Net salary</strong> (or take-home pay) is what you actually receive in 
                your bank account after all deductions including PAYE tax, ACC levy, KiwiSaver contributions, and 
                student loan repayments. Our calculator clearly shows both figures and the breakdown of all deductions, 
                helping you understand exactly where your money goes.
              </p>
            </div>
          </div>

          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" itemProp="name">
              When should I use the multiple income calculator?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed" itemProp="text">
                Use our multiple income calculator if you have more than one job or source of income. Having multiple 
                income sources can affect your tax obligations because you might move into higher tax brackets. The 
                calculator helps you understand your total tax liability across all income sources and ensures you're 
                using the correct tax codes (M for main income, S for secondary income) to avoid owing tax at the end 
                of the year or having too much tax deducted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Keywords Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Related Tools & Calculators
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-bold text-blue-600 dark:text-blue-400">Salary Calculators</h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• Annual salary calculator</li>
              <li>• Monthly pay calculator</li>
              <li>• Fortnightly pay calculator</li>
              <li>• Weekly wage calculator</li>
              <li>• Hourly rate calculator</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-blue-600 dark:text-blue-400">Tax & Deductions</h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• PAYE tax calculator</li>
              <li>• Income tax calculator NZ</li>
              <li>• Tax bracket calculator</li>
              <li>• ACC levy calculator</li>
              <li>• Net vs gross calculator</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-blue-600 dark:text-blue-400">Savings & Retirement</h3>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400">
              <li>• KiwiSaver calculator</li>
              <li>• Retirement savings calculator</li>
              <li>• Student loan calculator</li>
              <li>• Take-home pay calculator</li>
              <li>• Budget planning tool</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
