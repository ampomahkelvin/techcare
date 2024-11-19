import BloodPressureChart from "./Chart";
import Card from "./Card";
import { Icons } from "../../assets";
import { useEffect, useState } from "react";
import { getJessicaData } from "../../api/api";
import { PatientType } from "../../types";

const DiagnosisHistory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PatientType>();
  
  useEffect(() => {
    const fetchPatientData = async () => {
      setIsLoading(true);
      try {
        const response = await getJessicaData();
        setData(response[0]);
        console.log(response);
      } catch (error: any) {
        console.error("Error fetching Jessica's data:", error.message || error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[673px]">
        <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  const currentDate = new Date("March 2024");
  const sixMonthsAgo = new Date(currentDate);
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

  // Filter the diagnosis history to include only entries from the last 6 months
  const filteredHistory = data?.diagnosis_history.filter((item) => {
    const monthYear = `${item.month} ${item.year}`;
    const diagnosisDate = new Date(monthYear); // Convert month/year to a date object
    return diagnosisDate >= sixMonthsAgo && diagnosisDate <= currentDate;
  });

  const vitals = [
    {
      title: "Respiratory Rate",
      value: data?.diagnosis_history[0]?.respiratory_rate.value,
      status: data?.diagnosis_history[0]?.respiratory_rate.levels,
      icon: Icons.lungs,
      color: "#E0F3FA",
    },
    {
      title: "Temperature",
      value: data?.diagnosis_history[0]?.temperature.value,
      status: data?.diagnosis_history[0]?.temperature.levels,
      icon: Icons.temperature,
      color: "#FFE6E9",
    },
    {
      title: "Heart Rate",
      value: data?.diagnosis_history[0]?.heart_rate.value,
      status: data?.diagnosis_history[0]?.heart_rate.levels,
      icon: Icons.heart,
      color: "#FFE6F1",
    },
  ];

  return (
    <section className="w-[766px] rounded-md pb-[20px] mt-[32px] px-5">
      <div className="text-24 leading-33 font-bold mb-[40px]">
        Diagnosis History
      </div>
      <BloodPressureChart
        trend={filteredHistory?.map((item, index) => ({
          key: { index },
          date: `${item.month} ${item.year}`,
          systolic: item.blood_pressure.systolic.value,
          diastolic: item.blood_pressure.diastolic.value,
          systolic_status: item.blood_pressure.systolic.levels,
          diastolic_status: item.blood_pressure.diastolic.levels,
        }))}
      />
      <div className="flex gap-x-[21px]">
        {vitals.map((stat, index) => (
          <Card
            key={index}
            bgColor={stat.color}
            icon={stat.icon}
            title={stat.title}
            measurement={stat.value}
            status={stat.status}
          />
        ))}
      </div>
    </section>
  );
};

export default DiagnosisHistory;
