
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface SalaryDistributionChartProps {
  grossIncome: number;
  paye: number;
  acc: number;
  kiwiSaver: number;
  studentLoan: number;
  netIncome: number;
}

export default function SalaryDistributionChart({
  grossIncome,
  paye,
  acc,
  kiwiSaver,
  studentLoan,
  netIncome,
}: SalaryDistributionChartProps) {
  const getPercentage = (value: number) => ((value / grossIncome) * 100).toFixed(1);

  const series = [
    parseFloat(getPercentage(netIncome)),
    parseFloat(getPercentage(paye)),
    parseFloat(getPercentage(acc)),
    parseFloat(getPercentage(kiwiSaver)),
    parseFloat(getPercentage(studentLoan)),
  ];

  const options: ApexOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Net Income', 'PAYE', 'ACC', 'KiwiSaver', 'Student Loan'],
    colors: ['#10B981', '#EF4444', '#F59E0B', '#3B82F6', '#8B5CF6'],
    legend: {
      position: 'bottom',
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Net Income',
              formatter: () => `${getPercentage(netIncome)}%`
            }
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-[400px] mt-4">
      <Chart 
        options={options}
        series={series}
        type="donut"
        height="100%"
      />
    </div>
  );
}