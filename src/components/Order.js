import React from "react";
import "../css/Order.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOrderObject, getOrderItems } from "../actions/productActions";

const Order = ({ order, backColor }) => {
  const { id, number } = order;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(getOrderObject(order));
    dispatch(getOrderItems(order.items));
    history.push(`/order/${order.id}`);
  };

  return (
    <tr
      className="bodyTr"
      style={{ backgroundColor: `${backColor}` }}
      onClick={handleClick}
    >
      <td>{id}</td>
      <td>{number}</td>
    </tr>
  );
};

export default Order;
