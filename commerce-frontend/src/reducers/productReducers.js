import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAILED,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAILED,
  PRODUCT_CREATE_RESET,
} from "../constants/productConstants";

//Handle the state for the product list
/**
 * Takes in initial state and an action reducer
 * an object that has a type (evaluated inside),
 * might contain a payload containing data
 * (in this case, a product list that we retrieve
 * from the server) => payload of products
 * 1. Evaluate the type of action that is passed in
 * 2. Send the correct response given the action type
 */
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      // Set loading to true so that the component knows about pending request retrieval
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      // Set loading to false since request is fulfilled, send back payload of products
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILED:
      // Set loading to false since request failed, send back error payload
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      // Set loading to true so that the component knows about pending request retrieval
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      // Set loading to false since request is fulfilled, send back payload of products
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILED:
      // Set loading to false since request failed, send back error payload
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      // Set loading to true so that the component knows about pending request retrieval
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      // Set loading to false since request is fulfilled, send back payload of products
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAILED:
      // Set loading to false since request failed, send back error payload
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      // Set loading to true so that the component knows about pending request retrieval
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      // Set loading to false since request is fulfilled, send back payload of products
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAILED:
      // Set loading to false since request failed, send back error payload
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
