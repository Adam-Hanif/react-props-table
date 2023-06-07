import React from "react";
import Product from "./Product";

export default function Products() {
  const product = [
    {
      id: 1,
      img: "http://intocode.ru/d/react-project-1/images/1.jpg",
      price: "97000 ₽ ",
      name: "MacBook",
    },
    {
      id: 2,
      img: "http://intocode.ru/d/react-project-1/images/2.jpg",
      price: "35999 ₽ ",
      name: "Galaxy",
    },
    {
      id: 3,
      img: "http://intocode.ru/d/react-project-1/images/3.jpg",
      price: "58950 ₽ ",
      name: "Скутер",
    },
    {
      id: 4,
      img: "http://intocode.ru/d/react-project-1/images/4.jpg",
      price: "12000 ₽ ",
      name: "Монитор Samsung",
    },
    {
      id: 5,
      img: "http://intocode.ru/d/react-project-1/images/5.jpg",
      price: "500 ₽ ",
      name: "Респераторная маска",
    },
    {
      id: 6,
      img: "http://intocode.ru/d/react-project-1/images/6.jpg",
      price: "75000 ₽ ",
      name: "Стиральная машина",
    },
  ];
  return (
    <div className="Products">
      {product.map((item) => {
        return (
          <Product
            key={item.id}
            image={item.img}
            price={item.price}
            name={item.name}
          />
        );
      })}
    </div>
  );
}
