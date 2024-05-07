import {API_URL} from "../utils/constants";

const addInventoryService = async (inputData) => {
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
       `${API_URL}/api/v1/items`,
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
  
  const getAllInventoryData = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
  
      const response = await fetch(
        `${API_URL}/api/v1/items`,
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
  const updateInventoryService = async (id, inputData) => {
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
        `${API_URL}/api/v1/items/${id}`,
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
  const deleteInventoryService = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
        redirect: "follow",
      };
      const response = await fetch(
        `${API_URL}/api/v1/items/${id}`,
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
  export {
    addInventoryService,
    getAllInventoryData,
    updateInventoryService,
    deleteInventoryService,
  };