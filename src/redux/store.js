import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { inventoryReducer } from "../reducers/inventoryReducer";

export const store = createStore(inventoryReducer, applyMiddleware(thunk));
