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
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAILED,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAILED,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAILED,
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
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
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

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAILED:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAILED:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
