import React from "react";

export default function ProductCard({
  product: { image, title, category, price },
}) {
  return (
    <li className="cursor-pointer">
      <img className="w-full rounded-lg shadow-md" src={image} alt={title} />
      <p className="my-2 px-3 text-xs text-gray-500">{category}</p>
      <div className="mb-5 px-2 flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="font-semibold ">{`${price}원`}</p>
      </div>
    </li>
  );
}
