'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Main Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🧮</div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                NZ Salary Calculator
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              New Zealand&apos;s most accurate and comprehensive salary calculator. 
              Calculate PAYE tax, take-home pay, and plan your finances with confidence.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  PAYE Tax Calculator
                </Link>
              </li>
              <li>
                <Link href="/multiple-income" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Multiple Income Calculator
                </Link>
              </li>
              <li>
                <Link href="/hourly-rate-calculator" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Hourly Rate Calculator
                </Link>
              </li>
              <li>
                <Link href="/kiwisaver-calculator" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  KiwiSaver Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/salary-guide" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  NZ Salary Guide
                </Link>
              </li>
              <li>
                <a href="https://www.ird.govt.nz" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  IRD Official Website
                </a>
              </li>
              <li>
                <a href="https://www.employment.govt.nz" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Employment.govt.nz
                </a>
              </li>
              <li>
                <a href="https://www.kiwisaver.govt.nz" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  KiwiSaver Official Site
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tax Year 2024/2025</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>✓ Latest IRD tax rates</li>
              <li>✓ Current ACC levies</li>
              <li>✓ Student loan thresholds</li>
              <li>✓ KiwiSaver rates</li>
              <li>✓ 100% Free to use</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} NZ Salary Calculator. Free salary and tax calculation tools for New Zealand.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Tax calculations based on current IRD rates and regulations
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}