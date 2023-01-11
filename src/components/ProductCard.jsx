import React from "react";

export default function ProductCard({
  product: { image, title, category, price },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <p>{category}</p>
      <div>
        <h3>{title}</h3>
        <p>{`${price}원`}</p>
      </div>
    </li>
  );
}
