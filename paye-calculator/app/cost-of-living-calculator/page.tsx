"use client";

import { useMemo, useState } from "react";

const CITY_INDEX: Record<string, number> = {
  Auckland: 1,
  Wellington: 0.94,
  Christchurch: 0.86,
  Hamilton: 0.82,
  Dunedin: 0.79,
};

function requiredSalary(currentSalary: number, fromCity: string, toCity: string) {
  const fromIndex = CITY_INDEX[fromCity];
  const toIndex = CITY_INDEX[toCity];
  return (currentSalary / fromIndex) * toIndex;
}

export default function CostOfLivingCalculatorPage() {
  const [salary, setSalary] = useState(90000);
  const [fromCity, setFromCity] = useState("Auckland");
  const [toCity, setToCity] = useState("Christchurch");

  const equivalentSalary = useMemo(
    () => requiredSalary(salary, fromCity, toCity),
    [salary, fromCity, toCity],
  );

  const difference = equivalentSalary - salary;
  const direction = difference > 0 ? "higher" : "lower";

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">NZ Cost of Living Calculator</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Compare salary purchasing power across NZ cities and estimate the equivalent income
        needed when relocating.
      </p>

      <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Current Annual Salary (NZD)</span>
          <input
            type="number"
            min={0}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
          />
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium">Current City</span>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
            >
              {Object.keys(CITY_INDEX).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium">Target City</span>
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="mt-1 w-full rounded border px-3 py-2 bg-transparent"
            >
              {Object.keys(CITY_INDEX).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Equivalent Salary in {toCity}</h2>
        <p className="text-3xl font-bold mb-2">
          ${equivalentSalary.toLocaleString("en-NZ", { maximumFractionDigits: 0 })}
        </p>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          To maintain similar purchasing power, your salary in {toCity} should be{" "}
          <strong>{Math.abs(difference).toLocaleString("en-NZ", { maximumFractionDigits: 0 })}</strong>{" "}
          NZD {direction} than your {fromCity} salary.
        </p>
      </div>
    </main>
  );
}
