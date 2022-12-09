import axios from "axios";
import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    // Get user info
    const {
      userLogin: { userInfo },
    } = getState();

    // Send token information for authorization
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // Send post request with passed in order to make an order
    const { data } = await axios.post("/api/orders", order, config);

    // Send to dispatch the newly created order on success
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // Send to dispatch error message if order failed
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
