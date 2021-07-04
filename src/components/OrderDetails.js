import React, { useState, Fragment } from "react";
import "../css/OrderDetails.css";
import Item from "./Item";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const OrderDescription = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const order = useSelector((state) => state.orders.order);
  const items = useSelector((state) => state.orders.order_items);

  const handleClick = () => {
    if (order !== null) {
      Swal.fire({
        title: "Finalizar compra",
        text: "Deseas continuar y finalizar tu compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#54b8a7",
        cancelButtonColor: "#ee6c60",
        confirmButtonText: "Si, comprar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Listo!",
            "Tu compra se ha completado con éxito!, Gracias",
            "success"
          );
          history.push("/");
        }
      });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <Fragment>
      <h2>Orden de compra #{order ? `${order.number}` : "---------"}</h2>

      {error ? (
        <p className="error">No se ha seleccionado una orden de compra</p>
      ) : null}

      <div className="add_product">
        <Link to={"/products/new"}>Agregar producto &#43;</Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => {
            return (
              <Item
                key={index}
                item={item}
                backColor={
                  index % 2 === 0 ? "rgb(255, 255, 255)" : "rgb(235, 230, 230)"
                }
              />
            );
          })}
        </tbody>
      </table>

      <div className="payment_section">
        <div className="payment_button">
          <Link to={"/"}>Regresar</Link>
        </div>

        <div className="payment_button" onClick={handleClick}>
          Pagar
        </div>
      </div>
    </Fragment>
  );
};

export default OrderDescription;
