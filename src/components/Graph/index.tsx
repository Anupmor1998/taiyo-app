import { useGraph } from '../../hooks/useGraph';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import DataLoader from '../DataLoader';
import { convertToAverageMonthCases } from '../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Line Chart - Cases',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      //   max: 10000000000,
      //   min: 0,
    },
  },
};

const Graph = () => {
  const { data, isLoading } = useGraph();

  const averageMonthCases = convertToAverageMonthCases(data?.cases);
  const averageLabels = averageMonthCases && Object.keys(averageMonthCases);
  const averageMonthDeaths = convertToAverageMonthCases(data?.deaths);
  const averageMonthRecovered = convertToAverageMonthCases(data?.recovered);

  const lineData = {
    labels: averageLabels || [],
    datasets: [
      {
        label: 'Cases',
        data: averageMonthCases || [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Deaths',
        data: averageMonthDeaths || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192,0.5)',
      },
      {
        label: 'Recovered',
        data: averageMonthRecovered || [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="w-full">
      {isLoading ? (
        <DataLoader />
      ) : (
        <div className="w-full h-[50vh] lg:h-[calc(100vh-4.5rem)]">
          <Line options={options} data={lineData} />
        </div>
      )}
    </div>
  );
};

export default Graph;
