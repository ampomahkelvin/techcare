import { useEffect, useState } from "react";
import { Icons } from "../../assets";
import { fetchPatientData } from "../../api/api";

type Patient = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
};

const PatientsList = () => {
  const [patientsData, setPatientsData] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPatients = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPatientData();
        setPatientsData(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <section className="w-[467px] px-8 bg-white rounded-md h-[1054px] overflow-y-scroll">
      <div className="flex justify-between mb-[40px] pt-[20px] text-24 font-bold leading-33">
        Patients
        <img
          src={Icons.search}
          alt="Search Icon"
          className="mr-[30px] w-[18px]"
        />
      </div>
      <div className="flex flex-col gap-y-[32px]">
        {isLoading ? (
          <div className="flex justify-center items-center h-[1054px]">
            <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          patientsData.map((patient) => (
            <div
              key={patient.name}
              className={`flex justify-between p-2 ${
                patient.name === "Jessica Taylor"
                  ? "bg-[#D8FCF7] margin-none"
                  : ""
              }`}
            >
              <div className="flex gap-x-3 items-center">
                <img
                  src={patient.profile_picture}
                  alt={`${patient.name}'s profile image`}
                  className="w-[48px]"
                />
                <div className="flex flex-col">
                  <div className="text-14 leading-19 font-bold">
                    {patient.name}
                  </div>
                  <div className="text-14 leading-19 text-[#707070]">
                    {`${patient.gender}, ${patient.age}`}
                  </div>
                </div>
              </div>
              <img src={Icons.more_horiz} alt="More" className="mr-[30px]" />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PatientsList;
