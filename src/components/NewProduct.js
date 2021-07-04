import React, { useState } from "react";
import "../css/NewProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { newProduct_action } from "../actions/productActions.js";

const NewProduct = ({ history }) => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState("");
  const [sku_border, setSku_border] = useState("1px solid #ccc");
  const [name_border, setName_border] = useState("1px solid #ccc");
  const [quantity_border, setQuantity_border] = useState("1px solid #ccc");
  const [price_border, setPrice_border] = useState("1px solid #ccc");
  const [error, setError] = useState(false);

  const order = useSelector((state) => state.orders.order);
  const dispatch = useDispatch();

  const addProduct = (product_object) =>
    dispatch(newProduct_action(product_object));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      sku.trim() === "" ||
      name.trim() === "" ||
      quantity < 1 ||
      price.trim() === "" ||
      isNaN(parseFloat(price))
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);

      if (sku.trim() === "") setSku_border("1px solid red");
      if (name.trim() === "") setName_border("1px solid red");
      if (quantity < 1) setQuantity_border("1px solid red");
      if (price.trim() === "" || isNaN(parseFloat(price)))
        setPrice_border("1px solid red");
      return;
    }

    addProduct({ sku, name, quantity, price });

    history.push(`/order/${order?.id}`);
  };

  return (
    <div className="add_new_product_box">
      <h2>Agregar nuevo producto</h2>

      {error ? (
        <p className="error_text">Debes llenar todos los campos</p>
      ) : (
        <p className="empty"></p>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="sku">SKU del producto</label>
        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={sku}
          onChange={(e) =>
            `${setSku(e.target.value)} ${setSku_border("1px solid #ccc")}`
          }
          style={{ border: `${sku_border}` }}
        />

        <label htmlFor="name">Nombre del producto</label>
        <input
          type="text"
          name="name"
          placeholder="Nombre producto"
          value={name}
          onChange={(e) =>
            `${setName(e.target.value)} ${setName_border("1px solid #ccc")}`
          }
          style={{ border: `${name_border}` }}
        />

        <label htmlFor="quantity">Cantidad</label>
        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) =>
            `${setQuantity(Number(e.target.value))} ${setQuantity_border(
              "1px solid #ccc"
            )}`
          }
          style={{ border: `${quantity_border}` }}
        />

        <label htmlFor="price">Precio</label>
        <input
          type="text"
          name="price"
          placeholder="Precio producto"
          value={price}
          onChange={(e) =>
            `${setPrice(e.target.value)} ${setPrice_border("1px solid #ccc")}`
          }
          style={{ border: `${price_border}` }}
        />

        <input type="submit" value="Agregar" />
        <div className="cancelar">
          <Link to={`/order/${order?.id}`}>Cancelar</Link>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
