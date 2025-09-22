'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const pathMapping: Record<string, string> = {
  '/': 'Home',
  '/paye-calculator': 'PAYE Calculator',
  '/multiple-income': 'Multiple Income Calculator',
  '/salary-guide': 'Salary Guide',
  '/hourly-rate-calculator': 'Hourly Rate Calculator',
  '/kiwisaver-calculator': 'KiwiSaver Calculator',
};

export default function BreadcrumbNavigation() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];
  
  // Add current page
  const currentPageLabel = pathMapping[pathname] || pathname.replace('/', '').replace('-', ' ');
  breadcrumbItems.push({ label: currentPageLabel });
  
  return (
    <nav className="bg-gray-50 dark:bg-gray-800/50 border-b dark:border-gray-700" aria-label="Breadcrumb">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="mx-2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
