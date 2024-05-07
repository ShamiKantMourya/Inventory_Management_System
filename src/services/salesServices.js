import { API_URL } from "../utils/constants";

export const addSalesService = async (id ,inputData) => {
  // console.log(id, inputData);
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `${API_URL}/api/v1/sales/${id}`,
        requestOptions
      );
      if (response) {
        const result = await response.json();
        return result;
      } else console.log("No response found");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export const getAllSalesData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      const response = await fetch(
        `${API_URL}/api/v1/sales`,
        requestOptions
      );
      if (response) {
        const result = await response.json();
        return result;
      } else console.log("No response found");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };