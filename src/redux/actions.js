import { toast } from "react-hot-toast";

import {
  addInventoryService,
  deleteInventoryService,
  getAllInventoryData,
  updateInventoryService,
} from "../services/inventoryServices";

import {
  addSalesService,
  getAllSalesData,
} from "../services/salesServices";
import { actionTypes } from "../utils/constants";

const {
  ADD_INVENTORY_DATA_SUCCESS,
  DELETE_INVENTORY_DATA_SUCCESS,
  UPDATE_INVENTORY_DATA_SUCCESS,
  GET_INVENTORY_DATA_SUCCESS,
  ADD_INVENTORY_DATA_ERROR,
  DELETE_INVENTORY_DATA_ERROR,
  UPDATE_INVENTORY_DATA_ERROR,
  GET_INVENTORY_DATA_ERROR,
  ADD_SALES_DATA_SUCCESS,
  GET_SALES_DATA_SUCCESS,
  ADD_SALES_DATA_ERROR,
  GET_SALES_DATA_ERROR,
  DATA_LOADING,
} = actionTypes;
export const addInventory = (inputData) => async (dispatch) => {
  try {
    // console.log(inputData, "inputdata")
    dispatch({ type: DATA_LOADING });
    const response = await addInventoryService(inputData);
    // console.log(response)
    dispatch({ type: ADD_INVENTORY_DATA_SUCCESS, payload: response.item });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: ADD_INVENTORY_DATA_ERROR, payload: error.message });
  }
};
export const getInventoryData = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await getAllInventoryData();
    // console.log(response);
    dispatch({ type: GET_INVENTORY_DATA_SUCCESS, payload: response.item });
  } catch (error) {
    dispatch({ type: GET_INVENTORY_DATA_ERROR, payload: error.message });
  }
};
export const deleteInventory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await deleteInventoryService(id);
    dispatch({ type: DELETE_INVENTORY_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: DELETE_INVENTORY_DATA_ERROR, payload: error.message });
  }
};
export const updateInventory = (id, inputData) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await updateInventoryService(id, inputData);
    console.log(response);
    dispatch({ type: UPDATE_INVENTORY_DATA_SUCCESS, payload: response.item });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: UPDATE_INVENTORY_DATA_ERROR, payload: error.message });
  }
};

export const addSales = (id, inputData) => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await addSalesService(id, inputData);
    console.log(response, "addsales");
    dispatch({ type: ADD_SALES_DATA_SUCCESS, payload: response.data });
    toast.success(response.message);
  } catch (error) {
    dispatch({ type: ADD_SALES_DATA_ERROR, payload: error.message });
  }
};
export const getSalesData = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_LOADING });
    const response = await getAllSalesData();
    dispatch({ type: GET_SALES_DATA_SUCCESS, payload: response.sale });
  } catch (error) {
    dispatch({ type: GET_SALES_DATA_ERROR, payload: error.message });
  }
};