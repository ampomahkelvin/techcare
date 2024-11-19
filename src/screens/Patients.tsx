import DiagnosisHistory from "../components/DiagnosisHistory";
import DiagnosisList from "../components/DiagnosisList";
import LabResults from "../components/LabResults";
import PatientDetail from "../components/PatientDetail";
import PatientsList from "../components/PatientsList";

const Patients = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[auto,auto,auto] gap-3 mt-[32px]">
        {/* Patients List */}
        <PatientsList />

        {/* Diagnosis History and Diagnosis List */}
        <div className="space-y-[32px]">
          <DiagnosisHistory />
          <DiagnosisList />
        </div>

        {/* Patient Detail and Lab Results */}
        <div className="space-y-[32px]">
          <PatientDetail />
          <LabResults />
        </div>
      </div>
    </>
  );
};

export default Patients;
