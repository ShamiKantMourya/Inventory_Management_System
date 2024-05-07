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

const initialValue = {
  inventoryItems: [],
  sales: [],
  loading: false,
  error: null,
};

export const inventoryReducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case DATA_LOADING:
      return { ...state, loading: true };
    case ADD_INVENTORY_DATA_SUCCESS:
      return {
        ...state,
        inventoryItems: [payload, ...state.inventoryItems],
        loading: false,
      };
    case ADD_SALES_DATA_SUCCESS:
      return { ...state, sales: [payload, ...state.sales], loading: false };
    case DELETE_INVENTORY_DATA_SUCCESS:
    case GET_INVENTORY_DATA_SUCCESS:
      return { ...state, inventoryItems: payload, loading: false };
    case GET_SALES_DATA_SUCCESS:
      return { ...state, sales: payload, loading: false };
    case UPDATE_INVENTORY_DATA_SUCCESS:
      const updatedArr = state.inventoryItems.map((item) =>
        item._id === payload._id ? payload : item
      );
      return { ...state, inventoryItems: updatedArr, loading: false };
    case ADD_INVENTORY_DATA_ERROR:
    case DELETE_INVENTORY_DATA_ERROR:
    case GET_INVENTORY_DATA_ERROR:
    case ADD_SALES_DATA_ERROR:
    case GET_SALES_DATA_ERROR:
    case UPDATE_INVENTORY_DATA_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
