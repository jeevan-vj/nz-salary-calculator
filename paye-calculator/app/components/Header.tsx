'use client';

import { useTheme } from '../theme/ThemeProvider';
import Head from 'next/head';
import Link from 'next/link';
import { siteMetadata } from '../metadata';
import Navigation from './Navigation';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 border-b bg-background sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb" className="text-sm mb-2 overflow-x-auto scrollbar-hide">
          <ol className="flex">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mx-2">/</li>
            <li aria-current="page">Calculator</li>
          </ol>
        </nav>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="block text-sm text-gray-600 dark:text-gray-400">
              Free Online
            </span>
            NZ Salary Calculator
            <span className="block text-sm text-gray-600 dark:text-gray-400">
              PAYE & Tax Calculator
            </span>
          </h1>
          
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <Navigation />
            <button
              onClick={toggleTheme}
              className="btn shrink-0"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
      
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://nzsalarycalculator.co.nz',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Salary Calculator',
                item: 'https://nzsalarycalculator.co.nz/calculator',
              },
            ],
          })}
        </script>
      </Head>
    </header>
  );
}
