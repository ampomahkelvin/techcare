import { useState, useEffect } from "react";
import { getJessicaData } from "../../api/api";
import { PatientType } from "../../types";

const DiagnosisList = () => {
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
      <div className="flex justify-center items-center h-[349px]">
        <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <section className="w-[full rounded-md h-[300px] overflow-y-scroll pb-3 px-5">
      <h1 className="text-24 leading-33 font-bold mb-[16px]">Diagnosis List</h1>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="text-left text-14 leading-19 py-[19px] pr-16">
              Problem/Diagnosis
            </th>
            <th className="text-left text-14 leading-19 py-[19px] pr-16">
              Description
            </th>
            <th className="text-left text-14 leading-19 py-[19px] pr-16">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.diagnostic_list.map((diagnosis, index) => (
            <tr key={index} className="my-[7px]">
              <td className="text-14 leading-19 py-[19px] pr-16">
                {diagnosis.name}
              </td>
              <td className="text-14 leading-19 py-[19px] pr-16">
                {diagnosis.description}
              </td>
              <td className="text-14 leading-19 py-[19px] pr-16">
                {diagnosis.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DiagnosisList;
