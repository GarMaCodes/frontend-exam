import {
  START_PRODUCTS_DOWNLOAD,
  SUCCES_PRODUCTS_DOWNLOAD,
  FAIL_PRODUCTS_DOWNLOAD,
  ADD_PRODUCT,
  ORDER_OBJECT,
  ORDER_ITEMS,
} from "../types";

const inicialState = {
  orders: [],
  error: null,
  loading: false,
  order: null,
  order_items: [],
};

// eslint-disable-next-line
export default function (state = inicialState, action) {
  switch (action.type) {
    case START_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: action.payload,
      };

    case SUCCES_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload,
      };

    case FAIL_PRODUCTS_DOWNLOAD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        order_items: [...state.order_items, action.payload],
      };

    case ORDER_OBJECT:
      return {
        ...state,
        order: action.payload,
      };

    case ORDER_ITEMS:
      return {
        ...state,
        order_items: action.payload,
      };

    default:
      return state;
  }
}
