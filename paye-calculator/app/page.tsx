
"use client"
import Image from "next/image";
import { calculateTax, TaxCalculationResult } from "./utils/taxCalculator";
import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputFrom";
import ResultsDisplay from "./components/ResultsDisplay";
import Footer from "./components/Footer";

export default function Home() {

  const [results, setResults] = useState<TaxCalculationResult | null>(null);

  const handleCalculate = (
    income: number,
    kiwiSaverRate: number,
    hasStudentLoan: boolean
  ) => {
    const results = calculateTax(income, kiwiSaverRate, hasStudentLoan);
    setResults(results);
  };

  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <InputForm onCalculate={handleCalculate} />
        <ResultsDisplay results={results} />
      </div>
    </main>
    <Footer />
  </div>
  );
}
