"use client";
import { useTheme } from '../theme/ThemeProvider';
import Head from 'next/head';
import { siteMetadata } from '../metadata';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://nzsalarycalculator.co.nz"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Salary Calculator",
              "item": "https://nzsalarycalculator.co.nz/calculator"
            }]
          })}
        </script>
      </Head>
      <header className="p-4 border-b bg-background" role="banner">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto text-sm mb-2">
          <ol className="flex">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li className="mx-2">/</li>
            <li aria-current="page">Calculator</li>
          </ol>
        </nav>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="block text-sm text-gray-600 dark:text-gray-400">Free Online</span>
            NZ Salary Calculator
            <span className="block text-sm text-gray-600 dark:text-gray-400">PAYE & Tax Calculator</span>
          </h1>
          <button
            onClick={toggleTheme}
            className="btn"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>
    </>
  );
}
