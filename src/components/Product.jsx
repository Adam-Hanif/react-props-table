import React from "react";

export default function Product({ image, price, name }) {
  return (
    <table className="product-cards">
      <img src={image} alt="" />
      <tr className="card-price">{price}</tr>
      <tr className="card-name">{name}</tr>
      <button className="btn-product">Купить</button>
    </table>
  );
}
