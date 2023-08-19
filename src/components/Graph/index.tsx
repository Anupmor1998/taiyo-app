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
  const { data } = useGraph();

  const labels = data && Object.keys(data);
  const caseData = labels && labels.map((label: string) => data[label]);

  const lineData = {
    labels: labels || [],
    datasets: [
      {
        label: 'Cases',
        data: caseData || [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="w-full h-full">
        <Line options={options} data={lineData} />
      </div>
    </div>
  );
};

export default Graph;
