import {
  ADD_PRODUCT,
  START_PRODUCTS_DOWNLOAD,
  SUCCES_PRODUCTS_DOWNLOAD,
  FAIL_PRODUCTS_DOWNLOAD,
  ORDER_OBJECT,
  ORDER_ITEMS,
} from "../types";
import axiosClient from "../config/axios";

export function newProduct_action(product_object) {
  return async (dispatch) => {
    dispatch(addProduct(product_object));
  };
}

const addProduct = (product_object) => ({
  type: ADD_PRODUCT,
  payload: product_object,
});

//Función que descarga los productos de la API
export function getPurchaseOrders_action() {
  return async (dispatch) => {
    dispatch(downloadOrders());

    try {
      const response = await axiosClient.get("/orders");
      dispatch(downloadPurchaseOrders_success(response.data.orders));
    } catch (error) {
      console.log(error);
      dispatch(downloadPurchaseOrders_failed());
    }
  };
}

const downloadOrders = () => ({
  type: START_PRODUCTS_DOWNLOAD,
  payload: true,
});

const downloadPurchaseOrders_success = (orders) => ({
  type: SUCCES_PRODUCTS_DOWNLOAD,
  payload: orders,
});

const downloadPurchaseOrders_failed = () => ({
  type: FAIL_PRODUCTS_DOWNLOAD,
  payload: true,
});

//Selecciona y edita unproducto
export function getOrderObject(order) {
  return (dispatch) => {
    dispatch(getObject(order));
  };
}

const getObject = (order) => ({
  type: ORDER_OBJECT,
  payload: order,
});

export function getOrderItems(items) {
  return (dispatch) => {
    dispatch(getItems(items));
  };
}

const getItems = (items) => ({
  type: ORDER_ITEMS,
  payload: items,
});
