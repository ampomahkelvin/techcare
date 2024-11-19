import { useState, useEffect } from "react";
import { getJessicaData } from "../../api/api";
import { Icons } from "../../assets";
import { PatientType } from "../../types";

const LabResults = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<PatientType>();

  useEffect(() => {
    const fetchPatientData = async () => {
      setIsLoading(true);
      try {
        const response = await getJessicaData();
        setData(response[0]);
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
      <div className="flex justify-center items-center h-[296px]">
        <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <section className="w-[367px] h-[296px] p-[20px] overflow-y-scroll">
      <h1 className="text-24 leading-33 font-bold mb-[16px]">Lab Results</h1>
      <div>
        {data.lab_results.map((result, index) => (
          <div key={index} className="flex justify-between text-[13px] leading-[18px] items-center py-[11px] my-[5px]">
            {result}
            <img src={Icons.download} alt="Download Icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LabResults;
