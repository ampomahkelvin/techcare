import axios from "axios";

export const fetchPatientData = async () => {
  try {
    // const username = process.env.REACT_APP_API_USERNAME;
    // const password = process.env.REACT_APP_API_PASSWORD;

    const username = "coalition";
    const password = "skills-test";

    if (!username || !password) {
      throw new Error("API credentials are missing.");
    }

    const encodedCredentials = btoa(`${username}:${password}`);
    const response = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("API Call Error:", error.message || error); // Log the actual error
    throw new Error("A problem occured while fetching patient data."); // Re-throw error
  }
};

export const getJessicaData = async () => {
  try {
    const allPatients = await fetchPatientData();
    const jessicaData = allPatients.filter(
      (patient: any) => patient.name === "Jessica Taylor"
    );

    if (jessicaData.length === 0) {
      throw new Error("No data found for Jessica Taylor");
    }

    return jessicaData;
  } catch (error) {
    console.error(error);
    throw new Error("A problem occurred while retrieving Jessica's data.");
  }
};
