import React from "react";
import "../css/Order.css";

const Item = ({ item, backColor }) => {
  const { sku, name, quantity, price } = item;

  return (
    <tr className="bodyTr" style={{ backgroundColor: `${backColor}` }}>
      <td>{sku}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{parseFloat(price).toFixed(2)}</td>
    </tr>
  );
};

export default Item;
