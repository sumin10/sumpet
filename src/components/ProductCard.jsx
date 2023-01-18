import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { image, title, category, price, id },
}) {
  const navigate = useNavigate();
  return (
    <li
      className="cursor-pointer pt-10 hover:scale-105"
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className="w-full rounded-lg shadow-md" src={image} alt={title} />
      <p className="my-2 px-3 text-xs text-gray-500">{category}</p>
      <div className="mb-5 px-2 flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="font-semibold ">{`${price}원`}</p>
      </div>
    </li>
  );
}
