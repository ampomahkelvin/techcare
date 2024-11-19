import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Icons } from "../../assets";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface BloodPressureChartProps {
  trend: {
    date: string;
    systolic: number;
    diastolic: number;
    systolic_status: string;
    diastolic_status: string;
  }[];
}

const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ trend }) => {
  const dates = trend.map((entry) => {
    const [month, year] = entry.date.split(" ");
    return `${month.slice(0, 3)} ${year}`;
  });

  const systolic = trend.map((entry) => entry.systolic);
  const diastolic = trend.map((entry) => entry.diastolic);
  const systolicStatus = trend.map((entry) => entry.systolic_status);
  const diastolicStatus = trend.map((entry) => entry.diastolic_status);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 3,
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-fit flex pt-[16px] mb-[16px] bg-[#F4F0FE] pl-[16px] rounded-md">
      <div className="pt-[16px]">
        <div className="text-[18px] font-bold text-center mb-[12px] flex justify-between">
          <div>Blood Pressure</div>
          <div className="flex gap-2 pr-10">
            Last 6 months <img src={Icons.dropdown} alt="" />
          </div>
        </div>
        <div className="w-[500px] h-[300px] pb-[20px]">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="pt-[16px]">
        <div className="mb-[16px] flex flex-col gap-2">
          <div className="flex items-center text-[14px] leading-19">
            <span className="w-[14px] h-[14px] rounded-full bg-[#E66FD2] mr-[8px]"></span>
            Systolic
          </div>
          <div className="text-[22px] leading-[30px] font-bold">
            {systolic[systolic.length - 1]}
          </div>
          <div className="whitespace-nowrap text-[14px] leading-19 flex gap-2">
            {systolicStatus[systolicStatus.length - 1] ===
            "Higher than Average" ? (
              <img src={Icons.uparrow} alt="Up Arrow" />
            ) : systolicStatus[systolicStatus.length - 1] ===
              "Lower than Average" ? (
              <img src={Icons.downarrow} alt="Down Arrow" />
            ) : null}
            {systolicStatus[systolicStatus.length - 1]}
          </div>
        </div>
        <hr />
        <div className="mt-[16px] flex flex-col gap-2">
          <div className="flex items-center text-[14px] leading-19">
            <span className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6] mr-[8px]"></span>
            Diastolic
          </div>
          <div className="text-[22px] leading-[30px] font-bold">
            {diastolic[diastolic.length - 1]}
          </div>
          <div className="whitespace-nowrap text-[14px] leading-19 flex gap-2">
            {diastolicStatus[diastolicStatus.length - 1] ===
            "Higher than Average" ? (
              <img src={Icons.uparrow} alt="Up Arrow" />
            ) : diastolicStatus[diastolicStatus.length - 1] ===
              "Lower than Average" ? (
              <img src={Icons.downarrow} alt="Down Arrow" />
            ) : null}
            {diastolicStatus[diastolicStatus.length - 1]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
