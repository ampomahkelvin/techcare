import { useEffect, useState } from "react";
import { Icons } from "../../assets";
import { getJessicaData } from "../../api/api";
import { PatientType } from "../../types";

const PatientDetail = () => {
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
      <div className="flex justify-center items-center h-[740px]">
        <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <section className="w-[367px] rounded-md shadow-sm py-[32px]">
      <img
        src={data.profile_picture}
        alt="Profile Image"
        className="w-[200px] justify-self-center mb-[24px]"
      />
      <h1 className="text-24 leading-33 font-bold justify-self-center">
        {data.name}
      </h1>
      <div className="ml-[20px] mt-[32px] flex flex-col gap-y-[24px]">
        <div className="flex gap-x-8">
          <img src={Icons.birthday} alt="Calender" />
          <div>
            <div className="">Date Of Birth</div>
            <div>{data.date_of_birth}</div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <img src={Icons.female} alt="Gender Icon" />
          <div>
            <div className="">Gender</div>
            <div>{data.gender}</div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <img src={Icons.phone} alt="Phone Icon" />
          <div>
            <div className="">Contact Info</div>
            <div>{data.phone_number}</div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <img src={Icons.phone} alt="Phone Icon" />
          <div>
            <div className="">Emergency Contacts</div>
            <div>{data.emergency_contact}</div>
          </div>
        </div>
        <div className="flex gap-x-8">
          <img src={Icons.insurance} alt="Insurance Icon" />
          <div>
            <div className="">Insurance Provider</div>
            <div>{data.insurance_type}</div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="bg-accent-bright rounded-[41px] py-[11px] px-[40px] mx-[73px] flex justify-center mt-[40px]">
        <span className="text-14 leading-19">Show All Information</span>
      </div>
    </section>
  );
};

export default PatientDetail;
