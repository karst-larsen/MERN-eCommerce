// Constant, reducer, action, fire off in component
import axios from "axios";
import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
} from "../constants/productConstants";

//Similar to an axios request, functions that do something with the reducers (which are switched by case from the constants passed in)
export const listProducts = () => async (dispatch) => {
  try {
    //Receive the request
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    //Send back the action payload upon successful retrieval
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //Send an error payload if the retrieval failed
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//Similar to an axios request, functions that do something with the reducers (which are switched by case from the constants passed in)
export const listProductDetails = (id) => async (dispatch) => {
  try {
    //Receive the request
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    //Send back the action payload upon successful retrieval
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    //Send an error payload if the retrieval failed
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
