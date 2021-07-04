import React, { Fragment, useEffect } from "react";
import "../css/PurchaseOrders.css";
import Order from "./Order";
import { useSelector, useDispatch } from "react-redux";
import { getPurchaseOrders_action } from "../actions/productActions.js";

const PurchaseOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadOrders = () => dispatch(getPurchaseOrders_action());
    loadOrders();
    // eslint-disable-next-line
  }, []);

  const orders = useSelector((state) => state.orders.orders);
  const error = useSelector((state) => state.orders.error);
  const loading = useSelector((state) => state.orders.loading);

  return (
    <Fragment>
      <h2>Listado de órdenes de compra</h2>

      {error ? (
        <p className="errorMessage">
          Hubo un error al cargar las órdenes de compra
        </p>
      ) : null}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Número de orden</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0
            ? "No hay órdenes de compra"
            : orders.map((order, index) => {
                return (
                  <Order
                    key={order.id}
                    order={order}
                    backColor={
                      index % 2 === 0
                        ? "rgb(255, 255, 255)"
                        : "rgb(235, 230, 230)"
                    }
                  />
                );
              })}
        </tbody>
      </table>

      {loading ? <p className="loading">Cargando...</p> : null}
    </Fragment>
  );
};

export default PurchaseOrders;
