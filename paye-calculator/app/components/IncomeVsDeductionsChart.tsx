import { motion } from 'framer-motion';
import { TaxCalculationResult } from '../utils/taxCalculator';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IncomeVsDeductionsChartProps {
  results: TaxCalculationResult;
}

export default function IncomeVsDeductionsChart({ results }: IncomeVsDeductionsChartProps) {
  const totalDeductions = results.paye + results.acc + results.kiwiSaver + results.studentLoan;
  
  const chartData = {
    series: [results.netIncome, totalDeductions],
    options: {
      chart: {
        type: 'donut' as const,
        background: 'transparent',
        fontFamily: 'Inter, sans-serif',
      },
      colors: ['#10B981', '#EF4444'],
      labels: ['Take-Home Pay', 'Total Deductions'],
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '14px',
                fontWeight: 600,
                color: '#374151',
                formatter: function (val: string) {
                  return val;
                }
              },
              value: {
                show: true,
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#111827',
                formatter: function (val: string) {
                  return '$' + Number(val).toLocaleString('en-NZ', { 
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 0 
                  });
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total Income',
                fontSize: '14px',
                fontWeight: 600,
                color: '#6B7280',
                formatter: function () {
                  return '$' + results.grossIncome.toLocaleString('en-NZ', { 
                    minimumFractionDigits: 0, 
                    maximumFractionDigits: 0 
                  });
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
          colors: ['#FFFFFF']
        },
        formatter: function(val: number) {
          return val.toFixed(1) + '%';
        }
      },
      legend: {
        show: true,
        position: 'bottom' as const,
        horizontalAlign: 'center' as const,
        fontSize: '14px',
        fontWeight: 500,
        labels: {
          colors: ['#374151'],
          useSeriesColors: false
        }
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function(val: number) {
            return '$' + val.toLocaleString('en-NZ', { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2 
            });
          }
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
            height: 300
          },
          legend: {
            position: 'bottom' as const
          }
        }
      }]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 rounded-lg p-6 border"
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Income vs Deductions
      </h3>
      
      <div className="flex flex-col items-center">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width="100%"
          height={350}
        />
        
        <div className="grid grid-cols-2 gap-4 mt-4 w-full">
          <div className="text-center bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
            <p className="text-green-600 font-semibold text-lg">
              {((results.netIncome / results.grossIncome) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Take-Home Pay
            </p>
          </div>
          <div className="text-center bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
            <p className="text-red-600 font-semibold text-lg">
              {((totalDeductions / results.grossIncome) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Deductions
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}